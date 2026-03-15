# Day 6: 前端現身 - Next.js 基礎

## 學習目標
將焦點轉移到前端。學習使用 React 與 Next.js 建立一個現代化的前端專案，並實作與後端互動的介面。

## 前置作業
1. 安裝 Node.js (建議 v18 或以上版本)。
2. 認識 Next.js：這是一個基於 React 的全端框架，提供了 SSR (伺服器端渲染) 和 App Router/Pages Router 等強大功能。目前業界非常主流。

## 實作步驟
1. **初始化 Next.js 專案**：
   - 開啟終端機，執行 `npx create-next-app@latest my-frontend-app`。
   - 依照提示選擇是否使用 TypeScript、Tailwind CSS、App Router (建議使用 App Router，這是最新標準)。
2. **建立基礎 UI 組件**：
   - 清除首頁預設內容，建立兩個主要區塊：
     1. **新增使用者表單 (Form)**：包含名稱、Email 欄位以及一個送出按鈕。
     2. **使用者列表 (List)**：用來展示目前系統中的使用者。
3. **React 狀態管理基礎**：
   - 練習使用 React Hooks：
     - `useState`：用來儲存表單的輸入值，以及從後端取得的使用者列表。
     - `useEffect`：用來在元件載入時觸發某些動作 (例如呼叫 API，明天會用到)。
4. **Mock Data (假資料測試)**：
   - 暫時先在程式碼裡寫死幾筆假資料 (Mock Data)，讓 UI 能先渲染出來，確保畫面切版沒問題。

## 為什麼要學這個？
全端工程師不只要會寫後端 API，也要知道前端如何呈現資料。Next.js 是目前前端生態中非常受歡迎且強大的解決方案。