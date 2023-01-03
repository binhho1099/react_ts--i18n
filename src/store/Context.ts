import { createContext } from 'react';
import { ACTIONTYPE } from './Provider';

export interface ITodo {
  id: string;
  title: string;
}

export interface ITodos {
  todos: ITodo[];
}

export type TodoContextType = {
  state: ITodos;
  dispatch: React.Dispatch<ACTIONTYPE>;
};

const Context = createContext<TodoContextType | null>(null);

export default Context;
