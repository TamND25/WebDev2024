import React from "react";
import styles from './Related.module.scss';
import questionData from '../../_SAMPLE_DATA/questions.json';

const Related = ({ relatedQuestions}) => {
    
    const questions = questionData.questions.filter(question => relatedQuestions.includes(question.id));
    const uniqueQuestions = Array.from(new Set(questions.map(q => q.id))).map(id => questions.find(q => q.id === id));
    return (
        <div className={styles["sidebar-related"]}>
            <h4>Related</h4>
            {uniqueQuestions.map((question, index) => (  
                <div key={index}>
                    <div className={styles.question}>
                        <a href={`/questions/${question.id}`} className={styles["votes"]}>{question.upvotes}</a>
                        <a href={`/questions/${question.id}`} className={styles["blueText"]}>{question.title}</a>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Related;