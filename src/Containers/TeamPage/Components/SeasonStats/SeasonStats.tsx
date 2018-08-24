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
        <div className="seasonStatsContainer">
            <h4>Team Stats</h4>
            <div className='seasonStatsGrid'>
                <div className="seasonPoints">
                    Points Per Game
                    {props.ptsPg}
                </div>
                <div className="seasonRebounds">
                    Rebounds Per Game
                    {props.rebPg}
                </div>
                <div className="seasonAssists">
                    Assists Per Game
                    {props.astPg}
                </div>
                <div className="seasonOppPts">
                    Points Allowed
                    {props.oppPtsPg}
                </div>
            </div>
        </div>
    );
};

export default SeasonStats;