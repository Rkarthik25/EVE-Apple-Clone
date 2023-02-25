import React from "react";
import "./checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-container">
        <div className="headerbar">
          <div className="headerbar-content">
            <div className="header">
              <div className="header-title">Checkout</div>
            </div>
            <div className="content-value">
              <button className="order-summary">
                <span>Order Summary: ₹176800.00</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
