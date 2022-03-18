import React, { useState } from 'react';
// import Modal from '../../../commons/components/Modals/Modal';
import "./Modal.css";

export default function  Modal (props) {
    
    const { open, close, header } = props;

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
                    <h1 className='walmaintxt'>지갑 생성하기</h1>
                    <h4>아래 무료 지갑을 생성하세요.</h4>
                    <h5 className="waltxt">이메일</h5>
                    <input placeholder='email'></input>
                    <h5 className="waltxt">암호</h5>
                    <input placeholder='password'></input>
                    <div className='walmake'>
                        <button className="walmakebtn">만들기</button>
                    </div>
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