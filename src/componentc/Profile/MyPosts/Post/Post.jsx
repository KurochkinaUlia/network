import React from 'react';
import cl from './Post.module.css';
import ava from '../../../../img/ava.jpg';

const Post = (props) => {
    console.log ('Пропсы в Post');
    console.log (props);

    return (
        <div>
            <img className={cl.ava} src={ava}/>
            {props.posts}
            <div>
                <span>like</span> {props.likeOk}
            </div>
        </div>
    )
};

export default Post;