import Passenger from '../../models/passengers.mjs';


async function seedPassengers(req, res) {
    try {
        await Passenger.deleteMany({});
        await Passenger.create(
            {

                name: "Manogari",
                email: "manoguru768@gmail.com",
                passportNumber: "T6334454",
                nationality: "India",
                booking =[]

            },
            {
                name: "Sivakami",
                email: "sivagamikmr@gmail.com",
                passportNumber: "X1234567",
                nationality: "India"
            },

        );
        res.status(201).redirect('/passengers');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function getPassengers(req, res) {
    try {
        const passengers = await Passenger.find({});
        res.status(200).json(passengers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function createPassenger(req, res) {
    try {
        req.body.readyToEat === 'on' ? req.body.readyToEat = true : req.body.readyToEat = false;
        const passenger = await Passenger.create(req.body);
        console.log(passenger);
        res.status(201).json(passenger);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function deletePassenger(req, res) {
    try {
        await Passenger.findByIdAndDelete(req.params.id);
        res.send("Deleted the Passenger");
    } catch (error) {
        console.error(error);
    }
}

async function updatePassenger(req, res) {
    try {
        if (req.body.readyToEat === "on") {
            //if checked, req.body.readyToEat is set to 'on'
            req.body.readyToEat = true; //do some data correction
        } else {
            //if not checked, req.body.readyToEat is undefined
            req.body.readyToEat = false; //do some data correction
        }
        // fruits.push(req.body);
        await Passenger.findByIdAndUpdate(req.params.id, req.body);

        res.redirect("/passengers");
    } catch (error) {
        console.log(error);
    }
}

//Show Passenger by id
 async function showPassenger(req,res)
 {
        try{
            const passenger = await Passenger.findById(req.params.id)
            .populate('bookings');
            if(!passenger)
                return res.status(404).json({ message: 'Passenger not found' });
            res.json(passenger);
        } catch(err) {
            console.log(err)
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
    seedPassengers,
    getPassengers,
    createPassenger,
    deletePassenger,
    updatePassenger,
    showPassenger
};