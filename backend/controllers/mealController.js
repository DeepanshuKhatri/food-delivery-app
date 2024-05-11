const Meal = require('../models/meal')

const getMeal = async (req, res)=>{
    try{
        const {price, type} = req.body;
        const meal = await Meal.findOne({ type: type, price: { $lte: price } })
        res.status(200).json(meal);
    }
    catch(error){
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" });
        
    }
}

const addMeal = async(req, res)=>{
    try{
        await Meal.create(req.body);
        res.status(201).json({message:"Meal created successfully"});
    }catch(error){
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" });
        
    }
}



module.exports = {getMeal, addMeal}