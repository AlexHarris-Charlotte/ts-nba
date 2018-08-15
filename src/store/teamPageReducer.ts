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
            const teamData: any = action.payload 
            console.log('teamData reducer: ', teamData);
            return {
                ...state,
                teamData: {...teamData}
            }
        default:
            return state;
    }
}
