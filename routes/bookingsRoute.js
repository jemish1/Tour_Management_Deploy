const express = require("express");
const router = express.Router();

const {
  createBooking,
  getBooking,
  getAllBooking,
} = require("../controllers/bookingController");

const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

router.post("/", verifyUser, createBooking);
router.get("/:id", verifyUser, getBooking);
router.get("/", verifyAdmin, getAllBooking);

module.exports = router;
