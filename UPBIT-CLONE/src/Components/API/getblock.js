import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Getblock() {
    const [block, setBlock] = useState("");

    const onClick = () => {
        axios.get("http://3.36.137.185:3001/api/getblock", {
            params: {'block': block},
        })
        .then((response) => console.log(response.data));
    };

    const onChange = (e) => {
        setBlock(e.target.value);
    };

    return (
        <>
        <p>|GETBLOCK :</p>
        <br />
        <input type="text" name="block" value={block} onChange={onChange}/>
        <button onClick={onClick}>Getblock</button>
        </>
    )
}