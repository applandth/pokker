// สร้างอัตโนมัติ (vite.config.ts)
const CACHE = 'pokker-2.5.0-mwht06pv';
const FILES = ["./","./assets/confession-CE2D2dha.json","./assets/auction-CWtSIrvE.json","./assets/event--11pqcO4.json","./assets/debate-CML8aTMD.json","./assets/command-DhPnebmA.json","./assets/deep_talk-BZD3MsiT.json","./assets/dare-BU6wdmKA.json","./assets/fortune-DtloaTYp.json","./assets/hot_seat-CBEYDUmq.json","./assets/impersonate-DwfITHPH.json","./assets/guess_who-qCfhQS3-.json","./assets/mission-CUC464e0.json","./assets/mini_game-9ogt8Via.json","./assets/_target_pool-DXdBPd8e.json","./assets/man_code-CabcjLIr.json","./assets/music-BUSjZ6T8.json","./assets/nominate-DrtKGaxu.json","./assets/power-DbVa55wG.json","./assets/oops-DPUMlwnI.json","./assets/rant-C5pZfDSf.json","./assets/preference--kneL__s.json","./assets/penalty_party-BC068X7m.json","./assets/question-CT_0jS-o.json","./assets/ranking-CbL9Fdgl.json","./assets/role_play-D_Y-MRY3.json","./assets/social-YMtlhBtF.json","./assets/secret-C-Sm909G.json","./assets/spicy-B34cBauw.json","./assets/special-DAZDx22O.json","./assets/skinship-BrLoCMmH.json","./assets/superlative-CMmNK1us.json","./assets/truth_or_false-CD4hMF6A.json","./assets/trivia-CWBszWHS.json","./assets/story-B6PcXeJV.json","./assets/vote-CfYT2mBm.json","./assets/what_if-Bn2w_VEl.json","./assets/CkSalmonBold-_f8YAhxK.ttf","./assets/CkSalmonRegular-830r_ac1.ttf","./assets/host-badge-CfefEFos.css","./assets/encoder-CL6NJM_F.js","./assets/main-BN3A2_Op.js","./assets/host-badge-oAT_c-MA.js","./assets/esm-OhPtcq2c.js","./assets/esm-diE7F5WB.js","./assets/esm-_9BLUVNP.js","./assets/esm-D4ZqUyA_.js","./assets/web-B8IG-zei.js","./assets/web-DvSA042D.js","./assets/web-Bm7d4EJF.js","./assets/web-C4un2PDd.js","./icon.svg","./icon-192.png","./icon-512.png","./manifest.webmanifest"];
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
