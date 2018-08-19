import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';
import TeamHeader from './Components/TeamHeader/TeamHeader';
import PlayerTable from './Components/PlayerTable/PlayerTable';
import './TeamPage.css';

// Need to import actions
const teamPageActions = require('../../actions/teamPage');

interface IProps {
    match: any;
    onLoad: Function;
    teamData: {
      teamData: {
        availableSeasons: any[],
        teamInfoCommon: any[],
        teamSeasonRanks: any[],
      }
      playerData: {
        playersSeasonTotals: any[],
        teamOverall: any[]
      }
    }
}

export class TeamPage extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
  }

  state = {
    teamInfo    : null,
    seasonRank  : null,
  }

  componentDidMount() {
    let param: string = this.props.match.params.teamName
                        .replace(/([A-Z])/g, ' $1').trim()
    const currentDate: Date = new Date();
    let currentSeason: number | string = (currentDate.getFullYear() - 1).toString();
    currentSeason = String(currentSeason + '-' + (Number(currentSeason.slice(2)) + 1));

    this.props.onLoad(param, currentSeason);
  }

  render() {
    if (!this.props.teamData) {
      return <div>Make Loader here</div>
    }
    console.log(this.props.teamData);
    return (
      <div className='teamPageContainer'>
          <TeamHeader 
            teamInfo={this.props.teamData.teamData.teamInfoCommon[0]} 
            teamSeasons={this.props.teamData.teamData.availableSeasons}  
          />
        <PlayerTable playerData={this.props.teamData.playerData}/>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return { teamData: state.teamPageReducer.teamData }
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onLoad: (team, year) => teamPageActions.getTeamData(team, year)
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(TeamPage)
