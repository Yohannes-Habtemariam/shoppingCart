import React from "react";
// import cars image
import familyCar from "../images/carFamily.jpg";
import luxuryCar from "../images/carLuxury.jpg";
import mountainCar from "../images/carMountain.jpg";

// Import the images of the shoes
import sportShoes from "../images/sportShoe.jpg";
import womenShoes from "../images/womenShoe.jpg";
import youthShoes from "../images/youthShoe.jpg";

// Import the images of the computers
import laptop from "../images/laptop.jpg";
import desktop from "../images/desktop.jpg";
import computer from "../images/computers.jpg";

export const cars = [
  {
    image: luxuryCar,
    name: "Luxury Car",
    price: 600000
  },

  {
    image: familyCar,
    name: "Family Car",
    price: 9000
  },
  {
    image: mountainCar,
    name: "Rough Road Car",
    price: 30000
  },
];

export const shoes = [
  {
    image: youthShoes,
    name: "Nike Shoes",
    price: 200
  },

  {
    image: womenShoes,
    name: "Nike Shoes for all",
    price: 100
  },
  {
    image: sportShoes,
    name: "Runners' Shoes",
    price: 300
  },
];

export const computers = [
  {
    image: laptop,
    name: "hp",
    price: 1000
  },

  {
    image: desktop,
    name: "Dell",
    price: 670
  },
  {
    image: computer,
    name: "Lenovo",
    price: 1500
  },
];

