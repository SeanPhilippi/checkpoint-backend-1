const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
   id: {
      required: true,
      type: Number
   },
   task: {
      required: true,
      type: String
   },
   date: {
      required: true,
      type: String
   }
});

module.exports = mongoose.model("tasks", taskSchema);