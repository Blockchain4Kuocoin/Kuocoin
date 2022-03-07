import { useEffect, useState, useLayoutEffect } from "react";
import React from "react";


export default function Profile() {
const [state, setState] = useState({
    id: 1,
    name: "",
    psw: "",
    adr: "",
})

const [check, setCheck] = useState(true);

const [inputs, setInputs] = useState({
    id: 1,
    name: "",
    psw: "",
    adr:"",
})

const {name, id, psw, adr} = inputs

const handler = e => {
    const {value, name} = e.target
    setInputs ({
        ...inputs,
        [name]: value,
    })
}

useLayoutEffect(
    () => {
        fetch("http://localhost:3001/mypage", 
        {
        method: "get",
        headers: {
            "content-type": "application/json",
        },  
    })
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        for (let val of json) {
            if (val.id==inputs.id) {
                setState({
                    name: val.kuoname,
                    id: val.id,
                    psw: val.kuopwd,
                    adr: val.kuoadr,
                })
            }
        }
    })

    }, []
) 

const onClick = () => {
    setCheck(false)
}

const btnClick = () => {

    if (name==="") inputs.name=state.name;
    if (id==="") inputs.id=state.id;
    if (psw==="") inputs.psw=state.psw;
    if (adr==="") inputs.adr=state.adr;
    console.log(inputs);

    fetch("http://localhost:3001/mypage", 
        {
        method: "put",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(inputs)
    })

    .then(()=> {
        console.log('1')
        setState(inputs);
    }).then(()=> {
        console.log('2')
        setInputs({
            name: "",
            id: "",
            psw: "",
            adr:"",
        })
        setCheck(true)
    })
}
if(check) {
return (
    <>
        <div>
            
            <h2>프로필</h2><br/>
            <p>이름 {state.name}</p>
            <p>아이디 {state.id}</p>
            <p>비밀번호 {state.psw}</p>
            <p>주소 {state.adr}</p>
            <div>
            <button type = "button" onClick = {onClick} >수정하기</button>
            
        </div>
    </div>
    </>
    );
}
else{
    return (
        <>
            <div>
                
                <h2>프로필</h2><br/>
                <p>이름 
                    <input name = "name" value = {name} type = "text" placeholder = {state.name} onChange = {handler} />
                </p>
                <p>아이디 
                    <input name = "id" value = {id} type = "text" placeholder = {state.id} onChange = {handler} />
                </p>
                <p>비밀번호 
                    <input name = "psw" value = {psw} type = "text" placeholder = {state.psw} onChange = {handler} />
                </p>
                <p>주소 
                    <input name = "adr" value = {adr} type = "text" placeholder = {state.adr} onChange = {handler} />
                </p>
                <div>
                <button type = "button" onClick = {btnClick}>저장하기</button>
                
            </div>
        </div>
        </>
        );
    }
}