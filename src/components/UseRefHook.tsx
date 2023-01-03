import React, { useEffect, useRef, useState } from 'react';

function UseRefHook() {
  // const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   inputRef.current?.focus();
  // }, []);

  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //Timer
  const [timer, setTimer] = useState(0);
  const intervalTimer = useRef<number>(null!);

  const stopTimer = () => {
    window.clearInterval(intervalTimer.current);
  };

  useEffect(() => {
    intervalTimer.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <>
      <div>UseRefHook</div>
      <input type="text" ref={inputRef} />
      <hr />
      HookTimer - {timer} - <button onClick={() => stopTimer()}>Stop</button>
    </>
  );
}

export default UseRefHook;
