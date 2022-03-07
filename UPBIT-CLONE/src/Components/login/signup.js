import { useState } from "react"
import React from "react"
import axios from "axios";

export default function Signup() {
    const [ info, setInfo ] = useState({id: "", pw: ""})
    
    const onChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setInfo(values => ({...values, [name] : value}))
    }

    const onSubmit = () => {
        console.log(`id : ${info.id}`)
        console.log(`pw : ${info.pw}`)

        axios.post("http://localhost:3001/signup", {

                id : info.id,
                pw : info.pw

        })
        .then(res=> {console.log(res.data)})
    }


    return (
        <>
            <label>Id: </label>
            <input name="id" onChange={ onChange } value={ info.id || "" } /><br />
            <label>Pw: </label>
            <input name="pw" onChange={ onChange } value={ info.pw || "" } /><br />
            <button onClick={onSubmit}>submit</button>
        </>
    )
}