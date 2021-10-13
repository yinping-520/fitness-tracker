const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

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
});

module.exports =
  mongoose.models.Workout || mongoose.model("Workout", workoutSchema);
