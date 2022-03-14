import React from "react";
import axios from "axios";

export default function Listaccounts() {

    const onClick = () => {
        axios.get("http://localhost:3001/api/listaccounts")
        .then((response) => console.log(response.data));
    }

    return (
        <>
        <p>|List of Accounts :</p>
        <br />
        <button onClick={onClick}>Listaccounts</button>
        </>
    );
}