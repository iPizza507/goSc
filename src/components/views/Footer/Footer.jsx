import './styles.css'

import { TwitterIcon, FacebookIcon, LinkedinIcon, DribbbleIcon, ArrowTopIcon } from '../../svgs'
import { Link } from "react-router-dom"


export const Footer = () => {

    return (
        <footer>
            <section className="data">
                <div className='data-class'>
                    <div className='social'>
                        
              <Link to="/"><img src="../assets/logo.png" alt="coral_logo" /></Link>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                        <div>
                            <a href='#/'><FacebookIcon /></a>
                            <a href='#/'><TwitterIcon /></a>
                            <a href='#/'><LinkedinIcon /></a>
                            <a href='#/'><DribbbleIcon /></a>
                        </div>
                    </div>

                    <div className="catalog">
                        <h4>CATALOG</h4>
                        <ul>
                            <li>T-shirts</li>
                            <li>Jackets</li>
                            <li>Pants</li>
                            <li>Shoes</li>
                            <li>Purses</li>
                        </ul>
                    </div>

                    <div className="about-us">
                        <h4>ABOUT US</h4>
                        <ul>
                            <li>Our Producers</li>
                            <li>Sitemap</li>
                            <li>FAQ</li>
                            <li>About Us</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>

                    <div className="customer-services">
                        <h4>CUSTOMER SERVICES</h4>
                        <ul>
                            <li>Contact Us</li>
                            <li>Track Your Order</li>
                            <li>Product Care & Repair</li>
                            <li>Book an Appointment</li>
                            <li>Shipping & Returns</li>
                        </ul>
                    </div>

                </div>
            </section>

            <section className="disclaimer">
                <div>
                    <label>© 2022 Coral , Inc.</label>
                    <img src="../assets/icons_payment 1.png" alt="icons_payment" />
                    <a className='top' href='#header'>
                        <span>Scroll to top</span>
                        <ArrowTopIcon />
                    </a>
                </div>
            </section>
        </footer>
    )
}
