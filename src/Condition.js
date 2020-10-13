import React from 'react';
import styled from '@emotion/styled';
import Reel from 'react-reel'
export const Condition = ({ totalcases, totalrecovered, totalunresolved, totaldeaths, deathstoday, todaycases, seriouscases, activecases, dangerrank }) => {


    return (

        <div >
            <Reel theme={reelStyle} text={`Total Cases:${totalcases}`} />
            <Reel theme={reelStyle} text={`Recovered:${totalrecovered}`} />
            <Reel theme={reelStyle} text={`Unresolved:${totalunresolved}`} />
            <Reel theme={reelStyle} text={`Deaths:${totaldeaths}`} />
            <Reel theme={reelStyle} text={`Today Deaths:${deathstoday}`} />
            <Reel theme={reelStyle} text={`Today Cases:${todaycases}`} />
            <Reel theme={reelStyle} text={`Active Cases:${activecases}`} />
            <Reel theme={reelStyle} text={`Serious Cases:${seriouscases}`} />
            <Reel theme={reelStyle} text={`Danger Rank:${dangerrank}`} />
            <Reel theme={reelStyle} text={`-------------------------------`} />
            <Reel theme={reelStyle} text={`Design by: Hasibullah khan`} />
            <Reel theme={reelStyle} text={`Contact: Hasibpak@gmail.com`} />
        </div>
    )
}
export default Condition;
const reelStyle = {
    reel: {
        height: "1.10em",
        display: "flex",
        alignItems: "flex-end",
        overflowY: "hidden",
        lineHeight: ".95em",
        justifyContent: "left",

    },

    group: {
        transitiondelay: "0",
        transitionTimingfunction: "ease-in-out",
        transform: "translate(0, 0)",
        height: "0.5em",

    },
    number: {

        height: "1.0em",
        fontFamily: 'Fira Sans',
        // color: "#E2AB5B"             /*  "#E2AB5B" */,
        // color: "#E2AB5B"             /*  "#E2AB5B" */,

    },
};
