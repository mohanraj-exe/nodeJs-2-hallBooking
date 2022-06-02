const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const createRoomSchema = new Schema({
    roomName:{
        type: String,
        maxlength: 50,
        required: true
    },
    roomId:{
        type: Number,
        maxlength: 50,
        required: true
    },
    seatsAvailable:{
        type: Number,
        maxlength: 50,
        required: true
    },
    amenitiesInRoom:{
        type: Array,
        maxlength: 500,
        required: true
    },
    pricePerHour:{
        type: Number,
        maxlength: 50,
        required: true
    }
})

const bookingRoomSchema = new Schema({
    roomName:{
        type: String,
        maxlength: 50,
        required: true
    },
    roomId:{
        type: Number,
        maxlength: 50,
        required: true
    },
    customerName:{
        type: String,
        maxlength: 50,
        required: true
    },
    date:{
        type: String,
        maxlength: 500,
        required: true
    },
    starttime:{
        type: String,
        maxlength: 50,
        required: true
    },
    endtime:{
        type: String,
        maxlength: 50,
        required: true
    },
    bookingstatus:{
        type: String,
        maxlength: 50,
        required: true
    }
})

const createRoom = mongoose.model('createroom', createRoomSchema)
const bookingRoom = mongoose.model('bookingroom', bookingRoomSchema)

module.exports = {createRoom, bookingRoom}