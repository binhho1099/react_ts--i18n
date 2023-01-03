import React from 'react';

type TypingProps = {
  name: string;
  age: number;
};

function TypingProp({ name, age }: TypingProps) {
  return (
    <div>
      TypingProps {name} - {age}{' '}
    </div>
  );
}

export default TypingProp;
