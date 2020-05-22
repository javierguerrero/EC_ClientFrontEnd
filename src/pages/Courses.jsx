import React from "react";
import CourseList from "../components/CourseList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "../api";

class Courses extends React.Component {
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
      const data = await api.courses.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    const { loading, error, data } = this.state;

    if (loading === true) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={error} />;
    }

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Courses</h1>
            </div>
          </div>
        </div>
        <CourseList courses={data} />
      </React.Fragment>
    );
  }
}

export default Courses;
