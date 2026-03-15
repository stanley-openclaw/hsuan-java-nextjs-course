# Day 5: Backend Best Practices (後端最佳實踐)

## 學習目標
讓你的 API 具備業界標準水準：不再直接暴露資料庫實體給前端，加入參數驗證，並且遇到錯誤時能回傳標準且友善的錯誤訊息。

## 實作步驟
1. **導入 DTO (Data Transfer Object) 模式**：
   - 前端傳來的註冊資料和後端回傳的使用者資訊，不應該直接使用 `@Entity`。
   - 建立 `UserRequestDTO` (接收前端資料) 和 `UserResponseDTO` (回傳給前端)。
   - 在 Service 層處理 Entity 與 DTO 之間的轉換。
2. **加入資料驗證 (Validation)**：
   - 在 `pom.xml` 加入 `spring-boot-starter-validation` 依賴。
   - 在 `UserRequestDTO` 的欄位上加上 `@NotBlank(message = "名稱不能為空")`、`@Email(message = "信箱格式錯誤")` 等註解。
   - 在 Controller 的參數前加上 `@Valid` 或 `@Validated` 啟動驗證。
3. **統一例外處理 (Global Exception Handling)**：
   - 建立一個 `GlobalExceptionHandler` 類別，標註 `@RestControllerAdvice`。
   - 寫一個方法用 `@ExceptionHandler` 攔截資料驗證失敗 (`MethodArgumentNotValidException`) 或自訂的找不到使用者例外 (`UserNotFoundException`)。
   - 將這些例外統一包裝成標準的 JSON 格式回傳（例如包含 `code`, `message`, `data`）。

## 為什麼要這樣設計？
- **DTO** 可以保護資料庫結構不被外洩，也能避免遞迴載入問題。
- **Validation** 確保進入商業邏輯前的資料都是乾淨合法的。
- **統一例外處理** 讓前端不需要猜測 HTTP 狀態碼背後的具體錯誤原因，大幅提升前後端溝通效率。