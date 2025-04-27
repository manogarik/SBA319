import express from 'express';
import * as bookingsController from '../../controllers/bookings/bookings-controller.js';

const router = express.Router();

////////////////////////////
// Routes / API Endpoints //
////////////////////////////

// All flights routes (INDUCES) and their corresponding controller functions (CRUD):

///// Seed /////

router.get('/seed', bookingsController.seedBookings);

///// INDUCES /////

// Index
router.get('/', bookingsController.getBookings);
// // New
// // router.get('/new', fruitsController.renderNewForm);
// //Delete
// router.delete('/:id',flightsController.deleteFlight);
// // Update
// router.patch('/:id', flightsController.updateFlight);
// // Create
router.post('/', bookingsController.createBooking);
// // Edit
// // Show
// router.get('/:id',flightsController.showFlight);

export default router;