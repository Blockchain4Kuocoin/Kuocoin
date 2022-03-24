import React, {useState} from 'react';
import axios from "axios";

export default function Createwallet(props) {
    const { setState, setData } = props;
    const [inputs, setInputs] = useState({account: ""})
    const gotoMain = () => {
        setState("main");
    }

    const onChange = (e) => {
        setInputs({account: e.target.value})
    } 

    const onCreate = () => {
        axios.post("http://localhost:3001/wallet", {
            walid: inputs.account,
            owner: sessionStorage.user_id,
        })
        .then(res => {
            console.log(res.data);
            let data = res.data;
            if (data === "user already exists!") alert("중복된 아이디입니다!");
            else {
                alert("등록되었습니다!");
                setData(res.data);
                setState("main");
            }
        });
    }

    return (
        <>
        <h1 className='walmaintxt'>지갑 생성하기</h1>
        <h4>아래 무료 지갑을 생성하세요.</h4>
        <h5>지갑 아이디</h5>
        <input placeholder='지갑 아이디' name='account' value={inputs.account} onChange={onChange}/>
        <div className="walmake">
            <button onClick={onCreate} className="walmakebtn">지갑 생성하기</button>
            <button onClick={gotoMain} className="walmakebtn">뒤로가기</button>
        </div>
        </>
    )
}