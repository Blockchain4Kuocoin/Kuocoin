import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Getblockhash() {
    const [blockhash, setBlockhash] = useState("");

    const onClick = () => {
        axios.get("http://localhost:3001/api/getblockhash", {
            params: {'blockhash': blockhash},
        })
        .then((response) => console.log(response.data));
    };

    const onChange = (e) => {
        setBlockhash(e.target.value);
    };

    return (
        <>
        <p>|GETBLOCKHASH :</p>
        <br />
        <input type="text" name="blockhash" value={blockhash} onChange={onChange}/>
        <button onClick={onClick}>Getblockhash</button>
        </>
    )
}