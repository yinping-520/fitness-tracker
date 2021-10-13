const router = require("express").Router();
const mongoose = require("mongoose");
const db = require("../../models");
const { getWorkoutsInRange } = require("../../public/api");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/exercise", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

router.post("/", async ({ body }, res) => {
  try{
    const workout = await db.Workout.create(body)
    res.json(workout)

  }catch(err){res.json(err)}    
}   
);

router.get("/", async (req, res) => {
  try {
    const workout = await db.Workout.find({})
    res.json(workout);
  } catch (err) {
    res.json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(req.body)
    const workoutId = await db.Workout.findByIdAndUpdate(id,{$push: {exercises: req.body }}, {new: true});
    console.log("workid", workoutId)
    res.json(workoutId)
  } catch (err) {
    console.log(err);
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
