import axios from 'axios';
export const SAVE_USER = 'SAVE_USER';
const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '60a573ff453bff73e887ec5a';

export const getProfile = (id) => {

    return async (dispatch) => {
        try {
            await axios.get(`${BASE_URL}/user/${id}`, {
                headers: {
                    'app-id': APP_ID
                }
            }).then((r) =>
                dispatch(saveProfile(r))
            )
        } catch (error) {
            console.log(error)
        }
    }
}

const saveProfile = (params) => {
    return {
        type: SAVE_USER,
        payload: params
    }
}

export const cleanProfile = () => {
    return {
        type: SAVE_USER,
        payload: []
    }
}