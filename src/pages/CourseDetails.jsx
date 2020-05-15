import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageLoading from '../components/PageLoading';
import { Lesson } from '../components/Lesson';
import { Instructions } from '../components/Instructions';
import api from "../api";
import "./styles/CourseDetails.css";

export const CourseDetails = props => {
  const [spinner, setSpinner] = useState(true);
  const [course, setCourse] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await api.courses.read(props.match.params.courseId);
    setCourse(data);
    setSpinner(false);
  };

  return spinner ? (
      <PageLoading />
    ) : (
      <>
      <h1 className="mt-4">{course.name}</h1>
      <div className="row">
        <div className="col-md-3">
            {course.lessons?.length > 0 && (
              <>
                <ul className="list-group">
                  <li className="list-group-item active">Instructions</li>
                  {course.lessons.map(item => 
                  <li className="list-group-item" key={item.id}>
                    <Link className="nav-link" to="/">
                      {item.name}
                    </Link>
                  </li>
                  )}
                </ul>
              </>
            )}
        </div>

        <div className="col-md-9">
          <Instructions />
          <Lesson />                    
        </div>
      </div>
      </>
    )
}
