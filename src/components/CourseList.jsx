import React from "react";
import { Link } from "react-router-dom";
import "./styles/CourseList.css";

export const CourseList = (props) => {
  return (
    <div class="courses">
      <div class="courses_background"></div>
      <div class="container">

        <div class="row courses_row">
          {props.courses.map((course) => {
            return (
              <div class="col-lg-4 course_col">
                <div class="course">
                  <div class="course_image">
                    <img src="http://placehold.it/690x347" alt="" />
                  </div>
                  <div class="course_body">
                    <div class="course_title">
                      <Link to={`/courses/${course.id}`}>
                        {course.name}
                      </Link>
                    </div>
                    <div class="course_info">
                      <ul>
                        <li>
                          <a href="instructors.html">Sarah Parker</a>
                        </li>
                        <li>
                          <a href="#">English</a>
                        </li>
                      </ul>
                    </div>
                    <div class="course_text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce enim nulla.
                      </p>
                    </div>
                  </div>
                  <div class="course_footer d-flex flex-row align-items-center justify-content-start">
                    <div class="course_students">
                      <i class="fa fa-user" aria-hidden="true"></i>
                      <span>10</span>
                    </div>
                    <div class="course_rating ml-auto">
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <span>4,5</span>
                    </div>
                    <div class="course_mark course_free trans_200">
                      <a href="#">Free</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
