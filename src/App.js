import React from 'react';
import Answer from './components/Answer';
import Question from './components/Question';

const App = () => {
  return (
    <div id="app">
      <Question a={3} b={9}/>
      <Answer key={1}/>
      <Answer key={2}/>
      <Answer key={3}/>
      <Answer key={4}/>
    </div>
  );
}

export default App;
