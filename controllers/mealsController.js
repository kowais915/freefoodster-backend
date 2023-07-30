const express = require('express');
const mongoose = require('mongoose');

// * importing the controller
const {Meal } = require('../models/MealsModel');


// get all meals

const getAllMeals = async (req, res)=>{
    // res.json({msg: "Here are all the meals"})
    try{
        const allMeals = await Meal.find({});
        res.status(200).json({allMeals})

    }catch(err){
        res.status(400).json({msg: err.message});
    }
}

// get a single Meal
const getSingleMeal = async (req, res)=>{



    const {id} = req.params;
    try{
        const singleMeal = await Meal.findById(id);
        res.status(200).json(singleMeal);

    }catch(err){
        res.status(400).json({message: err.message});
    }
    res.json({msg: `Here is the single meal with the id ${id}`});
}

// post a single meal

const postAMeal = async (req, res)=>{
    const {title, location, persons,  availible} = req.body;

    try{
        const meal = await Meal.create({title, location, persons, availible})
        res.status(201).json({meal})

    }catch(err){
        res.status(400).json({message: err.message});
    }

    res.json({msg: `You posted a meal`});
}

// update a single meal
const updateAMeal = async (req, res)=>{
    // res.json({msg: `You updated a meal with id ${req.params.id}`});
    const {id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({msg: "404 Book not found."})
    }

    const {title, location, persons, availible} = req.body;


    try{
        const updatedMeal = await Meal.findOneAndUpdate(
            {_id: id},
            {
                ...req.body,
            }
            
            )
        if(!updatedMeal){
            throw Error("Could not update the book.")
        }

        res.status(200).json({updatedMeal})

    }catch(err){
        res.status(404).json({message: err.message});
    }
}

// replace a single meal
const replaceMeal = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: "Book not found. Invalid Id"});

    }


    try{
        const replacedMeal = await Meal.findOneAndReplace({})
        

    }catch(err){
        res.status(400).json({message: err.message});
    }
}

// delelte a single meal

const deleteAMeal = async (req, res)=>{
    // res.json({msg: `You deleted a meal with id ${req.params.id}`});
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({msg: "Invalid Id. Could not find the meal to delete"});
    }
  
        const deletedMeal = await Meal.findByIdAndDelete({_id: id});

        if(!deletedMeal) {
          res.status(400).json({msg: "Could not delete the meal"})
        }
        res.status(200).json({deletedMeal})

   

}


module.exports = {
    getAllMeals,
    getSingleMeal,
    postAMeal,
    updateAMeal,
    deleteAMeal
}