import { ActionType, Schema } from '../../types/ListContext/index';

export const listReducer = (state: Schema[], action: ActionType) => {
  switch (action.type) {
    case 'GET_INITIAL_VALUE': {
      const { initialValue } = action.payload;

      return initialValue;
    }

    case 'EMPTY_LIST': {
      return [];
    }

    case 'ADD_TO_LIST': {
    }

    case 'REMOVE_FROM_LIST': {
    }

    default:
      return state;
  }
};
