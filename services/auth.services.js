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