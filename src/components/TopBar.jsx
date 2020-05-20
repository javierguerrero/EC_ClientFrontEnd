import React from "react";
import "./styles/TopBar.css";

export const TopBar = props => {
  return (
    <div className="top_bar">
        <div className="top_bar_container">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                            <div className="top_bar_phone"><span className="top_bar_title">phone:</span>+44 300 303 0266</div>
                            <div className="top_bar_right ml-auto">

                                {/* Language */}
                                <div className="top_bar_lang">
                                    <span className="top_bar_title">site language:</span>
                                    <ul className="lang_list">
                                        <li className="hassubs">
                                            <a href="#">English<i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                            <ul>
                                                <li><a href="#">Ukrainian</a></li>
                                                <li><a href="#">Japanese</a></li>
                                                <li><a href="#">Lithuanian</a></li>
                                                <li><a href="#">Swedish</a></li>
                                                <li><a href="#">Italian</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                                {/* Social */}
                                <div className="top_bar_social">
                                    <span className="top_bar_title social_title">follow us</span>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>				
    </div>
  );
}