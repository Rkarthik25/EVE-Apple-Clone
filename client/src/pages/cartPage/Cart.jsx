import React from "react";
import "./cart.css";
import { BiChevronRight } from "react-icons/bi";
import { useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";

const Cart = () => {
  // const cart = useSelector((store) => store.appReducer);

  return (
    <div className="cart">
      <div className="cart-container">
        <div className="cart-ribbon">
          <div className="ribbon-content">
            <div className="ribbon-header">
              <p>
                Get up to ₹10000 instant savings on selected products with HDFC
                Bank credit cards.<sup>§§</sup> Plus No Cost EMI from most
                leading banks.<sup>§</sup>
              </p>
            </div>
            <div className="ribbon-button">
              <button className="ribbon-btn">
                Learn more <BiChevronRight />
              </button>
            </div>
          </div>
        </div>

        <div className="cart-bag">
          {/* {cart.cartItems.length === 0 ? (
            <div className="cart-bag_empty">
              <h1 className="empty-header">Your bag is empty.</h1>
            </div>
          ) : (
            <div className="cart-bag_product"></div>
          )} */}
          <div className="cart-bag_empty">
            <h1 className="empty-header">Your bag is empty.</h1>
            <div className="empty-message">Sign in to see if you have any saved items. Or continue shopping.</div>
            <div className="empty-actions">
              <div className="actions-div">
                <div className="action-button">
                  <Link to="/login" className="action-link1">Sign In</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
