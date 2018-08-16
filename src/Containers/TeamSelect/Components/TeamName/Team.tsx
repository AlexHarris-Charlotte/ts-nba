import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './Team.css';

import TeamPage from '../../../TeamPage/TeamPage';

interface IProps {
    teamName: string;
    abbv: string;
    num: number;
    match: string
}

export const Team = (props: IProps) => {

    const formattedTeamName = props.teamName.split(' ').join('');

    return (
        <Link to={'/team/'+formattedTeamName} className='team' style={{ textDecoration: 'none', color: 'black' }}>
            {props.teamName}
        </Link>
    );
};

