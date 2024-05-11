const Items = require("../models/item");

const getAllItems = async (req, res) => {
  try {
    const items = await Items.find();
    res.status(200).json(items);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const addItem = async (req, res) => {
  try {
    const { name, protein, carbohydrates, fats, fiber } = req.body;
    await Items.create({ name, protein, carbohydrates, fats, fiber });
    res.status(201).json({ message: "Item added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getAllItems, addItem };
