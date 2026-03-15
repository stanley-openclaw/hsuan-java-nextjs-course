# Day 7: 前後端大串接與 CORS 處理

## 學習目標
讓 Day 6 寫好的 Next.js 前端，成功呼叫 Day 5 寫好的 Spring Boot 後端 API，完成全端應用的最後一哩路！

## 實作步驟
1. **處理 CORS (Cross-Origin Resource Sharing)**：
   - 預設情況下，前端 (例如在 `localhost:3000`) 呼叫不同 port 的後端 (例如 `localhost:8080`) 會被瀏覽器擋下，這叫 CORS 問題。
   - 在 Spring Boot 中新增一個配置類別 (`WebMvcConfigurer`)，設定 `@CrossOrigin` 或 `addCorsMappings`，允許前端的網址存取。
2. **前端呼叫 API**：
   - 在 Next.js 中使用原生的 `fetch` API 或安裝 `axios` 庫。
   - **讀取列表**：在 `useEffect` 中發送 GET 請求到 `http://localhost:8080/users`，拿到資料後用 `useState` 更新列表。
   - **新增使用者**：在表單的 `onSubmit` 事件中，發送 POST 請求與 JSON 資料到後端。成功後重新呼叫讀取列表的 API 來更新畫面。
3. **處理 Loading 與錯誤狀態**：
   - 在前端加上一個 `isLoading` 的狀態，在呼叫 API 時顯示「載入中...」。
   - 如果後端回傳錯誤（例如 Day 5 寫的驗證失敗），在前端擷取錯誤訊息並用 alert 或畫面提示使用者。

## 總結
恭喜！到這裡你已經完成了一個前後端分離、從無到有的迷你 Web 應用程式。從資料庫、後端分層架構、RESTful API 到前端狀態管理與 API 串接，這些都是現代全端開發的基石。