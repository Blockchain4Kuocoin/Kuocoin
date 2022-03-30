import React from "react";
import "./Payment.css";
import Selectpay from "./Selectpay";
import Selectwal from "./Selectwal";
import { useState } from "react";
import axios from "axios";

function Payment(props) {
  
  const [pay, setPay] = useState("");

  const { data, setData, setState } = props;

  function onClickPayment() {
    /* 1. 가맹점 식별하기 */
    let selection = document.getElementById("select_wallet");
    if (selection.value==="") alert("지갑을 선택해 주세요!");
    else {
        const { IMP } = window;
        IMP.init("imp12267773");

        /* 2. 결제 데이터 정의하기 */
        const data = {
          // pg: "naverpay", // PG사
          // pay_method: "card", // 결제수단
          // merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
          amount: pay, // 결제금액
          name: selection.value, // 주문명
          buyer_name: sessionStorage.user_id, // 구매자 이름
          // buyer_tel: "01012341234", // 구매자 전화번호
          // buyer_email: "example@example", // 구매자 이메일
          // buyer_addr: "신사동 661-16", // 구매자 주소
          // buyer_postcode: "06018", // 구매자 우편번호
        };

        /* 4. 결제 창 호출하기 */
        IMP.request_pay(data, callback);   
    }
  }

  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const { success, error_msg } = response;
    if (success) {
      axios.put("http://localhost:3001/wallet", {
        wal_id: document.getElementById("select_wallet").value,
        owner: sessionStorage.user_id,
        balance: pay,
      })
      .then((res) => {
        alert("결제가 완료되었습니다.");
        setData(res.data);
        setState("main");
      });
    } else {
      alert(`결제 실패: ${error_msg}`);
      setState("main");
    }
  }

  // const onClick = () => {
  //   setState("wal")
  // }

  return (
    <>
      <div>
        <Selectwal setState={setState} data={data}/> 
        <Selectpay pay={pay} setPay={setPay}/>
        <button onClick={onClickPayment}>결제하기</button>
      </div>
    </>
  );
}

export default Payment;
