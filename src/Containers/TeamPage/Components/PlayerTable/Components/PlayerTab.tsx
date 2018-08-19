import * as React from 'react'
import './PlayerTab.css';


interface IProps {
    playerStats: any
}

export default class PlayerTab extends React.Component<IProps> {


  render() {
    return (
    <div className='playerTab'
        onClick={() => alert('Clicked')}
    >
        {this.props.playerStats.playerName}
    </div>
    )
    }
}
