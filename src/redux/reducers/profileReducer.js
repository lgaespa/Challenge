import { SAVE_USER } from "../actions/getProfile";

const initialState = {
    profile: []
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SAVE_USER:
            return {
                ...state,
                profile: action.payload
            }
        default:
            return state
    }
}
