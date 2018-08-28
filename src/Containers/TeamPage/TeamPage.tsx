import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';
import TeamHeader from './Components/TeamHeader/TeamHeader';
import PlayerTable from './Components/PlayerTable/PlayerTable';
import SeasonStats from './Components/SeasonStats/SeasonStats';
import BarChart from '../../D3/BarChart/BarChart';

import './TeamPage.css';

// Need to import actions
const teamPageActions = require('../../actions/teamPage');
const getTeamActions = require('../../actions/teamSelect');

interface IProps {
    match: any;
    divisionData: any;
    getTeamData: Function;
    getDivisions: Function;
    getDivisionTeamData: Function;
    divisions: any;
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

  private stats: React.RefObject<HTMLElement>;

  constructor(props: any) {
    super(props);
    this.stats = React.createRef();
  }

  state = {
    teamInfo     : null,
    seasonRank   : null,
    scrollState    : false,
    teamName     : '',
    teamDivision : null,
    currentSeason  : null,
  }


  async componentDidMount() {
    let teamName: string = this.props.match.params.teamName
                        .replace(/([A-Z])/g, ' $1').trim()
    const currentDate: Date = new Date();
    let currentSeason: number | string = (currentDate.getFullYear() - 1).toString();
    currentSeason = String(currentSeason + '-' + (Number(currentSeason.slice(2)) + 1));
    console.log('repeat?');
    this.props.getTeamData(teamName, currentSeason);
    this.props.getDivisions();
    window.addEventListener('scroll', this.scrollHandler);
    this.setState({
      ...this.state,
      teamName,
      currentSeason
    }, () => { 
      this.functionName() 
    });
  }

  functionName() {
    console.log('repeat???')
    const teamName = this.state.teamName;
    const allDivisions = this.props.divisions
    let currentDivision;
    for (let division in allDivisions) {
      if (allDivisions[division].includes(teamName)) {
        currentDivision = allDivisions[division];
      } 
    }
    this.props.getDivisionTeamData(currentDivision, this.state.currentSeason);
    console.log('teamDiv: ', currentDivision);
  }

componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
}

scrollHandler = (event: any) => {
  let scrollState = window.scrollY;
  if (scrollState >= 260) {
    this.setState({
      ...this.state,
      scrollState: true
    });
  } else {
    this.setState({
      ...this.state,
      scrollState: false
    });
  }
}


  render() {
    if (!this.props.teamData && !this.props.divisionData) {
      return <div>Make Loader here</div>
    }
    console.log(this.props.divisionData);
    const teamStats = this.props.teamData.teamData.teamSeasonRanks[0];
    return (
      <div className='teamPageContainer'>
        <TeamHeader 
          teamInfo={this.props.teamData.teamData.teamInfoCommon[0]} 
          teamSeasons={this.props.teamData.teamData.availableSeasons}  
        />
        <PlayerTable playerData={this.props.teamData.playerData}/>
        <SeasonStats 
          ref={this.stats}
          scrollState={this.state.scrollState}
          ptsRank={teamStats.ptsRank}
          ptsPg={teamStats.ptsPg}
          rebRank={teamStats.rebRank}
          rebPg={teamStats.rebPg}
          astRank={teamStats.astRank}
          astPg={teamStats.astPg}
          oppPtsRank={teamStats.oppPtsRank}
          oppPtsPg={teamStats.oppPtsPg}
        />
        <BarChart 
          teamData={this.props.divisionData}
          scrollState={this.state.scrollState}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    teamData: state.teamPageReducer.teamData,
    divisions: state.getTeams.divisions,
    divisionData: state.teamPageReducer.divisionData
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  getTeamData: (team, year) => teamPageActions.getTeamData(team, year),
  getDivisions: () => getTeamActions.getDivisions(),
  getDivisionTeamData: (teamArray, year) => teamPageActions.getDivisionTeamData(teamArray, year), 
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(TeamPage)
