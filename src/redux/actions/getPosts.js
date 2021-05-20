import axios from 'axios';

export const SAVE_POST = 'SAVE_POST';
export const SAVE_COMMENTS = 'SAVE_COMMENTS';
const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '60a573ff453bff73e887ec5a';


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