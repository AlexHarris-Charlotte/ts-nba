import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './Team.css';

import TeamPage from '../../TeamPage/TeamPage';

interface IProps {
    teamName: string;
    abbv: string;
    num: number;
    match: string
}

export const Team = (props: IProps) => {
    return (
        <Link to='/team' className='team' style={{ textDecoration: 'none', color: 'black' }}>
            {props.teamName}
        </Link>
    );
};

