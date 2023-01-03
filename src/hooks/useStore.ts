import { useContext } from 'react';
import Context, { TodoContextType } from '../store/Context';
export default function useStore() {
  const { state, dispatch } = useContext(Context) as TodoContextType;
  return { state, dispatch };
}
