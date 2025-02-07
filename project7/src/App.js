import React, { useEffect } from "react";

//컴포넌트가 랜더링될때마다 특정 작업을 수행
function App() {

  useEffect(() => {
    console.log("컴포넌트가 마운트됨!");

    return () => {
      console.log("컴포넌트가 언마운트됨!"); //클린업함수:컴포넌트가 사라질때 실행됨(언마운트)
    }
  }, []); //마운트/언마운트시 실행, 빈배열이여서 컴포넌트가 처음 화면에 나타날때 한번만 실행됨
  return <h1>useEffect 기본 예제</h1>
}

export default App;

/*
 
컴포넌트가 마운트됨!
컴포넌트가 언마운트됨!
컴포넌트가 마운트됨!

콘솔에 이렇게 찍힘
-> React의 strict mode때문!
-> strict mode는 개발 중 잠재적인 문제를 감지하기 위해 일부 동작을 의도적으로 두번 실행
-> 이 과정은 개발환경에서만 발생!

[해결방법]
index.js에서 <React.StrictMode>태그 삭제하기!


====>
  컴포넌트가 마운트됨!

한번만 찍혀야지 정상 결과임

 */