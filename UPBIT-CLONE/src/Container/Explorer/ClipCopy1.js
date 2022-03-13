import React from "react";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri"

export default function ClipboardCopy() {
  const doCopy = text => {
    // 흐음 1.브라우저가 navigator.clipboard를 지원하는지 확인 (지원하면 clipboard api 사용, 지원안하면 2번으로 이동)
    if (navigator.clipboard) {
      // (IE는 사용 못하고, 크롬은 66버전 이상일때 사용 가능합니다.)
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert("클립보드에 복사되었습니다.");
        })
        .catch(() => {
          alert("복사를 다시 시도해주세요.");
        });
    } else {
      // 흐름 2.현재 브라우저가 copy 기능을 지원하는지 확인
      if (!document.queryCommandSupported("copy")) {
        return alert("복사하기가 지원되지 않는 브라우저입니다.");
      }

      // 흐름 3.지원한다면 textarea를 만들어서 내부에 원하는 text를 복사
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.top = 0;
      textarea.style.left = 0;
      textarea.style.position = "fixed";

      // 흐름 4.복사한 텍스트를 document.body에 appendChild
      document.body.appendChild(textarea);
      // focus() -> 사파리 브라우저 서포팅
      textarea.focus();
      // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
      textarea.select();
      // 흐름 5.exeCommand를 이용하여 복사
      document.execCommand("copy");
      // 흐름 6.복사 완료했다면 body에 추가한 textarea를 삭제
      document.body.removeChild(textarea);
      alert("클립보드에 복사되었습니다.");
    }
  };

  return (
    <RiCheckboxMultipleBlankLine onClick={() => doCopy("복사 성공!")} />
    // <button onClick={() => doCopy("복사할텍스트입니다!")}>복사하기</button>
  );
}