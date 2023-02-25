import React from "react";
import "./cart.css";
import { BiChevronRight } from "react-icons/bi";
import { useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import {} from "@chak"

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
            <div className="empty-message">
              Sign in to see if you have any saved items. Or continue shopping.
            </div>
            <div className="empty-actions">
              <div className="actions-div">
                <div className="action-button">
                  <button className="action-link1 btn1">
                    <Link to="/login">Sign In</Link>
                  </button>
                </div>
                <div className="action-button">
                  <button className="action-link1 btn2">
                    <Link to="/">Continue Shopping</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-chat">
          <div className="chat-container">
            <div className="chat-content">
              <div>
                Need some help?{" "}
                <Link to="#" style={{ color: "#06C" }}>
                  Chat now
                </Link>{" "}
                or call 000800 040 1966.
              </div>
            </div>
          </div>
        </div>

        <div className="cart-productSpotlight">
          <div className="spotlight-content">
            <div className="spotlight-background">
              <img
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-new-arrivals-checkout-201804?wid=980&hei=400&fmt=jpeg&qlt=95&.v=1523551959954"
                alt="spotlight"
                width="980"
                height="400"
              />
            </div>
            <div className="spotlight-info">
              <h2 className="spotlight-header">New Arrivals</h2>
              <p className="spotlight-subcopy">
                Check out the latest accessories.
              </p>
              <button className="spotlight-btn">
                <span>Shop</span> <BiChevronRight />
              </button>
            </div>
          </div>
        </div>

        <div className="cart-accordion">
          <div className="cart-accordion_item">
            <Accordion allowMultiple>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Questions About Buying
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Accordion allowToggle>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box as="span" flex="1" textAlign="left">
                                Can I place a business order or add a business
                                GST number to my invoice?
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            No, only consumer orders can be placed at this time.
                            You will receive a consumer invoice via email after
                            delivery of your order. It is not possible to add a
                            business GST number to your invoice and Customer
                            Service cannot edit invoices to include it.
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box as="span" flex="1" textAlign="left">
                                When will I get my items?
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            By entering a PIN code, you’ll get estimated
                            delivery dates for your items. You’ll get a final
                            delivery date after you’ve placed your order. All
                            estimates are based on item availability and the
                            delivery option you choose.
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box as="span" flex="1" textAlign="left">
                                What are my payment options?
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            We accept most credit and debit cards, as well as
                            credit card and debit EMI. We also accept Net
                            Banking, UPI and Payment on Delivery. Some payment
                            options may not be available for all products. You
                            can call 000800 040 1966 for more information.
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box as="span" flex="1" textAlign="left">
                                What are my financing options?
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            You can pay in instalments* using any credit card or
                            debit account with EMI. During Checkout, you can
                            compare and select instalment options. *Subject to
                            card eligibility. See terms.
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box as="span" flex="1" textAlign="left">
                                Does Apple offer an education discount?
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Yes. Apple offers special pricing for students,
                            teachers, administrators and staff members. If you
                            think you qualify, visit the Apple Education Store
                            to place your order.
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box as="span" flex="1" textAlign="left">
                                Can I shop for Family & Friends in other
                                countries or regions?
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Visit the online store of the country or region
                            where the products will be delivered to place your
                            order. You can call 000800 040 1966 for more
                            information.
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
