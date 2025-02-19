import React from 'react';
import ThreadPost from '../components/ThreadPost/ThreadPost.js';
import PostHeader from '../components/PostHeader/postHeader.js';
import styles from './PostContent.module.scss';
import LeftSideBar from '../components/LeftSideBar/LeftSideBar.js';  
import SideBarWidget from '../components/SideBarWidget/SideBarWidget.js'; 
import Comments from '../components/Comments/Comments.js';
import Related from '../components/Related/Related.js';  
import sideBarWidgetData from '../_SAMPLE_DATA/widget.json';
import leftSideBarData from '../_SAMPLE_DATA/leftSideBar.json';
import postHeaderData from '../_SAMPLE_DATA/postHeader.json';
import commentsData from '../_SAMPLE_DATA/comments.json';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar.js';
import questionData from '../_SAMPLE_DATA/questions.json';
import postData from '../_SAMPLE_DATA/threadPosts.json';

const PostContent = () => {
    const { id } = useParams();

    const question = questionData.questions.find((question) => question.id === id);
    console.log(question);
    const post = postData.posts.find((post) => post.questionId === id);

    if (!question) {
        return (
            <h1>Sorry! Page was not found!</h1>
        );
    };

    const widgetDetails = sideBarWidgetData.widgets[0];

    const lsbContent = leftSideBarData.sidebarContent[0];

    const widgetContent = widgetDetails ? {
        title: widgetDetails.title,
        widgetContent: widgetDetails.widgetContent.map((wc) => ({
           img: wc.img,
           text: wc.text 
        }))
    } : {};

    const threadPost = {
        title: question.title,
        authorId: post.authorId,
        body: post.body,
        createdTime: question.created_time,
        updatedTime: question.updated_time,
        tags: question.tags,
        upvote: post.upvotes,
        views: post.views,
    };

    return (
        <div className={styles.postContent}>
            <Navbar className={styles.navbar}/>
            <PostHeader className={styles.postHeader}
                imageUrl={postHeaderData.postHeader.imageUrl} 
                altText={postHeaderData.postHeader.altText}
                addAltText={postHeaderData.postHeader.addAltText}
            />

            <div className={styles.wrapper}>
                <div className={styles.leftSidebar}>
                    <LeftSideBar content={lsbContent} />
                </div>

                <div className={styles.mainContent}>
                    <div className={styles.content}>
                        <ThreadPost threadPost={threadPost} />
                        <Comments comments={commentsData.comments} postId={post.id} />
                    </div>

                    <div className={styles.rightSidebar}>
                        <SideBarWidget widget={widgetContent} />
                        <Related relatedQuestions={post.relatedQuestions}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostContent;