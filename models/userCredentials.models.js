const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;
// const personalDetailsSchema = new Schema(
//   {
//     gender: {
//       type: String,
//       match: [
//         /(?:m|M|male|Male|f|F|female|Female|FEMALE|MALE|Not prefer to say)$/,
//         "Gender must be Either Male or Female",
//       ],
//       // validate(value) {
//       //   if (value !== "male" || value !== "female")
//       //     throw new Error("Gender must be Either Male or Female");
//       // },

//       required: true,
//     },
//     age: {
//       type: Number,
//       min: 1,
//       max: 120,
//       required: true,
//     },
//   },
//   {
//     _id: false,
//   }
// );
const userCredentialsSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    email: {
      type: String,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Please Enter Valid Email Address");
        }
      },
      //   match: [
      //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      //     "Please Enter Valid Email Address",
      //   ],
    },
    password: { type: String },
  },
  { timestamps: true }
);
const userCredentials = mongoose.model("Credentials", userCredentialsSchema);

module.exports = { userCredentials };
