import { useState } from "react"
import React from "react"
import axios from "axios"   //server와 통신하는 모듈
// import { Link } from "react-router-dom"
// import Signup from "./signup"

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
        axios.get("http://localhost:3000/login", {
            params: {
                id: info.id,
                pw: info.pw
            }
        })
        .then(res=> {console.log(res.data)})
    }


    return (

        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>

            <form style={{display: 'flex', flexDirection: 'column'}}>

                <label>아이디: </label>
                <input name="id" onChange={ onChange } value={ info.id || "" } /><br />
                <label>비밀번호: </label>
                <input name="pw" onChange={ onChange } value={ info.pw || "" } /><br />

                <br />
                <button onClick={onSubmit}>
                    로그인
                </button>
                <br />
                <button>
                    회원가입
                </button>
            </form>

        </div>
    )
}