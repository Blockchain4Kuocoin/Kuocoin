
import React from 'react';
// import Roadmap from './4.webp'
import Roadmap from './2.jpeg'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const RoadmapStyle = styled.div`
  .container_roadmap{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;

  }

  /* 컨텐츠 영역 */
  .phase_carousel {
    width: 100%;
    height: 100%;
    color: white;
    background: url(${Roadmap}) no-repeat center/cover;
    /* z-index: -1; */
    margin-left: -10px;
  }

  /* 캐러셀 */
  .roadmap_slider {
    padding-top: 20px;
    height: 100%;
  }
  /* 배경 불투명처리 */
  .roadmap_slider::before {
    content:"";
    background-color: black;
    opacity: 0.5;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
  .slideNext {
    background-color: brown;
    display: flex;
    justify-content: space-around;
  }

  /* 페이즈 */
  .phase_0 {
    height: 100%;
  }

  .phase_head {
    font-family: 'Poor Story';
    text-align: center;
    font-size: 6vw;
  }

  .coming_soon {
    font-family: 'Poor Story';
    text-align: center;
    font-size: 4vw;
  }

  .phase_headline {
    /* font-family: 'Gothic A1', sans-serif; */
    /* font-family: 'Roboto', sans-serif; */
    /* font-family: 'Rock Salt', cursive; */
    /* font-family: 'Gowun Batang', serif; */
    padding: 0px 8px;
    /* font-family: 'Walter Turncoat', cursive; */
    font-family: 'Poor Story';
    text-align: center;
    font-size: 2vw;
  }

  .concept_head {
    /* font-family: 'East Sea Dokdo', cursive; */
    font-family: 'Poor Story';
    font-size: 6vw;
    padding-right: 4vw;
    padding-top: 4vw ;
    text-align: center;
  }

  .concept_body {
    text-align: center;
    /* font-family: 'East Sea Dokdo', cursive; */
    /* font-family: 'Gamja Flower'; */
    font-family: 'Poor Story';
    font-size: 41px ;
  }

  .phase_concept {
    display: flex;
    padding: 4vw 8vw 4vw 8vw;
    font-size: 2vw;
    line-height: 1.4;
    justify-content: center;
  }

  .phase_item {
    display: flex;
    justify-content: space-around;
    padding-bottom: 2vw;
  }

  .item_list {
    font-family: 'Poor Story';
    font-size: 4vw;
    text-align: center;
    padding-top: 20px;
  }

  .idea_item {
    text-align: center;
    font-size: 3vw;
    font-family: 'Poor Story';
    padding: 1vw 0;
  }
  .text {
    color: white;
  }
  .text:hover {
    color: gold;
  }

  .slide_next {
    font-family: 'Poor Story';
    font-size: 2vw;
    padding-top: 40px;
    padding-bottom: 2px;
  }

  /* 반응형 */
  @media (max-width: 768px) {
    .phase_head {
      font-size: 40px;
    }
    .phase_headline {
      font-size: 3vw;
    }
    .phase_concept {
      font-size: 3.6vw;
      display: block;
    }
    .concept_head {
      font-size: 6vw;
      padding-left: 0px;
    }
    .idea_item{
      font-size: 8vw;
    }
    span {
      display: block;
    }
  }

`

function HideArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

function HomeBackimg() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <HideArrow />,
    prevArrow: <HideArrow />
  };
  return (
    <>
      <RoadmapStyle >
      {/* font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      {/* body */}
      <div className="container_roadmap">
        <div className="phase_carousel">
          <Slider {...settings} className="roadmap_slider">
            <div className="phase_0">
              <h1 className="phase_head">Kuos Coin<br/></h1>
              <div className="phase_concept">
                <div className="concept_head">Why?</div>
                <div className="concept_body">
                  <span>KuosCoin은 전 세계 누구에게나 거의 제로에 가까운<br/></span>
                  <span>비용으로 거래가 가능하게 하는 P2P 암호화페 입니다.<br/></span>
                  <span>KuosCoin은 탈 중앙화된 오픈 소스 글로벌 결제 네트워크입니다.<br/></span>
                  <span>거래량 및 유동성을 갖춘 Kuoscoin은 Bitcoin을 보완하는 코인입니다.<br/></span>
                </div>
              </div>
              <div className="phase_item">
            
              </div>
              <ul className="item_list">
                  <li className="slide_next"><br/><br/>swipe page</li>
                </ul>
            </div>
            <div className="phase_1">
              <h1 className="phase_head">회사소개</h1>
              <div className="phase_item">
                <ul className="item_list">
                <br/>
                <li className="item_list">Kuos Foundation은 최첨단 블록체인 기술을</li>
                <li className='item_list'>개발 및 홍보하여 ​​사회의 이익을 위해</li>
                <li className='item_list'>KuosCoin을 발전시키는 것을 사명으로 하는</li>
                <li className='item_list'>비영리 조직입니다.</li><br/>
                <li className="slide_next">swipe page</li>
                </ul>
              </div>
            </div>
            <div className="phase_2">
              <h1 className="phase_head">기부하기</h1>
              <div className="phase_item">
                <ul className="item_list">
                모든 기부는 인지도를 높이고<br/> kuoscoin의 전 세계적인 영향력을<br/>높이기 위해 설립된 kuos Foundation에 <br/>직접 자금을 지원합니다.
                  <li className="idea_item"><br/><a className='text' href='/home'>kuosCoin 기부하기</a></li>
                  <li className="idea_item"><a className='text' href='/home'>bitCoin 기부하기</a></li>
                  <li className="idea_item"><a className='text' href='/home'>kakaoPay 기부하기</a></li>
                </ul>
              </div>
            </div>
          </Slider>          
        </div>
      </div>
      </RoadmapStyle>
    </>
  );
}
  
  
  
  
  export default HomeBackimg;