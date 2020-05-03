import React from "react";
import LessonList from '../components/LessonList'
import api from '../api';

export default class Lessons extends React.Component {
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
      const data = await api.lessons.list();
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
        <h1 class="mt-4">Lessons</h1>
        <LessonList lessons={this.state.data} />
      </React.Fragment>
    );
  }
}
