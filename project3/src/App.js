import React, { useState } from 'react';

const API_KEY = "39b2101b6d9360304edc27e3f4790c39";

function App() {
  const [city, setCity] = useState(""); //입력한 도시
  const [weather, setWeather] = useState(null); //날씨 정보 저장

  const fetchWeather = async () => {
    if(!city.trim()) return;

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try{
      const response = await fetch(API_URL);
      const data = await response.json();

      if(data.cod === 200){
        setWeather(data);
      }else{
        alert("도시를 찾을 수 없습니다!!!");
        setWeather(null);
      }
    }catch(error){
      console.log("날씨 정보 가져오는 중 오류 발생 : ",error);
      alert("데이터를 불러오는 중 문제가 발생했습니다");
    }
  };


  return (
    <div style={{padding:'20px'}}>
      <h1>⛅날씨 검색⛈️</h1>
      <input 
        type="text"
        placeholder='도시 이름 입력'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{padding:'8px', marginRight:'5px'}}
      >
        
      </input>
      <button 
        style={{padding:'8px'}}
        onClick={fetchWeather}
      >
        검색
      </button>

      {/* 날씨 정보 출력 */}
      <div>
        <h2>{weather.name} ({weather.sys.country})</h2>
        <p>🌡️온도: {weather.main.temp}°C</p>
        <p>🌬️바람: {weather.wind.speed} m/s</p>
        <p>🌤️상태: {weather.weather[0].description}</p>
      </div>

    </div>
  );
}

export default App;
