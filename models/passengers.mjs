import mongoose from "mongoose";

// Define the schema for learners.
// Mongoose will add the _id property to your schemas by default.
const passengerSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
        
    },
    email : {
        type:String,
        lowercase:true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
        unique:true,
        required:true,
    },
    passportNumber : {
        type:String,
        required:true,
        uppercase:true,
        unique:true,
        match: [/^[A-Z0-9]{6,9}$/, 'Please enter a valid passport number']
    },
    nationality: {
        type : String,
        required :true,
        
    }
    
})

export default mongoose.model("Passenger", passengerSchema);