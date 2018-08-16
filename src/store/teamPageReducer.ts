import * as teamsFetch from '../actions/teamPage';
const GET_TEAM = 'GET_TEAM';

interface IInitalState {
    teamData: any
}

const initalState: IInitalState = {
    teamData: null
}

export default function(state = initalState, action: any) {
    switch(action.type) {
        case(GET_TEAM):
            console.log('things happend??');
            const teamData: any = action.payload 
            return {
                ...state,
                teamData: {...teamData}
            }
        default:
            return state;
    }
}
