import React from 'react';
import Voting from '../Voting/Voting.js';
import styles from './ThreadPost.module.scss';
import userInfoData from '../../_SAMPLE_DATA/userInfo.json';
import Tag from '../Tag/Tag.js';
import UserInfo from '../UserInfo/UserInfo.js';
import { formatDistanceToNowStrict, differenceInDays } from 'date-fns';

const ThreadPost = ({ threadPost })  => {
    const user = userInfoData.users.find((user) => user.id === threadPost.authorId);


    const createdDate = new Date(threadPost.createdTime);
    const updatedDate = new Date(threadPost.updatedTime);
    const formatTimeAgo = (date) => {
        const daysDiff = differenceInDays(new Date(), date);
        if (daysDiff === 1) {
            return 'yesterday';
        }
        return formatDistanceToNowStrict(date, { addSuffix: true });
    };

    return (
        <div className={styles.ThreadPost}>
            <div className={styles["threadHeader"]}>
                <h1>{threadPost.title}</h1>
            </div>

            <div className={styles.time}>
                <p>Asked<span>{formatTimeAgo(createdDate)}</span></p>
                <p>Modified<span>{formatTimeAgo(updatedDate)}</span></p>
                <p>Viewed<span>{threadPost.views} times</span></p>
            </div>
            
            <div className={styles.threadBody}>
                <Voting upvote={threadPost.upvote}/>
                
                <div className={styles.content}>
                    <p>{threadPost.body}</p>

                    <div className={styles.startingLine}>
                        <div className={styles.tag}>
                            {threadPost.tags.map((tag, index) => (
                                <Tag key={index} nameTag={tag}/> 
                            ))}
                        </div>
                    </div> 
            
                    <div className={styles["tags-user"]}>
                        <UserInfo {...user} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreadPost;