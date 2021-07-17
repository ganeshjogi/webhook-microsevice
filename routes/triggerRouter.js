const express = require('express')
const router = express.Router();

const triggerController = require('./../controllers/triggerController');

router.post('/',triggerController.trigger)

module.exports = router;