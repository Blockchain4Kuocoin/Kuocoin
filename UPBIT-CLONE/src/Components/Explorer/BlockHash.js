import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import styled from "styled-components";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri"
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

const St = {
  container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  BlockHashInfoContainer: styled.div`
    display: block;
    font-family: 'Poor Story';
  `,
  BlockHashDiv: styled.div`
    color: #549aff;
    margin-top: 10px;
    font-size: x-large;
    font-weight: 900;
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    justify-content: space-between;
  `
};
    /* font-family: 'Courier New', Courier, monospace; */

const ToastsPop = () => {
  ToastsStore.success("Copied!");
};

const BlockHash = () => {
  const [ blockHashData, setBlockHashData ] = useState([]);
  
  const params = useParams();
  console.log(params);

  useEffect(()=>{
    Axios.get(`http://localhost:3001/explorer/kuoscoin/${params.height}`)
    .then((response) => {setBlockHashData(response.data.data[0]); console.log(response.data.data)})
    .catch(err=>console.log(err))
  }, []);

  const CopyHash = () => {
    console.log(blockHashData);
  
    navigator.clipboard.writeText(blockHashData.hash).then(() => {
      ToastsPop()
    });
  };

  return(
    <St.container>
    <St.BlockHashInfoContainer>
      <>Hash</>
        <St.BlockHashDiv>{blockHashData.hash}</St.BlockHashDiv>
    </St.BlockHashInfoContainer>
    <RiCheckboxMultipleBlankLine onClick={CopyHash} size="20"/>
      <div className="url_copy">
        <style jsx="true">{`
          .toast {
            font-size: 16px !important;
            color: #fff !important;
            display: inline-block !important;
            background-color: #000000 !important;
            box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.16) !important;
            opacity: 0.7 !important;
            border-radius: 5px !important;
            width: 343px !important;
            line-height: 53px !important;
            height: 53px !important;
            margin: 129px 16px auto !important;
          }
        `}</style>
        <ToastsContainer position={ToastsContainerPosition.BOTTOM_CENTER} store={ToastsStore} />
      </div>
    </St.container>
  )
};
    
export default BlockHash;