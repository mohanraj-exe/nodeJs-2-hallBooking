const express = require("express");
const router = express.Router();
const hallBookingModule = require('../module/hallBooking');

router.get('/get/roomsData', hallBookingModule.getRoomsDetails);
router.get('/get/bookingRooms', hallBookingModule.getBookingDetails);
router.post('/createroom', hallBookingModule.createRoom);
router.post('/bookingRoom', hallBookingModule.bookingRoom);
router.get('/roomsBookedData', hallBookingModule.roomsBookedData);
router.get('/customersBookedRoom', hallBookingModule.customersBookedRoom);

module.exports = router;