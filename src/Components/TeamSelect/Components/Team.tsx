import * as React from 'react';
import './Team.css';

interface IProps {
    teamName: string;
    abbv: string;
    num: number;
}

export const Team = (props: IProps) => {
    return (
        <div className="team">
            {props.teamName}
        </div>
    );
};

