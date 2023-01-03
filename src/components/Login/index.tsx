import React, { useState } from 'react';
import { auth, google, facebook, github } from '../../config/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

function Login() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [user, setUser] = useState<any | null>(null);

  const LoginFalse = () => {
    return (
      <>
        <h1>Please Login ...</h1>
        <button className="btn google" onClick={() => login(google)}>
          Login to Google
        </button>
        <button className="btn facebook" onClick={() => login(facebook)}>
          Login to Facebook
        </button>
        <button className="btn github" onClick={() => login(github)}>
          Login to Github
        </button>
      </>
    );
  };

  const LoginTrue = () => {
    return (
      <>
        <h1>Welcome!</h1>
        <img src={user.photoURL} alt={user.providerId} />
        <p>
          Welcome USERNAME <strong>{user.displayName}</strong>
        </p>
        <p>
          Email: <strong>{user.email}</strong>
        </p>
        <button className="btn github" onClick={() => logout()}>
          Logout
        </button>
      </>
    );
  };

  const login = async (provider: any) => {
    const result = await signInWithPopup(auth, provider);
    if (result) {
      console.log(result);
      setUser(result.user);
      setIsLogin(true);
    }
  };

  const logout = async () => {
    const result = await signOut(auth);
    setUser(null);
    setIsLogin(false);
    console.log(result);
  };

  return <>{isLogin && user ? <LoginTrue /> : <LoginFalse />}</>;
}

export default Login;
