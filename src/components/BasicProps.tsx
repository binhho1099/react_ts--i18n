import React from 'react';
import { Info } from './User.types';

type BasicProps = {
  listUser: Info[];
};

function BasicProp({ listUser }: BasicProps) {
  return (
    <div>
      {listUser.map((user) => (
        <div key={user.first}>
          {user.first} - {user.last}
        </div>
      ))}
    </div>
  );
}

export default BasicProp;
