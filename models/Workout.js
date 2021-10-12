const mongoose = require("mongoose");
const exercise = require("./exercise");
mongoose.Promise = global.Promise

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: Date,
  exercise: [
      {
          type: Schema.Types.ObjectId,
          ref: "Exercise"
      }
  ],
});

module.exports = mongoose.models.Workout || mongoose.model("Workout", workoutSchema)