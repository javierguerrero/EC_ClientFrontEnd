import React, { useState, useEffect } from "react";
import PageLoading from "../components/PageLoading";
import { LessonContent } from "../components/LessonContent";
import { Instructions } from "../components/Instructions";
import api from "../api";
import "./styles/CourseDetails.css";

const CourseDetails = (props) => {
  const [spinner, setSpinner] = useState(true);
  const [showLesson, setShowLesson] = useState(false);
  const [course, setCourse] = useState({});
  const [lesson, setLesson] = useState({});
  const [activeLink, setActiveLink] = useState(0);

  useEffect(() => {
    fetchDataCourse();
  }, []);

  const fetchDataCourse = async () => {
    const data = await api.courses.read(props.match.params.courseId);
    setCourse(data);
    setSpinner(false);
  };

  const fetchDataLesson = async (lessonId) => {
    const data = await api.lessons.read(lessonId);
    setLesson(data);
  };

  const handleClick = (id) => {
    setActiveLink(id);
  };

  return spinner ? (
    <PageLoading />
  ) : (
    <>
      <div className="container">
        <h1>{course.name}</h1>
        <div className="row">
          <div className="col-md-3">
            {course.lessons?.length > 0 && (
              <>
                <ul className="list-group">
                  <li
                    className={
                      0 === activeLink
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                  >
                    <a
                      className="nav-link"
                      onClick={() => {
                        setShowLesson(false);
                        handleClick(0);
                      }}
                    >
                      Instructions
                    </a>
                  </li>
                  {course.lessons.map((item) => (
                    <li
                      className={
                        item.id === activeLink
                          ? "list-group-item active"
                          : "list-group-item"
                      }
                    >
                      <a
                        className="nav-link"
                        onClick={() => {
                          setShowLesson(true);
                          fetchDataLesson(item.id);
                          handleClick(item.id);
                        }}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className="col-md-9">
            <div className={!showLesson ? "d-block" : "d-none"}>
              <Instructions />
            </div>
            <div className={showLesson ? "d-block" : "d-none"}>
              <LessonContent
                videoUrl={lesson.videoUrl || ""}
                dialogues={lesson.dialogues || []}
                vocabulary={lesson.vocabulary || []}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;