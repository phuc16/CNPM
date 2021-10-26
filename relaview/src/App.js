import NavBar from './NavBar';
import SelBar from './SelBar';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <NavBar Title = "Receptionist View"/>
      <SelBar option1="Reservation" option2="Table"/>
      <Content/>
    </div>
  );
}

export default App;
