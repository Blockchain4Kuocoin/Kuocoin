import React from "react";

export default function copyTextUrl() {
  copyLinkRef.current.focus();
  copyLinkRef.current.select();
  
  navigator.clipboard.writeText(copyLinkRef.current.value).then(() => {
      alert("링크를 복사했습니다.");
  });
}