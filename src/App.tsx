import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hello from '@cps/Hello';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Hello />
    </div>
  );
};

export default App;
