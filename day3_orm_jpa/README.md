# Day 3: 進入 ORM 的世界 (Spring Data JPA)

## 學習目標
體會 ORM (Object-Relational Mapping) 的強大之處。不用再手刻一堆繁瑣的 SQL 語法，只需操作 Java 物件，Spring Data JPA 會自動幫我們轉換成對應的 SQL 指令。

## 前置作業
1. **加入依賴**：在 `pom.xml` 中移除前一天的純 JDBC 設定，改加入 `Spring Data JPA`。
2. 了解 JPA (Java Persistence API) 與 Hibernate 的關聯：Hibernate 是目前 JPA 最主流的實作，也是 Spring Data JPA 底層使用的引擎。

## 實作步驟
1. **標註實體類別 (Entity)**：
   - 將 Day 2 的 `User` 類別加上 `@Entity`。
   - 用 `@Table(name = "users")` 指定資料表名稱。
   - 用 `@Id` 和 `@GeneratedValue(strategy = GenerationType.IDENTITY)` 指定主鍵 (Primary Key) 以及自動遞增策略。
2. **建立 Repository 介面**：
   - 建立一個 `UserRepository` 介面，並繼承 `JpaRepository<User, Long>`。
   - 這個介面已經內建了大部分常用的資料庫操作（如 `save`, `findAll`, `findById`, `deleteById`）。
3. **改寫 Controller**：
   - 在 `UserController` 中透過依賴注入 (`@Autowired`) 引入 `UserRepository`。
   - 將原本呼叫 `jdbcTemplate` 的部分，全部換成呼叫 `userRepository.save()` 或 `userRepository.findAll()`。

## 為什麼要學這個？
ORM 讓我們可以用物件導向的思維來處理資料，大幅減少重複的 SQL 程式碼，並且提高了開發速度。這是業界標準做法！