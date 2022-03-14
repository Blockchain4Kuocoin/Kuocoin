import React from "react";

export default function Apiindex() {
    return (
        <>
            <div>
                kuoscoin API List
                <ul>
                    <li><a href='/getnetworkinfo'>getnetworkinfo</a></li>
                    <li><a href='/getblockcount'>getblockcount</a></li>
                    <li><a href='/getnewaddress'>getnewaddress</a></li>
                </ul>
            </div>
        </>
    )
}