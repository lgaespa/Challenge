import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, cleanProfile } from '../../redux/actions/getProfile';
import "./Profile.css"

const Profile = ({ props }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cleanProfile())
        dispatch(getProfile(props.id))
    }, [dispatch, props.id])

    let post = useSelector(store => store.profileReducer.profile)
    console.log(post?.data)
    let profile = post?.data;

    return (
        <div className="Profile_Container">
            <div>
                <img className="Profile_Picture" src={props.picture} alt="not found" />
            </div>


            {

                profile ?
                    <>
                        <div className="Profile_NameContainer">
                            <h4>{profile?.firstName}</h4>
                            <h4>{profile?.lastName}</h4>
                        </div>


                        <div>
                            {profile?.location.country},
                {profile?.location.city}
                        </div>

                        <div>
                            Email: {profile?.email}
                        </div>

                        <div>
                            Phone: {profile?.phone}
                        </div>

                        <div>
                            Register Date: {profile?.registerDate.slice(0, 10)}
                        </div>

                        <div>
                            Gender: {profile?.gender}
                        </div>
                    </>
                    :
                    <div style={{ marginLeft: "40%", marginTop: "30%" }}>
                        Loading...
                </div>

            }
        </div>
    )
}

export default Profile
