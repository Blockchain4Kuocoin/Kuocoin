import { useEffect, useState } from "react"
import React from "react"
import axios from "axios"   //server와 통신하는 모듈
import "./LoginRegister.css"

export default function Login() {
    const [ info, setInfo ] = useState({id: "", pw: ""})
    
    const onChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setInfo(values => ({...values, [name] : value}))
    }

    const onSubmit = () => {
        
        console.log(`id : ${info.id}`)
        console.log(`pw : ${info.pw}`)
        axios.get("http://localhost:3001/login", {
            params: {
                id: info.id,
                pw: info.pw
            }
        })
        .then(res => {
            console.log(res);
            console.log('res.data.msg :: ', res.data.msg);
            let msg = res.data.msg;
            if(msg === "no data found"){
                // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
                console.log('======================',res.data.msg)
                alert('입력하신 정보가 일치하지 않습니다.')
            } 
            else {
                // id, pw 모두 일치 userId = userId1, msg = undefined
                console.log('======================','로그인 성공')
                sessionStorage.setItem('user_id', info.id)
                // // 작업 완료 되면 페이지 이동(새로고침)
                alert("로그인 성공!");
                document.location.href = '/';
            }
        })


    }
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
                value={ info.id || "" } 
                onChange={ onChange }
                onKeyDown={(e) => {
                    if (e.key === "Enter") onSubmit()
                }}
                />
                </p>
                <br/>
                <p className="Ltext">
                <input 
                className="Linput"
                name="pw" 
                type="password" 
                placeholder="비밀번호" 
                value={ info.pw || "" } 
                onChange={ onChange } 
                onKeyDown={(e) => {
                    if (e.key === "Enter") onSubmit()
                }}
                />
                </p>
                <br/>
                <button type="button" onClick={onSubmit} className="Lbtn">로그인</button>
            </form>
        </div>
        </>
    )
}