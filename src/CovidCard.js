import React from 'react'
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Location from './Location'
import './App.css';
import Icon from './Icon';
import Condition from './Condition';
const CovidCard = ({ temp, country, countrynm, totalcases, activecases, totalunresolved, totaldeaths, deathstoday, todaycases, seriouscases, totalrecovered, dangerrank, getCovid }) => {
    // temp comming from props
    // let temp = 20 // change the coolr hot red and low hot is yellow 
    let highColor = 0;
    let lowColor = 0;
    let bg = null;
    if (temp > 12) {// this is for hot Deger zon
        highColor = (1 - ((temp - 12) / 28)) * 255;
        lowColor = highColor - 200;
        bg = `linear-gradient(
              to top, 
              rgb(255, ${highColor}, 0), 
              rgb(255, ${Math.abs(lowColor)}, 0))`;

    } else if (temp <= 12) {
        // this is for cold deger zon
        highColor = (1 - (temp + 20) / 32) * 255;
        lowColor = highColor - 200;
        bg = `linear-gradient(
              to top, 
              rgb(0, ${highColor},255), 
              rgb(0, ${Math.abs(lowColor)}, 255)
              )`;
    }
    const Cardstyl = styled.div`
        margin:0 auto;
        background:${bg};
        width: 250px;
        height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: space - between;
        align-items: center;
        border-radius: 15px;
        `
    return (
        // <motion.div initial={{ scale: 0, y: 300 }} animate={{ scale: 1, y: 0 }}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <Cardstyl>
                <Location getCovid={getCovid} country={country} countrynm={countrynm} activecases={activecases} />
                <Icon country={country} countrynm={countrynm} getCovid={getCovid} />
                <Condition country={country} activecases={activecases} totalcases={totalcases} totalrecovered={totalrecovered}
                    totalunresolved={totalunresolved} totaldeaths={totaldeaths} deathstoday={deathstoday} todaycases={todaycases}
                    seriouscases={seriouscases} dangerrank={dangerrank}
                />
            </Cardstyl>
        </motion.div>
    )
}
export default CovidCard;