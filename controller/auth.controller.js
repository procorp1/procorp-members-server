const {
  createUserService,
  loginUserService,
} = require("../services/auth.services");

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

/**
 *
 * @param {email and password from front end} req
 * @param {*} res
 * @param {*} next
 */
module.exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        message: "please provide credential",
      });
    }
    const user = await loginUserService(email);

    if (!user) {
      return res.status(403).json({
        message: "please create account",
      });
    }

    // check password valid

    const isPasswordValid = await user.comparePassword(password, user.password);

    console.log(isPasswordValid);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Password incorrect",
      });
    }

    const { password: pwd, ...others } = user.toObject();

    res.status(201).json({
      status: true,
      message: "login success",
      user: others,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't find user",
      error: error,
    });
    next(error);
  }
};
