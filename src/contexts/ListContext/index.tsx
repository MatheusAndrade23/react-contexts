import { createContext, useEffect, useReducer } from 'react';

import {
  ListContextProvidersProps,
  ListContextProps,
  Schema,
} from '../../types/ListContext/index';

import { listReducer } from '../../reducers/ListContext/index';

export const ListContext = createContext({} as ListContextProps);

export const ListProvider = ({
  children,
  saveOnLocalStorage = false,
}: ListContextProvidersProps) => {
  const [list, dispatch] = useReducer(listReducer, []);

  useEffect(() => {
    if (!saveOnLocalStorage) {
      return;
    }

    const storedState = localStorage.getItem('@list-context/list');

    if (storedState) {
      dispatch({
        type: 'GET_INITIAL_VALUE',
        payload: {
          initialValue: JSON.parse(storedState),
        },
      });
    }
  }, []);

  const removeFromList = (id: string | number, callback?: () => void) => {
    dispatch({
      type: 'REMOVE_FROM_LIST',
      payload: {
        id,
      },
    });

    callback && callback();
  };

  const addToList = (object: Schema, callback?: () => void) => {
    dispatch({
      type: 'ADD_TO_LIST',
      payload: {
        object,
      },
    });

    callback && callback();
  };

  const emptyList = (callback?: () => void) => {
    dispatch({
      type: 'EMPTY_LIST',
    });

    callback && callback();
  };

  return (
    <ListContext.Provider
      value={{ removeFromList, addToList, emptyList, list }}
    >
      {children}
    </ListContext.Provider>
  );
};
