const GET_TEAMS = 'GET_TEAMS';
const GET_DIVISIONS= 'GET_DIVISIONS';

interface IInitalState {
    teams: string[];
    divisions: {};
}

const initalState: IInitalState = {
    teams: [],
    divisions: {}
}

export const getTeams = (state: any = initalState, action: any) => {
    switch(action.type) {
        case(GET_TEAMS):
            const teamsFetch: string[] = action.payload; 
            return {
                ...state,
                teams: [...teamsFetch]
            };

        case(GET_DIVISIONS):
            console.log('hello');
            const divisions: {} = action.payload;
            return {
                ...state,
                divisions: {...divisions}
            }

        default:
            return state;
    }
}
