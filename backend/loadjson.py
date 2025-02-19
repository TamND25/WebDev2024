import os
import json
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
DATABASE_NAME = os.getenv("DATABASE_NAME")

client = MongoClient(MONGO_URI)
db = client[DATABASE_NAME]

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JSON_DIR = os.path.join(BASE_DIR, "frontend", "src", "_SAMPLE_DATA")

def detect_data_types(data):
    """Detect data types in a JSON record (optional)"""
    if isinstance(data, dict):
        return {k: type(v).__name__ for k, v in data.items()}
    elif isinstance(data, list) and len(data) > 0 and isinstance(data[0], dict):
        return detect_data_types(data[0])
    return type(data).__name__

def insert_json_to_mongo(json_dir):
    """Insert JSON files into MongoDB with upsert to prevent duplicates."""
    if not os.path.exists(json_dir):
        print(f"Directory '{json_dir}' not found!")
        return

    for filename in os.listdir(json_dir):
        if filename.endswith(".json"):
            collection_name = filename.split(".json")[0]
            collection = db[collection_name]

            with open(os.path.join(json_dir, filename), "r", encoding="utf-8") as file:
                try:
                    data = json.load(file)

                    if isinstance(data, list):
                        for record in data:
                            if "_id" in record:
                                collection.update_one({"_id": record["_id"]}, {"$set": record}, upsert=True)
                            else:
                                collection.update_one(record, {"$set": record}, upsert=True)

                        print(f"Upserted {len(data)} documents into '{collection_name}' collection.")
                    else:
                        if "_id" in data:
                            collection.update_one({"_id": data["_id"]}, {"$set": data}, upsert=True)
                        else:
                            collection.update_one(data, {"$set": data}, upsert=True)

                        print(f"Upserted 1 document into '{collection_name}' collection.")

                    print(f"Detected types for '{collection_name}': {detect_data_types(data)}")

                except json.JSONDecodeError:
                    print(f"Error decoding JSON in file: {filename}")

insert_json_to_mongo(JSON_DIR)
