/* ============================================================
   傳說對決 · 概念改版 Demo — 資料與互動
   內容來源：moba.garena.tw（2026-10-02 抓取之真實標題與素材連結）
   設計語言：design-system-extraction-2026-10 / 03-zcode
   ============================================================ */

"use strict";

const CDN = "https://cdngarenanow-a.akamaihd.net/mgames/kgcenter/tw/client/GameData/Hero";
const heroImg = (id, file) => `${CDN}/${id}/${file}`;

/* ---------------- 資料 ---------------- */

// 最新消息（標題取自官網首頁；日期為依標題推定之近值）
const NEWS = [
  { date: "2026.10.01", cat: "event",  hot: true,  title: "儲值 1 點券 十月桌面遊戲 | 儲值簽到即領造型" },
  { date: "2026.09.30", cat: "event",  hot: true,  title: "傳說對決 × Red Bull 十週年聯名罐登場—購買就有機會帶走稀世等級造型！" },
  { date: "2026.09.30", cat: "event",  hot: false, title: "獸煌金盃立體卡、弗夢夢皮革卡 icash 2.0 ｜ 9/30 開放預購，購買必得限定虛寶！" },
  { date: "2026.09.28", cat: "event",  hot: false, title: "傳說聖典第九十四篇章九幽外道 │ 聖典預購開跑！" },
  { date: "2026.09.25", cat: "event",  hot: true,  title: "來幫造型增添多重色彩 | 聖典裝扮箱限時上市" },
  { date: "2026.09.24", cat: "system", hot: false, title: "09 / 24（四）15：00 伺服器不停機更新公告" },
  { date: "2026.09.23", cat: "event",  hot: true,  title: "點亮印記尋找俏皮活潑女團成員 │WaVe波動 限時重返" },
  { date: "2026.09.22", cat: "event",  hot: true,  title: "記憶挑戰！十週年活動抽選" },
  { date: "2026.09.20", cat: "event",  hot: false, title: "琉璃仙境山之宮主｜若伊 琉璃仙靈·蘩章 陪你過好年" },
  { date: "2026.09.18", cat: "event",  hot: false, title: "龍血之力降世 │ 高級奪寶兌換更新 空間魔晶豪華箱同步上架" },
  { date: "2026.09.16", cat: "event",  hot: false, title: "晝影角鬥場｜全新夜叉限定雙色造型登場" },
  { date: "2026.09.14", cat: "event",  hot: false, title: "極地要塞即將結束│ 聖典貢獻值折扣" },
  { date: "2026.07.12", cat: "system", hot: false, title: "6/12（五）遊戲 Facebook 登入異常公告" },
  { date: "2026.04.24", cat: "esports", hot: true, title: "GCS 2026 春季準決暨冠軍賽 5 月 2 日 三強鼎立 決戰台北網球中心" },
  { date: "2026.03.10", cat: "esports", hot: true, title: "《Garena傳說對決》與《王者榮耀國際版》展開特別合作 參戰2026電競世界盃" },
  { date: "2026.02.27", cat: "system", hot: false, title: "2 / 27（五）伺服器不停機更新公告" },
  { date: "2026.02.20", cat: "esports", hot: false, title: "《Garena傳說對決》GCS 職業聯賽春季賽 2月27日熱血登場！" },
  { date: "2026.02.14", cat: "system", hot: false, title: "02 / 14（六）伺服器不停機更新公告" },
  { date: "2026.02.10", cat: "esports", hot: false, title: "Garena 傳說對決 GCS 職業聯賽選手懲處公告" },
  { date: "2026.02.05", cat: "system", hot: false, title: "02 / 05（四）伺服器不停機更新公告" },
  { date: "2026.01.22", cat: "system", hot: false, title: "1 / 22（四）遊戲登入異常公告（已排除）" },
  { date: "2026.01.08", cat: "guide",  hot: false, title: "LINE 帳號登入傳說對決引導" },
  { date: "2025.12.05", cat: "esports", hot: false, title: "泰國RPL戰隊 FULL SENSE 擊敗閃電狼 勇奪傳說對決AIC 2025國際錦標賽冠軍" },
  { date: "2025.11.17", cat: "esports", hot: false, title: "AIC 2025 國際錦標賽 11 月 17 日開戰 總決賽將移師越南河內！" },
  { date: "2024.12.10", cat: "event",  hot: false, title: "2024 AIC 冠軍戰陣容限免｜恭喜 Bacon Time 奪冠，也為創造驚奇的 BMG 喝采！" },
];

const CATS = {
  event:  { label: "活動" },
  system: { label: "系統公告" },
  esports:{ label: "賽事" },
  guide:  { label: "教學" },
};

// 造型焦點輪播（皮膚文案取自官網；banner 為官網英雄頁 1920×526 橫幅）
const FEATURED = [
  { id: "112", name: "緹莉",   sub: "昭心之光 ─ 十週年焦點英雄",             banner: heroImg("112", "Teeri-topbanner.jpg"),   chip: "十週年焦點" },
  { id: "79",  name: "奎倫",   sub: "淨化之刃 ─ 適者生存是我的法則",          banner: heroImg("79", "20181115114402-6212.jpg"), chip: "造型推廣" },
  { id: "70",  name: "諾可西", sub: "奇異探險家 ─ 腳踩風火輪燒出全新傳說",    banner: heroImg("70", "20180720124810-8235.jpg"), chip: "造型推廣" },
  { id: "69",  name: "伯頓",   sub: "擎天之柱 ─ 揮舞著大棒棒猛爆衝撞傳說戰場", banner: heroImg("69", "20180629061622-2928.jpg"), chip: "造型推廣" },
  { id: "68",  name: "瑪迦",   sub: "深淵幽影 ─ 化做幽影帶領蟲蟲大軍席捲戰場", banner: heroImg("68", "20180615092509-4416.jpg"), chip: "造型推廣" },
  { id: "100", name: "若伊",   sub: "琉璃仙境山之宮主 ─ 琉璃仙靈·蘩章 陪你過好年", banner: heroImg("100", "20200501042446-6160.jpg"), chip: "限定造型" },
];

// 英雄牆（頭像 120×120 取自官網英雄列表；banner 1920×526 取自官網英雄詳情頁）
const WALL = [
  { id: "112", name: "緹莉",       file: "54600.jpg",               banner: "Teeri-topbanner.jpg",       note: "十週年焦點" },
  { id: "80",  name: "瀾",         file: "20190426081950-6265.jpg", banner: "20181206110022-4282.jpg",   note: "造型推廣" },
  { id: "85",  name: "葉娜",       file: "20191208090558-9539.jpg", banner: "20190527111946-5172.jpg",   note: null },
  { id: "92",  name: "安格列",     file: "20191208073209-7067.jpg", banner: "20191004052013-8349.jpg",   note: null },
  { id: "46",  name: "特爾安娜絲", file: "20170704114328-4949.jpg", banner: "20170704114328-7574.jpg",   note: null },
  { id: "81",  name: "達爾西",     file: "20190121105616-5094.jpg", banner: "20190121105616-1933.jpg",   note: null },
  { id: "79",  name: "奎倫",       file: "20181115114402-6850.jpg", banner: "20181115114402-6212.jpg",   note: "淨化之刃" },
  { id: "70",  name: "諾可西",     file: "20180720124810-1826.jpg", banner: "20180720124810-8235.jpg",   note: "奇異探險家" },
  { id: "69",  name: "伯頓",       file: "20180629061622-2279.jpg", banner: "20180629061622-2928.jpg",   note: "擎天之柱" },
  { id: "68",  name: "瑪迦",       file: "20180615092509-1760.jpg", banner: "20180615092509-4416.jpg",   note: "深淵幽影" },
  { id: "100", name: "若伊",       file: "20200501042446-2722.jpg", banner: "20200501042446-6160.jpg",   note: "琉璃仙靈" },
  { id: "71",  name: "古木",       file: "20180917071916-4961.jpg", banner: "20180917071916-9582.jpg",   note: null },
];

// 遊戲資料卡（連結為官網真實路徑）
const GUIDE = [
  { t: "新手引導",   d: "從移動、補兵到會戰判斷，五分鐘帶你打完第一場傳說對戰。", href: "https://moba.garena.tw/game/locate",
    icon: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="7.5"/><path d="M13 7 11 11l-4 2 2-4 4-2Z"/></svg>' },
  { t: "遊戲簡介",   d: "5v5 經典競技玩法、地圖機制與勝利條件總覽。", href: "https://moba.garena.tw/game/synopsis",
    icon: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4.5h6a2 2 0 0 1 2 2v9a1.6 1.6 0 0 0-1.6-1.6H3v-9.4Z"/><path d="M17 4.5h-6a2 2 0 0 0-2 2v9a1.6 1.6 0 0 1 1.6-1.6H17V4.5Z"/></svg>' },
  { t: "英雄列表",   d: "113 位英雄立繪、技能與出裝推薦一站查齊。", href: "https://moba.garena.tw/game/heroes",
    icon: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="7" r="2.8"/><path d="M2.5 16c.6-3 2.4-4.5 4.5-4.5S10.9 13 11.5 16"/><circle cx="14" cy="8" r="2.2"/><path d="M13 12.2c2 0 3.6 1.3 4.2 3.8"/></svg>' },
  { t: "裝備列表",   d: "攻擊、法術、防禦與移動裝備完整數值。", href: "https://moba.garena.tw/game/props",
    icon: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h12v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V4Z"/><path d="M10 15v2.5M7 17.5h6"/></svg>' },
  { t: "奧義列表",   d: "為英雄搭配奧義，把面板再往上墊一個檔位。", href: "https://moba.garena.tw/game/katha",
    icon: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2.8 12 7l4.6.5-3.4 3.1.9 4.6L10 12.9 5.9 15.2l.9-4.6L3.4 7.5 8 7l2-4.2Z"/></svg>' },
  { t: "挑戰者技能", d: "閃現、淨化、暈酲——關鍵 60 秒的勝負手。", href: "https://moba.garena.tw/game/skill",
    icon: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 2.5 4.5 11H10l-1 6.5L15.5 9H10l1-6.5Z"/></svg>' },
];

// 電競賽事連結（官網真實路徑）
const ESPORTS_LINKS = [
  { t: "GCS 職業聯賽", href: "https://esports.moba.garena.tw/gcs" },
  { t: "傳說城市賽",   href: "https://esports.moba.garena.tw/city" },
  { t: "校園傳說",     href: "https://esports.moba.garena.tw/campus/rule" },
  { t: "ACS 校園聯賽", href: "https://acsesports.moba.garena.tw/" },
  { t: "傳說國際賽",   href: "https://moba.garena.tw/news/show/4677" },
  { t: "社群自辦賽事", href: "https://moba.garena.tw/news/show/5404" },
];

// 影音（官網 GCS 隊伍介紹影片，縮圖 YouTube mqdefault）
const VIDEOS = [
  { id: "Y_QBcDCxA2o", t: "【隊伍介紹】GCS 2024夏｜Banmei Gaming",      d: "選手專訪 · 2024.04.08" },
  { id: "gLlOALkyCrA", t: "【隊伍介紹】GCS 2024春｜ANK Gaming",         d: "選手專訪 · 2024.04.08" },
  { id: "-WK2qvVgQAM", t: "【隊伍介紹】GCS 2024夏｜Deep Cross Gaming",  d: "選手專訪 · 2024.04.08" },
  { id: "joFFyqONp78", t: "【隊伍介紹】GCS 2024夏｜Flash Wolves",       d: "選手專訪 · 2024.04.08" },
  { id: "-gQRXyMlaBs", t: "【隊伍介紹】GCS 2024夏｜HongKong Attitude",  d: "選手專訪 · 2024.04.08" },
  { id: "n7DzZ271uFc", t: "【隊伍介紹】GCS 2024 夏｜CATHAY ONE TEAM",   d: "選手專訪 · 2024.04.08" },
];

/* ---------------- 工具 ---------------- */

const $ = (sel) => document.querySelector(sel);
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html !== undefined) n.innerHTML = html;
  return n;
};

// 圖片載入失敗 → 漸層降級塊（保住版面與氣質）
function guardImage(img, fallbackChar) {
  img.addEventListener("error", () => {
    const box = el("div", "img-fallback", fallbackChar || "傳");
    img.replaceWith(box);
  }, { once: true });
}

/* ---------------- 最新消息 ---------------- */

const SHOWN_INIT = 9;
let newsCat = "all";
let newsShown = SHOWN_INIT;

function renderNewsTabs() {
  const wrap = $("#newsTabs");
  wrap.innerHTML = "";
  const tabs = [["all", "全部"], ["hot", "熱門"], ...Object.entries(CATS).map(([k, v]) => [k, v.label])];
  tabs.forEach(([key, label]) => {
    const count = key === "all" ? NEWS.length
      : key === "hot" ? NEWS.filter((n) => n.hot).length
      : NEWS.filter((n) => n.cat === key).length;
    const b = el("button", "news-tab", `${label}<span class="count">${count}</span>`);
    b.type = "button";
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", String(key === newsCat));
    b.addEventListener("click", () => {
      newsCat = key;
      newsShown = SHOWN_INIT;
      renderNewsTabs();
      renderNewsList();
    });
    wrap.appendChild(b);
  });
}

function renderNewsList() {
  const list = $("#newsList");
  list.innerHTML = "";
  const pool = NEWS.filter((n) =>
    newsCat === "all" ? true : newsCat === "hot" ? n.hot : n.cat === newsCat
  );
  pool.slice(0, newsShown).forEach((n) => {
    const li = el("li", "news-item");
    li.appendChild(el("span", "news-date mono", n.date));
    const badgeCls = n.hot ? "badge-amber" : n.cat === "esports" ? "badge-sky" : "badge-neutral";
    li.appendChild(el("span", "news-flag badge " + badgeCls, n.hot ? "熱門" : CATS[n.cat].label));
    li.appendChild(el("span", "news-title", n.title));
    list.appendChild(li);
  });
  const more = $("#newsMore");
  more.style.display = newsShown < pool.length ? "" : "none";
  more.textContent = `顯示更多（剩 ${pool.length - newsShown} 則）`;
}

/* ---------------- 英雄輪播 ---------------- */

let slideIdx = 0;
let slideTimer = null;
let carouselBuilt = false;

function buildCarousel() {
  const art = $("#carouselArt");
  const dots = $("#carouselDots");
  FEATURED.forEach((h, i) => {
    const img = el("img");
    img.src = h.banner;
    img.alt = `英雄橫幅：${h.name}`;
    img.referrerPolicy = "no-referrer";
    img.decoding = "async";
    guardImage(img, h.name[0]);
    art.appendChild(img);

    const d = el("button", "carousel-dot");
    d.type = "button";
    d.setAttribute("role", "tab");
    d.setAttribute("aria-label", h.name);
    d.setAttribute("aria-selected", String(i === slideIdx));
    d.addEventListener("click", () => goSlide(i, true));
    dots.appendChild(d);
  });
  carouselBuilt = true;
}

function renderCarousel() {
  if (!carouselBuilt) buildCarousel();

  const info = $("#carouselInfo");
  const art = $("#carouselArt");
  const dots = $("#carouselDots");
  info.innerHTML = "";

  const h = FEATURED[slideIdx];
  const idx = el("p", "carousel-index mono", `0${slideIdx + 1} / 0${FEATURED.length} · SKIN FOCUS`);
  const name = el("h3", "carousel-name", h.name);
  const sub = el("p", "carousel-sub", h.sub);
  const chips = el("div", "carousel-chips");
  chips.appendChild(el("span", "badge badge-amber", h.chip));
  chips.appendChild(el("span", "badge badge-neutral mono", `HERO No.${h.id}`));
  const actions = el("div", "carousel-actions");
  const link = el("a", "btn-ghost", "更多資訊");
  link.href = "https://moba.garena.tw/game/heroes";
  link.target = "_blank";
  link.rel = "noopener";
  actions.appendChild(link);
  info.append(idx, name, sub, chips, actions);

  [...art.children].forEach((img, i) => img.classList.toggle("active", i === slideIdx));
  [...dots.children].forEach((d, i) => d.setAttribute("aria-selected", String(i === slideIdx)));
}

function goSlide(i, manual) {
  slideIdx = (i + FEATURED.length) % FEATURED.length;
  renderCarousel();
  if (manual) restartAuto();
}

function restartAuto() {
  clearInterval(slideTimer);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduced) slideTimer = setInterval(() => goSlide(slideIdx + 1, false), 6000);
}

/* ---------------- 英雄牆 + Modal ---------------- */

function renderWall() {
  const wall = $("#heroWall");
  WALL.forEach((h) => {
    const card = el("button", "hero-card");
    card.type = "button";
    card.setAttribute("aria-haspopup", "dialog");
    card.setAttribute("aria-label", `查看英雄 ${h.name}`);
    const img = el("img");
    img.src = heroImg(h.id, h.file);
    img.alt = `英雄立繪：${h.name}`;
    img.referrerPolicy = "no-referrer";
    img.loading = "lazy";
    guardImage(img, h.name[0]);
    card.appendChild(img);
    card.appendChild(el("span", "hero-card-name", h.name));
    card.appendChild(el("span", "hero-card-id", `#${h.id}`));
    card.addEventListener("click", () => openModal(h));
    wall.appendChild(card);
  });
}

function openModal(h) {
  const modal = $("#heroModal");
  const img = $("#modalImg");
  img.src = h.banner ? heroImg(h.id, h.banner) : heroImg(h.id, h.file);
  img.alt = `英雄橫幅：${h.name}`;
  $("#modalName").textContent = h.name;
  const f = FEATURED.find((x) => x.id === h.id);
  $("#modalSub").textContent = f ? f.sub : "113 位傳說者之一——前往官方英雄列表查看技能、奧義與出裝。";
  $("#modalEyebrow").textContent = `HERO No.${h.id}`;
  const chips = $("#modalChips");
  chips.innerHTML = "";
  if (h.note) chips.appendChild(el("span", "badge badge-amber", h.note));
  chips.appendChild(el("span", "badge badge-neutral mono", "5V5 · FREE"));
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close").focus();
}

function closeModal() {
  $("#heroModal").hidden = true;
  document.body.style.overflow = "";
}

/* ---------------- 其餘區塊渲染 ---------------- */

function renderGuide() {
  const grid = $("#guideGrid");
  GUIDE.forEach((g, i) => {
    const a = el("a", "guide-card");
    a.href = g.href;
    a.target = "_blank";
    a.rel = "noopener";
    a.innerHTML = `
      <span class="guide-idx mono">0${i + 1}</span>
      <span class="guide-icon">${g.icon}</span>
      <h3>${g.t}</h3>
      <p>${g.d}</p>
      <span class="guide-go">前往查看
        <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M4 2h6v6M10 2 3.5 8.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
      </span>`;
    grid.appendChild(a);
  });
}

function renderEsports() {
  const links = $("#esportsLinks");
  ESPORTS_LINKS.forEach((l) => {
    const a = el("a", "btn-ghost", `${l.t}<svg class="ext" viewBox="0 0 12 12" aria-hidden="true"><path d="M4 2h6v6M10 2 3.5 8.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`);
    a.href = l.href;
    a.target = "_blank";
    a.rel = "noopener";
    links.appendChild(a);
  });

  const grid = $("#videoGrid");
  VIDEOS.forEach((v) => {
    const a = el("a", "video-card");
    a.href = `https://www.youtube.com/watch?v=${v.id}`;
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", `在 YouTube 播放：${v.t}`);
    const thumb = el("div", "video-thumb");
    const img = el("img");
    img.src = `https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`;
    img.alt = `影片縮圖：${v.t}`;
    img.referrerPolicy = "no-referrer";
    img.loading = "lazy";
    guardImage(img, "▶");
    thumb.appendChild(img);
    thumb.appendChild(el("div", "video-play", '<span><svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3.5 2.2 11.6 7l-8.1 4.8V2.2Z" fill="currentColor"/></svg></span>'));
    const meta = el("div", "video-meta");
    meta.appendChild(el("p", "video-title", v.t));
    meta.appendChild(el("p", "video-sub mono", v.d));
    a.append(thumb, meta);
    grid.appendChild(a);
  });
}

/* ---------------- Header / 移動端 / 動效 ---------------- */

function initHeader() {
  const header = $(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });

  const burger = $("#navBurger");
  const panel = $("#mobilePanel");
  burger.addEventListener("click", () => {
    const open = panel.hidden;
    panel.hidden = !open;
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "關閉選單" : "開啟選單");
  });
  panel.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      panel.hidden = true;
      burger.setAttribute("aria-expanded", "false");
    }
  });
}

function initReveal() {
  const targets = document.querySelectorAll(".section-head, .news-tabs, .news-list, .carousel, .wall-title, .hero-wall, .guide-grid, .esports-links, .video-grid, .comic-banner, .download-wrap");
  targets.forEach((n) => n.classList.add("reveal"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.08 });
  targets.forEach((n) => io.observe(n));
}

function initModal() {
  $("#heroModal").addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !$("#heroModal").hidden) closeModal();
  });
}

/* ---------------- 啟動 ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderNewsTabs();
  renderNewsList();
  $("#newsMore").addEventListener("click", () => {
    newsShown += 8;
    renderNewsList();
  });

  renderCarousel();
  restartAuto();
  $("#carouselPrev").addEventListener("click", () => goSlide(slideIdx - 1, true));
  $("#carouselNext").addEventListener("click", () => goSlide(slideIdx + 1, true));
  $("#heroCarousel").addEventListener("mouseenter", () => clearInterval(slideTimer));
  $("#heroCarousel").addEventListener("mouseleave", restartAuto);

  renderWall();
  renderGuide();
  renderEsports();
  initHeader();
  initModal();
  initReveal();
});
