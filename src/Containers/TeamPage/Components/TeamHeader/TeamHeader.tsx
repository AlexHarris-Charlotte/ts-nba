import * as React from 'react';
import './TeamHeader.css';
import YearDropDown from '../../../../Components/YearDropDown/YearDropDown';


interface IProps {
    teamInfo: {
        confRank         : number,
        divRank          : number,
        l                : number,
        maxYear          : number,
        minYear          : number,
        pct              : number,
        seasonYear       : string,
        teamAbbreviation : string,
        teamCity         : string,
        teamCode         : string,
        teamConference   : string,
        teamDivision     : string,
        teamId           : number,
        teamName         : string,
        w                : number
    };
    teamSeasons: {}
}

const TeamHeader = (props: IProps) => {

    const { confRank, divRank, l, maxYear, 
            minYear, pct, seasonYear, 
            teamAbbreviation, teamCity, teamCode, 
            teamConference, teamDivision, 
            teamId, teamName, w 
        } = props.teamInfo;

    return (
        <div className='container'>
            <h3 className="teamProps">{`${teamCity} ${teamName}`}</h3>
            <h3 className="teamProps">{teamDivision}</h3>
            <h3 className="teamProps">{`Wins: ${w} - Losses: ${l}`}</h3>
            <YearDropDown className="teamProps" teamName={teamName} />
        </div>
    );
};

export default TeamHeader;