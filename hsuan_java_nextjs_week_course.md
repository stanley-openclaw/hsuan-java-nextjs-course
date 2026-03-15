# 一週 Java Spring Boot 與 Next.js 全端入門教程（給 Hsuan）

這份教程專為對 Java 不熟的開發者設計，目標是在一週內掌握 Java Spring Boot 後端開發的基礎，並能與 Next.js 前端進行串接，同時了解業界常用的 Best Practices。

## Day 1: 環境建置與 Spring Boot 初體驗
**目標：了解 Java 生態系、Maven 工具，並 Vibe 出第一個 API。**
* **學習項目：**
  * 安裝 Java JDK (17+) 與 IDE (IntelliJ IDEA 或 VS Code)。
  * 認識 Maven：`pom.xml` 的作用、依賴管理 (Dependencies)。
  * 使用 Spring Initializr (start.spring.io) 建立第一個 Spring Boot 專案。
  * 實作第一個 RESTful API：`@RestController`, `@GetMapping` 回傳 "Hello World"。
* **實作任務：** 啟動伺服器，使用瀏覽器或 Postman 打 API 並成功看到回傳值。

## Day 2: 資料庫基礎與 JDBC 練習
**目標：學習 Spring Boot 如何與資料庫溝通（不透過 ORM 的底層做法）。**
* **學習項目：**
  * 設定本地資料庫（MySQL 或 PostgreSQL）或使用內建的 H2 Database。
  * 在 `application.properties` 或 `application.yml` 設定資料庫連線。
  * 認識 `JdbcTemplate`：撰寫原生 SQL (SELECT, INSERT) 來操作資料。
* **實作任務：** 建立一個 User 資料表，寫一個 API 透過 JDBC 新增與查詢 User。

## Day 3: 進入 ORM 的世界 (Spring Data JPA)
**目標：體會 ORM 的強大，了解物件與關聯式資料庫的映射。**
* **學習項目：**
  * 什麼是 ORM (Object-Relational Mapping)？為何要用它取代純 JDBC？
  * 實作實體類 (Entity)：`@Entity`, `@Table`, `@Id`, `@GeneratedValue`。
  * 使用 Spring Data JPA Repository 介面，不需要寫 SQL 就能完成 CRUD。
* **實作任務：** 將 Day 2 的 User 功能改寫為使用 Spring Data JPA 實作。

## Day 4: 系統架構與 Component 交互關係
**目標：理解後端分層架構 (3-Tier Architecture) 與依賴注入 (DI)。**
* **學習項目：**
  * 了解 Spring 的 IoC (控制反轉) 與 DI (依賴注入)：`@Component`, `@Autowired`。
  * 經典三層架構：
    * **Controller 層**：負責接收 HTTP 請求與路由 (`@RestController`)。
    * **Service 層**：負責商業邏輯 (`@Service`)。
    * **Repository 層**：負責資料庫溝通 (`@Repository`)。
* **實作任務：** 重構之前的程式碼，嚴格區分 Controller、Service 與 Repository。

## Day 5: Backend Best Practices (後端最佳實踐)
**目標：寫出符合業界標準的健壯程式碼。**
* **學習項目：**
  * **DTO (Data Transfer Object)**：不要直接將 Entity 暴露給前端，建立 RequestDTO 與 ResponseDTO。
  * **統一例外處理 (Global Exception Handling)**：使用 `@RestControllerAdvice` 與 `@ExceptionHandler` 攔截錯誤並回傳標準格式。
  * **資料驗證 (Validation)**：使用 `spring-boot-starter-validation` (`@NotNull`, `@Size`) 檢查前端傳來的資料。
  * RESTful API 命名規範與 HTTP Status Codes 應用。
* **實作任務：** 為 User API 加上 DTO 轉換、輸入驗證，並實作一個找不到 User 時的自定義 Exception 與統一回傳格式。

## Day 6: 前端現身 - Next.js 基礎
**目標：建立現代化前端專案並實作簡單的 UI。**
* **學習項目：**
  * 使用 `create-next-app` 初始化 Next.js 專案 (App Router 或 Pages Router)。
  * React 基礎複習：Functional Components、Hooks (`useState`, `useEffect`)。
  * 建立簡單的 UI：一個表單用來新增 User，一個列表用來顯示 User。
* **實作任務：** 完成前端頁面切版（暫時使用假資料呈現列表）。

## Day 7: 前後端大串接與 CORS 處理
**目標：讓 Next.js 前端成功呼叫 Spring Boot 後端，完成全端閉環。**
* **學習項目：**
  * 什麼是 CORS (Cross-Origin Resource Sharing)？為什麼前端打不到後端 API？
  * 在 Spring Boot 中設定 Global CORS 配置。
  * 在 Next.js 中使用 `fetch` 或 `axios` 呼叫後端 API。
  * 處理非同步請求的 loading 狀態與錯誤顯示。
* **實作任務：** 將 Day 6 的前端接上 Day 5 的後端 API，完成一個可以從畫面新增並即時列出 User 的完整微型系統。

---
**💡 結語：** 這七天走完後，Hsuan 將具備現代 Web 開發的基本輪廓，並能清楚分辨 JDBC 與 ORM 的差異、後端架構的職責，以及前後端分離的實作方式。