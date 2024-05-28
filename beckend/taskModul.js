const mongoose = require("mongoose")
const taskScheme = new mongoose.Schema({
    id: String,
    task: String,
    status: String
});

const taskModel = mongoose.model("all_tasks", taskScheme);
console.log("mongo defined");
exports.taskModel = taskModel;