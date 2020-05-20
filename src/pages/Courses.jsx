import React from "react";
import CourseList from '../components/CourseList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
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
      return <PageLoading />
    }

    if(this.state.error){
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <h1 class="mt-4">Courses</h1>
        <CourseList courses={this.state.data} />
      </React.Fragment>
    );
  }
}
