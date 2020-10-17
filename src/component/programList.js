import React, { useState, useEffect } from 'react';
import noDataFound from './noDataFound';
import classes from './program.module.css'

const ProgramList = (props) => {
    const [apiData, setApiData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const dataPerPage = 9
    const launch_year = `launch_year=${props.launch_year}`
    const launch_success = `launch_success=${props.launch_success}`
    useEffect(() => {
        console.log(`https://api.spacexdata.com/v3/launches?limit=100&${launch_year}&${launch_success}`)
        fetch(`https://api.spacexdata.com/v3/launches?limit=100&${launch_year}&${launch_success}`, { mode: 'cors' }).then(response => response.json()).then(data => {
            if (data.length) {
                setApiData(data)
            } else {
                return (
                    <noDataFound></noDataFound>
                )
            }
        })
    }, [launch_year, launch_success])

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    }
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentTodos = apiData.slice(indexOfFirstData, indexOfLastData);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(apiData.length / dataPerPage); i++) {
        pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <button
                key={number}
                id={number}
                onClick={handleClick}
            >
                {number}
            </button>
        );
    });

    return (
        <div className={classes.list}>
            {apiData && apiData.map((data, index) => (
                <div className={classes.dataList}>
                    <p>
                        <h3 style={{ marginBottom: '0px' }}>{data.mission_name}{"#"}{index}</h3> <br></br>
                        <h4>Mission Ids:</h4>
                        {data.mission_id.length ? data.mission_id.map((val, index) => (
                            <li key={index}>{val}<br /></li>
                        )) : <li>{'undefined'}<br /></li>}
                        <h4>Year: {data.launch_year}</h4>
                        <h4>Launch: {data.launch_success === true ? 'true' : 'false'}</h4>
                        <h4>Landing: {data.launch_landing || 'null'}</h4>
                    </p >
                </div>
            ))}

            {/* <div>
                <ul className={classes.paginationButton} >  
                    {renderPageNumbers}
                </ul>
            </div> */}
        </div >
    )
}

export default ProgramList