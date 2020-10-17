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
    console.log(props.activeButton)
    return (
        <div className={classes.filter}>
            <div style={{ textAlign: 'left', fontSize: '21px', margin: '12px 0 0 15px' }}><b>Filters</b></div>
            <p>Launch Years</p>
            <hr></hr>
            {launchYear && launchYear.map((data, index) => (
                <button key={index}
                    className={props.activeButton == data ? classes.activeButton : classes.noActiveButton}
                    value={data}
                    onClick={props.handleYear}>{data}</button>
            ))}
            <br />
            <br />
            Successful Launch
            <hr></hr>
            <button
                onClick={props.handleLaunch}
                value='true'
                className={props.activeButton == 'true' ? classes.activeButton : classes.noActiveButton}
            >True</button>
            <button
                onClick={props.handleLaunch}
                className={props.activeButton == 'false' ? classes.activeButton : classes.noActiveButton}
                value='false'>False</button>
            <br />
            <br />
            {/* Successful Landing
            <hr></hr>
            <button onClick={props.handleLanding}
                className={props.activeButton == 'true' ? classes.activeButton : classes.noActiveButton}
                value='true'>True</button>
            <button onClick={props.handleLanding}
                className={props.activeButton == 'false' ? classes.activeButton : classes.noActiveButton}
                value='false'>False</button> */}
        </div>
    )
}

export default Filter