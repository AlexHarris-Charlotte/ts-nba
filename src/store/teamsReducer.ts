const GET_TEAMS = 'GET_TEAMS';

interface IInitalState {
    teams: string[]
}

const initalState: IInitalState = {
    teams: []
}

export default function(state = initalState, action: any) {
    switch(action.type) {
        case(GET_TEAMS):
            const teamsFetch: string[] = action.payload 
            return {
                ...state,
                teams: state.teams.concat(teamsFetch)
            }
        default:
            return state;
    }
}
