import React from "react";
import "./styles/Footer.css";

export const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer_body">
        <div className="container">
          <div className="row">
            
            {/* Newsletter */}
            <div className="col-lg-3 footer_col">
              <div className="newsletter_container d-flex flex-column align-items-start justify-content-end">
                <div className="footer_logo mb-auto">
                  <a href="#">Speak!</a>
                </div>
                <div className="footer_title">Subscribe</div>
                <form action="#" id="newsletter_form" className="newsletter_form">
                  <input
                    type="email"
                    className="newsletter_input"
                    placeholder="Email"
                    required="required"
                  />
                  <button className="newsletter_button">
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>

            {/* About */}
            <div className="col-lg-2 offset-lg-3 footer_col">
              <div>
                <div className="footer_title">About Us</div>
                <ul className="footer_list">
                  <li>
                    <a href="#">Courses</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Brand Guidelines</a>
                  </li>
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Advertise with us</a>
                  </li>
                  <li>
                    <a href="#">Press</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Help & Support */}
            <div className="col-lg-2 footer_col">
              <div className="footer_title">Help & Support</div>
              <ul className="footer_list">
                <li>
                  <a href="#">Discussions</a>
                </li>
                <li>
                  <a href="#">Troubleshooting</a>
                </li>
                <li>
                  <a href="#">Duolingo FAQs</a>
                </li>
                <li>
                  <a href="#">Schools FAQs</a>
                </li>
                <li>
                  <a href="#">Duolingo English Test FAQs</a>
                </li>
                <li>
                  <a href="#">Status</a>
                </li>
              </ul>
            </div>

            {/* Privacy */}
            <div className="col-lg-2 footer_col clearfix">
              <div>
                <div className="footer_title">Privacy & Terms</div>
                <ul className="footer_list">
                  <li>
                    <a href="#">Community Guidelines</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Brand Guidelines</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
