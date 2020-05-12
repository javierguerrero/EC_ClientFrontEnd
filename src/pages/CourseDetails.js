import React from 'react';
import api from '../api';

class CourseDetails extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });
        try {
            //const data =             
        } catch (error) {
            
        }
    }

    render(){
        return(
            <div>{this.props.match.params.courseId}</div>
        )
    }
}

export default CourseDetails;