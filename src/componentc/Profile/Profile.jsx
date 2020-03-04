import React from "react";
import cl from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    console.log ('Пропсы в Profile');
    console.log (props);
    return (
        <div className={cl.content}>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    )
};

export default Profile;