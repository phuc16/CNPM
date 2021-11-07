import React, { useState } from 'react';
import './App.css';
import { TabName } from './components/Header';
import DataTable from './components/DataTable';
import Pagination from './components/Paginition';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Data } from './data/data';
import { FilterContainer, FilterElementContainer, FilterBtn } from './components/FilterElement';


var CurData = Data;
var CurDate = null;
var CurType = null;

function App() {

  const items_per_page = 6;

  const [currentPage, setCurrentPage] = useState(1);
  const [CurArray, setCurArray] = useState(Data.slice(0,6));
  const [selectedDate, setSelectedDate] = useState(null);
  const [isSelectBoth, setIsSelectBoth] = useState(false);
  const [isSelectDate, setIsSelectDate] = useState(false);
  const [isSelectType, setIsSelectType] = useState(false);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)

    const first_item_of_page = (pageNumber-1) * items_per_page;
    const last_item_of_page = first_item_of_page + items_per_page;
    setCurArray(CurData.slice(first_item_of_page, last_item_of_page));
  };


  function handleType(e) {
    const type = e.target.value;
    CurType = type;
    setIsSelectType(true);
    if (!isSelectBoth){
      setIsSelectDate(false);
    }
  }

  function parseDate(date) {
    let parse_date = date.getDate().toString() + '/';
    parse_date += (date.getMonth() + 1).toString() + '/';
    parse_date += date.getFullYear().toString();

    return parse_date;
  }

  function handleDate(date) {
    setSelectedDate(date);
    const parse_date = parseDate(date);
    setIsSelectDate(true);
    if (!isSelectBoth){
      setIsSelectType(false);
    }
    CurDate = parse_date;
  }

  function handleSelectBoth() {
    isSelectBoth ? setIsSelectBoth(false) : setIsSelectBoth(true);
    CurData = Data;
  }

  function handleFilter(){

    if (isSelectBoth) {
      CurData = Data.filter((record) => record.payment === CurType);
      CurData = CurData.filter((record) => record.date === CurDate);
    }
    else {
      if (isSelectDate) {

        CurData = Data.filter((record) => record.date === CurDate);
      }
      else if (isSelectType) {
            if (CurType === 'all') {
            setCurArray(Data.slice(0,6));
            CurData = Data;
            return;
            }
        CurData = Data.filter((record) => record.payment === CurType);
      }
    }
    setCurrentPage(1);
    paginate(currentPage);
  }

  return (
    <>
      <TabName> Restaurant Statistic</TabName>
      <FilterContainer>
        <FilterElementContainer>
          <div> Lọc theo phương thức thanh toán </div>
          <select onChange={handleType}>
            <option value='all'>All</option>
            <option value='online'>Online</option>
            <option value='physical'>Physical</option>
          </select>
        </FilterElementContainer>

        <FilterElementContainer>
          <div> Lọc theo ngày </div>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => handleDate(date)}
            dateFormat='dd/MM/yyyy'
          />
        </FilterElementContainer>
        
        <FilterElementContainer>
            <input type='checkbox' id='both' name='both' value='both' onChange={handleSelectBoth}/>
            <label for='both'> Lọc theo cả hai</label>
        </FilterElementContainer>

        <FilterBtn onClick={handleFilter}> Lọc </FilterBtn>
      </FilterContainer>
     
      <DataTable data={CurArray} />
      <Pagination postsPerPage={6} totalPosts={Data.length} paginate={paginate}/>

    </>
  );
}

export default App;
