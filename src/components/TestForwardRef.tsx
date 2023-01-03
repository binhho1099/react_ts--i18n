import React from 'react';
import ChildrentComponent from './ChildrentComponent';

function TestForwardRef() {
  const refComponent = React.useRef<any>();
  return (
    <div>
      <ChildrentComponent ref={refComponent} />
      <button onClick={() => refComponent.current.click()}>Click 11</button>
    </div>
  );
}

export default TestForwardRef;
