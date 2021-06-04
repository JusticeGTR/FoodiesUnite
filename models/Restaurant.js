const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  restaurant_name: { type: String, required: true },
  location: { type: String, required: true },
  username: { type: String, required: true },
  img: {
    type: String,
    default:
      "https://therealdeal.com/la/wp-content/uploads/2018/08/mcdonalds600-650x377.jpg",
  },
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Employee;
