const express = require('express');
const route = express.Router();

// * import controller functions
const {
    getAllMeals,
    getSingleMeal,
    postAMeal,
    updateAMeal,
    deleteAMeal

} = require('../controllers/mealsController');


// get all meals
route.get('/all', getAllMeals);

// get a single meal
route.get('/:id', getSingleMeal);

// post a single meal
route.post('/', postAMeal);

// update a single meal
route.patch('/:id', updateAMeal);

// put a single meal
route.put('/:id', updateAMeal);

// delete a single meal
route.delete('/:id', deleteAMeal);




module.exports = route;