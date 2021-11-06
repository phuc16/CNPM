import NavBar from './Bar/NavBar';
import SelBar from './Bar/SelBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TableTab from './Content/TableTab';
import ReservationTab from './Content/ReservationTab'

function AppS() {
  return (
    <Router>
      <div className="App">
        <NavBar Title = "Receptionist View"/>
        <SelBar option1="Reservation" option2="Table"/>
        <div>
        <Switch>
          <Route exact path="/">
            <TableTab/>
          </Route>
          <Route path = "/Reservation">
            <ReservationTab/>
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default AppS;
