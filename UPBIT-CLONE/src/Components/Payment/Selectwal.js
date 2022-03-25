import React from "react";
import { useState } from "react";

export default function Selectwal(props) {
    const { setState, data } = props;

    // console.log(data);

    return (
        <div>
            <div>
                <select id="select_wallet">
                    <option value="">선택</option>
                    {data.map(ele => 
                        <option value={ele.wal_id}>{ele.wal_id}</option>
                    )}
                </select>
            </div>
        </div>
    )
}