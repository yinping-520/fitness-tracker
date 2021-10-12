const router = require('express').Router();

const workoutRoute = require("./workout");

router.use("/workouts", workoutRoute)


module.exports = router

