import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';

// Need to import actions
const teamPageActions = require('../../actions/teamPage');

interface IProps {
    match: any;
    onLoad: Function;
}

export class TeamPage extends React.Component<IProps> {

  componentDidMount() {
    let param: string = this.props.match.params.teamName
      .replace(/([A-Z])/g, ' $1').trim()
    const currentDate: Date = new Date();
    let currentSeason: number | string = (currentDate.getFullYear() - 1).toString();
    currentSeason = String(currentSeason + '-' + (Number(currentSeason.slice(2)) + 1));
    console.log(currentSeason);
    // need to invoke an action to hit reducer. Pass year and teamName as payload
    // This will be passed to api endpoint that will return data for team for current year
    this.props.onLoad(param, currentSeason);
  }

  render() {
    return (
      <div>
          <p>{this.props.match.params.teamName}</p>
      </div>
    )
  }
}

// const mapStateToProps = (state: any) => ({
  
// })

// const mapDispatchToProps = {
  
// }

const mapStateToProps = (state: any) => {
  return { teamsList: state.teamsReducer.teams }
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onLoad: (team, year) => teamPageActions.getTeamData(team, year)
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(TeamPage)
