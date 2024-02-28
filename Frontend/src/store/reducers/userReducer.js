import actionTypes from '../actions/actionTypes';

const initialState = {
    shoesInfo: ''
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_SHOES_INFO_SUCESSFUL:
            return {
                ...state,
                shoesInfo: action.res.data
            }
        case actionTypes.GET_SHOES_INFO_FAIL:
            return {
                ...state,
                userInfo: ''
            }
        default:
            return state;
    }
}

export default appReducer;