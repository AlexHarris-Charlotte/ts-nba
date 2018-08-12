import {ADD_INPUT, addInput} from '../actions';

interface IInitalState {
    message: string
}

const initalState: IInitalState = {
    message: ''
}

export default function(state = initalState, action: any) {
    switch(action.type) {
        case(ADD_INPUT):
            const testString = action.input;
            return {
                ...state,
                message: testString
            }
        default:
            return state;
    }
}
