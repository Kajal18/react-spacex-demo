import React from 'react';
import classes from './filter.module.css'
const launchYear = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020
]

const Filter = (props) => {
    return (
        <div className={classes.filter}>
            Filters
            <p>Launch Years</p>
            <hr></hr>
            {launchYear && launchYear.map((data, index) => (
                <button key={index} value={data} onClick={props.handleYear}>{data}</button>
            ))}
            <br />
            <br />
            Successful Launch
            <hr></hr>
            <button onClick={props.handleLaunch} value='true'>True</button>
            <button onClick={props.handleLaunch} value='false'>False</button>
            <br />
            <br />
            Successful Landing
            <hr></hr>
            <button onClick={props.handleLanding} value='true'>True</button>
            <button onClick={props.handleLanding} value='false'>False</button>
        </div>
    )
}

export default Filter