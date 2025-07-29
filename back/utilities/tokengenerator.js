let jwt = require("jsonwebtoken");


 function tokenprovider(info){

    let token = jwt.sign({email:info.email},process.env.SECRETKEY,{expiresIn:"5h"});

    return token;

}





module.exports = tokenprovider;