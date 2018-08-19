import * as React from 'react';
import './PlayerStats.css';

interface IProps {
    ast: number;
    pts: number;
    fga: number;
    fgm: number;
    fg3M: number;
    ftPct: number;
    blk: number;
    reb: number;
    plusMinus: number;
    dropDown: boolean;
}

const PlayerStats = (props: IProps) => {
    const {
        ast,
        pts, 
        fga, 
        fgm, 
        ftPct, 
        fg3M, 
        blk,
        reb, 
        plusMinus,
        dropDown
    } = props;
        return (
            <div className={dropDown ? 'openStatsContainer' : 'statsContainer'}>
                { dropDown ? 
                <div className='test'>
                    <div className="statsCol">
                        <p>Points Per Game {pts}</p>
                    </div>
                    <div className="statsCol">
                        <p>Field Goals Per Game {fgm}</p>
                    </div>
                    <div className="statsCol">
                        <p>Field Goals Attempted Per Game {fga}</p>
                    </div>
                    <div className="statsCol">
                        <p>3 Pointers made per game {fg3M}</p>
                    </div>
                    <div className="statsCol">
                        <p>Assists Per Game {ast}</p>
                    </div>
                    <div className="statsCol">
                        <p>Free Throw % {ftPct}</p>
                    </div>
                    <div className="statsCol">
                        <p>Rebounds Per Game {reb}</p>
                    </div>
                    <div className="statsCol">
                        <p>Plus Minus {plusMinus}</p>
                    </div>
                    <div className="statsCol">
                        <p>Blocks per game {blk}</p>
                    </div>
                </div> : null
                }
            </div>
        );
};

export default PlayerStats;