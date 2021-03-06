import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const St = {
  Button: styled.button`
    width: 3%;
    height: 50px;
    color: #ff5478;
    border: none;
    background-color: #e9ecef;
    margin-left: 10px;
  `,
  Input: styled.input`
    width: 90%;
    height: 50px;
    font-family: 'Poor Story';
    border: none;
    border-color: none ;
    border-radius: 10px;
  `
};

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    //console.log(event.currentTarget.value);
    setSearchValue(event.currentTarget.value);
  }

  const handleSubmit = () => {
    // Axios.post(`http://localhost:3001/explorer`, searchValue)
    // .then(document.location.href=`/explorer/kuoscoin/${searchValue}`)
    document.location.href=`/explorer/kuoscoin/${searchValue}`
  }

  const onKeyPress = (e) => {
    if(e.key == 'Enter') {handleSubmit();}
  }

  return(
    <>
      <St.Input 
        type="search" 
        value={searchValue || ''}
        placeholder="Search for blocks and embedded text data...."
        onChange={handleInputChange}
        onKeyPress={onKeyPress}
      />
      <St.Button type="submit" onClick={handleSubmit}><FaSearch size={25}/></St.Button>
    </>
  )
};

export default SearchBar;
