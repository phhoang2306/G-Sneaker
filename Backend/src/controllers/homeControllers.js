import db from '../models/index'

let getHomePage = async (req, res) => {
    try {
        return res.render('homepage.ejs'
             // form into json form.
        );
    } catch(error){
        console.log(error)  
    }
}

module.exports = {
    getHomePage : getHomePage
}