const express = require("express");
const path = require("path");
const multer = require("multer");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRouter = require("./router/authRouter");
const cors = require("cors");
const Major = require("./router/MajorRoutes");

const userRoutes = require("./router/userRoutes");
const AwardRoutes = require("./router/AwardRoutes");

// const __dirname=path.resolve();
const app = express();
dotenv.config();
app.use("/files", express.static(path.join(__dirname, "/files")));
app.use("/abstract", express.static(path.join(__dirname, "/abstract")));
app.use("/Resume", express.static(path.join(__dirname, "/Resume")));
app.use("/photo", express.static(path.join(__dirname, "/photo")));
app.use("/cv", express.static(path.join(__dirname, "/cv")));
app.use("/biography", express.static(path.join(__dirname, "/biography")));

mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.MONGO_DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex:true
  },
  (err) => {
    if (err) console.log(err);
    console.log("Database connection successfully");
  }
);

mongoose.connection.on("disconnected", () => {
  console.log("Mongodb is disConnected");
});

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "files");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

const storages = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "abstract");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const uploads = multer({ storage: storages });
app.post("/api/document", uploads.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

const storages1 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Resume");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const uploads1 = multer({ storage: storages1 });
app.post("/api/resume", uploads1.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

const storages2 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "photo");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const uploads2 = multer({ storage: storages2 });
app.post("/api/photo", uploads2.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

const storages3 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "cv");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const uploads3 = multer({ storage: storages3 });
app.post("/api/cv", uploads3.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

const storages4 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "biography");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const uploads4 = multer({ storage: storages4 });
app.post("/api/biography", uploads4.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/router", authRouter);
app.use("/major", Major);
app.use("/routes", userRoutes);
app.use("/award", AwardRoutes);

app.get("/", (req, res) => {
  res.send("Hii this is a backend check");
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Port can be successfully connected ${process.env.PORT}`);
});
