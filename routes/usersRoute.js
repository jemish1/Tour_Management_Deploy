const express = require("express");
const router = express.Router();

const {
  //   createUser,
  updateUser,
  deleteUser,
  getSingelUser,
  getAllUser,
} = require("../controllers/userController");

const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

// router.post("/", createUser); // create new user
router.put("/:id", verifyUser, updateUser); //update user
router.delete("/:id", verifyUser, deleteUser); // delete user
router.get("/:id", verifyUser, getSingelUser); //get single user
router.get("/", verifyAdmin, getAllUser); //get all user

module.exports = router;
