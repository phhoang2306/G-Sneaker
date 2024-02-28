import brcypt from 'bcrypt';
import db from '../models/index'

const salt = brcypt.genSaltSync(10);
// Hash password 

let handleGetShoesInfo = () =>{
    return new Promise(async (resolve, reject) =>{
        try{
            let data = ''
            data = await db.Shoes.findAll({
                raw: true
            });
            resolve(data);
        } catch(e){
            reject(e);
        }
    })
}
module.exports = {
    handleGetShoesInfo: handleGetShoesInfo
}