import React from "react";
import "./cart.css";
import { BiChevronRight } from "react-icons/bi";
import { IoAddSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
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

const Cart = () => {
  const cart = useSelector((store) => store.appReducer);

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
          {cart.cartItems.length === 0 ? (
            <div className="cart-bag_empty">
              <h1 className="empty-header">Your bag is empty.</h1>
              <div className="empty-message">
                Sign in to see if you have any saved items. Or continue
                shopping.
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
          ) : (
            <div>
              <div className="cart-product_header">
                <h1 className="bag-header">Your bag total is ₹176800.00</h1>
                <div className="bag-checkout">
                  <div className="bagcheckout-main">
                    <div className="bagcheckout-container">
                      <button className="bagcheckout-btn">Check Out</button>
                    </div>
                  </div>
                </div>
              </div>
              <ol className="cart-items">
                <li className="cart-item_Info">
                  <div className="iteminfo-row">
                    <div className="iteminfo-imagecol">
                      <img
                        src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?"
                        alt="product"
                        className="item-img"
                      />
                    </div>
                    <div className="iteminfo-contentcol">
                      <div className="iteminfo-details">
                        <div className="iteminfo-title">
                          <h2 className="title-content">
                            AirPods Pro (2nd generation)
                          </h2>
                        </div>
                        <div className="iteminfo-quantity">
                          <div className="quantity-contain">
                            <select name="Quantity" id="quantity">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>
                        </div>
                        <div className="iteminfo-pricedetails">
                          <div className="price-info">
                            <p>₹26900.00</p>
                          </div>
                        </div>
                        <div className="iteminfo-remove">
                          <button className="remove-btn">Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
              <div className="cart-summary">
                <div className="summary-container">
                  <div className="summary-subtotal">
                    <div className="summary-main">
                      <div className="summary-label">Subtotal</div>
                      <div className="summary-value">₹176800.00</div>
                    </div>
                  </div>
                  <div className="summary-shipping">
                    <div className="summary-main">
                      <div className="summary-label">Shipping</div>
                      <div className="summary-value">FREE</div>
                    </div>
                  </div>
                  <div className="summary-total">
                    <div className="total-label">TOTAL</div>
                    <div className="total-value">₹176800.00</div>
                  </div>
                </div>
              </div>
              <div className="cart-checkout">
                <div className="cart-checkoutmain">
                  <div className="cart-checkoutbtn">
                    <button className="cart-checkoutbutton">Check Out</button>
                  </div>
                </div>
              </div>
            </div>
          )}
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
              <AccordionItem border="none">
                {({ isExpanded }) => (
                  <>
                    <h2 className="cart-accordion_header">
                      <AccordionButton
                        p={[30, 0, 34]}
                        display="flex"
                        align="center"
                        _hover="transparent">
                        <Box
                          as="span"
                          fontSize={32}
                          fontWeight="600"
                          flex="1"
                          textAlign="left">
                          Questions About Buying
                        </Box>
                        {isExpanded ? (
                          <RxCross2 className="accordion-icon" />
                        ) : (
                          <IoAddSharp className="accordion-icon" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Accordion allowToggle>
                        <AccordionItem
                          w={980}
                          marginLeft="auto"
                          marginRight="auto"
                          p={[23, 0]}>
                          <h3 className="cart-accordion_header">
                            <AccordionButton>
                              <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                p={[4, 0]}
                                fontWeight="600">
                                Can I place a business order or add a business
                                GST number to my invoice?
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h3>
                          <AccordionPanel pb={4} textAlign="left" fontSize={14}>
                            No, only consumer orders can be placed at this time.
                            You will receive a consumer invoice via email after
                            delivery of your order. It is not possible to add a
                            business GST number to your invoice and Customer
                            Service cannot edit invoices to include it.
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem
                          w={980}
                          marginLeft="auto"
                          marginRight="auto"
                          p={[23, 0]}>
                          <h3 className="cart-accordion_header">
                            <AccordionButton>
                              <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                p={[4, 0]}
                                fontWeight="600">
                                When will I get my items?
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h3>
                          <AccordionPanel pb={4} textAlign="left" fontSize={14}>
                            By entering a PIN code, you’ll get estimated
                            delivery dates for your items. You’ll get a final
                            delivery date after you’ve placed your order. All
                            estimates are based on item availability and the
                            delivery option you choose.
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem
                          w={980}
                          marginLeft="auto"
                          marginRight="auto"
                          p={[23, 0]}>
                          <h3 className="cart-accordion_header">
                            <AccordionButton>
                              <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                p={[4, 0]}
                                fontWeight="600">
                                What are my payment options?
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h3>
                          <AccordionPanel pb={4} textAlign="left" fontSize={14}>
                            We accept most credit and debit cards, as well as
                            credit card and debit EMI. We also accept Net
                            Banking, UPI and Payment on Delivery. Some payment
                            options may not be available for all products. You
                            can call 000800 040 1966 for more information.
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem
                          w={980}
                          marginLeft="auto"
                          marginRight="auto"
                          p={[23, 0]}>
                          <h3 className="cart-accordion_header">
                            <AccordionButton>
                              <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                p={[4, 0]}
                                fontWeight="600">
                                What are my financing options?
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h3>
                          <AccordionPanel pb={4} textAlign="left" fontSize={14}>
                            You can pay in instalments* using any credit card or
                            debit account with EMI. During Checkout, you can
                            compare and select instalment options. *Subject to
                            card eligibility. See terms.
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem
                          w={980}
                          marginLeft="auto"
                          marginRight="auto"
                          p={[23, 0]}>
                          <h3 className="cart-accordion_header">
                            <AccordionButton>
                              <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                p={[4, 0]}
                                fontWeight="600">
                                Does Apple offer an education discount?
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h3>
                          <AccordionPanel pb={4} textAlign="left" fontSize={14}>
                            Yes. Apple offers special pricing for students,
                            teachers, administrators and staff members. If you
                            think you qualify, visit the Apple Education Store
                            to place your order.
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem
                          w={980}
                          marginLeft="auto"
                          marginRight="auto"
                          p={[23, 0]}>
                          <h3 className="cart-accordion_header">
                            <AccordionButton>
                              <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                p={[4, 0]}
                                fontWeight="600">
                                Can I shop for Family & Friends in other
                                countries or regions?
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h3>
                          <AccordionPanel pb={4} textAlign="left" fontSize={14}>
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

        <div className="cart-footNotes">
          <div className="cart-footNotes_content">
            <ul className="cart-footNotes_ul">
              <li className="cart-footNotes_li">
                <p></p>
                <p>
                  <sup>^</sup> During checkout when you provide your card or
                  account information, we’ll display all your EMI <sup>◊◊</sup>{" "}
                  options, including No Cost EMI§ as available. If instant
                  Cashback <sup>§§</sup> is being offered, we’ll determine your
                  eligibility and add it to your total savings.
                </p>
                <p>
                  No Cost EMI will be deducted from the order total, along with
                  any instant credit or cashback, reducing the amount to be paid
                  or financed. Minimum order value must be met. Offers vary by
                  bank. Subject to terms and conditions.
                </p>
                <p>
                  EMI rates are determined by your bank. No Cost EMI and instant
                  Cashback offers are determined by Apple and our banking
                  partners. Note that you cannot combine offers from multiple
                  banks in the same order, and all items in an order will be set
                  to the same number of instalments.
                </p>
                <p>
                  <sup>◊◊</sup> Monthly pricing is after purchase using EMI with
                  qualifying credit or debit cards at 14% pa over a 6 month
                  tenure. Monthly pricing is rounded to the nearest rupee. Exact
                  pricing will be provided by your bank, subject to your bank’s
                  terms and conditions.
                </p>
                <p>
                  Representative example:
                  <br />
                  Based on purchase of ₹79900. Total amount payable ₹83194 paid
                  over 6 months as 6 monthly payments of ₹13866 at an interest
                  rate of 14% pa. Total interest paid to bank: ₹3294.
                </p>
                <p>
                  <sup>§</sup> No Cost EMI is available with the purchase of an
                  eligible product made using qualifying credit or debit cards
                  on 3- or 6-month tenures from most leading banks. Minimum
                  order spend applies as per your credit or debit card’s issuing
                  bank threshold. Offer cannot be combined with Apple Store for
                  Education or Corporate Employee Purchase Plan pricing. Credit
                  or debit card eligibility is subject to terms and conditions
                  between you and your credit or debit card–issuing bank. Offer
                  may be revised or withdrawn at any time without any prior
                  notice. Terms & Conditions apply.
                </p>
                <p>
                  Representative example:
                  <br />
                  Based off a 6 month tenure. ₹79900 total cost includes 16% pa
                  and No Cost EMI savings of ₹3598, paid over 6 months as 6
                  monthly payments of ₹13317.
                </p>
                <p></p>
                <p></p>
                <p>
                  <sup>§§</sup> Instant savings, otherwise referred to as
                  Instant Cashback on the Apple Store Online, is available with
                  the purchase of an eligible product for qualifying HDFC Bank
                  Credit Cards & HDFC Bank Credit Card EMI only. Minimum
                  transaction value of ₹10001 applies. Click here to see instant
                  savings amounts and eligible devices. Instant savings is
                  available for up to two orders per rolling 90-day period with
                  an eligible card. Card eligibility is subject to terms and
                  conditions between you and your card-issuing bank. Total
                  transaction value is calculated after any trade-in credit or
                  eligible discount applied. Any subsequent order adjustment(s)
                  or cancellation(s) may result in instant savings being
                  recalculated, and any refund may be adjusted to account for
                  instant savings clawback; this may result in no refund being
                  made to you. Offer may be revised or withdrawn at any time
                  without any prior notice. Terms & conditions apply. Offer
                  cannot be combined with Apple Store for Education or Corporate
                  Employee Purchase Plan pricing. Multiple separate orders
                  cannot be combined for instant savings.
                </p>
                <p></p>
                <p></p>
                <p>
                  <sup>§§§</sup> Get extra trade-in credit, otherwise referred
                  to as additional exchange savings or exchange bonus, when you
                  trade in an eligible iPhone and purchase a new Apple device
                  until 5 March 2023. Extra trade-in credit of ₹5000 is
                  available while trading in iPhone 12, iPhone 11, iPhone XR or
                  iPhone X and ₹4500 on iPhone 7.
                </p>
                <p>
                  Representative Example:
                  <br />
                  Extra trade-in credit has been added on top of base trade-in
                  credit. Existing trade-in credit when trading in iPhone 11 is
                  ₹20000. During the offer, a consumer might get ₹25000 as total
                  trade-in credit (base trade-in credit of ₹20000 + extra
                  trade-in credit of ₹5000). Additional terms from Apple or
                  Apple’s trade-in partners may apply.
                </p>
                <p></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
