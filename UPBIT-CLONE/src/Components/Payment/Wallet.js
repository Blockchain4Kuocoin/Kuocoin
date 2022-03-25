import React, {useState} from 'react';
import Createwallet from './Createwallet';

export default function Wallet() {
    const [state, setState] = useState(false);
    const onClick = () => {
        setState(true);
    }
    return (
        <>
        {!state
        ?
        <div className='walmake'>
            <button onClick={onClick} className="walmakebtn">확인</button> 
        </div>
        :
        <Createwallet setState={setState}/>
        }
        </>
    )
}