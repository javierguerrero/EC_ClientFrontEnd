import React from "react";
import { CourseList } from "../components/CourseList";
import WellcomeHome from "../components/WellcomeHome";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "../api";

export default class Home extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.courses.popular();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <WellcomeHome />
        <CourseList courses={this.state.data} />
      </React.Fragment>
    );
  }
}
