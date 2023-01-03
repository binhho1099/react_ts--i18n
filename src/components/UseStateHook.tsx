import React, { useState } from 'react';
import { AuthUser } from './User.types';

function UseStateHook() {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleSetUser = (): void => {
    const user: AuthUser = {
      name: 'binh',
      email: 'binhho1099@gmail.com',
    };
    setUser(user);
  };

  return (
    <div>
      UseStateHook name: {user.name} - {user.email}{' '}
      <button onClick={handleSetUser}>Click</button>
    </div>
  );
}

export default UseStateHook;
