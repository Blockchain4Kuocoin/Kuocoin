import React, { useState } from "react";
import axios from "axios";
import "./LoginRegister.css";

export default function Signup() {
  const [info, setInfo] = useState({ id: "", pw: "", name: "" }); // 인포라는 컨테이너에 사용자 아이디랑 패스워드 담기

  const onChange = (event) => {
    // 사용자가 정보를 입력했을 때 그 정보를 실시간으로 반영하는것 (불러온다)
    const name = event.target.name; // 건드려 지는 대상을 의미
    const value = event.target.value;

    setInfo((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = () => {
    console.log(`id : ${info.id}`);
    console.log(`pw : ${info.pw}`);
    console.log(`name : ${info.name}`);

    var reg_id = /^[a-zA-Z0-9]{3,}$/;
    let reg_pw = /(?=.*\d)(?=.*[a-zA-ZS]).{4,}/; // 문자, 숫자 1개이상 포함, 4자리 이상

    //회원가입 조건문
    if (info.id === "") alert("아이디를 입력하세요");
    else if (!reg_id.test(info.id))
      alert("id: 영문 숫자 조합 3자리 이상으로 입력하세요");
    else if (info.pw === "") alert("비밀번호를 입력하세요");
    else if (!reg_pw.test(info.pw))
      alert("password: 문자, 숫자 1개이상 포함하여 4자리 이상으로 입력하세요");
    else if (info.name === "") alert("이름을 입력하세요");
    else {
      axios
        .post("http://localhost:3001/signup", {
          id: info.id,
          pw: info.pw,
          name: info.name,
        })
        .then((res) => {
          let msg = res.data.msg;
          console.log(msg);
          if (msg == "user already exists!") {
            alert("중복된 ID입니다.");
          } else {
            alert("회원가입 성공!");
            document.location.href = "/login";
          }
        });
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") onSubmit();
  };

  return (
      <>
    <div className="Ldiv">
      <form>
        <p className="Ltext">
          <input
            className="Linput"
            name="id"
            type="id"
            placeholder="아이디"
            value={info.id || ""}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        </p>
        <br />
        <p className="Ltext">
          <input
            className="Linput"
            name="pw"
            type="password"
            placeholder="비밀번호"
            value={info.pw || ""}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        </p>
        <br />
        <p className="Ltext">
          <input
            className="Linput"
            name="name"
            type="text"
            placeholder="이름"
            value={info.name || ""}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        </p>
        <br />
        <button type="button" onClick={onSubmit} className="Lbtn">
          계정 생성하기
        </button>
      </form>
    </div>
    </>
  );
}
