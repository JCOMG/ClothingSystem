from flask import Flask, request, jsonify, send_file
import os
import aa

print(123)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # 獲取 `backend` 目錄
REACT_BUILD_DIR = os.path.join(BASE_DIR, "../frontend/build")  # 指向 `frontend/build`

app = Flask(__name__, static_folder=REACT_BUILD_DIR, static_url_path="/")


# API 端點
@app.route('/api/products')
def get_products():
    return jsonify([{"id": 1, "name": "T-Shirt", "price": 20}])


# API 端點 - 接收使用者選擇並回應文字
@app.route('/api/greet', methods=['POST'])
def greet():
    data = request.get_json()
    # request.get_json()：從 React 取得 POST 資料 { choice: "handsome" }
    choice = data.get('choice', '')
    #  choice = data.get('choice', '')：提取 choice 變數 "handsome" or "beautiful"

    if choice == "handsome":
        return "Welcome 帥哥!"
    elif choice == "beautiful":
        return "Welcome 美女!"
    else:
        return "請選擇 帥哥 或 美女", 400


# ✅ 提供 React `index.html`
@app.route('/')
def serve_react():
    try:
        index_path = os.path.join(REACT_BUILD_DIR, 'index.html')
        if not os.path.exists(index_path):
            return "Error: index.html not found", 500
        return send_file(index_path)
    except Exception as e:
        return f"Error: {e}", 500  # 顯示錯誤訊息


# ✅ 提供 React 靜態檔案
@app.route('/<path:path>')
def serve_static_files(path):
    try:
        file_path = os.path.join(REACT_BUILD_DIR, path)
        if not os.path.exists(file_path):
            return "Error: File not found", 404
        return send_file(file_path)
    except Exception as e:
        return f"Error: {e}", 500  # 顯示錯誤訊息

# 上面的程式碼是處理：
# http://127.0.0.1:5000/static/js/main.f31deb18.js -> 這是 React 的 `App.jsx` 編譯後的 JavaScript
# http://127.0.0.1:5000/static/css/main.e6c13ad2.css ->  這是 React 的 APP 的 CSS
# 這樣 Flask 就可以提供 React 轉譯後的 JavaScript，讓前端可以正常運行

if __name__ == '__main__':
    app.run(debug=True)
