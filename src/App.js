
import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Amplify } from 'aws-amplify';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>V3 includes auth</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);

