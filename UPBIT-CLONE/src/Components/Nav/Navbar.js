import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
// import { SidebarData } from './SidebarData';
import './Navbar.css'
import { IconContext } from 'react-icons';
import MyPage from '../Mypage/Mypage';

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        {/* <div className='navbar'> */}
            {/* <Link to="#" className='menu-bars'> */}
                <FaIcons.FaBars onClick={showSidebar}/>
            {/* </Link>     */}
        {/* </div> */}
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose />
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