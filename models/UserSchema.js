const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default:"",
      unique:"false",
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
      default:"",
    },
    TotalAmounts:{
    type:String,
    default:""
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
      default:"",
    },
    email: {
      type: String,
      default:"",
      unique:"false",
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
      default:"",
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
    biographyFiles: {
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
    CVFiles: {
      type: String,
      default: null,
    },
    STATUS:{
      type:String,
      default:"",
    },
    ORDER_ID:{
      type:String,
      default:""
    },
    TXNID:{
      type:String,
      default:""
    },
    BANKTXNID:{
      type:String,
      default:""
    },
    TXNTYPE:{
      type:String,
      default:""
    },
    GATEWAYNAME:{
      type:String,
      default:""
    },
    RESPCODE:{
      type:String,
      default:""
    },
    RESPMSG:{
      type:String,
      default:""
    },
    BANKNAME:{
      type:String,
      default:""
    },
    PAYMENTMODE:{
      type:String,
      default:""
    },
    REFUNDAMT:{
      type:String,
      default:""
    },
    TXNDATE:{
      type:String,
      default:""
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("registerdetail", userSchema);
