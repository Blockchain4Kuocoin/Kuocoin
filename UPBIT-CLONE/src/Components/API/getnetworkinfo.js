import React from "react";
import axios from "axios";

export default function Getnetworkinfo() {

    const onClick = () => {
        axios.get("http://3.36.137.185:3001/api/getnetworkinfo")
        .then((response) => console.log(response.data));
    }

    return (
        <>
        <p>|NETWORKINFO :</p>
        <br />
        <button onClick={onClick}>Getnetworkinfo</button>
        </>
    );
}