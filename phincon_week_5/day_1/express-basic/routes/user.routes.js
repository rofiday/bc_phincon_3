const express = require("express");
const router = express.Router();
const { validationCreateUser } = require("../middlewares/user.middleware");
const {
  getAllUsers,
  createUser,
  updateUserById,
  deleteUserById,
} = require("../controllers/user.controller");

router.get("/", getAllUsers);
router.post("/", validationCreateUser, createUser);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);
module.exports = router;
