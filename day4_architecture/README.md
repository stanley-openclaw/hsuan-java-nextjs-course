# Day 4: 系統架構與 Component 交互關係

## 學習目標
了解後端開發經典的「三層架構」(3-Tier Architecture) 以及 Spring 的核心精神：IoC (控制反轉) 與 DI (依賴注入)。

## 前置作業
回顧前三天的程式碼，你會發現接收 HTTP 請求、商業邏輯、資料庫操作可能都混在一起寫在 Controller 或某個類別裡。這在大型系統會是一場災難。

## 實作步驟
1. **認識分層架構的職責**：
   - **Controller 層 (`@RestController`)**：只負責接收 HTTP 請求、檢查參數格式，並把請求交給 Service 層。不要在這裡寫商業邏輯。
   - **Service 層 (`@Service`)**：負責系統核心商業邏輯。例如註冊時檢查 email 是否重複、密碼加密等，處理完再呼叫 Repository。
   - **Repository 層 (`@Repository`)**：負責跟資料庫打交道。Day 3 學的 `Spring Data JPA` 就屬於這層。
2. **依賴注入 (Dependency Injection)**：
   - 了解 `@Component` 及其衍生註解 (`@Service`, `@Repository`, `@Controller`)。
   - 練習使用建構子注入 (Constructor Injection) 或 `@Autowired` 將 Repository 注入給 Service，再將 Service 注入給 Controller。
3. **重構專案**：
   - 建立三個 package：`controller`, `service`, `repository`。
   - 將先前的 User 功能按照三層架構重新組織。在 Service 裡實作「新增 User 前檢查帳號是否已存在」的簡單邏輯。

## 為什麼要這樣設計？
透過分層架構，程式碼變得更好維護、更好測試，而且每層各司其職，符合單一職責原則 (SRP)。這也是大型系統的必備基礎。