const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    age: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      default: "",
    },
    Institution: {
      type: String,
      default: "",
    },
    yearofStudy: {
      type: String,
      default: "",
    },
    streetName: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePic: {
      type: String,
      default: "",
    },
    UploadFile: {
      type: String,
      default: null,
    },
    phoneNumber: {
      type: Number,
    },

    BasicAmount: {
      type: Number,
      default: "",
    },
    Roles: {
      type: String,
      default: "",
    },
    Designation: {
      type: String,
      default: "",
    },
    Qualification: {
      type: String,
      default: "",
    },
    Speciality: {
      type: String,
      default: "",
    },
    Presentation: {
      type: String,
      default: "",
    },
    Speak: {
      type: String,
      default: "",
    },
    biography: {
      type: String,
      default: "",
    },
    subjectofPresentation: {
      type: String,
      default: "",
    },
    AccompanyCount: {
      type: String,
      default: null,
    },
    TotalAmount: {
      type: String,
      default: null,
    },
    payment_date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RegisterDetail", userSchema);
