import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
// import { SidebarData } from './SidebarData';
import './Navbar.css'
import { IconContext } from 'react-icons';
import MyPage from '../Mypage/Mypage';
// import styled from "styled-components";

// const St = {
//     Container: styled.span`
//         display: block;
//         margin-left: ${({ marginLeft }) => marginLeft || "8px"};
//         font-weight: 600;
//         font-size: 0.9rem;
//         height: 20px;
//         color: white;
//     `,
// }


function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        {/* <div className='navbar'> */}
            {/* <Link to="#" className='menu-bars'> */}
                <p onClick={showSidebar}>
                    마이페이지
                </p>
            {/* </Link>     */}
        {/* </div> */}
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className='navbar-toggle'>
                    <Link to="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose onClick={showSidebar}/>
                        <div>
                            <MyPage/>
                        </div>
                    </Link>
                </li>
            </ul>    
        </nav>
        </IconContext.Provider>
    </>
)
}

export default Navbar