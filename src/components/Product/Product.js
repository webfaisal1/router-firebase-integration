import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase-init';

const auth = getAuth(app)

const Product = () => {

  const [user] = useAuthState(auth)

  return (
    <div>
        <h3>Knock Knock ! Who is there</h3>
        <p>{user ? user.displayName : 'vooooooooooooooot'}</p>
    </div>
  );
};

export default Product;