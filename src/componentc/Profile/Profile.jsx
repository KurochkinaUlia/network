import React from "react";
import cl from "./Profile.module.css";
import fon from "../../img/fon_profile.jpg";
import MyPosts from "./MyPosts/MyPosts";
import Post from "./Post/Post";

const Profile = (props) => {
    return (
        <div className={cl.content}>
            <div className={cl.bloc}>
                <img src={fon} alt={"fon"}/>
            </div>

            <div>
                ava + description
            </div>

            <MyPosts/>

        </div>
    )
};

export default Profile;