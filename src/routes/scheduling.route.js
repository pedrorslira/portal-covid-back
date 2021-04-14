const express = require('express');
const SchedulingController = require("../controller/scheduling.controller");
const Routes = express.Router();

Routes.get("/scheduling", SchedulingController.index);
Routes.post("/scheduling", SchedulingController.store);
Routes.get("/scheduling/:id", SchedulingController.getOne);
Routes.delete("/scheduling/:id", SchedulingController.remove);
Routes.delete("/schedulings",SchedulingController.removeAll);
Routes.get("/scheduling/date/:schedulingDate",SchedulingController.getCountSchedulingDate);
Routes.get("/scheduling/:schedulingDate/:schedulingTime",SchedulingController.getCountSchedulingTime);

module.exports = Routes;