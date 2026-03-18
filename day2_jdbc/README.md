# Day 2: 資料庫基礎與 JDBC 練習

## 學習目標
了解 Spring Boot 如何不依賴強大的 ORM 工具，以最原始的方式使用 JDBC (Java Database Connectivity) 與資料庫進行溝通。這是學習後端必備的內功！

## 前置作業 (開發環境準備)
1. **資料庫設定**：在專案中加入 `H2 Database` 依賴（輕量級記憶體資料庫，方便練習），或是安裝本地端的 MySQL / PostgreSQL。
2. **依賴加入**：如果昨天沒加，今天要在 `pom.xml` 加入 `Spring Data JDBC` 或 `Spring JDBC` 相關依賴。

## 實作步驟
1. **設定資料庫連線**：
   - 在 `src/main/resources/application.properties` 加上資料庫連線的 url、username、password 等設定。
2. **建立 Table**：
   - 用純 SQL 語法（例如 `schema.sql`）建一個簡單的 `User` 資料表 (包含 id, username, email)。
3. **建立對應的 Java 物件**：
   - 寫一個 `User` 類別 (Class)，屬性對應剛建好的資料表欄位。
4. **撰寫 JDBC 程式碼**：
   - 使用 Spring 提供的 `JdbcTemplate`。
   - 寫一個 API 接收新增使用者的請求，裡面用 `jdbcTemplate.update()` 寫入 `INSERT INTO User ...`。
   - 寫另一個 API 查詢所有使用者，用 `jdbcTemplate.query()` 下 `SELECT * FROM User`，並將結果 RowMapper 成 Java 物件。

## 為什麼要學這個？
現在開發雖然大多使用 ORM 工具，但了解最底層的 JDBC 與 SQL，可以讓你在未來遇到複雜查詢或效能瓶頸時，有能力看懂底層語法並進行優化。