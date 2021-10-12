const mongoose = require("mongoose");

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise

const exerciseSchema = new Schema({
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
 
});


module.exports = mongoose.models.Exercise || mongoose.model("Exercise", exerciseSchema)