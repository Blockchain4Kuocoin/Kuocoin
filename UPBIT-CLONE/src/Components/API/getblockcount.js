import React from "react";
import axios from "axios";

export default function Getblockcount() {

    const onClick = () => {
        axios.get("http://3.36.137.185:3001:3001/api/getblockcount")
        .then((response) => console.log(response.data));
    };

    return (
        <>
        <p>|GETBLOCKCOUNT :</p>
        <br />
        <button onClick={onClick}>Getblockcount</button>
        </>
    )
}