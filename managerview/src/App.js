import React from 'react';
import './App.css';
import Header from './component/Header'
import Filter from './component/Filter'
import DataTable from './component/DataTable'

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <DataTable />
    </div>
  );
}

export default App;
