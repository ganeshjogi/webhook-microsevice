const express = require("express");
const router = express.Router();

const adminController = require('./../controllers/adminController');

// By using the Express router routes had been written accordingly
router.post("/register", adminController.register);
router.get("/list", adminController.list);
router.patch('/update',adminController.update);
router.delete('/delete',adminController.delete);

module.exports = router;
