import React, { useState } from 'react';

function ChildrentComponent(props: any, ref: any) {
  const [state, setState] = useState<number>(0);
  const handleClick = () => {
    setState(state + 1);
  };
  return (
    <div>
      {state}
      <button ref={ref} onClick={handleClick}>
        click
      </button>
    </div>
  );
}

export default React.forwardRef(ChildrentComponent);
