import actionTypes from './actionTypes';
import {getShoesInfo} from '../../services/userServiceAPI'
export const addUserSuccess = () => ({
    type: actionTypes.ADD_USER_SUCCESS
})

export const handleShoesInfo = () => {
    return async (dispatch, getState) =>{
        try{
            let res = await getShoesInfo();
            if (res && res.errCode === 0) {
                dispatch(getShoesInfoSucess(res));
            } else{
                dispatch(getShoesInfoFail(res));
            }
        }catch(e){
            dispatch(getShoesInfoFail(e));
            console.log("Error create doctor's information ", e)
        }
    }
}

export const getShoesInfoSucess = (res) =>({
    type: actionTypes.GET_SHOES_INFO_SUCESSFUL,
    res: res
})

export const getShoesInfoFail = (res) => ({
    type: actionTypes.GET_SHOES_INFO_FAIL, 
    res: res
})