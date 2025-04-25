import express from "express";
import mongoose from "mongoose";
import flightsRouter from './routes/flights/flights.mjs';
import passengersRouter from './routes/passengers/passengers.mjs';
import bookingsRouter from './routes/bookings/bookings.mjs';
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded());
app.use(express.json());

app.use('/flights', flightsRouter);
app.use('/passengers', passengersRouter);
app.use('/bookings',bookingsRouter);

app.get('/',(req,res)=>
{
    res.send("Welcome to Flights API!!");
})

//Mangoose connection
mongoose.connect(process.env.ATLAS_URI);
mongoose.connection.once('open',()=>
{
    console.log("Successfully Connected to MongoDB!")
})

app.use((err, _req, res, next) => {
    res.status(500).send("Seems like we messed up somewhere...");
  });

 app.listen(PORT,()=>
{
    console.log(`server listening on port: ${PORT}`);
})

