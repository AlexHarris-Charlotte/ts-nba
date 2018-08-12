// An Example actions file

/*
 * action types
 */
​
export const ADD_INPUT = 'ADD_INPUT';
export const INCREMENT_BUTTON = 'ADD_5'; 


/*
 * action creators
 */

export function addInput(input: any) {
  return { type: ADD_INPUT, input};
}

export function incrementButton() {
  return {type: INCREMENT_BUTTON, payLoad: 5};
}
​