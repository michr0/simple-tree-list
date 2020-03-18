import React from 'react';
import './App.css';
import content from './content';
import RecursiveList from './components/RecursiveList';
import flatTree from './dataSerializer';
import IterativeList from './components/IterativeList';

function App() {
  return (
    <div className="App">
      <h2>Recursive list</h2>
      <RecursiveList listData={content} />
      <IterativeList listData={flatTree} />
    </div>
  );
}

export default App;
