import React from "react";
import styles from './Voting.module.scss';
import upvoteIcon from '../../../src/assets/upvote.png';
import downvoteIcon from '../../../src/assets/downvote.png';
import bookmarkIcon from '../../../src/assets/bookmark.png';
import historyIcon from '../../../src/assets/logHistory.png';


const Voting = ({ upvote }) => {
    return (
        <div className={styles["votingContainer"]}>
            <img src={upvoteIcon} alt="Upvote" className={styles["votingIcon"]} />
            <span className={styles["upvote-count"]}>{upvote}</span>
            <img src={downvoteIcon} alt="Downvote" className={styles["votingIcon"]} />
            <img src={bookmarkIcon} alt="Save" className={styles.bookmarkIcon} />
            <img src={historyIcon} alt="History" className={styles.bookmarkIcon} />
        </div>
    );
};

export default Voting;