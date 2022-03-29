import { useEffect, useState, useLayoutEffect } from "react";
import React from "react";
import axios from "axios";

import styled from "styled-components";

import TradeListItem from "./TradeListItem";

import moment from "moment-timezone";
import Decimal from "decimal.js";

const St = {
  Container: styled.article`
    width: 100%;
    height: 100%;
    background-color: white;
    margin-top: 10px;
    @media ${({ theme }) => theme.mobileM} {
      margin-top: 0;
    }
  `,
  HiddenH3: styled.h3`
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0, 0);
    clip-path: polygon(0, 0);
    overflow: hidden;
    text-indent: -9999px;
  `,
  TradeListUL: styled.ul`
    overflow-y: scroll;
    scrollbar-color: ${(props) => props.scrollColor};
    scrollbar-width: thin;
    scrollbar-base-color: ${(props) => props.scrollColor};
    &::-webkit-scrollbar {
      width: 5px;
      background-color: white;
      border-radius: 5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.scrollColor};
      border-radius: 5rem;
    }
    height: 320px;
  `,
  TradeListTitle: styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 25px;
    background-color: ${({ theme }) => theme.lightGray1};
    font-size: 0.9rem;

    @media ${({ theme }) => theme.mobileS} {
      font-size: 0.6rem;
    }
  `,
  TitleListItem: styled.li`
    width: 20%;

    min-width: 58px;
    text-align: ${({ textAlign }) => textAlign || "center"};
    @media ${({ theme, mobileSNone }) => (mobileSNone ? theme.mobileS : true)} {
      display: none;
    }

    @media ${({ theme, mobileMNone }) => (mobileMNone ? theme.mobileM : true)} {
      display: none;
    }

    @media ${({ theme, mobileSNone }) => mobileSNone || theme.mobileS} {
      width: 50%;
    }
  `,
};

export default function OrderInfoTradeList({ theme, coinSymbol }) {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/trade", {
        params: { 
          id: sessionStorage.user_id, 
          coinSymbol: coinSymbol,
        },
      })
      .then((res) => {
        const tmp = res.data;
        console.log(tmp);
        setState(tmp);
      });
  }, []);
  return (
    <St.Container>
      <St.HiddenH3>실시간 체결내역</St.HiddenH3>
      <St.TradeListTitle bgColor={theme.lightGray1}>
        <St.TitleListItem mobileSNone={true} textAlign={"center"}>
          체결시간
        </St.TitleListItem>
        <St.TitleListItem>체결가격</St.TitleListItem>
        <St.TitleListItem>체결량</St.TitleListItem>
        <St.TitleListItem mobileMNone={true} textAlign={"right"}>
          체결금액
        </St.TitleListItem>
      </St.TradeListTitle>
      <St.TradeListUL scrollColor={theme.middleGray}>
        { state.map((tradeList, i) => {
            const tradeAmount = new Decimal(Number(tradeList.quantity)) + ""
            return (
              <TradeListItem
              theme={theme}
              index={i}
              key={`tradeList-${i}`}
              date={moment(tradeList.paytime).format("MM.DD")}
              time={moment(tradeList.paytime).format("HH:mm")}
              tradePrice={tradeList.price / tradeAmount}
              changePrice={Math.random()*2 >= 1 ? 1 : -1}
              tradeAmount={+tradeAmount}
              askBid={tradeList.method==="B"? "BID" : "SELL"}
              />
            )
          })
        }
      </St.TradeListUL>
    </St.Container>  
  );
}
