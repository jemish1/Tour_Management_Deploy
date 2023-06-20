const express = require("express");
const router = express.Router();

const {
  createTour,
  updateTour,
  deleteTour,
  getSingelTour,
  getAllTour,
  getTourBySearch,
  getFeaturedTours,
  getTourCount,
} = require("../controllers/tourController");
const { verifyAdmin } = require("../utils/verifyToken");

router.post("/", verifyAdmin, createTour); // create new tour
router.put("/:id", verifyAdmin, updateTour); //update tour
router.delete("/:id", verifyAdmin, deleteTour); // delete tour
router.get("/:id", getSingelTour); //get single tour
router.get("/", getAllTour); //get all tour

// get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTours);
router.get("/search/getTourCount", getTourCount);

module.exports = router;
