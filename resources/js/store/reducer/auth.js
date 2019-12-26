import * as actionTypes from '../actions';

const initialState = {
    isAuthenticated: false,
    alert: false,
    error: false,
    alertMessage: null,
    token : null,
    name: null,
    email: null,
    phone: null,
    group_id: null,
    brarer: null
}
const reducer = (state = initialState,action) => {
    switch ( action.type ) {
        case actionTypes.LOGIN_USER:
            return {
                ...state,
                isAuthenticated : !state.isAuthenticated,
                token: action.userObj.token,
                bearer: action.userObj.bearer,
                name: action.userObj.name,
                email: action.userObj.email,
                phone: action.userObj.phone,
                group_id: action.userObj.group_id,

            }
        case actionTypes.ERROR_ALERT:
            return {
                ...state,
                alert : true,
                error: true,
                alertMessage: action.message
            } 
        case actionTypes.DISMISS_ALERT:
            return {
                ...state,
                alert : !state.alert
            }

    }
    return state;
}
export default reducer;