// สร้างอัตโนมัติ (vite.config.ts)
const CACHE = 'pokker-2.2.1-mwgxxp38';
const FILES = ["./","./assets/auction-CWtSIrvE.json","./assets/dare-DSJx7sEK.json","./assets/confession-CE2D2dha.json","./assets/_target_pool-DXdBPd8e.json","./assets/debate-ewP2jJjR.json","./assets/command-ivRkd5BT.json","./assets/fortune-DtloaTYp.json","./assets/deep_talk-BZD3MsiT.json","./assets/hot_seat-inICCV8g.json","./assets/man_code-CabcjLIr.json","./assets/guess_who-CtaVqALw.json","./assets/impersonate-BUikulSv.json","./assets/oops-DPUMlwnI.json","./assets/music-CIvw--1u.json","./assets/penalty_party-BJYXCqCv.json","./assets/mini_game-BoAQHanJ.json","./assets/nominate-TsvhZ42d.json","./assets/preference--kneL__s.json","./assets/ranking-BOO4SbtE.json","./assets/question-B6ut0MUd.json","./assets/rant-B3fDzH8f.json","./assets/role_play-03mDredw.json","./assets/social-BBihZy1v.json","./assets/secret-C-Sm909G.json","./assets/skinship-B6SQcEJy.json","./assets/story-wLk7e-O1.json","./assets/special-BOZJf3_r.json","./assets/spicy-B34cBauw.json","./assets/truth_or_false-CD4hMF6A.json","./assets/superlative-Ce4gf1Q_.json","./assets/vote-CfYT2mBm.json","./assets/trivia-CWBszWHS.json","./assets/what_if-Bn2w_VEl.json","./assets/CkSalmonRegular-830r_ac1.ttf","./assets/CkSalmonBold-_f8YAhxK.ttf","./assets/host-badge-B5Z4qz3w.css","./assets/encoder-Dkte44Yy.js","./assets/main-DMfHzNmp.js","./assets/host-badge-DjwUvZeC.js","./assets/esm--6Tw4ugU.js","./assets/esm-CO1R1nki.js","./assets/esm-BEUc7eQK.js","./assets/esm-AGwPQyzK.js","./assets/web-DHNbHORb.js","./assets/web-Xj_lkvfh.js","./assets/web-BZmBPm2P.js","./assets/web-ZoCaflTY.js","./icon.svg","./icon-192.png","./icon-512.png","./manifest.webmanifest"];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  // หน้า HTML: เอาจากเน็ตก่อน (ได้เวอร์ชันใหม่ทันที) ออฟไลน์ค่อยใช้ของในเครื่อง
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request, { cache: 'no-store' }).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put('./', copy)); }
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then((r) => r || caches.match('./'))));
    return;
  }
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((r) => r || fetch(e.request).then((res) => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); }
    return res;
  }).catch(() => caches.match('./'))));
});
