import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';
import TeamHeader from './Components/TeamHeader/TeamHeader';
import PlayerTable from './Components/PlayerTable/PlayerTable';
import SeasonStats from './Components/SeasonStats/SeasonStats';

import './TeamPage.css';
import { runInThisContext } from 'vm';

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

  private stats: React.RefObject<HTMLElement>;

  constructor(props: any) {
    super(props);
    this.stats = React.createRef();
  }

  state = {
    teamInfo    : null,
    seasonRank  : null,
    scrollPos   : false,
  }


  componentDidMount() {
    let param: string = this.props.match.params.teamName
                        .replace(/([A-Z])/g, ' $1').trim()
    const currentDate: Date = new Date();
    let currentSeason: number | string = (currentDate.getFullYear() - 1).toString();
    currentSeason = String(currentSeason + '-' + (Number(currentSeason.slice(2)) + 1));

    this.props.onLoad(param, currentSeason);
    window.addEventListener('scroll', this.scrollHandler);
  }

//   ref = (node: any) => {
//     this.ref = node;
//     window.addEventListener('scroll', this.onScroll);
// }

componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
}

scrollHandler = (event: any) => {
  let scrollPosition = window.scrollY;
  if (scrollPosition >= 260) {
    this.setState({
      ...this.state,
      scrollPos: true
    });
  } else {
    this.setState({
      ...this.state,
      scrollPos: false
    });
  }
}


  render() {
    if (!this.props.teamData) {
      return <div>Make Loader here</div>
    }
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
          scrollState={this.state.scrollPos}
          ptsRank={teamStats.ptsRank}
          ptsPg={teamStats.ptsPg}
          rebRank={teamStats.rebRank}
          rebPg={teamStats.rebPg}
          astRank={teamStats.astRank}
          astPg={teamStats.astPg}
          oppPtsRank={teamStats.oppPtsRank}
          oppPtsPg={teamStats.oppPtsPg}
        />
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
