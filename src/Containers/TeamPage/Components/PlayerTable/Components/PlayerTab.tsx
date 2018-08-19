import * as React from 'react'
import './PlayerTab.css';
import PlayerStats from '../../../../../Components/PlayerStats/PlayerStats';


interface IProps {
    playerStats: any
}

export default class PlayerTab extends React.Component<IProps> {

    state: any = {
        dropDownOpen: false
    }


    playerDropDownHandler() {
        this.setState({
            dropDownOpen: !this.state.dropDownOpen
        })
    }


  render() {
    const { ast, pts, fga, fgm, fg3M, ftPct, blk, reb, plusMinus } = this.props.playerStats;
    return (
        <div className='playerTab'
            onClick={() => this.playerDropDownHandler()}
        >
            {this.props.playerStats.playerName}
            <PlayerStats 
                ast={ast}
                pts={pts}
                fga={fga}
                fgm={fgm}
                fg3M={fg3M}
                ftPct={ftPct}
                blk={blk}
                reb={reb}
                plusMinus={plusMinus}
                dropDown={this.state.dropDownOpen}
            />
        

        </div>

        // conditionally render a dropdown div under the player based on state
        
    )
    }
}
