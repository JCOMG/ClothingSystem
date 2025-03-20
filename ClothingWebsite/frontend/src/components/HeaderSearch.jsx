import React, { useState } from 'react';
import axios from 'axios';
import './HeaderSearch.css';

function HeaderSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);  // ✅ 新增這裡！

  const handleSubmit = function (e) {
    e.preventDefault(); // 告訴瀏覽器不要重新整理畫面
    if (searchTerm.trim() !== '') { // 確認使用者的輸入是否空字串
      axios.post('/api/search', { keyword: searchTerm },{ headers: { 'Content-Type': 'application/json' } })
        .then((res) => setResults(res.data))  // ✅ 把資料存進狀態
        .catch(() => alert('搜尋錯誤，請稍後再試'));
    }
  };

  return (
    <div className="header-container">
      <button aria-label="Open menu" className="menu-button">
        <img src="https://static.marksandspencer.com/icons/svgs/MenuBurger-v3-1.svg?key=v3" alt="menu" width="30" />
      </button>

      <div className="search-bar-container">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            placeholder="Search product, code or brand"
            className="search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            aria-label="Search"
            className="search-button"
          >
            <img
              alt="search"
              width="20"
              src="https://static.marksandspencer.com/icons/svgs/Search-v3-1.svg?key=v3"
            />
          </button>
        </form>

        <div className="search-results">
          {results.length > 0 ? (
            results.map((item) => (
              <div key={item.id} className="result-item">
                {item.name} - ${item.price}
              </div>
            ))
          ) : (
            <p>沒有搜尋結果，請輸入商品名稱</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderSearch;
