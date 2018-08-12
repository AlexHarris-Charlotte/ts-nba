import {INCREMENT_BUTTON} from '../actions';

interface IInitalState {
    value: number
}

const initalState: IInitalState = {
    value: 0
}

export default function(state = initalState, action: any) {
    switch(action.type) {
        case(INCREMENT_BUTTON):
            console.log('pickles');
            const newValue = state.value += action.payLoad;
            console.log(newValue);
            return {
                ...state,
                value: newValue
            }
        default:
            return state;
    }
}
