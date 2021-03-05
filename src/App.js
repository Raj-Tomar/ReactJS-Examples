import React, {useState} from 'react';
import Hello from './Hello';
import Button from './Button';
import Display from './Display';
import ReconciliationUsingHTML from './ReconciliationUsingHTML';
import ReconciliationUsingReact from './ReconciliationUsingReact';

import './App.css';

function App() {

  const [counter, setCounter] = useState(0);

  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);

  return (
    <div className="App">
      <Hello/>
      <Button onClickFunction = {incrementCounter} increment = {1}/>
      <Button onClickFunction = {incrementCounter} increment = {5}/>
      <Button onClickFunction = {incrementCounter} increment = {10}/>
      <Button onClickFunction = {incrementCounter} increment = {20}/>
      <Display message={counter}/>

    
      <ReconciliationUsingHTML/>
      <ReconciliationUsingReact/>
    </div>
  );
}

export default App;
