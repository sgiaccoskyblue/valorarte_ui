import React, { FC } from 'react';

import getFirebase from '../../firebaseConfig';
import useInput from '../../hooks/useInput';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(getFirebase());
const signIn = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      console.log(userCredential);

      // ...
    })
    .catch(error => {
      console.log(error);
    });
};

const LogIn: FC = () => {
  const email = useInput('');
  const password = useInput('');
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    signIn(email.value, password.value);
  };

  return (
    <div style={{ marginTop: '80px', color: 'black', justifyContent: 'center', textAlign: 'center' }}>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input onChange={email.onChange} type='text' style={{ border: '2px solid black', borderRadius: '4px' }} />
        </label>
        <label>
          Contraseña
          <input
            onChange={password.onChange}
            type='password'
            style={{ border: '2px solid black', borderRadius: '4px' }}
          />
        </label>

        <div>
          <button type='submit'>Ingresar</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
