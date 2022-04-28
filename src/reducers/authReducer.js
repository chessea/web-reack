import { types } from "../components/types/types";





export const authReducers = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.diplayName
            }
        case types.logout:
            return {}

        default:
           return state;
    }

}