const mongoose = require("mongoose");

const majorSchema = mongoose.Schema(
  {
    inputFields: [
      {
        fullName: String,
        emailAddress: String,
        required: true,
      },
    ],
    email: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AccompanyDetail", majorSchema);
