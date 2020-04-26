import React from 'react';
import './styles/LessonList.css';

class LessonListItem extends React.Component {
  render() {
    return (
      <div className="LessonListItem">
        <div>{this.props.lesson.name}</div>
      </div>
    );
  }
}

class LessonList extends React.Component {
  render() {
    if (this.props.lessons.length === 0) {
      return (
        <div>
          <h3>No lessons were found</h3>
        </div>
      );
    }

    return (
      <div className="LessonList">
        <ul className="list-unstyled">
          {this.props.lessons.map(lesson => {
            return (
              <li key={lesson.id}>
                <LessonListItem lesson={lesson} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default LessonList;