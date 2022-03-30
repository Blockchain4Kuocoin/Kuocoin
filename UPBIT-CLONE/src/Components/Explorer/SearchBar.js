import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Input = styled.input`
  width: 90%;
  height: 50px;
  /* display: flex; */
  /* justify-content: space-between; */
`;

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    //console.log(event.target.value);
    setSearchValue(event.currentTarget.value);
  }

  const handleSubmit = () => {
    // event.preventDefault();
    // alert(`The name you entered was: ${searchValue || ''}`)
    Axios.post(`http://localhost:3001/explorer`, searchValue)
    .then(document.location.href=`/explorer/kuoscoin/${searchValue}`)
  }

  return(
    <>
      <FaSearch/>
          <Input 
            type="text" 
            value={searchValue || ''}
            onChange={handleInputChange}
            placeholder="Search for transaction, address, blocks and embedded text data...."
          />
        <button type="button" onClick={handleSubmit} > 222</button>
    </>
  )
};

export default SearchBar;


// const blocks = props.searchblocks;


// const shouldDisplayButton = searchValue.length > 0;

// const handleInputClear = () => {
//   setSearchValue("")
// }

// const filteredBlocks = blocks.filter((block) => {
//   return block.includes(searchValue)
// })
// <Input
// type="text"
// value={searchValue || ''}
// onChange={handleInputChange} 
// />
// <ul>
// {filteredBlocks.map((block) => {
//   return (<li key={block}>{block}</li>)
// })}
// </ul>