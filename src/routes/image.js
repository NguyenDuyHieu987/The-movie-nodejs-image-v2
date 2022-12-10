const express = require('express');
const router = express.Router();

const imageController = require('../app/controllers/ImageController');

// router.get('/:slug', tvController.detail);
router.get('/:slug', imageController.index);
router.get('/account/:slug', imageController.account);

module.exports = router;
