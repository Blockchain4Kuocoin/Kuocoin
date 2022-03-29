import React, { useEffect, useState } from "react";
import Createwallet from "./Createwallet";
import "../Modal/Modal.css";
import Payment from "./Payment";
import axios from "axios";
import styled from "styled-components";
import KuoSend from "../Kuosend/Kuosend";

const St = {
    CoinLogo: styled.div`
        display: inline-block;
        width: 300px;
        height: 225px;
        background-image: url(https://gateway.pinata.cloud/ipfs/Qmcr19WTLWVQSnVxL17zzvnBC3QAvNQASZQvcfGuNBGQqg);
        background-size: cover;
        /* margin-left: 5px; */
  `,
}

export default function Walletmain(props) {
    const { data, setData, state, setState, info, setInfo } = props;
    // console.log("state: " + state);
    // console.log("data: ");
    // console.log(info);
    // if (data.length > 0) sessionStorage.setItem("wallet", JSON.stringify(data[0]));
    
    const [mainWallet, setMainWallet] = useState("");
    const [price, setPrice] = useState("");

    const onChange = (e) => {
        console.log(e.target.value);
        axios.put("http://localhost:3001/userinfo/wallet", {
            userid: sessionStorage.user_id,
            wallet: e.target.value
        })
        .then((res) => {
            console.log(res.data)
        })
        data.forEach(ele => {
            if (ele.wal_id === e.target.value) {
                setMainWallet(ele);
                let result = "";
                let tmp = ele.balance;
                let start = tmp.length % 3 === 0 ? 3 : tmp.length % 3 === 1 ? 2 : 1;
                if (tmp.length < 3) {
                    setPrice(tmp)
                    return;
                }
                for (let i = 0; i < parseInt(tmp.length / 3); i++) {
                    if (i === 0) result += tmp.slice(0, start)
                    else result += tmp.slice(3*(i-1)+start, 3*i+start)
                    if (i !== parseInt(tmp.length / 3) -1) result += ',';
                }
                // console.log('result: ');
                // console.log(result);
                setPrice(result);
                return;
                // sessionStorage.setItem("wallet", JSON.stringify(ele));
            }
        })
    }

    const onKuoSend = () => {
        setState("kuosend");
    }

    const onWallet = () => {
        setState("wallet");
    }
    
    const onPayment = () => {
        setState("payment");
    }

    useEffect(() => {
        data.forEach(ele => {
            if (ele.wal_id === info.wallet) {
                setMainWallet(ele);
                let result = "";
                let tmp = ele.balance;
                let start = tmp.length % 3 === 0 ? 3 : tmp.length % 3 === 1 ? 2 : 1;
                if (tmp.length < 3) {
                    setPrice(tmp)
                    return;
                }
                for (let i = 0; i < parseInt(tmp.length / 3); i++) {
                    if (i === 0) result += tmp.slice(0, start)
                    else result += tmp.slice(3*(i-1)+start, 3*i+start)
                    if (i !== parseInt(tmp.length / 3) -1) result += ',';
                }
                setPrice(result);
                return;
            }
        })
    }, [])

    return (
        <>
            { state === "main"
            ?
            <>
            <div className="wal_container">
                내 지갑
                <div>
                    {data.length !==0
                    ? 
                    <select id="my_wallet" onChange={onChange}>
                        <option value={info.wallet}>{info.wallet}</option>
                        {data.map(ele => {
                            if (ele.wal_id !== info.wallet) {
                                return (<option key={ele.wal_id} value={ele.wal_id}>{ele.wal_id}</option>)
                            }
                        })}
                    </select>
                    : null
                    }
                </div>
            </div> 
            <St.CoinLogo />
            <div>{mainWallet.KUOS} KUOS</div>

            <div className="walmake">
                <button onClick={onKuoSend} className="walmakebtn">전송</button>
                <button onClick={onWallet} className="walmakebtn">지갑 생성하기</button>
                <button onClick={onPayment} className="walmakebtn">충전하기</button>
            </div>
            <div>{
            price
            } KRW</div>
            </>
            : state === "wallet"
            ?<Createwallet setData={setData} setState={setState} setInfo={setInfo}/>
            : state === "payment" 
            ? <Payment data={data} setData={setData} setState={setState}/>
            : <KuoSend mainWallet={mainWallet} setMainWallet={setMainWallet} setState={setState}/>
            }
            
        </>
    )
}