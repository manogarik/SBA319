import Flight from '../../models/flights.mjs';


async function seedFlights(req, res) {
    try {
        await Flight.deleteMany({});
        await Flight.create(
            {
                flightNumber: "AI202",
                airline: "Air India",
                origin: "DEL",
                destination: "JFK",
                departureTime: "2025-06-24T09:00:00Z",
                arrivalTime: "2025-06-24T18:00:00Z",
                duration: "15h",
                status: "On Time"
            },
            {
                flightNumber: "F92101",
                airline: "Frontier",
                origin: "RDU",
                destination: "LAS",
                departureTime: "2025-08-09T07:30:00Z",
                arrivalTime: "2025-08-09T09:17:00Z",
                duration: "4h 47min",
                status: "On Time"
            },
            
        );
        res.status(201).redirect('/flights');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function getFlights(req, res) {
    try {
        const fruits = await Flight.find({});
        res.status(200).json(fruits);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function createFlight(req, res) {
    try {
        req.body.readyToEat === 'on' ? req.body.readyToEat = true : req.body.readyToEat = false;
        const flight = await Flight.create(req.body);
        console.log(flight);
        res.status(201).json(flight);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function deleteFlight(req,res)
{
    try {
              await Flight.findByIdAndDelete(req.params.id)
              res.send('Deleted the selected flight')//redirect back to fruits index
          } catch(error) {
              console.error(error);
            }
 }

 async function updateFlight(req,res)
 {
    try {
           if (req.body.readyToEat === "on") {
             //if checked, req.body.readyToEat is set to 'on'
             req.body.readyToEat = true; //do some data correction
           } else {
             //if not checked, req.body.readyToEat is undefined
             req.body.readyToEat = false; //do some data correction
           }
           // fruits.push(req.body);
           await Flight.findByIdAndUpdate(req.params.id, req.body);
       
           res.redirect("/flights");
         } catch (error) {
           console.log(error);
         }
 }



// async function renderNewForm(req, res) {
//     try {
//         res.render('./fruits/new.ejs');
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }

export {
    seedFlights,
    getFlights,
    createFlight,
    deleteFlight,
    updateFlight
};