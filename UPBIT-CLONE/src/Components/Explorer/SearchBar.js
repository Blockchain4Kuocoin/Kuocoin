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
  // const blocks = props.searchblocks;
  
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    //console.log(event.target.value);
    setSearchValue(event.currentTarget.value);
  }

  // const shouldDisplayButton = searchValue.length > 0;

  // const handleInputClear = () => {
  //   setSearchValue("")
  // }

  // const filteredBlocks = blocks.filter((block) => {
  //   return block.includes(searchValue)
  // })

  return(
    <>
      <FaSearch/>
      <Input
        type="text"
        value={searchValue || ''}
        placeholder="Search for transaction, address, blocks and embedded text data...."
        onChange={handleInputChange} 
      />
      <ul>
        {/* {filteredBlocks.map((block) => {
          return (<li key={block}>{block}</li>)
        })} */}
      </ul>
    </>
  )
};

export default SearchBar;