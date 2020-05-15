import React from "react";
import CourseList from '../components/CourseList'
import api from '../api';

export default class Courses extends React.Component {
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
      return "Loading...";
    }

    if(this.state.error){
      return 'Error...';
    }

    return (
      <React.Fragment>
        <h1 class="mt-4">Courses</h1>
        <CourseList lessons={this.state.data} />
      </React.Fragment>
    );
  }
}
