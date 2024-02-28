import axios from "../axios"

const getShoesInfo = () =>{
    return axios.get(`/api/get-shoes-info`)
}
export {
    getShoesInfo
}