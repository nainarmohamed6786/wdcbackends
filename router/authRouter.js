const express = require("express");
const userSchema = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const CreateError = require("../utils/CreateError");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const path = require("path");

const router = express.Router();

router.post("/register", async (req, res, next) => {
  try {
    const username = req.body.name.slice(0, 4);
    const age = req.body.age.slice(8, 10) + req.body.age.slice(5, 7);

    const passwordss = username + "@" + age;

    console.log(passwordss);

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(passwordss, salt);

    req.body.password = username + age;

    const Users = new userSchema({
      ...req.body,
      password: hash,
    });

    const savedUser = await Users.save();

    console.log(username);
    console.log(age);
    if (savedUser) {
      const main = async () => {
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: "worlddentistsassociation@gmail.com",
            pass: "qbtsyfcbzilnbbwf",
            // ⚠️ Use environment variables set on the server for these values when deploying
          },
        });

        let info = await transporter.sendMail({
          from: '"worlddentistsassociation@gmail.com',
          to: `${Users.email}`,
          subject: "Congraluations! Succesfully Registered to WDC 2023",
          html: `
              <img src="cid:nainarmy432@gmail.com" width="400" />
              <h1>Hi ${Users.name},</h1>
              <h3> Your Login Password ${passwordss}</h3>
              <h3>Your Registration is Successfull!</h3>
             <h5>Your password will be the first four letters of your name (capitalized first letter), followed by '@', and the date and month of your birth.<br />
             For example, if your name is David Rake and your DOB is 27-08-1997, your password will be Davi@2708. </h5>
          
              `, // Embedded image links to content ID
          attachments: [
            {
              filename: "WDC-Broucher-Bangkok-2023.pdf",
              path: "./WDC-Broucher-Bangkok-2023.pdf",
              cid: "nainarmy412@gmail.com", // Sets content ID
            },
            {
              filename: "poster.png",
              path: "./poster.png",
              cid: "nainarmy432@gmail.com", // Sets content ID
            },
          ],
        });

        console.log(info.messageId);
      };

      main();
    }

    console.log(savedUser);

    res.status(200).json(savedUser);
  } catch (err) {
    next(err);
    console.log(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const user = await userSchema.findOne({ email: req.body.email });

    console.log(user.email);

    if (!user) {
      return next(CreateError("401", "User not found"));
    }

    const passwords = await bcrypt.compare(req.body.password, user.password);

    if (!passwords) {
      return next(CreateError("401", "Password is not corrected"));
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    const { password, isAdmin, ...othersDetail } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...othersDetail }, isAdmin });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
