import NavBar from './Bar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TableTab from './Content/TableTab';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar Title = "Receptionist View"/>
        <TableTab/>
      </div>
    </Router>
  );
}

export default App;
