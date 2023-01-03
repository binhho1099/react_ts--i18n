import React from 'react';

type Horizontal = 'left' | 'center' | 'right';
type Vertical = 'top' | 'center' | 'bottom';

type ExcludeProps = {
  position: Exclude<`${Horizontal}-${Vertical}`, 'center-center'> | 'center';
};

function Exclude({ position }: ExcludeProps) {
  return <div>Exclude - {position}</div>;
}

export default Exclude;
