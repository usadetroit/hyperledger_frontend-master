const express = require("express");
const router = express.Router();
const Jobs = require("../models/jobs");

// request: GET all articles
router.get("/", (req, res) => {
  Jobs.find()
    .then((job) => res.json(job))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// request: POST new article
router.post("/add", (req, res) => {
  const newJob = new Jobs({
    job: req.body.job,
    materials: req.body.materials,
    quantity: req.body.quantity,
    parts: req.body.parts,
    remarks: req.body.remarks,
    price: req.body.price,
  });

  newJob
    .save()
    .then(() => res.json("Job has been created successfully."))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// request: FIND article by ID
router.get("/:id", (req, res) => {
  Jobs.findById(req.params.id)
    .then((job) => res.json(job))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// request: FIND article by ID and update
router.put("/update/:id", (req, res) => {
  Jobs.findById(req.params.id)
    .then((job) => {
      job.job = req.body.job;
      job.materials = req.body.materials;
      job.quantity = req.body.quantity;
      job.parts = req.body.parts;
      job.remarks = req.body.remarks;
      job.price = req.body.price;

      job
        .save()
        .then(() => res.json("Job has been updated successfully."))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// request: FIND article by ID and delete
router.delete("/:id", (req, res) => {
  Jobs.findByIdAndDelete(req.params.id)
    .then(() => res.json("Job has been deleted successfully."))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
