import React from 'react';
import { Link } from "react-router-dom";
import './styles/CourseList.css';

class CourseListItem extends React.Component {
  render() {
    return (
      <div className="card">
        <Link to={`/courses/${this.props.course.id}`}>
          <img src="http://placehold.it/500x260" className="card-img-top" alt=""></img>
        </Link>
        <div className="card-body">
          <h5 className="card-title">{this.props.course.name}</h5>
        </div>

      </div>
    );
  }
}

class CourseList extends React.Component {
  render() {
    if (this.props.courses.length === 0) {
      return (
        <div>
          <h3>No courses were found</h3>
        </div>
      );
    }

    return (
      <div className="row">
        {this.props.courses.map(course => {
          return (
            <div key={course.id} className="column">
              <CourseListItem course={course} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default CourseList;