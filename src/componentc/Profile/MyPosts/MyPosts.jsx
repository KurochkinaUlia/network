import React from 'react';
import cl from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {
    console.log ('Пропсы в MyPosts');
    console.log (props);

    let postsElements = props.posts.map(p => <Post posts={p.post} likeOk={p.likeOk}/>);

    return (
        <div>
            My Posts
            <div>
                <input placeholder='ввод' type='text'/>
                <button>Add post</button>
            </div>
            <div>
                {postsElements}

            </div>
        </div>
    )
};

export default MyPosts;