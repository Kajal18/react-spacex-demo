import React, { Component, useState } from 'react';
import Filter from '../component/filter';
import ProgramList from '../component/programList';
import classes from './home.module.css'
import { useHistory } from "react-router";

const Home = () => {
    const history = useHistory();
    const [selectedYear, setSelectedYear] = useState('')
    const [successLanding, setSuccessLanding] = useState('')
    const [successLaunch, setSuccessLaunch] = useState('')
    const [activeButton, setActiveButton] = useState(null)
    const [activeLaunch, setActiveLaunch] = useState(null)

    const handleYear = (e) => {
        if (e.target.value) {
            setActiveButton(e.target.value)
            setSelectedYear(e.target.value)
            history.push({
                pathname: `/filter/?launch_year=${activeButton}`,
            })
        }
    }
    const handleLaunch = (e) => {
        if (e.target.value) {
            setActiveButton(e.target.value)
            setSuccessLaunch(e.target.value)
        }
    }
    const handleLanding = (e) => {
        if (e.target.value) {
            setActiveButton(e.target.value)
            setSuccessLanding(e.target.value)
        }
    }
    history.push({
        pathname: `/filter/?launch_year=${selectedYear}&launch_success=${successLaunch}`,
    })
    return (
        <div className={classes.home}>
            <div className={classes.div1}>
                {/* <p>SpacEx Launch</p> */}
                <Filter handleYear={handleYear} activeButton={activeButton} handleLanding={handleLanding} handleLaunch={handleLaunch} />
            </div>
            <div className={classes.div2}>
                <ProgramList launch_year={selectedYear} launch_success={successLaunch} />
            </div>
        </div >
    )
}

export default Home