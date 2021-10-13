const mongoose = require("mongoose");

//mongoose.Promise = global.Promise;mongoose.models.Workout 

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: Date,
  exercises: [
    {
      type: String,
      name: String,
      duration: Number,
      distance: Number,
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],
},
{ typeKey: '$type' });

workoutSchema.methods.setDate = function(){
  this.day = new Date()
  return this.day
}

module.exports = mongoose.model("Workout", workoutSchema);
