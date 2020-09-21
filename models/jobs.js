const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  job: { type: String, required: true },
  materials: { type: String, required: true },
  quantity: { type: Number, required: true },
  parts: { type: String, required: true },
  remarks: { type: String, required: false },
  price: { type: Number, required: false },
});

const Jobs = mongoose.model("Jobs", jobSchema);

module.exports = Jobs;
