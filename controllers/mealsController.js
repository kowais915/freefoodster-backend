const express = require('express');
const mongoose = require('mongoose');

// * importing the controller
const {Meal } = require('../models/MealsModel');


// get all meals

const getAllMeals = async (req, res)=>{
    res.json({msg: "Here are all the meals"})
}

// get a single Meal
const getSingleMeal = async (req, res)=>{

    const {id} = req.params;
    res.json({msg: `Here is the single meal with the id ${id}`});
}

// post a single meal

const postAMeal = async (req, res)=>{
    res.json({msg: `You posted a meal`});
}

// update a single meal
const updateAMeal = async (req, res)=>{
    res.json({msg: `You updated a meal with id ${req.params.id}`});
}

// delelte a single meal

const deleteAMeal = async (req, res)=>{
    res.json({msg: `You deleted a meal with id ${req.params.id}`});
}


module.exports = {
    getAllMeals,
    getSingleMeal,
    postAMeal,
    updateAMeal,
    deleteAMeal
}