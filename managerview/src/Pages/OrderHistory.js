import Header from '../components/Header';
import Filter from '../components/Filter';
import DataTable from '../components/DataTable';
import Pagnition from '../components/Pagnition';


export default function OrderHistory() {
    return (
      <div className="App">
        <Header tab='Order History'/>
        <Filter />
        <DataTable name='order'/>
        <Pagnition />
      
      </div>
    );
  }
  