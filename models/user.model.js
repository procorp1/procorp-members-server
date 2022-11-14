const mongoose = require("mongoose");
const validator = require("validator");

const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "please provide your Full Name"],
      trim: true,
      lowercase: true,
      minLength: [3, "name at least 3 character"],
      maxLength: [100, "name to large"],
      unique: true,
    },
    dateOfBirth: {
      type: String,
      required: [true, "please provide date of birth"],
    },
    graduationStatus: {
      type: String,
      required: [true, "please provide Graduation Status"],
    },
    schooLCollege: {
      type: String,
      required: [true, "please provide Graduation Status"],
    },
    degree: {
      type: String,
      required: [true, "please provide your degree"],
    },
    currentStatus: {
      type: String,
      required: [true, "please provide your current Status"],
    },
    email: {
      type: String,
      required: [true, "please provide your email"],
      validate: [validator.isEmail, "Provide a valid Email"],
      lowercase: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      validate: {
        validator: (value) =>
          validator.isStrongPassword(value, {
            minLength: 6,
          }),
        message: "Password {VALUE} is not strong enough.",
      },
    },
    phone: {
      type: Number,
      required: [true, "please provide your number"],
      // validate: [validator.isMobilePhone, "Please provide a valid contact number"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    imageURL: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const password = this.password;

  const hashPassword = bcrypt.hashSync(password);

  this.password = hashPassword;

  next();
});


userSchema.methods.comparePassword = async function(password,hash){
  const isPasswordValid = await bcrypt.compare(password,hash);
  return isPasswordValid
}

const User = mongoose.model("User", userSchema);

module.exports = User;
