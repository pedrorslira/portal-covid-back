const mongoose = require('mongoose');

const SchedulingSchema = new mongoose.Schema({
    name: String,
    birthDate: Date,
    schedulingDate: Date,
    schedulingTime: Date,
    status: {
        type: Number,
        min: 0,
        max: 2,
        default: 2
    },
}, {
    timestamps: true
});
const SchedulingModel = mongoose.model('scheduling', SchedulingSchema);
module.exports = SchedulingModel;