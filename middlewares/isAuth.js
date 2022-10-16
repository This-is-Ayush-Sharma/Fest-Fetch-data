const jwt = require('jsonwebtoken');


exports.isAuth = async (req,res,next)=>{
    let cookie = req.headers.cookie; // we need to access the cookies from the header.
    if(!cookie && !cookie.includes("token")){
        return res.render('data',{
            message:"You are not authorized.",
            token:""
        })
    }
    let token = cookie.split("token=")[1];
    // console.log(token);
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        //now token is valid and we can proceed further
        if(err)
        {
            return res.render('data',{
                message:"Expired login again",
                token:""
            })
        }
        req.user=user;
        next();
    });
}