import { MOVE_OBJECTS } from '../actions';
import moveObjects from './moveObjects';

const initialState = {
    message: `SpaceFight!`,
    grx: 0,
    gry: 0,
  };
  
function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    default:
      return state;
  }
}
  
export default reducer;
  