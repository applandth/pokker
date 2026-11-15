// สร้างอัตโนมัติ (vite.config.ts)
const CACHE = 'pokker-2.5.1-mwhtuhjj';
const FILES = ["./","./assets/_target_pool-DXdBPd8e.json","./assets/confession-CE2D2dha.json","./assets/auction-CWtSIrvE.json","./assets/command-DhPnebmA.json","./assets/event--11pqcO4.json","./assets/debate-CML8aTMD.json","./assets/dare-BU6wdmKA.json","./assets/deep_talk-BZD3MsiT.json","./assets/guess_who-qCfhQS3-.json","./assets/fortune-DtloaTYp.json","./assets/impersonate-DwfITHPH.json","./assets/hot_seat-CBEYDUmq.json","./assets/man_code-CabcjLIr.json","./assets/mission-CUC464e0.json","./assets/music-BUSjZ6T8.json","./assets/mini_game-9ogt8Via.json","./assets/power-DbVa55wG.json","./assets/oops-DPUMlwnI.json","./assets/nominate-DrtKGaxu.json","./assets/preference--kneL__s.json","./assets/penalty_party-BC068X7m.json","./assets/rant-C5pZfDSf.json","./assets/ranking-CbL9Fdgl.json","./assets/role_play-D_Y-MRY3.json","./assets/secret-C-Sm909G.json","./assets/skinship-BrLoCMmH.json","./assets/question-CT_0jS-o.json","./assets/special-DAZDx22O.json","./assets/social-YMtlhBtF.json","./assets/story-B6PcXeJV.json","./assets/superlative-CMmNK1us.json","./assets/spicy-B34cBauw.json","./assets/trivia-CWBszWHS.json","./assets/vote-CfYT2mBm.json","./assets/what_if-Bn2w_VEl.json","./assets/truth_or_false-CD4hMF6A.json","./assets/CkSalmonRegular-830r_ac1.ttf","./assets/CkSalmonBold-_f8YAhxK.ttf","./assets/host-badge-B27EA0ut.css","./assets/encoder-B4w8phMC.js","./assets/main-BkQA-B8O.js","./assets/host-badge-DCu_bk_q.js","./assets/esm-CJqP11E1.js","./assets/esm-BNteydbB.js","./assets/esm-B0P0v94M.js","./assets/esm-Ce_ed1fX.js","./assets/web-DSdBAo1o.js","./assets/web-Bl5A99ej.js","./assets/web-DMplBN3p.js","./assets/web-CXjtVxf1.js","./icon.svg","./icon-192.png","./icon-512.png","./manifest.webmanifest"];
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
