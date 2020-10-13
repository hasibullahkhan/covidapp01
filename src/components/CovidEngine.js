import React, { useState, useEffect } from 'react'
import CovidCard from '../CovidCard';
import PulseLoader from 'react-spinners/PulseLoader'
import '../App.css';
const CovidEngine = ({ location }) => {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [covid, setCovid] = useState({
        country: null, countrynm: null, totalcases: null, activecases: null,
        totalunresolved: null, totaldeaths: null, deathstoday: null,
        todaycases: null, seriouscases: null, totalrecovered: null, dangerrank: null
    })

    // defining the the data fetchin function 
    const getCovid = async (q) => {
        setQuery(""); // Reset the query to empty 
        setLoading(true); // set loading to true while  we fetch the result
        try {
            const apiRes = await fetch(`https://api.thevirustracker.com/free-api?countryTotal=${q}`);
            const resJSON = await apiRes.json();
            setCovid({
                country: resJSON.countrydata[0].info.code,
                countrynm: resJSON.countrydata[0].info.title,
                totalcases: resJSON.countrydata[0].total_cases,
                totalrecovered: resJSON.countrydata[0].total_recovered,
                activecases: resJSON.countrydata[0].total_active_cases,
                totalunresolved: resJSON.countrydata[0].total_unresolved,
                totaldeaths: resJSON.countrydata[0].total_deaths,
                deathstoday: resJSON.countrydata[0].total_new_deaths_today,
                todaycases: resJSON.countrydata[0].total_new_cases_today,
                seriouscases: resJSON.countrydata[0].total_serious_cases,
                dangerrank: resJSON.countrydata[0].total_danger_rank
            })


        } catch (error) {
            setError(true) //if there is any error just set error to true 

        }
        setLoading(false);
    };


    // function to handle seach query from the user side 
    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     getCovid(query);
    // };
    // this hook will make the code run only once the componente is mounted and never again (remember)
    useEffect(() => {

        getCovid(location);

    }, [location]);
    if (error) {
        return (
            <div style={{ color: "black" }} >
                There has been error!
                <br />
                <button onClick={() => setError(false)} >Reset!</button>
            </div>
        );

    }
    if (loading) {
        return (
            <div
                style={{
                    display: 'flex',
                    width: '200px',
                    height: '240px',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <PulseLoader size={15} color="purple" />
            </div>
        );
    }
    return (
        <CovidCard

            temp={-5} country={covid.country} countrynm={covid.countrynm} activecases={covid.activecases}
            totalcases={covid.totalcases} totalrecovered={covid.totalrecovered} totalunresolved={covid.totalunresolved}
            totaldeaths={covid.totaldeaths} deathstoday={covid.deathstoday} todaycases={covid.todaycases}
            seriouscases={covid.seriouscases} dangerrank={covid.dangerrank}
            getCovid={getCovid}

        />
    );
};
export default CovidEngine;
