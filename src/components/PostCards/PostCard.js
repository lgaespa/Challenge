import React, { useState } from 'react';
import "./PostCard.css"
import { IoIosHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { GoComment } from "react-icons/go";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Profile from '../Profile/Profile';
import Comments from '../Comments/Comments';
import { setTagState } from "../../redux/actions/getPosts";

const PostCard = ({ props }) => {

    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const onOpenModal2 = () => setOpen2(true);
    const onCloseModal2 = () => setOpen2(false);

    const setTagHandler = (e) => {
        console.log(e)
        dispatch(setTagState(e))
    }

    let tagState = useSelector(store => store.postReducer.tag)

    if (tagState.length !== 0 && !props.tags.includes(tagState)) {
        return (
            <div>
            </div>
        )
    }

    return (
        <div className="PostCard_cardContainer">
            <div>
                <img className="PostCard_Image" src={props.image} alt="not found" />
                <div className="PostCard_firstRow">
                    <button className="modalButton" onClick={onOpenModal}>
                        <img className="PostCard_ownerImage" src={props.owner.picture} alt="not found" />
                        <div style={{ display: "flex" }}>
                            <h3 style={{ fontSize: "17px" }}>
                                {props.owner.firstName}
                            </h3>
                            <h3 style={{ fontSize: "17px", marginLeft: "5px" }}>
                                {props.owner.lastName}
                            </h3>
                        </div>
                    </button>
                    <div>
                        {
                            props.link && <button className="linkButton" href="https://dummyapi.io/documentation/static-data-api">Enlace</button>
                        }
                    </div>
                </div>

                <div className="PostCard_likesComments">
                    <div style={{ display: "flex" }}>

                        <div style={{ display: "flex", alignItems: "center", marginRight: "15px" }}>
                            {props.likes}
                            <IoIosHeartEmpty style={{ marginLeft: "3px" }} />
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <button className="modalButton" onClick={onOpenModal2}>
                                <GoComment style={{ marginLeft: "3px" }} />
                            </button>
                        </div>
                    </div>

                    <div>
                        {props.publishDate.slice(0, 10)}
                    </div>
                </div>

                <div className="PostCard_text">
                    {props.text}
                </div>

                <h4>
                    TAGS
                </h4>
                <div className="PostCard_tagsRow">
                    {
                        props.tags?.map(e => (
                            <button onClick={() => setTagHandler(e)} className="PostCard_tagsContainer">
                                {e}
                            </button>
                        ))
                    }
                </div>

            </div>

            <Modal open={open} onClose={onCloseModal} center>
                <Profile props={props.owner} />
            </Modal>


            <Modal open={open2} onClose={onCloseModal2} center>
                <Comments props={props} />
            </Modal>
        </div>
    )
}

export default PostCard
