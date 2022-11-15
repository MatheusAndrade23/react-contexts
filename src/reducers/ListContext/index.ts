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
      const { object } = action.payload;

      const newList = [...state, object];

      return newList;
    }

    case 'REMOVE_FROM_LIST': {
      const { id } = action.payload;

      const newList = state.filter((object: Schema) => object.id !== id);

      return newList;
    }

    default:
      return state;
  }
};
