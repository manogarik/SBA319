import Flight from '../../models/flights.mjs';
import Passenger from '../../models/passengers.mjs';
import Booking from '../../models/bookings.mjs';


async function seedBookings(req, res) {
    try {
        const flight = await Flight.findOne({
            _id : "680a956ffd0c01dcdef9caaf"
        })
        const passenger = await Passenger.findOne({
            _id : "680aa7237886b165714f97dc"
        });
        if (!flight || !passenger) {
            return res.status(400).json({ message: 'Flight or Passenger not found' });
          } 
        
       
        await Booking.deleteMany({});
        await Booking.create(
            {
                flightId:flight._id,
                passengerId : passenger._id,
                seatNumber:"12A",
                bookingDate : Date.now(),
                class:"Economy",
                price:850,
                status:"Confirmed"
            })
            
            
        res.status(201).redirect('/bookings');
    }
    catch(error){
        res.status(400).json({ error: error.message });
    }
    try{
        const passenger = await Passenger.findOne({
            _id : "680c033cf587fbaed991e8f2"
        });
        const flight = await Flight.findOne({
            _id : "680c098cf587fbaed991e908"
        })
        if (!passenger || !flight) {
            return res.status(400).json({ message: 'Passenger or Flight not found' });
          } 
          for(let i = 0; i< 3;i++)
          {
            await Booking.create(
                {
                    flightId:flight._id,
                    passengerId : passenger._id,
                    seatNumber:"12A",
                    bookingDate : Date.now(),
                    class:"Economy",
                    price:1000,
                    status:"Confirmed"
                })
                
          }
          res.status(201).redirect('/bookings');
    }
    catch(error){
        res.status(400).json({ error: error.message });
    }
    

     
}

async function getBookings(req, res) {
    try {
        const bookings = await Booking.find({});
        res.status(200).json(bookings);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function createBooking(req, res) {
    try {
        req.body.readyToEat === 'on' ? req.body.readyToEat = true : req.body.readyToEat = false;
        const flight = await Flight.create(req.body);
        console.log(flight);
        res.status(201).json(flight);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// async function deleteFlight(req,res)
// {
//     try {
//               await Flight.findByIdAndDelete(req.params.id)
//               res.send('Deleted the selected flight')//redirect back to fruits index
//           } catch(error) {
//               console.error(error);
//             }
//  }

//  async function updateFlight(req,res)
//  {
//     try {
//            if (req.body.readyToEat === "on") {
//              //if checked, req.body.readyToEat is set to 'on'
//              req.body.readyToEat = true; //do some data correction
//            } else {
//              //if not checked, req.body.readyToEat is undefined
//              req.body.readyToEat = false; //do some data correction
//            }
//            // fruits.push(req.body);
//            await Flight.findByIdAndUpdate(req.params.id, req.body);
       
//            res.redirect("/flights");
//          } catch (error) {
//            console.log(error);
//          }
//  }

//  async function showFlight(req,res)
//  {
//         try{
//             const flight = await Flight.findById(req.params.id)
//             res.json(flight)
//         } catch(err) {
//             console.log(err)
//         }
//  }


// // async function renderNewForm(req, res) {
// //     try {
// //         res.render('./fruits/new.ejs');
// //     } catch (error) {
// //         res.status(400).json({ error: error.message });
// //     }
// // }

export {
    seedBookings,getBookings,createBooking
    
};