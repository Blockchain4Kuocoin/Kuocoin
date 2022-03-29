import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import "./Mypage.css";
import Modal from "../Modal/Modal.js"


export default function Profile() {
    const [walState, setWalState] = useState ({
        modalOpen: false,
    });
    const [data, setData] = useState("");
    const [auth, setAuth] = useState(false);
    const [info, setInfo] = useState({});

    const [state, setState] = useState("main");

    const openModal = () => {
        setWalState({ modalOpen: true })
    }
    const closeModal = () => {
        setAuth(false);
        setWalState({ modalOpen: false });
        setState("main");
    }
    
    const [details, setDetails] = useState({
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
        axios.get("http://localhost:3001/mypage", {
            'params': {id: details.id},
        })
        .then((res) => {
            const tmp = res.data;
            console.log(tmp);
            setInfo(res.data);
            axios.get("http://localhost:3001/wallet", {
                params: {
                    owner: sessionStorage.user_id,
                }
            })
            .then((res) => {
                console.log(res.data);
                setData(res.data);
                setDetails({
                    id: sessionStorage.user_id,
                    name: tmp.username,
                    pw: tmp.userpw,
                });
            })
        })
    }, [details.id]); 

    const onClick = () => {
        setCheck(false)
    }

    const btnClick = () => {
        if (name==="") inputs.name=details.name;
        if (pw==="") inputs.pw=details.pw;
        // console.log(inputs);

        let reg_pw = /(?=.*\d)(?=.*[a-zA-ZS]).{4,}/; // 문자, 숫자 1개이상 포함, 4자리 이상
        //조건문
        if (!reg_pw.test(inputs.pw)) alert("password: 문자, 숫자 1개이상 포함하여 4자리 이상으로 입력하세요");
        else {
            axios.put("http://localhost:3001/mypage", inputs)
            .then((res) => {
                console.log(res.data);
                setDetails(inputs);
                setInfo(res.data);

            })
            .then(()=> {
                setInputs({
                    name: "",   
                    id: sessionStorage.user_id,
                    pw: "",
                })
                setCheck(true);    
            })
        }
    }

    const onKeyDown = (e) => {
        if (e.key === "Enter") btnClick()
    }

if(check) {
return (
    <div className="mydiv">
        <h2 className="mytitle">PROFILE</h2><br/>
        <p className="mytext">ID : {details.id}</p>
        <p className="mytext">PASSWORD : {details.pw}</p>
        <p className="mytext">NAME : {details.name}</p>
        <button className="mybtn" type = "button" onClick = {onClick} >수정하기</button>
        {/* <button className="walbtn" type = "button">지갑생성하기</button> */}
        <React.Fragment>
            <button className="walbtn" onClick={ openModal }> 지갑생성하기</button>
            <Modal 
                open={ walState.modalOpen } 
                close={ closeModal } 
                data={data} 
                setData={setData} 
                auth={auth} 
                setAuth={setAuth} 
                info={info}
                setInfo={setInfo}
                state={state}
                setState={setState}
                title="Create a chat room">
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
            <input 
            className="myinput" 
            name="id" 
            value={id} 
            type="text" 
            placeholder={details.id} readOnly
            />
        </p>
        <p className="mytext">PASSWORD 
            <input 
            className="myinput" 
            name="pw" 
            value={pw} 
            type="text" 
            placeholder={details.pw} 
            onChange = {handler}
            onKeyDown={onKeyDown}
            />
        </p>
        <p className="mytext">NAME 
            <input 
            className="myinput" 
            name="name" 
            value={name} 
            type="text" 
            placeholder={details.name} 
            onChange={handler}
            onKeyDown={onKeyDown}
            />
        </p>
        <button className="mybtn" type = "button" onClick = {btnClick}>저장하기</button>

    </div>
</>
        );
    }
}