const router = require("express").Router();
const mongoose = require("mongoose");
const db = require("../../models");
const Workout = require("../../models/Workout");
const { getWorkoutsInRange } = require("../../public/api");


router.post("/", async ({ body }, res) => {
  try {
    const work = new Workout(body);
    work.setDate();

    const workout = await db.Workout.create(work);
    res.json(workout);
  } catch (err) {
    res.json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const totalDur = await db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ]);

    res.json(totalDur);
  } catch (err) {
    res.json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const workoutId = await db.Workout.findByIdAndUpdate(
      id,
      { $push: { exercises: req.body } },
      { new: true }
    );
    res.json(workoutId);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.get("/range", async (req, res) => {
  try {
    const data = await db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ]);

    res.json(data.slice(-7));
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
