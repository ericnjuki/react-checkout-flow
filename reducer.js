import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: [],
  possible: [
    'Test',
  ],
};

const itemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // Pulls current and possible out of previous state
      // We do not want to alter state directly in case
      // another action is altering it at the same time
      const {
        current,
        possible,
      } = state;

      // Pull item out of items.possible
      // Note that action.payload === item
      const addedItem = possible.splice(action.payload, 1);

      // And put item in items.current
      current.push(addedItem);

      // Finally, update the redux state
      const newState = { current, possible };
  
      return newState;

    default:
      return state
  }
};

export default combineReducers({
  item: itemsReducer
});
