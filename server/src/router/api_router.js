const express = require("express");
const router = express.Router();
const apiController = require('../controller/api_controller');

router.get('/api/list',apiController.list);
router.get('/api/graphic/gender',apiController.getGraphicGender);
router.get('/api/graphic/countres',apiController.getGraphicCountres);
module.exports = router;