import React, {useState} from 'react';
import axios from "axios";

export default function KuoSend(props) {
    const { setState, mainWallet, setMainWallet } = props;
    const [inputs, setInputs] = useState({
        wal_addr: "",
        amount: "",
    });

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name] : value}));
    } 

    const gotoMain = () => {
        setState("main");
    }

    const onSend = () => {
        console.log("test");
    }

    return (
        <>
        <h1 className='walmaintxt'>KUOS 전송</h1>
        <input 
        placeholder='보내는 지갑 주소' 
        name='wal_addr' 
        value={inputs.wal_addr} 
        onChange={onChange}
        onKeyDown={(e) => {
            if (e.key === "Enter") onSend()
        }}/>
        <input 
        placeholder='금액' 
        name='amount' 
        value={inputs.amount} 
        onChange={onChange}
        onKeyDown={(e) => {
            if (e.key === "Enter") onSend()
        }}/>
        <div className="walmake">
            <button onClick={onSend} className="walmakebtn">전송하기</button>
            <button onClick={gotoMain} className="walmakebtn">뒤로가기</button>
        </div>
        </>
    )
}