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
    getTeams: Function;
    getDivisions: Function;
}

class TeamSelect extends Component<IProps> {
    constructor(props: any) {
        super(props);
    }

    componentWillMount() {
        this.props.getTeams();
        this.props.getDivisions();
    }

    public render() {
        console.log(this.props);
        const teamList = this.props.teamsList.map( (team: any, index: number) => {
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
    return { 
        teamsList: state.getTeams.teams,
        teamDivision: state.getTeams.divisions
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    getTeams: () => teamActions.getTeams(),
    getDivisions: () => teamActions.getDivisions()
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(TeamSelect);