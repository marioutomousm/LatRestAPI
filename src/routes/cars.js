const express = require("express");

const carsController = require("../controller/cars.js");

const router = express.Router();

// Create
router.post("/", carsController.createNewCars);

// List
router.get("/", carsController.getAlCars);

// Update
router.patch('/:id',carsController.updateCars);

//Delete
router.delete('/:id',carsController.deleteCars);





module.exports = router;











