import { SAVE_POST, SAVE_COMMENTS, SET_TAG } from "../actions/getPosts";

const initialState = {
    post: [],
    comments: [],
    tag: ""
}

export const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case SAVE_POST:
            return {
                ...state,
                post: action.payload
            }
        case SAVE_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }
        case SET_TAG:
            return {
                ...state,
                tag: action.payload
            }
        default:
            return state
    }
}
