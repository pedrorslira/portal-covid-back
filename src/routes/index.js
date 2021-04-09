const express = require('express');
const SchedulingRouter = require('./scheduling.route');

const Routes = express.Router();

Routes.use('/api', SchedulingRouter);

module.exports = Routes;

