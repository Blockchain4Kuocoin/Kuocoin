import React from "react";
// import { useState } from "react";

export default function Selectpay(props) {

    const { pay, setPay } = props;
    const onChange = e => {
        setPay(e.target.value)
    }

    return (
        <div>
            <input 
            id="pay" 
            value={pay} 
            placeholder='충전할 금액' 
            onChange={onChange}
            />KRW
        </div>
    )
}