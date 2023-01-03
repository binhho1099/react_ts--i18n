import React, { ChangeEvent } from 'react';

type EventProp = {
  handleClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    number: number
  ) => void;
  handleChangeText: (event: ChangeEvent<HTMLInputElement>) => void;
  text: string;
};

function EventProps({ handleClick, handleChangeText, text }: EventProp) {
  return (
    <>
      <input type="text" onChange={(e) => handleChangeText(e)} value={text} />
      <button onClick={(e) => handleClick(e, 1)}>Click</button>
    </>
  );
}

export default EventProps;
