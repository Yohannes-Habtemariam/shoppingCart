import React from "react";

const Aside = (props) => {
  // Summary of cart items price, tax, shipping, total price
  //  Find total price of items in the cart using reduce method
  const itemsPrice = props.cartItems.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
  // tax is 10% of the total price
  const taxPrice = itemsPrice * 0.1;
  // shipping price
  const shippingPrice = itemsPrice > 5000 ? 0 : 45;
  // total price
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <section className="aside-section-container">
      {/* Conditional rendering: If the length of cartItems is zero, then render a div containing "Cart is Empty" as stated below. */}
      <div>
        {props.cartItems.length === 0 && (
          <div className="your-cart"> Your cart is Empty</div>
        )}
      </div>

      <div>
        {props.cartItems.map((cartItem) => {
          return (
            <div key={cartItem.id} className="cart-item-container">
              {/* The name of the product */}
              <div>{cartItem.name}</div>

              {/* The buttons to add and remove a product */}
              <div>
                <button onClick={() => props.addToCart(cartItem)}>+</button>
                <button onClick={() => props.removeFromCart(cartItem)}>
                  -
                </button>
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
            <div>
              <div>Items Price</div>
              <div>${itemsPrice}</div>
            </div>

            <div>
              <div>Tax</div>
              <div>${taxPrice}</div>
            </div> 

            <div>
              <div>Shipping</div>
              <div>${shippingPrice}</div>
            </div>

            <div>
              <div>Total Price</div>
              <div>${totalPrice}</div>
            </div>
          </React.Fragment>
        )}
      </div>
    </section>
  );
};

export default Aside;
