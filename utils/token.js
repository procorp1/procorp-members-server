const jwt = require("jsonwebtoken")

exports.generateToken = (userInfo) => {
    const payload  = {
        email:userInfo.email,
        role:userInfo.role
    }
    const token = jwt.sign(payload,process.env.JWT_TOKEN,{
        expiresIn:"7d"
    });
    return token;
}