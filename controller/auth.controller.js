const { createUserService } = require("../services/auth.services");

/**
 *
 * @param {data from from front end} req
 * @param {send status front end} res
 * @param {handle error} next
 */
module.exports.createUser = async (req, res, next) => {
  try {
    const user = await createUserService(req.body);
    res.status(201).json({
      status: true,
      message: "user create success",
      user: user,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "user can't create",
      error: error,
    });
    next(error);
  }
};
