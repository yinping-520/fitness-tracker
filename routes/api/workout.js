const router = require("express").Router();
const mongoose = require("mongoose");
const db = require("../../models");
const { getWorkoutsInRange } = require("../../public/api");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/exercise", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

router.post("/", ({ body }, res) => {
    db.Exercise.create(body)
    .then(({_id}) => db.Workout.findByIdAndUpdate({}, {$push: {exercises: _id}}, { new: true })) 
    .then(workoutdb => res.json(workoutdb))
    .catch(err => {res.json(err)})
   }
);

router.get("/", async (req, res) => {
  try {
    const workout = await db.Workout.find({})
    console.log(workout);
    res.json(workout);
  } catch (err) {
    res.json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const workoutId = await db.Workout.findById(id);
    res.json(workoutId)
  } catch (err) {
    res.json(err);
  }
});

router.get("/range", async (req, res) => {
    try {
        const workoutId = await db.Workout.find({});
      } catch (err) {
        res.json(err);
      }
});



//   app.get("/populated", (req, res) => {
//     db.Library.find({})
//       .populate("books")
//       .then(dbLibrary => {
//         res.json(dbLibrary);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });

module.exports = router;
