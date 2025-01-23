const express = require("express");
const router = express.Router();

const {
  getAllAdvisors,
  getAdvisorById,
  createAdvisor,
  updateAdvisor,
  deleteAdvisor,
  getStudentName,
} = require("../controllers/advisor.controller");

router.get("/join", getStudentName);
router.get("/", getAllAdvisors);
router.get("/:id", getAdvisorById);
router.post("/", createAdvisor);
router.put("/:id", updateAdvisor);
router.delete("/:id", deleteAdvisor);

module.exports = router;
