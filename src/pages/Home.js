import React from 'react';
import CourseList from '../components/CourseList';
import PageLoading from '../components/PageLoading';
import api from '../api';

export default class Home extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount(){
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.courses.list();
      this.setState({ loading: false, data: data});
    } catch (error) {
      this.setState({ loading: false, error: error});
    }
  }

  render() {
    if (this.state.loading === true) {
      return <PageLoading />
    }

    if(this.state.error){
      return 'Error...';
    }

    return (
      <React.Fragment>
          <h1 className="mt-4">Home</h1>
          <p>
            Here are some courses we’d like to share that will help you improve your Spoken English
          </p>
          <CourseList courses={this.state.data} />
      </React.Fragment>
    );
  }
}
  

/*
Levels
Courses
Modules
Lessons
*/