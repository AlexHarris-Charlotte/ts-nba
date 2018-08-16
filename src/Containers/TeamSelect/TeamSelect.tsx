import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './TeamSelect.css'

import { Team } from './Components/TeamName/Team'; 

// Need to import actions
const teamActions = require('../../actions/teamSelect');

interface IProps {
    teamsList: string[];
    onLoad: Function;
}

class TeamSelect extends Component<IProps> {
    constructor(props: any) {
        super(props);
    }

    teams: any = []

    componentWillMount() {
        this.teams = this.props.onLoad();

    }

    public render() {

        const teamList = this.teams.payload.map( (team: any, index: number) => {
            return (
                <Team 
                    teamName={team.teamName}
                    match={team.teamName}
                    abbv={team.abbreviation}
                    key={team.teamId}
                    num={index}
                />
            )
        })

        return (
            // <Router>
                <div className='container'>
                    {teamList}

                    {/* <Route path="/:teamName" component={Team} /> */}
                </div>
            ///* </Router> */
        );
    }
}


const mapStateToProps = (state: any) => {
    return { teamsList: state.teamsReducer.teams }
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onLoad: () => teamActions.getTeams()
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(TeamSelect);