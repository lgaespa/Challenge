import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getComments, saveComments } from '../../redux/actions/getPosts';
import "./Comments.css"

const Comments = ({ props }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(saveComments([]))
        dispatch(getComments(props.id))
    }, [dispatch, props.id])

    let post = useSelector(store => store.postReducer.comments)
    console.log("COMMENTS", post?.data?.data)
    let comments = post?.data?.data


    return (
        <div className="Comments_container">

            <img className="Comments_Image" src={props.image} alt="not found" />
            <h1>COMMENTS</h1>
            {
                comments?.length !== 0 ?
                    <>
                        {
                            comments?.map(e => (
                                <div>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img className="Comments_imageProfile" src={e.owner.picture} alt="not found" />
                                        <h3>{e.owner.firstName}</h3>
                                        <p style={{ marginLeft: "5px" }}>{e.message}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </> :
                    <div>
                        No comments
                    </div>
            }


        </div>
    )
}

export default Comments
