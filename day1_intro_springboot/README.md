# Day 1: 環境建置與 Spring Boot 初體驗

## 學習目標
了解 Java 基礎生態系，學會使用 Maven 與 Spring Boot 快速架設一個後端應用程式，並建立第一支 API。

## 前置作業 (開發環境準備)
1. 安裝 Java Development Kit (JDK) 17 或更新版本。
2. 安裝 IDE：推薦使用 IntelliJ IDEA Community 版，或是 VS Code 搭配 Java Extension Pack。
3. 認識 Maven：在 Java 世界中，這是一個強大的建置與依賴管理工具，`pom.xml` 是它的核心設定檔。

## 實作步驟
1. **建立專案**：
   - 到 [Spring Initializr](https://start.spring.io/)。
   - 選擇 Maven Project, Language: Java。
   - Spring Boot 版本選擇穩定的 3.x。
   - 填寫 Group 與 Artifact (例如 `com.example` / `demo`)。
   - 加入 Dependencies: `Spring Web`。
   - 點擊 GENERATE 下載 ZIP 檔並解壓縮。
2. **匯入 IDE**：
   - 用 IDE 開啟解壓縮後的資料夾。
   - 讓 Maven 下載完所有依賴套件。
3. **撰寫第一支 API**：
   - 在主程式同層的 package 下建立一個新類別 `HelloController`。
   - 加上 `@RestController` 註解。
   - 寫一個方法，加上 `@GetMapping("/hello")`，回傳一個字串 `"Hello, Hsuan!"`。
4. **啟動與測試**：
   - 執行主程式裡的 `main` 方法啟動伺服器。
   - 打開瀏覽器輸入 `http://localhost:8080/hello`，確認是否看到剛剛寫的字串。

## 為什麼要這樣做？
Spring Boot 自動幫我們把 Tomcat 伺服器包在裡面了，所以我們不需要自己架設伺服器，只要專注寫 API 邏輯就能快速跑起來。這也是目前業界最常用的 Java 後端開發模式！