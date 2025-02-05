import React, { useState } from "react";

function App() {
  const [input, setInput] = useState(""); // 입력 값
  const [result, setResult] = useState(0); // 계산 결과

  //숫자버튼 누르면 화면에 보여지게 실행되는 함수
  const handleClick = (value) => {
    setInput(input + value);
  }

  //계산함수
  const calculate = () => {
    try{
      setResult(eval(input));
    }catch{
      setResult("오류");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>🧮계산기🧮</h1>
      <div style={{fontSize:'20px', marginBottom:'10px'}}>결과: {result}</div>
      <div style={{fontSize:'16px', marginBottom:'7px'}}>{input || 0}</div>

      {/* 연산 버튼 */}
      <div>
        {["+", "-", "*", "%"].map((op) => (
          <button 
            onClick={() => handleClick(op)}
            style={{margin:'3px', padding:'5px 10px'}}>
            {op}
          </button>
        ))}
      </div>

      {/* 숫자 버튼 */}
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num)}
              style={{ margin: "5px", padding: "5px 10px", fontSize: "18px" }}
            >
              {num}
            </button>
        ))}
      </div>

      {/* 기능 버튼 */}
      <div>
        <button
          onClick={calculate} 
          style={{padding:'10px 15px'}}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
