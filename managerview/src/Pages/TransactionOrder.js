import Header from '../components/Header';
import Filter from '../components/Filter';
import DataTable from '../components/DataTable';
import Pagnition from '../components/Pagnition';

export default function TransactionHistory() {
    return (
      <div className="App">
        <Header tab='Transaction History'/>
        <Filter />
        <DataTable name='transaction'/>
        <Pagnition />
      
      </div>
    );
  }
  