import React from 'react';
import cl from './ProfileInfo.module.css';
import fon from "../../../img/fon_profile.jpg";

const ProfileInfo = () => {
    return (
        <div>
            <div className={cl.bloc}>
                <img src={fon} alt={"fon"}/>
            </div>

            <div>
                ava + description
            </div>

        </div>
    )
};
export default ProfileInfo;
