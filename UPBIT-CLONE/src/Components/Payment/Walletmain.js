import React, { useState } from "react";
import Createwallet from "./Createwallet";
import "../Modal/Modal.css";
import Payment from "./Payment";

export default function Walletmain(props) {
    const { data, setData, close, state, setState } = props;
    console.log(props);
    console.log("state: " + state);

    const onWallet = () => {
        setState("wallet");
    }

    const onPayment = () => {
        setState("payment");
    }

    return (
        <>
            { state === "main"
            ?
            <>
            <div className="walmake">
                <button onClick={onWallet} className="walmakebtn">지갑 생성하기</button>
                <button onClick={onPayment} className="walmakebtn">충전하기</button>
            </div>
            <div className="wal_container">
                내 지갑
                <div>
                    <div className="wal_info">
                        <div className="wal_id">id</div>
                        <div className="wal_balance">balance</div>
                    </div>
                {data.map(ele => 
                    <>
                        <div className="wal_info">
                            <div className="wal_id">{ele.wal_id}</div>
                            <div className="wal_balance">{ele.balance}KRW </div>
                        </div>   
                    </>
                )}
                </div>
            </div> 
            </>
            : state === "wallet"
            ?<Createwallet setData={setData} setState={setState}/>
            :<Payment data={data} setData={setData} setState={setState}/>
            }
            
        </>
    )
}