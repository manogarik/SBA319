import mongoose  from "mongoose";

const bookingSchema = new mongoose.Schema({
    filghtId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Flight',
        required : true,
        
    },
    passengerId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Passenger',
        required:true,
    },
    seatNumber :
    {
        type:String,
        required:true
    },
    bookingDate :
    {
        type:Date,
        reuired:true
    },
    class:
    {
        type:String,
        required:true,
        enum :['Economy', 'First','Business']
    },
    price:
    {
        type:Number,
        required:true
    }
})