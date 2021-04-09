const mongoose = require('mongoose');

const SchedulingSchema = new mongoose.Schema({
    name: String,
    birthDate: Date,
    schedulingDate: Date,
    schedulingTime: Date
}, {
    timestamps: true
});
const SchedulingModel = mongoose.model('scheduling', SchedulingSchema);
module.exports = SchedulingModel;