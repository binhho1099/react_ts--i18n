import React, { ChangeEvent, useState, Suspense } from 'react';
import './App.css';
import TypingProp from './components/TypingProps';
import BasicProp from './components/BasicProps';
import AdvancedProp from './components/AdvancedProps';
import ReactComponent from './components/ReactComponent';
import EventProps from './components/EventProps';
import StyleProps from './components/StyleProps';
import UseStateHook from './components/UseStateHook';
import UseRefHook from './components/UseRefHook';
import Exclude from './components/Exclude';
import Login from './components/Login';
import I18next from './components/I18next';

import './config/i18n';
import useStore from './hooks/useStore';
import TestForwardRef from './components/TestForwardRef';

const LazyComponent = React.lazy(() => import('./components/LazyComponent'));

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  let [text1, setText1] = useState('');
  console.log('render');

  const { state, dispatch } = useStore();

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    number: number
  ) => {
    console.log('event', event);
    setCount(8);
    setCount(6);
    setCount(7);
    setCount(5);
    setCount((preState) => preState + number);
  };
  const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <h1>
        {count}- {text}
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
      <div>
        <h1>Context API</h1>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {text1 ? <p>text1</p> : <p>nono</p>}
        <button
          onClick={() => {
            dispatch({ type: 'add', payload: { id: 'binh', title: text } });
            text1 = 'binh';
          }}
        >
          Submit
        </button>
        {state.todos.map((todo) => (
          <p>{todo.title}</p>
        ))}
      </div>
      <TypingProp name="binh" age={23} />
      <BasicProp
        listUser={[
          { id: 1, first: 'hồ', last: 'bình' },
          { id: 2, first: 'bình', last: 'hồ' },
        ]}
      />

      <TestForwardRef />
      <AdvancedProp status="success">
        <ReactComponent />
      </AdvancedProp>
      <EventProps
        handleClick={handleClick}
        handleChangeText={handleChangeText}
        text={text}
      />
      <StyleProps styles={{ color: 'red' }} />
      <UseStateHook />
      <UseRefHook />
      <Exclude position="center" />
      <hr />
      <Login />
      <hr />
      <I18next />
      {/* <AppRouter /> */}
    </div>
  );
}

export default App;
