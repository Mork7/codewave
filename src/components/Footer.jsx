import InstaIcon from "../assets/icons/insta-icon.png";
import FacebookIcon from "../assets/icons/facebook-icon.png";
import VisaIcon from "../assets/icons/visa-icon.png";
import PaypalIcon from "../assets/icons/paypal-icon.png";
import TwitterIcon from "../assets/icons/twitter-icon.png";
import MasterIcon from "../assets/icons/master-icon.png";
import AmericanExpressIcon from "../assets/icons/american-express-icon.png";

export default function Footer() {

  return (
    <div
      id="footer-container"
      className="flex flex-col items-center mx-auto bottom-0 px-4 text-lg max-w-screen-lg justify-between md:px-16 md:mt-8 md:flex-row md:items-start"
    >
      <section
        id="social-section"
        className="mb-3 w-1/3 flex flex-col items-center"
      >
        <h2 className="text-2xl mb-2">Social</h2>
        <div className="flex">
          <a href="https://www.instagram.com/infinertywebsolutions/">
            <img src={InstaIcon} alt="Instagram Link" className="w-7 mr-3" />
          </a>
          <a href="">
            <img src={FacebookIcon} alt="Facebook Link" className="w-7 mr-3" />
          </a>
          <a href="">
            <img src={TwitterIcon} alt="Facebook Link" className="w-7" />
          </a>
        </div>
      </section>
      <section className="flex justify-between w-3/4 mb-3 md:w-1/2">
        <div className="text-center">
          <button>Facebook</button>
          <br />
          <button>Testimonials</button>
          <br />
          <button>Instagram</button>
          <br />
          <button>Past Projects</button>
        </div>
        <div className="text-center">
          <button>Terms and Conditions</button>
          <br />
          <button>Legal</button>
          <br />
          <button>Privacy Policy</button>
          <br />
          <button>Locations</button>
        </div>
      </section>
      <section
        id="payment-section"
        className="flex flex-col items-center lg:w-1/3"
      >
        <h2 className="text-2xl mb-2">Payment Options</h2>
        <div className="flex flex-col items-center">
          <h3 className="text-sm">WE ACCEPT</h3>
          <div className="flex">
            <img src={PaypalIcon} alt="PayPal" />
            <img src={VisaIcon} alt="Visa" />
            <img src={MasterIcon} alt="MasterCard" />
            <img src={AmericanExpressIcon} alt="American Express" />
          </div>
        </div>
      </section>
    </div>
  );
}
