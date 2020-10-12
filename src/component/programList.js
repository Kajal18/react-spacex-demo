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
        <div className={classes.list}>
            <div >
                {currentTodos && currentTodos.map((data, index) => (
                    <li>
                        <p>
                            <img src={data.mission_patch}></img><br />
                            <h4 style={{ fontSize: '16px', whiteSpace: 'nowrap', color: '#494d83' }}> {data.mission_name} {"#"}{index}</h4>
                            <h4 style={{ fontWeight: '700', color: '#000', fontSize: '13px' }}>Launch year:{data.launch_year} </h4>
                            <h4 style={{ fontWeight: '700', color: '#000', fontSize: '13px' }}>Successful launch: {data.launch_success === true ? 'Yes' : 'No'} </h4>
                            <h4 style={{ fontWeight: '700', color: '#000', fontSize: '13px' }}>Successful landing: {data.launch_landing === true ? 'Yes' : 'No'} </h4>
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