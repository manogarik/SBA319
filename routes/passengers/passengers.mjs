import express from 'express';
import * as passengerController from '../../controllers/passengers/passengers-controller.js';

const router = express.Router();

////////////////////////////
// Routes / API Endpoints //
////////////////////////////

// All flights routes (INDUCES) and their corresponding controller functions (CRUD):

///// Seed /////

router.get('/seed', passengerController.seedPassengers);

///// INDUCES /////

// Index
router.get('/', passengerController.getPassengers);
// New
// router.get('/new', fruitsController.renderNewForm);
//Delete
router.delete('/:id',passengerController.deletePassenger);
// Update
router.patch('/:id', passengerController.updatePassenger);
// Create
router.post('/', passengerController.createPassenger);
// Edit
// Show
router.get('/:id',passengerController.showPassenger);

export default router;