import { useEffect, useState, useLayoutEffect } from "react";
import React from "react";
import axios from "axios";


export default function OrderInfoTradeList() {
const [state, setState] = useState({
    id: sessionStorage.user_id,
    wallet: "",
    coinName: "",
    quantity: "",
    price: "",
    time: "",
});


useEffect(() => {
    axios.get("http://localhost:3001/trade", {
        'params': {id: state.id},
    })
    .then((res) => {
        const tmp = res.data;
        console.log(tmp);
        setState({
            id: sessionStorage.user_id,
            wallet: tmp.wal_id,
            coinName: tmp.coinname,
            quantity: tmp.quantity,
            price: tmp.price,
            time: tmp.paytime
        });
    })
}, []); 
return (
    <div>
        <p>지갑 : {state.wallet}</p>
        <p>코인종류 : {state.coinName}</p>
        <p>수량 : {state.quantity}</p>
        <p>구매가격 : {state.price}</p>
        <p>거래시간 : {state.time}</p>
    </div>
    );
}
