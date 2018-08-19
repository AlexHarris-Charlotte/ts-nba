import * as React from 'react';
import './PlayerTable.css';
import PlayerTab from './Components/PlayerTab';

interface IProps {
  playerData: {
    playersSeasonTotals: any[],
    teamOverall: any[]
  }
}

const PlayerTable = (props: IProps) => {
  const data: any = props.playerData.playersSeasonTotals;
  const players = props.playerData.playersSeasonTotals.map( (player, i) => {
    return <PlayerTab playerStats={data[i]} key={data.playerId} />
  }) 
  return (
    <div className='playerTableContainer'>
      <h3>Roster</h3>
      <ul>
        {players}
      </ul>
    </div>
  );
};

export default PlayerTable;