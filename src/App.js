import React from 'react';
import './App.css';
import Home from './container/home';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/'>
          <Home></Home>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
