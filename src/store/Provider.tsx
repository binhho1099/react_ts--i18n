import Context, { ITodo, ITodos } from './Context';
import React from 'react';

interface Props {
  children: React.ReactElement;
}

const initialState: ITodos = { todos: [] };

export type ACTIONTYPE =
  | { type: 'add'; payload: ITodo }
  | { type: 'delete'; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'delete':
      state.todos = state.todos.filter((todo) => todo.id === action.payload);
      return state;
    default:
      return state;
  }
}

function Provider({ children }: Props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export default Provider;
