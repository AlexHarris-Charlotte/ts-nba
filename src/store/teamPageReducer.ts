import * as teamsFetch from '../actions/teamPage';
const GET_TEAM = 'GET_TEAM';

interface IInitalState {
    teams: string[]
}

const initalState: IInitalState = {
    teams: []
}

export default function(state = initalState, action: any) {
    switch(action.type) {
        case(GET_TEAM):
            console.log('helllooooo');
            const teamsFetch: string[] = action.payload 
            return {
                ...state,
                teams: state.teams.concat(teamsFetch)
            }
        default:
            return state;
    }
}
