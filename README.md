# youtube-clone-react 專案

<img src="/assets/home-pc.png" style="box-shadow:0 4px 6px -1px rgba(0,0,0,.1)">

使用 React 前端框架複刻 YouTube 畫面及部分功能，使用 YouTube Data API 串接。
未提供使用者互動操作的相關功能，ex: 訂閱、按讚等功能。
(因 API 會顯示 YT_API_KEY，目前只提供截圖畫面)

基本功能：

- Home 頁面
- Results 搜尋結果頁面
- Watch 影片頁面

專案目標：

1. RWD 畫面呈現
2. 影片搜尋功能
3. 搜尋結果頁面影片上拉載入更多
4. 影片頁面留言上拉載入更多

## 安裝

請依照以下步驟安裝此專案，使用前面請先申請 [YouTube API KEY](https://developers.google.com/youtube/v3/getting-started)。

### 取得專案

```
git clone https://github.com/wendyhsiao/youtube_clone_react.git
```

### 移動至專案

```
cd youtube_clone_react
```

### 安裝專案

```
npm install
```

### 環境變數設定

新增.env 檔案，加入 `VITE_REACT_APP_YT_API_KEY` 環境變數

```
VITE_REACT_APP_YT_API_KEY=XXXXX(輸入你的YT_API_KEY)
```

### 運行專案

```
npm run dev
```

### 開啟專案

在瀏覽器網址列輸入以下即可看到畫面

```
http://localhost:5173
```

## 問題排除

此專案使用 React 18，Node 請使用 14+ 以上的版本

### 查看目前使用中版本

```
node -v
```

### 查看現有安裝版本

```
nvm ls
```

### 切換版本

```
nvm use v14.xx.x
```

## 專案技術

| 技術                   | 版本     |
| ---------------------- | -------- |
| Node.js                | v16.15.0 |
| React                  | v18.2.0  |
| React Router           | v6.20.1  |
| React Query            | v3.39.3  |
| Styled Components      | v6.1.1   |
| react-loading-skeleton | v3.3.1   |
| vite-plugin-svgr       | v4.2.0   |

## Demo 畫面


