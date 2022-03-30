import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import styled from "styled-components";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri"
// import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

// const ToastsPop = () => {
//   ToastsStore.success("Copied!");

//   return (
//     <div>
//       {/* <button type="button"
//               id="popup"
//               onClick={ToastsPop}>
//           Toast
//       </button> */}
//       <ToastsContainer position={ToastsContainerPosition.TOP_CENTER}
//               store={ToastsStore} 
//                       lightBackground/>
//     </div>
//   );
// };
const St = {
  BlockHashInfoContainer: styled.div`
    display: block;
    font-family: 'Poor Story';
  `,
  BlockHashDiv: styled.div`
    color: #000;
    margin-top: 10px;
    font-size: x-large;
    font-weight: 900;
    /* font-family: 'Courier New', Courier, monospace; */
  `
};

const BlockHash = () => {
  const [ blockHashData, setBlockHashData ] = useState([]);
  
  const params = useParams();
  console.log(params);

  const CopyHash = () => {
    const url = window.location.href; // url 복사
  
    console.log(blockHashData);
  
    navigator.clipboard.writeText(blockHashData.hash).then(() => {
      alert("복사성공!");
    });
  };

  useEffect(()=>{
    Axios.get(`http://localhost:3001/explorer/kuoscoin/${params.height}`)
    .then((response) => {setBlockHashData(response.data[0]); console.log(response.data)})
    .catch(err=>console.log(err))
  }, []);

  return(
    <>
    
    <St.BlockHashInfoContainer>
      <>Hash</>
      {/* {blockHashData.map(element => */}
        <St.BlockHashDiv>{blockHashData.hash}</St.BlockHashDiv>
      {/* )} */}
    </St.BlockHashInfoContainer>
    <RiCheckboxMultipleBlankLine onClick={CopyHash} size="20"/>
    </>
  )
};

export default BlockHash;