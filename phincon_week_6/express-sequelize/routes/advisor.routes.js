const express = require("express");
const router = express.Router();

const {
  getAllAdvisors,
  getAdvisorById,
  createAdvisor,
  updateAdvisor,
  deleteAdvisor,
} = require("../controllers/advisor.controller");

router.get("/", getAllAdvisors);
router.get("/:id", getAdvisorById);
router.post("/", createAdvisor);
router.put("/:id", updateAdvisor);
router.delete("/:id", deleteAdvisor);

module.exports = router;
