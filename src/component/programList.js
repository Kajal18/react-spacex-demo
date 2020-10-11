import React, { useState, useEffect } from 'react';
import classes from './program.module.css'

const ProgramList = (props) => {
    const [apiData, setApiData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const dataPerPage = 9
    const launch_year = `launch_year=${props.launch_year}`
    const launch_success = `launch_success =${props.launch_success}`
    useEffect(() => {
        console.log(`https://api.spacexdata.com/v3/launches?limit=100&${launch_year}&${launch_success}`)
        fetch(`https://api.spacexdata.com/v3/launches?limit=100&${launch_year}&${launch_success}`, { mode: 'cors' }).then(response => response.json()).then(data => {
            setApiData(data)
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
        <div>
            <div className={classes.list}>
                {currentTodos && currentTodos.map((data, index) => (
                    <li>

                        <p>
                            <img src="https://cnet3.cbsistatic.com/img/8L92RPCyfMkZ4sFej0FUgZJ4xSc=/940x0/2019/11/11/3eea2a76-cda0-4db8-ab42-86ff6b5e1ece/starlink.jpg"></img><br />
                            <b><i>Mission id:</i></b> {data.mission_name} <br />
                            <b><i>Launch year:</i></b> {data.launch_year}<br />
                            Successful launch: {data.launch_success === true ? 1 : 0}<br />
                        </p >
                    </li >
                ))}

            </div >
            <div>
                <ul className={classes.paginationButton} >
                    {renderPageNumbers}
                </ul>
            </div>
        </div>
    )
}

export default ProgramList