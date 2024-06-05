const Food = require("../model/food");

// Create food item
const createFood = async (req, res) => {
    const {name, price, description, itemssold} = req.body;

    try {
        const post = await Food.create({
            name,
            price,
            description,
            itemssold
        });
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const getFullMenu = async (req, res) => {
    try {
        const foods = await Food.find();
        res.status(200).json({
            foods
        });
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const updateFood = async (req, res) => {
    const {id} = req.params;

    try {
        const food = await Food.findByIdAndUpdate({ _id: id }, { ...req.body }, { new: true, runValidators: true });

        if (!food) {
          return res.status(404).json({
            error: "No matching menu item found.",
          });
        }
    
        res.status(200).json({
          message: "The menu item has been successfully updated.",
          food,
        });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

// Delete a Food Item
const deleteFood = async (req, res) => {
    const { id } = req.params;
    try {
      const food = await Food.findByIdAndDelete({ _id: id });
  
      if (!food) {
        return res.status(404).json({
          error: "No matching post found",
        });
      }
  
      res.status(200).json({
        message: "The post has been successfully removed",
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {createFood, getFullMenu, updateFood, deleteFood};
  