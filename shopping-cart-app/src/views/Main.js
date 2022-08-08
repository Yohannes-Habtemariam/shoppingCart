import React from "react";
import { cars, shoes, computers } from "../data/ProductData";
import "../styles/landingPage/Home.css";
import Aside from "./Aside";

const Main = () => {
  const [cartItems, setCartItems] = React.useState([]);

  // Function to add items to cart
  const addToCart = (productClicked) => {
    // Find the index of the item clicked in the cartItems array
    const foundProduct = cartItems.find((product) => product.id === productClicked.id);

    // If the item clicked is in the cartItems array, then add it to the cart by incrementing the quantity by 1
    if (foundProduct) {
      setCartItems(cartItems.map((product) => product.id === productClicked.id ? { ...foundProduct, quantity: foundProduct.quantity + 1 } : product));

      // If the item clicked is not in the cartItems array, then do not add it to the cart
    } else {
      setCartItems([...cartItems, { ...productClicked, quantity: 1 }]);
    }
  };

  // Function to remove items from cart
  const removeFromCart = (productClicked) => {
   
    const foundProduct = cartItems.find((product) => product.id === productClicked.id);

    if (foundProduct.quantity === 1) {
      setCartItems(cartItems.filter((product) => product.id !== productClicked.id ));

    } else {
      setCartItems(cartItems.map((product) => product.id === productClicked.id ? { ...foundProduct, quantity: foundProduct.quantity - 1 } : product));
    }
  };

  return (
    <main className="home-page-container">
      <div className="shopping-carts-container">
        {/* Computers' container section */}
        <section className="computers-section-container">
          <h2>Computers For You </h2>
          <div className="computers-container">
            {computers.map((computer, index) => {
              return (
                <div key={index} className="computer-container">
                  <div>
                    <img src={computer.image} alt="computer" />
                  </div>
                  <p className="name-price"> {computer.name} </p>
                  <p className="name-price"> {computer.price} </p>
                  <div>
                    <button onClick={()=> addToCart(computer)} className="add-to-cart"> Add to Cart </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Shoes container section */}
        <section className="shoes-section-container">
          <h2>Shoes For You </h2>
          <div className="shoes-container">
            {shoes.map((shoe, index) => {
              return (
                <div key={index} className="shoe-container">
                  <div>
                    <img src={shoe.image} alt="shoe" />
                  </div>
                  <p className="name-price"> {shoe.name} </p>
                  <p className="name-price"> {shoe.price} </p>

                  <div>
                    <button onClick={()=> addToCart(shoe)} lassName="add-to-cart"> Add to Cart </button>
                  </div>
                </div>
                
              );
            })}
          </div>
        </section>

        {/* Cars container section */}
        <section className="cars-section-container">
          <h2> Cars For You </h2>
          <div className="cars-container">
            {cars.map((car, index) => {
              return (
                <div key={index} className="car-container">
                  <div>
                    <img src={car.image} alt="car" />
                  </div>
                  <p className="name-price"> {car.name} </p>
                  <p className="name-price"> {car.price} </p>

                  <div>
                    <button onClick={()=> addToCart(car)} className="add-to-cart"> Add to Cart </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Asides container */}
      <aside className="asides-container">
            <h2>Cart Items</h2>
            <div>
              <Aside 
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              /> 
            </div>
      </aside>
    </main>
  );
};

export default Main;
