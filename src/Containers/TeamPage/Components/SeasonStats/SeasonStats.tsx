import * as React from 'react';
import './SeasonStats.css';

interface IProps {
    ptsRank    : number;
    ptsPg      : number; 
    rebRank    : number; 
    rebPg      : number; 
    astRank    : number; 
    astPg      : number; 
    oppPtsRank : number; 
    oppPtsPg   : number; 
}

const SeasonStats = (props: IProps) => {
    return (
        <div className='teamStatsContainer'>
            <h4>Team Stats</h4>
            <div>
                Points Per Game
                {props.ptsPg}
            </div>
            <div>
                Rebounds Per Game
                {props.rebPg}
            </div>
            <div>
                Assists Per Game
                {props.astPg}
            </div>
            <div>
                Points Allowed
                {props.oppPtsPg}
            </div>
        </div>
    );
};

export default SeasonStats;