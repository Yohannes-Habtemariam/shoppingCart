import React from "react";
import "../styles/asidePart/Aside.css";

const Aside = (props) => {
  // Summary of cart items price, tax, shipping, total price
  //  Find total price of items in the cart using reduce method
  const itemsPrice = props.cartItems.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
  // tax is 10% of the total price
  const taxPrice = itemsPrice * 0.10;
  // shipping price
  const shippingPrice = itemsPrice > 5000 ? 0 : 50;
  // total price
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <section className="aside-section-container">
      {/* Conditional rendering: If the length of cartItems is zero, then render a div containing "Cart is Empty" as stated below. */}
      <div className="cart-container">
        {props.cartItems.length === 0 && (
          <div className="your-cart"> Your cart is Empty</div>
        )}
      </div>



      <div>
        {props.cartItems.map((cartItem) => {
          return (
            <div key={cartItem.id} className="cart-item-container">
              {/* The name of the product */}
              <div className="cartItem-name">{cartItem.name}</div>

              {/* The buttons to add and remove a product */}
              <div className="add-remove-buttons">
                <button onClick={() => props.addToCart(cartItem)}>+</button>
                <button onClick={() => props.removeFromCart(cartItem)}> - </button>
              </div>

              <div>
                {/* The quantity of the product */}
                {cartItem.quantity} * ${cartItem.price}
              </div>
            </div>
          );
        })}

        {/* The summary of the cart */}
        {props.cartItems.length !== 0 && (
          <React.Fragment>
            <hr />
            <div className="item-price">
              <div>Items Price</div>
              <div>${itemsPrice}</div>
            </div>

            <div className="tax-charge">
              <div>Tax</div>
              <div>${taxPrice}</div>
            </div> 

            <div className="shipping-cost">
              <div>Shipping</div>
              <div>${shippingPrice}</div>
            </div>

            <div className="total-price">
              <div>Total Price</div>
              <div>${totalPrice}</div>
            </div>
          </React.Fragment>
        )}
      </div>

      <div className="item-delivery-container">
        <div className="delivery-container">
          {props.cartItems.length === 0 && (
            <div className="your-cart"> Delivery Address </div>
          )}
        </div>
            
      {props.cartItems.map((address) => {
        return (
          <div key={address.id} className="cart-delivery-container">
            <p> {address.street} </p>
            <p> {address.houseNumber} </p>
            <p> {address.zipCode} </p>
            <p> {address.city} </p>
            <p> {address.state} </p>
          </div>
        );
      })}
      </div>
    </section>
  );
};

export default Aside;
