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
                            <h4 style={{ margin: "3px", marginRight: "5px" }}>{profile?.firstName}</h4>
                            <h4 style={{ margin: "3px", marginRight: "5px" }}>{profile?.lastName}</h4>
                        </div>


                        <div>
                            <h4>
                                {profile?.location.country},
                            {profile?.location.city}
                            </h4>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                            <h4 style={{ margin: "3px", marginRight: "5px" }}>Email:</h4> {profile?.email}
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                            <h4 style={{ margin: "3px", marginRight: "5px" }}>Phone:</h4>  {profile?.phone}
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                            <h4 style={{ margin: "3px", marginRight: "5px" }}> Register Date: </h4>{profile?.registerDate.slice(0, 10)}
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                            <h4 style={{ margin: "3px", marginRight: "5px" }}>Gender: </h4>{profile?.gender}
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
