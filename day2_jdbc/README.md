# Day 2: 建立你的第一個 API 與資料庫連線

今天的目標是將我們的 Spring Boot 應用程式與資料庫連接起來，並建立一個可以操作資料的 API。

我們已經為你準備好一個完整的範例專案，讓你更容易理解整個流程。

## 核心概念

- **`@Entity`**: 一個普通的 Java 物件 (POJO)，但它會被 JPA 對應到資料庫中的一個表格。
- **`@Repository`**: 一個介面，繼承 Spring Data JPA 的 `JpaRepository` 後，你就無須編寫任何 SQL 語法，即可擁有完整的 CRUD (Create, Read, Update, Delete) 功能。
- **`@RestController`**: 負責接收外部的 HTTP 請求 (例如來自瀏覽器或手機 App)，處理後回傳資料 (通常是 JSON 格式)。
- **H2 Database**: 一個輕量級的記憶體資料庫，非常適合在開發階段使用，因為它不需要額外安裝，而且每次重啟應用程式時都會是乾淨的狀態。

## 範例專案

所有相關的程式碼都放在本目錄下的 `example` 資料夾中。你可以直接閱讀、參考，甚至執行它。

### 如何執行與測試範例

1.  **進入範例目錄**：
    ```bash
    cd day2/example
    ```

2.  **使用 Maven 啟動應用程式**：
    ```bash
    mvn spring-boot:run
    ```
    當你看到類似 `Started DemoApplication in X.XXX seconds` 的訊息時，就表示後端伺服器已經成功啟動在 `localhost:8080`。

3.  **測試 API 端點** (打開一個新的終端機分頁)：
    - **取得所有使用者 (GET)**：
      ```bash
      curl http://localhost:8080/api/users
      ```
      你應該會看到包含 `Alice` 和 `Bob` 的 JSON 回應，這是我們在程式啟動時預先載入的資料。

    - **新增一位使用者 (POST)**：
      ```bash
      curl -X POST http://localhost:8080/api/users \
      -H "Content-Type: application/json" \
      -d '{"name":"Charlie", "email":"charlie@example.com"}'
      ```
      成功後，你會看到剛剛新增的 `Charlie` 的資料被回傳。

4.  **瀏覽 H2 資料庫後台 (可選)**：
    - 在瀏覽器中打開 `http://localhost:8080/h2-console`
    - 確認 `JDBC URL` 欄位的值是 `jdbc:h2:mem:testdb`
    - 使用者名稱填 `sa`，密碼留空
    - 點擊 `Connect`，你就可以在網頁介面中直接看到資料庫的表格和內容。

## 你的任務

請參考 `example` 資料夾中的範例，在你自己的 `day1` 作業基礎上，完成以下步驟：

1.  新增 `spring-boot-starter-data-jpa` 和 `h2` 的 Maven 依賴。
2.  設定 `application.properties` 來啟用 H2 console 並連接到記憶體資料庫。
3.  建立一個你自選主題的 `Entity` (例如 `Product`, `Book`, `Movie` 等)。
4.  為你的 `Entity` 建立對應的 `Repository`。
5.  建立一個 `Controller`，至少提供 `GET` (查詢全部) 和 `POST` (新增一筆) 的 API 端點。
6.  (加分題) 像範例一樣，在程式啟動時自動插入幾筆初始資料，方便測試。

完成後，請將你的程式碼 commit 並 push 到你的分支。
