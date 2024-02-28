import userService from '../services/userServices';
let handleGetShoesInfo =  async (req, res) =>{
    try{
        let data =  await userService.handleGetShoesInfo();
        return res.status(200).json({
            errCode: 0,
            data: data
        });
    }catch(e){
        console.log('Get shoes info error: ' + e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
module.exports = {
    handleGetShoesInfo: handleGetShoesInfo
}