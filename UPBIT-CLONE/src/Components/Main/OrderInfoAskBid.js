import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  changeAmountAndTotalPrice,
  changePriceAndTotalPrice,
  changeTotalPriceAndAmount,
} from "../../Reducer/coinReducer";
import OrderInfo from "./OrderInfo";
import OrderInfoTradeList from "./OrderInfoTradeList";
import axios from "axios";

const St = {
  Container: styled.section`
    width: 100%;
    height: 50%;
    background-color: white;
    font-family: 'Poor Story';
  `,
  OrderTypeContainer: styled.div`
    display: flex;
    height: 40px;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.lightGray2};

    @media ${({ theme }) => theme.mobileS} {
      font-size: 0.8rem;
    }
  `,
  OrderType: styled.button`
    width: 33.33%;
    height: 100%;
    background-color: white;
    border: none;
    border-bottom: 3px solid
      ${({ borderBottom }) => borderBottom || "tranceparent"};
    outline: 0;
    font-weight: 900;
    color: ${({ fontColor }) => fontColor || "black"};
  `,
  OrderInfoContainer: styled.div`
    width: 100%;
    padding: 15px;
    padding-top: 0;

    @media ${({ theme }) => theme.mobileS} {
      padding: 5px;
    }
  `,
  OrderInfoDetailContainer: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 38px;
    margin-top: 15px;

    @media ${({ theme }) => theme.mobileS} {
      font-size: 0.6rem;
      margint-right: 10px;
    }
  `,
  OrderInfoDetailTitle: styled.span`
    display: block;
    width: 20%;
    min-width: 52px;
    max-width: 100px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #666;
    margin-left: 5px;
    margin-right: 5px;
  `,
  OrderInfoInputContainer: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
  `,
  OrderInfoInput: styled.input`
    width: ${({ width }) => width || "100%"};
    height: 100%;
    margin: 0;
    padding: 5px;
    padding-right: 15px;
    border: 1px solid ${({ theme }) => theme.lightGray2};
    text-align: right;
    font-size: 0.95rem;
    font-weight: ${({ fontWeight }) => fontWeight};
    @media ${({ theme }) => theme.mobileS} {
      font-size: 0.6rem;
    }
  `,
  Button: styled.button`
    width: ${({ width }) => width || "50px"};
    min-width: ${({ minWidth }) => minWidth};
    height: ${({ height }) => height || "38px"};
    margin-right: ${({ marginRight }) => marginRight};
    margin: ${({ margin }) => margin};
    background-color: ${({ bgColor }) => bgColor || "tranceparent"};
    border: none;
    border-top: 1px solid ${({ borderColor }) => borderColor || "tranceparent"};
    border-right: 1px solid
      ${({ borderColor }) => borderColor || "tranceparent"};
    border-bottom: 1px solid
      ${({ borderColor }) => borderColor || "tranceparent"};
    outline: none;
    color: ${({ fontColor }) => fontColor || "black"};
    font-size: ${({ fontSize }) => fontSize};
    font-weight: 900;
    font-family: 'Poor Story' ;
  `,
  PossibleAmount: styled.span`
    display: block;
    width: 100%;
    text-align: right;
    font-size: 1.2rem;
    font-weight: 600;
    @media ${({ theme }) => theme.mobileS} {
      font-size: 1rem;
    }
  `,
  Unit: styled.span`
    margin-left: 5px;
    font-size: 0.8rem;
    font-weight: 500;
  `,
  OrderBtnContainer: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 50px;

    @media ${({ theme }) => theme.mobileS} {
      font-size: 0.8rem;
    }
  `,
};

const OrderInfoAskBid = ({
  theme,
  selectedAskBidOrder,
  coinSymbol,
  orderPrice,
  orderAmount,
  orderTotalPrice,
}) => {
  const dispatch = useDispatch();
  const changePrice = useCallback(
    (e) =>
      dispatch(
        changePriceAndTotalPrice(
          parseInt(e.target.value.replace(/[^0-9-.]/g, ""))
        )
      ),
    [dispatch]
  );
  const changeAmount = useCallback(
    (e) => {
      dispatch(
        changeAmountAndTotalPrice(e.target.value.replace(/[^0-9-.]/g, ""))
      );
    },
    [dispatch]
  );
  const changeTotalPrice = useCallback(
    (e) =>
      dispatch(
        changeTotalPriceAndAmount(
          parseInt(e.target.value.replace(/[^0-9-.]/g, ""))
        )
      ),
    [dispatch]
  );

  if (coinSymbol === 'BTG') coinSymbol = 'KUOS'; 

  const [wallet, setWallet] = useState({
    balance: 0,
    coinSymbol: 0,
  });

  const [price, setPrice] = useState("0")

  useEffect(() => {
    let wallet;
    axios.get("http://localhost:3001/mypage", {
      params: {
        id: sessionStorage.user_id,
      }
    })
    .then((res) => {
      console.log(res.data);
      wallet = res.data.wallet;
      if (res.data.wallet !== null) {
        axios.get("http://localhost:3001/wallet", {
          params: {
            owner: sessionStorage.user_id,
          }
        }).then((res) => {
          res.data.forEach(ele => {
            if (ele.wal_id === wallet) {
              setWallet(ele);
              let result = "";
              let tmp = ele.balance;
              let start = tmp.length % 3 === 0 ? 0 : tmp.length % 3 === 1 ? 1 : 2;
              if (tmp.length < 3) {
                  setPrice(tmp)
                  return;
              }
              for (let i = 0; i < parseInt(tmp.length / 3)+1; i++) {
                  if (i === 0) result += tmp.slice(0, start)
                  else result += tmp.slice(3*(i-1)+start, 3*i+start)
                  if (i !== parseInt(tmp.length / 3)) result += ',';
              }
              console.log("result: " + result)
              if (result.startsWith(',')) result = result.slice(1,result.length+1)
              setPrice(result);
              return;
            }
          })
        })
      }
   })
  }, []);

  const onClick = () => {
    console.log(orderTotalPrice);
    console.log(coinSymbol);
    console.log(orderAmount);
    console.log(orderPrice);
    if (!sessionStorage.user_id) alert("????????? ??? ?????? ???????????????.");
    else if (!wallet.wal_id) alert("?????? ?????? ??? ??????????????????");
    else {
      if (selectedAskBidOrder === "bid"){
        if (orderPrice===0) alert("????????? ??????????????????.");
        else if (orderTotalPrice < 10000) alert("10000??? ?????? ??????????????????!");
        else if (wallet.balance < orderTotalPrice) alert("??????????????? ??????????????????.");
        else {
          axios.put("http://localhost:3001/order/buy", {
            userid: sessionStorage.user_id,
            wal: wallet.wal_id,
            orderPrice: orderTotalPrice,
            coinSymbol: coinSymbol,
            orderAmount: orderAmount,
            wal_addr: wallet.wal_addr,
          })
          .then((res) => {
            console.log(res.data);
            // setWallet(res.data);
            document.location.reload();
            alert("?????????????????????!");
          })
        }
      }
      else {
        // console.log(orderAmount);
        // console.log(Number(wallet[`${coinSymbol}`]) < orderAmount);
        if (orderPrice===0) alert("????????? ??????????????????.");
        else if (orderTotalPrice < 10000) alert("10000??? ?????? ??????????????????!");
        else if (Number(wallet[`${coinSymbol}`]) < orderAmount) alert("??????????????? ??????????????????.");
        else {
          axios.put("http://localhost:3001/order/sell", {
            userid: sessionStorage.user_id,
            wal: wallet.wal_id,
            orderPrice: orderTotalPrice,
            coinSymbol: coinSymbol,
            orderAmount: orderAmount,
            wal_addr: wallet.wal_addr,
          })
          .then((res) => {
            console.log(res.data);
            // setWallet(res.data);
            document.location.reload();
            alert("?????????????????????!");
          })
        }
      }
    }
  }

  return (
    <St.OrderInfoContainer theme={theme}>
      {selectedAskBidOrder !== "tradeList" ? (
        <>
          <St.OrderInfoDetailContainer>
            <St.OrderInfoDetailTitle>????????????</St.OrderInfoDetailTitle>
            <St.PossibleAmount>
              {selectedAskBidOrder === "bid" ? price : wallet[`${coinSymbol}`] ? wallet[`${coinSymbol}`] : 0}
              <St.Unit>
                {selectedAskBidOrder === "bid" ? "KRW" : coinSymbol}
              </St.Unit>
            </St.PossibleAmount>
          </St.OrderInfoDetailContainer>
          <St.OrderInfoDetailContainer>
            <St.OrderInfoDetailTitle>
              {selectedAskBidOrder === "bid" ? "????????????" : "????????????"}
            </St.OrderInfoDetailTitle>
            <St.OrderInfoInputContainer>
              <St.OrderInfoInput
                onChange={changePrice}
                value={orderPrice ? orderPrice.toLocaleString() : ""}
                fontWeight={800}
                placeholder={0}
              />
            </St.OrderInfoInputContainer>
          </St.OrderInfoDetailContainer>
          <St.OrderInfoDetailContainer>
            <St.OrderInfoDetailTitle>????????????</St.OrderInfoDetailTitle>
            <St.OrderInfoInput
              onChange={changeAmount}
              value={orderAmount ? orderAmount.toLocaleString() : ""}
              placeholder={0}
            />
          </St.OrderInfoDetailContainer>
          <St.OrderInfoDetailContainer>
            <St.OrderInfoDetailTitle>????????????</St.OrderInfoDetailTitle>
            <St.OrderInfoInput
              onChange={changeTotalPrice}
              value={orderTotalPrice ? orderTotalPrice.toLocaleString() : ""}
              placeholder={0}
            />
          </St.OrderInfoDetailContainer>
          {
            <St.OrderBtnContainer>
              <St.Button
                
                width={"60%"}
                bgColor={theme.test}
                fontSize={"1.1rem"}
                fontColor={"white"}
                margin={"auto"}
                onClick={onClick}
              >
                ????????????
              </St.Button>
            </St.OrderBtnContainer>
          }
        </>
      ) : (
        <OrderInfoTradeList theme={theme} coinSymbol={coinSymbol}/>
      )}
    </St.OrderInfoContainer>
  );
};

export default React.memo(OrderInfoAskBid);
