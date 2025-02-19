import React, { useEffect, useState } from 'react';
import QuestionList from '../components/QuestionList/QuestionList.js';
import questionsData from '../_SAMPLE_DATA/questions.json';
import askersData from '../_SAMPLE_DATA/topAskerList.json';
import Navbar from '../components/Navbar/Navbar.js';
import styles from './HomePage.module.scss'
import Footer from '../components/Footer/Footer.js';
import Header from '../components/Header/Header.js';
import SideBar from '../components/SideBar/SideBar.js';

const HomePage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
      const questionArray = Object.values(questionsData["questions"]);
      setQuestions(questionArray);
  }, []);

  const [askers, setAskers] = useState([]);

  useEffect(() => {
      const askerArray = Object.values(askersData["askers"]);
      setAskers(askerArray);
  }, []);
  
    return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles["header"]}>
        <div className={styles["wrapper"]}>
          <Header />
        </div>
      </div>
      <div className={styles["wrapper"]}>
        <div className={styles["content"]}>
          <QuestionList questions={questions} />
          <SideBar askers={askers}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}; 

export default HomePage;