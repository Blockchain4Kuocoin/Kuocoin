import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Getnewaddress() {

    const [account, setAccount] = useState("");

    const onClick = () => {
        // console.log(account);
        axios.get("http://localhost:3001/api/getnewaddress", {
            params: {'account': account}},
            { withCredentials: true}
        )
        .then((response) => console.log(response));
    };

    const onChange = (e) => {
        setAccount(e.target.value);
    }

    return (
        <>
        <p>|ACCOUNT :</p>
        <br />
        <input type="text" name="account" value={account} onChange={onChange}/>
        <button onClick={onClick}>Getnewaddress</button>
        </>
    )
}