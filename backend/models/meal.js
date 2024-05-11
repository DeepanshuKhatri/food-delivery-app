const mongoose = require("mongoose");

const mealSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  items:[
    {
        name: {
          type: String,
          required: true
        },
        quantity: {
          type: String,
          required: true
        }
      }
  ],
  calories:{
    type:String,
    required:true,
  },
  protein: {
    type: String,
    required: true,
  },
  carbohydrates: {
    type: String,
    required: true,
  },
  fats: {
    type: String,
    required: true,
  },

});

const Meal = mongoose.model("Meal", mealSchema);

exports.modules = Meal;
