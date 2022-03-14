import React, {useState} from 'react'
import axios from "axios";
import "./LoginRegister.css"


export default function Signup() {
    const [ info, setInfo ] = useState({id: "", pw: "" , name: ""}) // 인포라는 컨테이너에 사용자 아이디랑 패스워드 담기
    
    const onChange = (event) => {  // 사용자가 정보를 입력했을 때 그 정보를 실시간으로 반영하는것 (불러온다)
        const name = event.target.name // 건드려 지는 대상을 의미 
        const value = event.target.value

        setInfo(values => ({...values, [name] : value}))
    }

    const onSubmit = () => {
        console.log(`id : ${info.id}`)
        console.log(`pw : ${info.pw}`)
        console.log(`name : ${info.name}`)

        axios.post("http://localhost:3001/signup", {
                id : info.id,
                pw : info.pw,
                name : info.name,
        })
        .then(res => {
            let msg = res.data.msg
            console.log(msg);
            if (msg == "user already exists!") {
                alert("중복된 ID입니다.");
            }
            else {
                alert("회원가입 성공!")
                document.location.href = '/userlogin';    
            }
        });
    }


    return (
        <div className="loginregister">
            <form>
                <input name="name" type="text" placeholder="이름" value={ info.name || "" }  className="loginregister__input" onChange={ onChange } /><br/>
                <input name="id" type="id" placeholder="아이디" value={ info.id || "" }  className="loginregister__input" onChange={ onChange } /><br/>
                <input name="pw" type="password" placeholder="비밀번호" value={ info.pw || "" }  className="loginregister__input" onChange={ onChange } /><br/>
                {/* <input name="confirmPassword" type="password" placeholder="비밀번호 확인" className="loginregister__input"/><br/> */}
                <button type="button" onClick={onSubmit} className="loginregister__button">계정 생성하기</button>
            </form>
        </div>
        
    )
}

// value={ info.name || "" } 초기화를 안한경우 빈값으로 둔다라는 의미 ||""