'use strict';

var express = require('express');
var controller = require('./thing.controller');

var router = express.Router();

router.get('/thing/', controller.index);
router.get('/thing/:id', controller.show);
router.post('/thing/', controller.create);
router.put('/thing/:id', controller.update);
router.patch('/thing/:id', controller.update);
router.delete('/thing/:id', controller.destroy);

module.exports = router;
