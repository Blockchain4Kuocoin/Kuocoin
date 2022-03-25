import { useEffect, useState, useLayoutEffect } from "react";
import React from "react";
import axios from "axios";

import styled from "styled-components";

const St = {
  Container: styled.div`
    justify-content: center;
    width: 100%;
    height: 212px;
    background-color: white;
    font-size: 0.8rem;
    color: #666;
  `,
};

export default function OrderInfoTradeList() {
  const [state, setState] = useState({
    id: sessionStorage.user_id,
    wallet: "",
    coinName: "",
    quantity: "",
    price: "",
    time: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/trade", {
        params: { id: state.id },
      })
      .then((res) => {
        const tmp = res.data;
        console.log(tmp);

        setState({
          id: sessionStorage.user_id,
          wallet: tmp.wal_id,
          coinName: tmp.coinname,
          quantity: tmp.quantity,
          price: tmp.price,
          time: tmp.paytime,
        });
      });
  }, []);
  return (
    <St.Container>
        <p>지갑: {state.wallet} 코인종류: {state.coinName} 수량: {state.quantity} 구매가격: {state.price}</p>
        <p>거래시간: {state.time}</p>
    </St.Container>
  );
}
