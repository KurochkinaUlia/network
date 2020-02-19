import React from 'react';
import cl from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = (props) => {
    return (
        <div>
            My Posts
            <div>
                <input placeholder='ввод' type='text'/>
                <button>Add post</button>
            </div>
            <div>
            <Post messages = 'Привет! Как ты?' likeok = '12'/>
            <Post messages = 'Привет, у меня все круто!!! Как ты?' likeok = '15'/>
            </div>
        </div>
    )
};

export default MyPosts;