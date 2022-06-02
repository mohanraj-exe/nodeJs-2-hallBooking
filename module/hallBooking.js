// const { ObjectId } = require('mongodb');
// const mongo = require('../shared');

const hallBookingModel = require("../model/hallBooking");

// Getting room Details
module.exports.getRoomsDetails = async (req,res,next) => {
    try{
        const mongoResponse = await hallBookingModel.createRoom.find()
        res.send(mongoResponse);
    }
    catch(err){
        console.log(err)
    }
}

// Getting booking room Details
module.exports.getBookingDetails = async (req,res,next) => {
    try{
        const mongoResponse = await hallBookingModel.bookingRoom.find()
        res.send(mongoResponse);
    }
    catch(err){
        console.log(err)
    }
}

// Inserting data into 'createRoom' collection
module.exports.createRoom = async (req,res,next) =>{
    const createRoomData = new hallBookingModel.createRoom({...req.body.createRoom})
    try{
        var response = await createRoomData.save()
        res.send(response)
    }
    catch(err){
        console.log(err)
    }
}

// Inserting data into 'bookingRoom' collection
module.exports.bookingRoom = async (req,res,next) =>{
    const bookingRoomData = new hallBookingModel.bookingRoom({...req.body.bookingRoom})
    try{
        var response = await bookingRoomData.save()
        res.send(response)
    }
    catch(err){
        console.log(err)
    }
}

// // Joining two collections and list 'rooms booked data'
module.exports.roomsBookedData = async (req,res,next) => {
    try{
        const mongooseResponse = await hallBookingModel.createRoom.aggregate([
            {$lookup:{
                from: 'bookingrooms',
                localField : 'roomId',
                foreignField: 'roomId',
                as: 'bookedRoomsDetail'
            }},
            {$unwind:{
                path: '$bookedRoomsDetail'
            }},
            {$project:{
                _id: 0,
                roomId: '$bookedRoomsDetail.roomId',
                roomName: '$bookedRoomsDetail.roomName',
                customerName : '$bookedRoomsDetail.customerName',
                date: '$bookedRoomsDetail.date',
                starttime: '$bookedRoomsDetail.starttime',
                endtime: '$bookedRoomsDetail.endtime',
                bookingstatus: '$bookedRoomsDetail.bookingstatus'
            }}
        ])
        res.send(mongooseResponse);
    }
    catch(err){
        console.log(err)
    }
}

// // Joining two collections and list 'rooms booked data'
module.exports.customersBookedRoom = async (req,res,next) => {
    try{
        const mongooseResponse = await hallBookingModel.createRoom.aggregate([
            {$lookup:{
                from: 'bookingrooms',
                localField : 'roomId',
                foreignField: 'roomId',
                as: 'bookedRoomsDetail'
            }},
            {$unwind:{
                path: '$bookedRoomsDetail'
            }},
            {$project:{
                _id: 0,
                customerName : '$bookedRoomsDetail.customerName',
                roomName: '$bookedRoomsDetail.roomName',
                date: '$bookedRoomsDetail.date',
                starttime: '$bookedRoomsDetail.starttime',
                endtime: '$bookedRoomsDetail.endtime'
            }}
        ])
        res.send(mongooseResponse);
    }
    catch(err){
        console.log(err)
    }
}

// // Getting room Details
// module.exports.getRoomsDetails = async (req,res,next) => {
//     try{
//         const mongoResponse = await mongo.selectedDb.collection('createRoom').find().toArray();
//         res.send(mongoResponse);
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// // Getting booking room Details
// module.exports.getBookingDetails = async (req,res,next) => {
//     try{
//         const mongoResponse = await mongo.selectedDb.collection('bookingRoom').find().toArray();
//         res.send(mongoResponse);
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// // Inserting data into 'create_room' collection
// module.exports.createRoom = async (req,res,next) => {
//     try{
//         const mongoResponse = await mongo.selectedDb.collection('createRoom').insertOne(req.body);
//         res.send(mongoResponse);
//     }
//     catch(err){
//         console.log(err)
//     }
// }


// // Inserting data into 'booking_room' collection
// module.exports.createBookingRoom = async (req,res,next) => {
//     try{
//         const mongoResponse = await mongo.selectedDb.collection('bookingRoom').insertOne(req.body);
//         res.send(mongoResponse);
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// // Joining two collections and list 'rooms booked data'
// module.exports.roomsBookedData = async (req,res,next) => {
//     try{
//         const mongoResponse = await mongo.selectedDb.collection('createRoom').aggregate([
//             {$lookup:{
//                 from: 'bookingRoom',
//                 localField: 'room_id',
//                 foreignField: 'room_id',
//                 as: 'rooms_booked_data'
//             }},
//             {$unwind: 
//                 '$rooms_booked_data'},
//             {$project: {
//                     _id:0,
//                     room_name: '$rooms_booked_data.room_name',
//                     booked_status: '$rooms_booked_data.booking_status',
//                     customer_name: '$rooms_booked_data.customer_name',
//                     date: '$rooms_booked_data.date',
//                     start_time: '$rooms_booked_data.start_time',
//                     end_time: '$rooms_booked_data.end_time'
//                 }
//             }
//         ]).toArray()
//         res.send(mongoResponse);
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// module.exports.allCustomersBookedData = async (req,res,next) => {
//     try{
//         const mongoResponse = await mongo.selectedDb.collection('createRoom').aggregate([
//             {$lookup:{
//                 from: 'bookingRoom',
//                 localField: 'room_id',
//                 foreignField: 'room_id',
//                 as: 'customers_booked_data'
//             }},
//             {$unwind: 
//                 '$customers_booked_data'},
//             {$project: {
//                     _id:0,
//                     customer_name: '$customers_booked_data.customer_name',
//                     room_name: '$customers_booked_data.room_name',
//                     date: '$customers_booked_data.date',
//                     start_time: '$customers_booked_data.start_time',
//                     end_time: '$customers_booked_data.end_time'
//                 }
//             }
//         ]).toArray()
//         res.send(mongoResponse);
//     }
//     catch(err){
//         console.log(err)
//     }
// }





