exports.isAdmin = async(req,res,next)=>{
    const user = req.user;
    if(user.usrtype === "Admin")
    {
        next();
    }
    else{
        return res.render('data',{
            token:"",
            message:"You are not a admin user Buzz off"
        })
    }
};