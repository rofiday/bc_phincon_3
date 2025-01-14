const express = require("express");
const {
  getAllThesis,
  getThesisById,
  createThesis,
  updateThesis,
  deleteThesis,
} = require("../controllers/thesis.controller");
const router = express.Router();

router.get("/", getAllThesis);
router.get("/:id", getThesisById);
router.post("/", createThesis);
router.put("/:id", updateThesis);
router.delete("/:id", deleteThesis);

module.exports = router;
