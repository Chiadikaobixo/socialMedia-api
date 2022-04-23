const mongoose = require("mongoose");
const CryptoJS = require('crypto-js')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('this is not a valid email')
        }
      }
    },
    password: {
      type: String,
      required: true,
      min: 6,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error('must not contain the letter "password"')
        }
      }
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 50,
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3],
    },
    tokens: [{
      token: {
        type: String,
        required: true
      }
    }],
  },
  { timestamps: true }
);

// Generate auth Token
userSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)

  user.tokens = user.tokens.concat({token})
  await user.save()

  return token
}

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
  const user = this

  if (user.isModified('password')) {
    user.password = await CryptoJS.AES.encrypt(user.password, process.env.SECRET_KEY).toString()
  }
  next()
})

// Modify the JSON Datas to display
userSchema.methods.toJSON = function () {
  const user = this
  const userObject = user.toObject()

  delete userObject.password
  delete userObject.tokens

  return userObject
}


module.exports = mongoose.model("User", userSchema);