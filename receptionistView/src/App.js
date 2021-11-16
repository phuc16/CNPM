import NavBar from './Bar/NavBar';
import TableTab from './Content/TableTab';
import React, {useEffect, useState} from "react";
import axios from 'axios';

export default function App() {
  const [tableData, setTD] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [changes, setChanges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios("http://localhost:3001/api/get");
      setTD(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  function toggle(data){
    if(data === 1) return 0;
    if(data === 0) return 1;
    return 2;
  }

  async function updateTable(No){
    await axios.put("http://localhost:3001/api/update",{
      TableNo: No,
      TableStatus: toggle(tableData[No - 1].TableStatus),
    });
  }

  return (
      <div className="App">
        <NavBar Title = "RECEPTIONIST VIEW"/>
        {isLoading ? <div>Loading...</div> : <TableTab data={tableData} updateFunc={updateTable}/> }
      </div>
  );
}

