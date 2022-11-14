const User = require('../models/user.model')

/**
 * 
 * @param {data from auth controller} userData 
 * @returns create user data
 */
exports.createUserService = async (userData) =>{
    const user = await User.create(userData);
    return user
}

/**
 * 
 * @param {email from auth controller} email 
 * @returns  email user data
 */

exports.loginUserService = async (email) => {
    const user = await User.findOne({email});
    return user
}