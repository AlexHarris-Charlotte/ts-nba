import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import './TeamSelect.css'

import { Team } from './Components/Team'; 

// Need to import actions
const teamActions = require('../../actions/teamSelect');

interface IProps {
    teamsList: string[];
    onLoad: Function;
}

class TeamSelect extends Component<IProps> {
    constructor(props: any) {
        super(props);
        teams: []
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
                    abbv={team.abbreviation}
                    key={team.teamId}
                    num={index}
                />
            )
        })

        return (
            <div className='container'>
                {teamList}
            </div>
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