import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import styled from "styled-components";
import copyTextUrl from "../../Container/Explorer/ClipCopy";
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
  `,
  BlockHashDiv: styled.div`
    color: #000;
    margin-top: 10px;
    font-size: x-large;
    font-weight: 900;
    font-family: 'Courier New', Courier, monospace;
  `
};

const BlockHash = () => {
  const [ blockHashData, setBlockHashData ] = useState([]);
  
  const params = useParams();
  console.log(params);

  const CopyHash = () => {
    console.log(blockHashData);
  
    navigator.clipboard.writeText(blockHashData).then(() => {
      alert("복사성공!");
    });
  };

  useEffect(()=>{
    Axios.get(`http://localhost:3001/explorer/blockname/${params.blocknumber}`)
    .then((response) => {setBlockHashData(response.data[0].testcolumn); console.log(response.data[0].testcolumn)})
    .catch(err=>console.log(err))
  }, []);

  return(
    <>
    
    <St.BlockHashInfoContainer>
      <>Hash</>
      {/* {blockHashData.map(element => */}
        <St.BlockHashDiv>{blockHashData}</St.BlockHashDiv>
      {/* )} */}
    </St.BlockHashInfoContainer>
    <RiCheckboxMultipleBlankLine onClick={CopyHash} size="20"/>
    </>
  )
};

export default BlockHash;