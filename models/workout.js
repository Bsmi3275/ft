const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter an exercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter the exercise name",
      },
      duration: {
        type: Number,
        trim: true,
        required: "Enter the exercise duration",
      },
      weight: {
        type: Number,
        trim: true,
      },
      reps: {
        type: Number,
        trim: true,
      },
      sets: {
        type: Number,
        trim: true,
      },
      distance: {
        type: Number,
        trim: true,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;