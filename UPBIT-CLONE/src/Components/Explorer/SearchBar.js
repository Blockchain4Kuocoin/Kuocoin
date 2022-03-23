import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa"

const Input = styled.input`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const onChange = (event) => {
    setSearchText(event.target.value);
  }

  return(
    <>
      <FaSearch/>
      <Input
        type="text"
        name="searchText"
        value={searchText}
        placeholder="Search for transaction, address, blocks and embedded text data...."
        onChange={onChange} 
      />
    </>
  )
};

export default SearchBar;