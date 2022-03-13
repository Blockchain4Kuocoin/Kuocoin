import React from "react";
import withSize from "../Container/withSize";
import Header from "../Components/Global/Header";
import Footer from "../Components/Global/Footer";
import HomeBackimg from "../Components/Home/HomeBackimg";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = ({ match, widthSize, heightSize }) => {
  const isHomeURL = match.path === "/home";

  
      const onLogout = () => {
        // sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
          sessionStorage.removeItem('user_id')
          // App 으로 이동(새로고침)
          document.location.href = '/'
      }
  

  return (
    <>
    <Header/>
    <div>
    <button type='button' onClick={onLogout}>Logout</button>
    </div>
    <HomeBackimg/>
    <Footer/>

    </>
  );
};

export default withSize()(React.memo(Home));
