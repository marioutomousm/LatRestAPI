const getAlCars = (req,res)=>{
    const data ={
        id : '1',
        name : "Avanza",
        type : "ASK21",
        tahun : "2022"
    };
    res.json({
        message: 'Get all cars success',
        data : data
    })
}

// Create
const createNewCars = (req, res)=>{
    console.log(req.body);
    res.json({
        message : 'Create new car success',
        data : req.body
    })
}

const updateCars = (req, res) =>{
    const {id} = req.params;
    console.log('id:', id);
    res.json({
        message :'Update car Success',
        data : req.body
    })
}

const deleteCars = (req, res) =>{
    const {id} = req.params;
    res.json({
        message : 'Delete car Success',
        data : {
            id : {id},
            name : "Lambo",
            type : "ASHJ2",
            tahun : "2020"
        }
    })
}



module.exports ={
    getAlCars,
    createNewCars,
    updateCars,
    deleteCars,
}







// // Create Cars POST /cars
// router.post("/cars", (req, res) => {
//   const cars = Cars.create(req.body);
//   res.status(201).json(cars);
// });

// // List Cars GET /cars
// app.get("/cars", (req, res) => {
//   const cars = Cars.list();
//   res.status(200).json(cars);
// });

// // Get Detaill Car GET /cars{id}
// app.get("/cars/:id", (req, res) => {
//   const cars = Cars.find(req.params.id);

//   if (!cars)
//     res.status(404).json({
//       error: "Cars not found",
//     });

//   res.status(200).json(cars);
// });

// // Update car PUT /cars{id}
// app.put("/cars/:id", (req, res) => {
//   const cars = Cars.find(req.params.id);
//   if (!cars)
//     return res.status(404).json({
//       erorr: "Cars not found",
//     });

//   cars.update(req.body);

//   res.status(200).json(cars);
// });

// // Delete Cars DELETE/cars{id}

