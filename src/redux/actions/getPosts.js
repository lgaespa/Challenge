import axios from 'axios';

export const SAVE_POST = 'SAVE_POST';
export const SET_TAG = 'SET_TAG';
export const SAVE_COMMENTS = 'SAVE_COMMENTS';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = process.env.REACT_APP_ID;


export const getPost = () => {

    return async (dispatch) => {
        try {
            await axios.get(`${BASE_URL}/post`, {
                headers: {
                    'app-id': APP_ID
                }
            }).then((r) =>
                dispatch(savePost(r))
            )

        } catch (error) {
            console.log(error)
        }
    }
}

const savePost = (params) => {
    return {
        type: SAVE_POST,
        payload: params
    }
}


export const getComments = (id) => {

    return async (dispatch) => {
        try {

            await axios.get(`${BASE_URL}/post/${id}/comment`, {
                headers: {
                    'app-id': APP_ID
                }
            }).then((r) =>
                dispatch(saveComments(r))
            )

        } catch (error) {
            console.log(error)
        }
    }
}

export const saveComments = (params) => {
    return {
        type: SAVE_COMMENTS,
        payload: params
    }
}


export const setTagState = (params) => {
    return {
        type: SET_TAG,
        payload: params
    }
}