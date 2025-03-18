import React, { useState } from "react";
import axios from "axios";
// useState：React 的 狀態管理函數，用來存放 Flask 回應的訊息。
// axios：JavaScript 的 HTTP 請求函式庫，用來與 Flask API 溝通。

function App() {
  const [message, setMessage] = useState("");
// message 存放 Flask 回應的訊息，一開始是 ""（空字串）。
// setMessage() 用來更新 message，當 Flask 回應時，會改變 message 的值。
  function handleChoice(choice) {
    axios
      .post("http://127.0.0.1:5000/api/greet", { choice })
//       發送 POST 請求 到 Flask API /api/greet，並附帶 choice 資料（handsome 或 beautiful）。
      .then(function(response) {
            setMessage(response.data);
            })
//       當 Flask 成功回應時，React 會更新 message。response.data 是 Flask 回傳的 "Welcome 帥哥!" 或 "Welcome 美女!"。
      .catch(function() {
            setMessage("發生錯誤，請再試一次！");
            });
//       如果 Flask 伺服器發生錯誤（比如後端未開啟），React 會顯示 "發生錯誤，請再試一次！"。
  }

  function handleHandsomeClick() {
            handleChoice("handsome");
        }

  function handleBeautifulClick() {
            handleChoice("beautiful");
        }


  return (
    <div>
      <h1>請選擇你的身份</h1>
      <div>
        <button onClick={handleHandsomeClick}> 帥哥 </button>

        <button onClick={handleBeautifulClick}> 美女 </button>

      </div>
      {/* ✅ 顯示 Flask API 回應的訊息 */}
      {message ? <p>{message}</p> : null}
      {/*  當 message 有內容時，顯示 <p>{message}</p>
       otherwise 顯示 null  */}
    </div>
  );
}

export default App;
