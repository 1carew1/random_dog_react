import clone from 'clone';

export default function reducer(state = {
    dogs: []
}, action) {
    const newState = clone(state);
    switch (action.type) {
        case "SET_DOGS" : {
            newState.dogs = action.payload;
            break;
        }
        default : {
            newState.dogs = []
            break;
        }
    }
    return newState;
}