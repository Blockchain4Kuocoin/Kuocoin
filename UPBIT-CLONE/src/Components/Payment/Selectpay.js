import React from "react";
// import { useState } from "react";

export default function Selectpay(props) {

    const { pay, setPay } = props;
    const onChange = e => {
        setPay(e.target.value)
    }

    return (
        <div style={{marginTop: "40px", marginBottom: "20px"}}>
            <input 
            id="pay" 
            value={pay} 
            placeholder='충전할 금액' 
            onChange={onChange}
            style={{width: "60%", borderRadius: "2%", marginRight: "7px"}}
            />KRW
        </div>
    )
}