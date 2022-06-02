const express = require("express");
const mongo = require("./shared");
const hallBookingRouter = require("./router/hallBooking");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(express.json())

// mongo.connect();
mongo.connectMongoose();

app.use('/',(req,res,next) =>{
    // console.log("Middle Ware")
    next();
})
app.use('/hallBooking', hallBookingRouter)

const port = process.env.PORT || 3000
app.listen(port, () => console.log("port started listening"));