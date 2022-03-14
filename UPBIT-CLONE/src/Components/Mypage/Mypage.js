import { useEffect, useState, useLayoutEffect } from "react";
import React from "react";
import "./Mypage.css";


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
    <div className="mydiv">
        <h2 className="mytitle">PROFILE</h2><br/>
        <p className="mytext">NAME : {state.name}</p>
        <p className="mytext">ID : {state.id}</p>
        <p className="mytext">PASSWORD : {state.psw}</p>
        <p className="mytext">ADDRESS : {state.adr}</p>
        <button className="mybtn" type = "button" onClick = {onClick} >수정하기</button>
    </div>
    );
}
else{
    return (
<>
    <div className="mydiv">
        <h2 className="mytitle">PROFILE</h2><br/>
        <p className="mytext">NAME 
            <input className="myinput" name = "name" value = {name} type = "text" placeholder = {state.name} onChange = {handler}/>
        </p>
        <p className="mytext">ID 
            <input className="myinput" name = "id" value = {id} type = "text" placeholder = {state.id} onChange = {handler}/>
        </p>
        <p className="mytext">PASSWORD 
            <input className="myinput" name = "psw" value = {psw} type = "text" placeholder = {state.psw} onChange = {handler}/>
        </p>
        <p className="mytext">ADDRESS 
            <input className="myinput" name = "adr" value = {adr} type = "text" placeholder = {state.adr} onChange = {handler}/>
        </p>
        <button className="mybtn" type = "button" onClick = {btnClick}>저장하기</button>
    </div>
</>
        );
    }
}