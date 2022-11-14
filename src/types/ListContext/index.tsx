import { ReactNode } from 'react';

export interface ActionType {
  type: 'ADD_TO_LIST' | 'REMOVE_FROM_LIST' | 'EMPTY_LIST' | 'GET_INITIAL_VALUE';
  payload?: any;
}

export interface Schema {
  id: string | number;
  [key: string]: any;
}

export interface ListContextProvidersProps {
  children: ReactNode;
  saveOnLocalStorage?: boolean;
}

export interface ListContextProps {
  removeFromList: (id: string | number, callBack?: () => void) => void;
  addToList: (object: Schema, callBack?: () => void) => void;
  emptyList: (callBack?: () => void) => void;
  list: Schema[];
}
