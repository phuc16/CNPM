import NavBar from './Bar/NavBar';
import TableTab from './Content/TableTab';
import React, {useEffect, useState} from "react";
import axios from 'axios';

export default function App() {
  const [tableData, setTD] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios('http://localhost:3003/api/get');
      setTD(result.data);
      setIsLoading(false);
    };
 
    fetchData();
  }, []);

  return (
      <div className="App">
        <NavBar Title = "Receptionist View"/>
        {isLoading ? <div>Loading...</div> : <TableTab data={tableData}/> }
      </div>
  );
}

