import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageLoading from '../components/PageLoading';
import { Lesson } from '../components/Lesson';
import { Instructions } from '../components/Instructions';
import api from "../api";
import "./styles/CourseDetails.css";

export const CourseDetails = props => {
  const [spinner, setSpinner] = useState(true);
  const [showLesson, setShowLesson] = useState(false);
  const [course, setCourse] = useState({});
  const [lesson, setLesson] = useState({});

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

    debugger
    setLesson(data);
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
                  <li className="list-group-item active"><a onClick={() => setShowLesson(false)}>Instructions</a></li>
                  {course.lessons.map(item => 
                  <li className="list-group-item">
                    <a className="nav-link" onClick={() => {setShowLesson(true);fetchDataLesson(item.id)}}>{item.name}</a>
                  </li>
                  )}
                </ul>
              </>
            )}
        </div>

        <div className="col-md-9">
          <div className={!showLesson ? 'd-block': 'd-none' }>
            <Instructions />  
          </div>
          <div className={showLesson ? 'd-block': 'd-none' }>
            <Lesson
              videoUrl={lesson.videoUrl || ''}
              dialogues={lesson.dialogues || []}
              vocabulary={lesson.vocabulary || []}
            />

          </div>
        </div>
      </div>
      </>
    )
}
