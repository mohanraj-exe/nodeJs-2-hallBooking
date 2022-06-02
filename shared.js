const mongoose = require("mongoose");
// const {MongoClient} = require("mongodb");

module.exports = {
    // selectedDb:{},

    //     async connect(){
    //         try{
    //            const client = await MongoClient.connect("mongodb://localhost:27017")
    //            this.selectedDb = client.db('hallBooking');

    //         }catch(err){
    //             console.log(err)
    //         }

    //     }

    async connectMongoose(){
        try{
            // await mongoose.connect(process.env.MONGOOSE_CONNECT)
            const conn = await mongoose.connect(process.env.MONGOOSE_CONNECT)
                console.log(conn)
                console.log('DB connection success')
        }
        catch(err){
            console.log(err)
        }
    }
}