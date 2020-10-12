import React, { Component, useState } from 'react';
import Filter from '../component/filter';
import ProgramList from '../component/programList';
import classes from './home.module.css'

const Home = () => {
    const [selectedYear, setSelectedYear] = useState('')
    const [successLanding, setSuccessLanding] = useState(null)
    const [successLaunch, setSuccessLaunch] = useState(null)

    const handleYear = (e) => {
        if (e.target.value) {
            setSelectedYear(e.target.value)
        }
    }
    const handleLaunch = (e) => {
        if (e.target.value) {
            setSuccessLaunch(e.target.value)
        }
    }
    const handleLanding = (e) => {
        if (e.target.value) {
            setSuccessLanding(e.target.value)
        }
    }
    return (
        <div className={classes.home}>
            <div className={classes.div1}>
                <Filter handleYear={handleYear} handleLanding={handleLanding} handleLaunch={handleLaunch} />
            </div>
            <div className={classes.div2}>
                <ProgramList launch_year={selectedYear} launch_success={successLaunch} />
            </div>
        </div >
    )
}

export default Home