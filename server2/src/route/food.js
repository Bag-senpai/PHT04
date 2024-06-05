const express = require("express");
const router = express.Router();
const {createFood, getFullMenu, updateFood, deleteFood} = require("../controller/food");

router.post("/", createFood);
router.get("/", getFullMenu);
router.patch("/:id", updateFood);
router.delete("/:id", deleteFood);

module.exports = router;