import { SAVE_POST, SAVE_COMMENTS } from "../actions/getPosts";

const initialState = {
    post: [],
    comments: [],
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
        default:
            return state
    }
}
