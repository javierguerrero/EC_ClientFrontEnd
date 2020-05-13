import React from 'react';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';

import ReactPlayer from "react-player"
import './styles/CourseDetails.css';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
  
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
  
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));


export default function CourseDetails() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const [course, setCourse] = React.useState({});
    React.useEffect(async () => {
        try {
            const data = await api.courses.read(1);
            setCourse(data);
        } catch (error) {

        }
    }, []);

    return (
        <div>
            <h1 className="mt-4">{course.title} (id:{course.id})</h1>
            <div className="row">
                <div className="col-md-3">
                    <ul className="list-group">
                        <li className="list-group-item active">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>                
                </div>

                <div className="col-md-9">
                    <div className={classes.root}>
                        <AppBar position="static">
                            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                                <Tab label="Video" {...a11yProps(0)} />
                                <Tab label="Trasncription" {...a11yProps(1)} />
                                <Tab label="Vocabulary" {...a11yProps(2)} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0}>
                            <ReactPlayer
                                className='react-player'
                                url="https://www.youtube.com/watch?v=ug50zmP9I7s" 
                                width='100%'
                                config={{
                                    youtube: {
                                      playerVars: { showinfo: 0, controls: 2}
                                    }}
                                  }                                
                            />                        
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Item Three
                        </TabPanel>
                    </div>                    
                </div>                
            </div>
      </div>
    );
}