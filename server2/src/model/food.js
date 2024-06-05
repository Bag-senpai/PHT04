const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    name: {type: String, require: true},
    price: {type: Number, require: true},
    description: {type: String, require: true},
    itemssold: {type: Number}
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;