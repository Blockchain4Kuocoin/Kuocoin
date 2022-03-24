import React, { useEffect, useState } from 'react';
// import Modal from '../../../commons/components/Modals/Modal';
import "./Modal.css";
import axios from "axios";
import Walletmain from '../Payment/Walletmain';

export default function  Modal (props) {
    
    const { open, close, data, header, setData, auth, setAuth } = props;

    const [ state, setState ] = useState("main");

    const [ inputs, setInputs ] = useState({
        id: "",
        pw: "",
    });

    const onChange = e => {
        const name = e.target.name;
        const value = e.target.value

        setInputs(values => ({...values, [name] : value}));
    }

    const onClick = () => {
        console.log(inputs.id);
        console.log(inputs.pw);
        axios.get("http://localhost:3001/login", {
            params: {
                id: inputs.id,
                pw: inputs.pw,
            }
        })
        .then(res => {
            let msg = res.data.msg;
            if(msg === "no data found") {
                alert('입력하신 정보가 일치하지 않습니다.');
                setInputs({
                    id: "",
                    pw: "",
                })
            }
            else {
                setInputs({
                    id: "",
                    pw: "",
                })
                setAuth(true);
            }
        })
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

                <main>{props.children}

                {!auth
                ?
                <>
                    <h5 className="waltxt">아이디</h5>
                    <input placeholder='id' name='id' value={inputs.id} onChange={onChange}></input>
                    <h5 className="waltxt">비밀번호</h5>
                    <input placeholder='pw' name='pw' value={inputs.pw} onChange={onChange}></input>
                    <div className='walmake'>
                        <button onClick={onClick} className="walmakebtn">확인</button> 
                    </div>           
                </>
                :
                <>
                <Walletmain data={data} onClose={close} setData={setData} state={state} setState={setState}/>
                </>
                }  
                </main>
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