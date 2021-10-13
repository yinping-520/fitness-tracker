const mongoose = require("mongoose");

//mongoose.Promise = global.Promise;mongoose.models.Workout 

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { type: Date },
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
{ typeKey: '$type' }
);

module.exports = mongoose.model("Workout", workoutSchema);
