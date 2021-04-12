const express = require('express');
const SchedulingController = require("../controller/scheduling.controller");
const Routes = express.Router();

Routes.get("/scheduling", SchedulingController.index);
Routes.post("/scheduling", SchedulingController.store);
Routes.get("/scheduling/:id", SchedulingController.getOne);
Routes.delete("/scheduling/:id", SchedulingController.remove);

module.exports = Routes;