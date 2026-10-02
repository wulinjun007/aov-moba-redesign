# 傳說對決 · 十週年｜概念改版 Demo

> 參考對象：[moba.garena.tw](https://moba.garena.tw/)（Garena《傳說對決》台灣官網）
> 設計語言：`design-system-extraction-2026-10 / sites/03-zcode`（Tailwind v4 暗色 Token 體系）
> 形態：純靜態 HTML/CSS/JS，零外部依賴（無 webfont / 無框架 / 無 CDN JS），圖片熱鏈原站 CDN
> ⚠️ 非官方站點——設計練習用 Concept Redesign，與 Garena / 騰訊無隸屬關係

## 功能模組（對照官網）

| 官網功能 | 本站實現 |
|---|---|
| 頂部導航（遊戲資料 / 電競 / 社群下拉 + 商店按鈕） | 固定暗色導航 + 兩組下拉 + 移動端漢堡面板 |
| 最新消息（公告/活動/系統/賽事/教學 分頁） | 25 條真實標題，全部/熱門/活動/系統公告/賽事/教學 分頁過濾 + 顯示更多 |
| 英雄輪播（皮膚推廣 + 更多資訊） | 6 位焦點英雄輪播（真實皮膚文案），自動播放 + 圓點導航 |
| 英雄列表 | 12 位英雄牆（真實立繪），點擊彈出英雄 Modal |
| 遊戲資料（引導/簡介/英雄/裝備/奧義/技能） | 6 張資料卡，外鏈官網真實路徑 |
| 電競（GCS 等六賽事入口 + 隊伍介紹影片） | 6 個賽事 ghost chip + 6 支影片卡（真實 YouTube 縮圖，外鏈播放頁） |
| 漫畫橫幅 | S2C12 橫幅 + 官方粉絲團入口 |
| App Store / Android 下載 | 雙商店膠囊（官方商店直鏈）+ 消保提示 |

## 設計系統對照（03-zcode 提取）

- 底色三級：`#161616` / `#1C1C1C`（oklch 0.205）/ `#2A2A2A`（oklch 0.269），層級靠底色差 + `white/8` hairline，**無陰影**
- 強調色配額制：sky-500 `#0EA5E9` 只做 eyebrow / 賽事徽章；amber-500 `#F59E0B` 做商業重點（熱門徽章、輪播圓點、皮膚名、KV 輝光）
- 白膠囊 = 全站唯一高亮實體：下載 CTA（一屏 ≤2 顆），黑字 14/500 H44
- 圓角檔位 8 / 10 / 16 / 膠囊；主檔 10px，卡片 16px
- 字階：H1 60/700 · H2 36/600 · H3 24/600 · 正文 16/400 · UI 13/500；日期/編號用 mono
- 區塊節奏 88px；斷點 640 / 768 / 1024 / 1280（Tailwind 預設）
- 動效：克制——150ms hover、輪播 350ms 淡入、進場 reveal；全程尊重 `prefers-reduced-motion`

## 目錄

```
index.html      結構 + 導航 + KV + 區塊骨架 + Modal
css/styles.css  Token 層 + 全部元件樣式（含響應式）
js/app.js       資料（NEWS/FEATURED/WALL/GUIDE/VIDEOS）+ 渲染 + 互動
CREDITS.md      素材版權與來源清單
```

## 本地預覽

```bash
cd aov-moba-redesign && python3 -m http.server 8090
# http://localhost:8090
```

## 部署

GitHub（唯一可信源）→ Netlify Production。上線後須公網驗證（curl 200 + 內容抽查）並出 Release Report。
