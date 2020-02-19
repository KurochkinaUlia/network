import React from 'react';
import cl from './Post.module.css';
import ava from '../../../img/ava.jpg';

const Post = (props) => {
    return (
        <div>
            <img className={cl.ava} src={ava}/>
            {props.messages}
            <div>
                <span>like</span> {props.likeok}
            </div>
        </div>
    )
};

export default Post;