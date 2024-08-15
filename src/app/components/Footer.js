import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerContent">
          <div className="footerTop">
            <div className="topLeftSide">
              <h3>BE THE FIRST TO KNOW</h3>
              <p>Sign up for updates from mettā muse.</p>
              <div className="inputButton">
                <input type="text" placeholder="Enter your e-mail..." />
                <button>SUBSCRIBE</button>
              </div>
            </div>
            <hr className="lineFooter" />
            <div className="topRightSide">
              <div className="rightSideContent">
                <div className="contactUs">
                  <h3>CONTACT US</h3>
                  <p>+44 221 133 5360</p>
                  <p>customercare@mettamuse.com</p>
                </div>
                <hr className="lineFooter" />
                <div className="currency">
                  <h3>CURRENCY</h3>
                  <div className="usdImageDiv">
                    <Image
                      src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                      alt=""
                      height={30}
                      width={30}
                    />
                    <h4>+ USD</h4>
                  </div>
                  <p>
                    Transactions will be completed in Euros and a currency
                    reference is available on hover.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="horizontalLineFooter" />
          <div className="footerBottom">
            <div className="bottomLeft">
              <h3>mettā muse</h3>
              <div className="bottomLeftContents">
                <p>About Us</p>
                <p>Stories</p>
                <p>Artisans</p>
                <p>Contact Us</p>
                <p>EU Compliances Docs</p>
              </div>
            </div>
            <hr className="lineFooter" />
            <div className="bottomCenter">
              <h3>QUICK LINKS</h3>
              <div className="bottomCenterContents">
                <p>Orders & Shipping</p>
                <p>Join/Login as a Seller</p>
                <p>Payment & Pricing</p>
                <p>Return & Refunds</p>
                <p>FAQs</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>
            </div>
            <hr className="lineFooter" />
            <div className="bottomRight">
              <h3>FOLLOW US</h3>
              <div className="socialMedia">
                <div className="social">
                  <FaInstagram />
                </div>
                <div className="social">
                  <FaLinkedin />
                </div>
              </div>
              <div className="paymentDiv">
                <h3>mettā muse Accepts</h3>
                <div className="paymentMethods">
                  <img src="/Assets/google-pay.png" alt="img" />
                  <img src="/Assets/mastercard.png" alt="img" />
                  <img src="/Assets/paypal.png" alt="img" />
                  <img src="/Assets/amex.png" alt="img" />
                  <img src="/Assets/apple-pay.png" alt="img" />
                  <img src="/Assets/d-pay.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>Copyright © 2023 mettamuse. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
