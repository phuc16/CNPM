import React from 'react';
import './App.css';
import Header from './component/Header'
import Filter from './component/Filter'
import DataTable from './component/DataTable'
import Pagnition from './component/Pagnition'
function App() {
  return (
    <div className="App">
      <Header tab='Order History'/>
      <Filter />
      <DataTable />
    </div>
  );
}

export default App;
