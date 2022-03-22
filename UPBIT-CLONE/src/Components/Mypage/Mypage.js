import { useEffect, useState, useLayoutEffect } from "react";
import React from "react";
import axios from "axios";
import "./Mypage.css";
import Modal from "../Modal/Modal.js"



export default function Profile() {
    const [walState, setWalState] = useState ({
        modalOpen: false,
    })

    const openModal = () => {
        setWalState({ modalOpen: true })
    }
    const closeModal = () => {
        setWalState({ modalOpen: false })
    }
    
    
const [state, setState] = useState({
    id: sessionStorage.user_id,
    name: "",
    pw: "",
});

const [check, setCheck] = useState(true);

const [inputs, setInputs] = useState({
    id: sessionStorage.user_id,
    name: "",
    pw: "",
});

const {name, id, pw} = inputs

const handler = e => {
    const {value, name} = e.target
    setInputs ({
        ...inputs,
        [name]: value,
    })
}

useEffect(() => {
    axios.get("http://3.36.137.185:3001/mypage", {
        'params': {id: state.id},
    })
    .then((res) => {
        const tmp = res.data;
        console.log(tmp);
        setState({
            id: sessionStorage.user_id,
            name: tmp.username,
            pw: tmp.userpw,
        });
    })
}, []); 

const onClick = () => {
    setCheck(false)
}

const btnClick = () => {

    if (name==="") inputs.name=state.name;
    if (pw==="") inputs.pw=state.pw;
    console.log(inputs);

    axios.put("http://3.36.137.185:3001", inputs,
    )
    .then(()=> {setState(inputs)})
    .then(()=> {
        setInputs({
            name: "",   
            id: "",
            pw: "",
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
        <p className="mytext">PASSWORD : {state.pw}</p>
        <button className="mybtn" type = "button" onClick = {onClick} >수정하기</button>
        {/* <button className="walbtn" type = "button">지갑생성하기</button> */}
        <React.Fragment>
                <button className="walbtn" onClick={ openModal }> 지갑생성하기</button>
                <Modal open={ walState.modalOpen } close={ closeModal } title="Create a chat room">
                    {/* <h3>지갑 생성하기</h3>
                    <h4>아래 무료 지갑을 생성하세요.</h4>
                    <h5 className="waltxt">이메일</h5>
                    <input></input>
                    <h5 className="waltxt">암호</h5>
                    <input></input>
                    <div>
                        <button className="walmakebtn">만들기</button>
                    </div> */}
                </Modal>
        </React.Fragment>
    </div>
    );
}
else{
    return (
<>
    <div className="mydiv">
        <h2 className="mytitle">PROFILE</h2><br/>
        <p className="mytext">ID 
            <input className="myinput" name = "id" value = {id} type = "text" placeholder = {state.id} readOnly/>
        </p>
        <p className="mytext">NAME 
            <input className="myinput" name = "name" value = {name} type = "text" placeholder = {state.name} onChange = {handler}/>
        </p>
        <p className="mytext">PASSWORD 
            <input className="myinput" name = "pw" value = {pw} type = "text" placeholder = {state.pw} onChange = {handler}/>
        </p>
        <button className="mybtn" type = "button" onClick = {btnClick}>저장하기</button>

    </div>
</>
        );
    }
}