import React, { useEffect } from "react";
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

// const CopyHash = () => {
//   const url = window.location.href; // url 복사

//   navigator.clipboard.writeText(url).then(() => {
//     alert("링크를 복사했습니다.");
//   });
// };

const BlockHash = () => {
  useEffect(()=>{
    Axios.get(`http://localhost:3001/api/explorer`)
    // .then((response)=>{(response.data); console.log(response)})
    .catch(err=>console.log(err))
  }, []);

  return(
    <>
    <St.BlockHashInfoContainer>
      <>Hash</>
      {/* <St.BlockHashDiv>{element.testcolumn}</St.BlockHashDiv> */}
      <St.BlockHashDiv>DB</St.BlockHashDiv>
    </St.BlockHashInfoContainer>
    <RiCheckboxMultipleBlankLine onClick={copyTextUrl}  size="20"/>
    </>
  )
};

export default BlockHash;