import React, { useState } from 'react';
// import Modal from '../../../commons/components/Modals/Modal';
import "./Modal.css";
import axios from "axios";

export default function  Modal (props) {
    
    const { open, close, header } = props;

    const [ state, setState ] = useState(true);

    const [ walAdr, setWalAdr ] = useState("");

    const [ inputs, setInputs ] = useState({
        id: "",
        pw: "",
        account: "",
    });

    const onChange = e => {
        const name = e.target.name;
        const value = e.target.value

        setInputs(values => ({...values, [name] : value}));
    }

    const onClick = () => {
        console.log(inputs.id);
        console.log(inputs.pw);

        // if (sessionStorage.getItem('user_id') !== inputs.id) alert("잘못된 정보입니다!");
        // else {
            axios.get("http://localhost:3001/login", {
                params: {
                    id: inputs.id,
                    pw: inputs.pw,
                }
            })
            .then(res => {
                if(msg === "no data found") {
                    alert('입력하신 정보가 일치하지 않습니다.');
                }
                else {
                    setState(false);
                }
            })
        // }
    }

    const onCreate = () => {
        axios.post("http://localhost:3001/createwallet"), {
            walid: inputs.account,
            owner: sessionStorage.user_id,
        }
        .then(res => {
            console.log(res)
            // setWalAdr(res.data.result);
        });
    }

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
            <section>
                <header>
                    {header}
                <button className="close" onClick={close}>
                    &times;
                </button>
                </header>
                {state === true
                ?
                <>
                <main>{props.children}
                    <h1 className='walmaintxt'>지갑 생성하기</h1>
                    <h4>아래 무료 지갑을 생성하세요.</h4>
                    <h5 className="waltxt">아이디</h5>
                    <input placeholder='id' name='id' value={inputs.id} onChange={onChange}></input>
                    <h5 className="waltxt">암호</h5>
                    <input placeholder='pw' name='pw' value={inputs.pw} onChange={onChange}></input>
                    <div className='walmake'>
                        <button onClick={onClick} className="walmakebtn">다음</button>
                    </div>
                </main>
                </>
                :
                <>
                    <input placeholder='wallet-id' name='account' value={inputs.account} onChange={onChange}/>
                    <div className='walmake'>
                        <button onClick={onCreate} className="walmakebtn">다음</button>
                    </div>
                </>
                }
                <div>
                    {walAdr}
                </div>
                <footer>
                <button className="close" onClick={close}>
                    close
                </button>
                </footer>
            </section>
        ) : null}
        </div>
        );
    
}