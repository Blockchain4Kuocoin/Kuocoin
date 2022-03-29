import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Getblockhash() {
    const [blocknum, setBlocknum] = useState("");
    const [blockhash, setBlockhash] = useState("");
    const [block, setBlock] = useState("");

    const onClick = () => {
        axios.get("http://localhost:3001/api/getblockhash", {
            params: {'blocknum': blocknum},
        })
        .then((response) => {
            console.log(response.data.result);
            setBlockhash(response.data.result);
            // let tmp = response.data.result;
            // axios.get("http://localhost:3001/api/getblock", {
            //     params: {'block': tmp},
            // })
            // .then((response) => console.log(response.data.result))
        });
    };

    const onChange = (e) => {
        setBlocknum(e.target.value);
    };

    return (
        <>
        <p>|GETBLOCKHASH :</p>
        <br />
        <input type="text" name="blocknum" value={blocknum} onChange={onChange}/>
        <button onClick={onClick}>Getblockhash</button><br />
        {blockhash}<br />
        {/* {block} */}
        </>
    )
}