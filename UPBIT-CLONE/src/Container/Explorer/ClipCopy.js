import React from 'react';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

export default function copyTextUrl() {
  // ToastsStore.success("Copied!");
  
  const url = window.location.href;
  
  navigator.clipboard.writeText(url).then(() => {
      alert("링크를 복사했습니다.");
      // ToastsStore.success("Copied!");
      // return (
      // <ToastsContainer position={ToastsContainerPosition.TOP_CENTER}
      //         store={ToastsStore} 
      //                 lightBackground/>
      // )
  });
}


// const url 대신에 db에서 불러온 Hash값을 넣고
// writeText(url)의 url 을 db에서 불러온 값을 넣고(아마도 element.blahblah 이런식으로..?)
// alert창을 toastpop기능으로 수정해야함.