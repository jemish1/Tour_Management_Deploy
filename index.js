const express = require("express");
const app = express();

const cors = require("cors");
const cookiesParser = require("cookie-parser");
const mongoose = require("mongoose");

const tourRoute = require("./routes/toursRoute");
const userRoute = require("./routes/usersRoute");
const authRoute = require("./routes/authRoute");
const reviewRoute = require("./routes/reviewsRoute");
const bookingRoute = require("./routes/bookingsRoute");

require("dotenv").config();
const PORT = process.env.PORT || 4000;

const corsOptions = {
  origin: true,
  credentials: true,
};

// database connection
const dbconnect = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Database Connection is Successfull"))
      .catch((error) => console.error("Received an error", error.message));
  } catch (error) {
    console.error(error);
    res.status(500).json({
      data: "Internal server error",
      message: error.message,
    });
  }
};
dbconnect();

// middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookiesParser());

app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

// For Deploy
const path = require("path");
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
}); 

app.listen(PORT, () => {
  console.log(`Server is listing on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});
