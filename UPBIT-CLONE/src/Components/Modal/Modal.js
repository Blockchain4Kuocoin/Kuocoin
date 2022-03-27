import React, { useEffect, useState } from 'react';
// import Modal from '../../../commons/components/Modals/Modal';
import "./Modal.css";
import axios from "axios";
import Walletmain from '../Payment/Walletmain';

export default function Modal (props) {
    
    const { open, close, data, header, setData, auth, setAuth, info, setInfo } = props;

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
        if (info.userid === inputs.id && info.userpw === inputs.pw) {
            setInputs({
                id: "",
                pw: "",
            })
            setAuth(true);
        }
        else {
            alert('입력하신 정보가 일치하지 않습니다.');
            setInputs({
                id: "",
                pw: "",
            })
        }
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
                    <input 
                        placeholder='id' 
                        name='id' 
                        value={inputs.id} 
                        onChange={onChange}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") onClick()
                        }}
                    />
                    <h5 className="waltxt">비밀번호</h5>
                    <input 
                        placeholder='pw' 
                        name='pw' 
                        value={inputs.pw} 
                        onChange={onChange}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") onClick()
                        }}    
                    />
                    <div className='walmake'>
                        <button className="walmakebtn" onClick={onClick}>확인</button> 
                    </div>           
                </>
                :
                <>
                    <Walletmain 
                        data={data}  
                        setData={setData} 
                        state={state} 
                        setState={setState}
                        info={info}
                        setInfo={setInfo}
                    />
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