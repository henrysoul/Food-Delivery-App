import * as actionTypes from '../actions';

const initialState = {
    isAuthenticated: false,
    token : null,
    alert: false,
    error: false,
    alertMessage: null,
    user: null
}
const reducer = (state = initialState,action) => {
    switch ( action.type ) {
        case actionTypes.LOGIN_USER:
            return {
                ...state,
                isAuthenticated : !state.isAuthenticated,
                token: action.userObj
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