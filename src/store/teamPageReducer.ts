import * as teamsFetch from '../actions/teamPage';
const GET_TEAM = 'GET_TEAM';
const DIVISION_DATA = 'DIVISION_DATA';
const DIVISION_TEAMS= 'DIVISION_TEAMS';

interface IInitalState {
    teamData: any
}

const initalState: IInitalState = {
    teamData: null
}

export default function(state = initalState, action: any) {
    switch(action.type) {
        case(GET_TEAM):
            const teamData: any = action.payload ;
            return {
                ...state,
                teamData: {...teamData}
            }
            
        case(DIVISION_DATA):
            const divisionData = action.payload;
            console.log('data ', divisionData);
            return {
                ...state,
                divisionData: {...divisionData}
            }

        case(DIVISION_TEAMS):
            const divisionTeams = action.payload;
            console.log('pickles ', divisionTeams);
            return {
                ...state, 
                divisionTeams: {...divisionTeams}
            }

        default:
            return state;
    }
}
