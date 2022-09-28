const express = require('express');
const lableRouter = express.Router();

const { addLable, updateById } = require('../controllers/lableController');

lableRouter.post('/addlable', addLable);
lableRouter.put('/update/:id', updateById);

module.exports = lableRouter;
