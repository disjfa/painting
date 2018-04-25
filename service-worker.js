/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

importScripts(
  "/build/precache-manifest.30e57fd1025b2aeddadf2f6c844c7015.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2018/01/27/sammy-on-canvas.html",
    "revision": "e9192c92954f542b866eede2f04c4e5e"
  },
  {
    "url": "2018/03/04/het-was-weer-eens-tijd.html",
    "revision": "128290a579d3ff317daf5a361ab7a6e2"
  },
  {
    "url": "2018/03/10/already-did-my-cat.html",
    "revision": "c7796e4dff2ab84f1aa3cdfeed122082"
  },
  {
    "url": "2018/03/31/alien-landscape.html",
    "revision": "196c433b35cc813f7d9e6293b915889d"
  },
  {
    "url": "2018/04/08/masterpiece.html",
    "revision": "31c63392053296605f81bf2cd0bf7023"
  },
  {
    "url": "2018/04/08/scheveningen-lighthouse.html",
    "revision": "14a87b749a459fed364a9d7338897a02"
  },
  {
    "url": "2018/04/09/gloomy-easter-islands.html",
    "revision": "57f25be5fe5d56a77c675a33f0934ed2"
  },
  {
    "url": "2018/04/15/papua-longhouse.html",
    "revision": "0d029069ba350bebb63fc5f3bb7244b0"
  },
  {
    "url": "2018/04/25/seagul.html",
    "revision": "b09d4dd8d9ac7d9455b0622d3b7fdecb"
  },
  {
    "url": "2018/04/25/voorweg-by-night.html",
    "revision": "10dc0990c136bfdc3ca99acd411ece6b"
  },
  {
    "url": "about.html",
    "revision": "895223ec3dc5731b78f2c4135fd325df"
  },
  {
    "url": "build/main.css",
    "revision": "44f4539a78a782c369111fa324e0cd46"
  },
  {
    "url": "build/main.js",
    "revision": "b51f02ecde65fee4310e94087cc988f8"
  },
  {
    "url": "build/manifest.json",
    "revision": "7003b1c47500a81a93be10ccefbd6eae"
  },
  {
    "url": "build/precache-manifest.9393fd8eb0986f92b5d95fbc07574520.js",
    "revision": "9393fd8eb0986f92b5d95fbc07574520"
  },
  {
    "url": "build/precache-manifest.a4f4b2c5b5ab19ec35d01255cb61e544.js",
    "revision": "a4f4b2c5b5ab19ec35d01255cb61e544"
  },
  {
    "url": "build/precache-manifest.aae385cac99818226557ab7d734b2acc.js",
    "revision": "aae385cac99818226557ab7d734b2acc"
  },
  {
    "url": "build/precache-manifest.b2ced0cca3b41588880246e813cba3de.js",
    "revision": "b2ced0cca3b41588880246e813cba3de"
  },
  {
    "url": "build/precache-manifest.e4ce7ab66786718f2b46a93e9c7679d3.js",
    "revision": "e4ce7ab66786718f2b46a93e9c7679d3"
  },
  {
    "url": "icon/android-chrome-144x144.png",
    "revision": "99c50ae4a2ceb645080de900b9d1f76e"
  },
  {
    "url": "icon/android-chrome-192x192.png",
    "revision": "a419d125b728ab1b92b3dcc0217dbb6e"
  },
  {
    "url": "icon/android-chrome-256x256.png",
    "revision": "cc767a411efe4a8fbd09154f830e1ac6"
  },
  {
    "url": "icon/android-chrome-36x36.png",
    "revision": "d99dbc12f62b6acd297cffa4b6aaf11e"
  },
  {
    "url": "icon/android-chrome-384x384.png",
    "revision": "e2ee7141bcad4d3672b678c4b280b92c"
  },
  {
    "url": "icon/android-chrome-48x48.png",
    "revision": "3111ec1985eae79bcd16b1a0916b4bef"
  },
  {
    "url": "icon/android-chrome-512x512.png",
    "revision": "bd4f1458e6a79a285a40fb805f534cad"
  },
  {
    "url": "icon/android-chrome-72x72.png",
    "revision": "f8f4e1a5a0cc7ebb928ac8565f03f1a0"
  },
  {
    "url": "icon/android-chrome-96x96.png",
    "revision": "2477ab32aa31f0c317e462fb4aac5056"
  },
  {
    "url": "icon/apple-touch-icon-114x114.png",
    "revision": "3ffa58cf2ea8ef48e38d95330bd5b1ec"
  },
  {
    "url": "icon/apple-touch-icon-120x120.png",
    "revision": "f8e31516b5d5700679c3283eae3211d1"
  },
  {
    "url": "icon/apple-touch-icon-144x144.png",
    "revision": "99c50ae4a2ceb645080de900b9d1f76e"
  },
  {
    "url": "icon/apple-touch-icon-152x152.png",
    "revision": "95954a2b428cee89888d2e4900cdd05b"
  },
  {
    "url": "icon/apple-touch-icon-167x167.png",
    "revision": "3764884720108012d0af0e3b423eff9e"
  },
  {
    "url": "icon/apple-touch-icon-180x180.png",
    "revision": "b3a0b3af84a739659f727d711623c0f8"
  },
  {
    "url": "icon/apple-touch-icon-57x57.png",
    "revision": "58f2e61ed44ec4b0d7f4419de34bc217"
  },
  {
    "url": "icon/apple-touch-icon-60x60.png",
    "revision": "f2b9fe49b6392dbcb07e855341e85c3f"
  },
  {
    "url": "icon/apple-touch-icon-72x72.png",
    "revision": "f8f4e1a5a0cc7ebb928ac8565f03f1a0"
  },
  {
    "url": "icon/apple-touch-icon-76x76.png",
    "revision": "05c27ab5adfaca4e3c304ecc0dbefed8"
  },
  {
    "url": "icon/apple-touch-icon-precomposed.png",
    "revision": "b3a0b3af84a739659f727d711623c0f8"
  },
  {
    "url": "icon/apple-touch-icon.png",
    "revision": "b3a0b3af84a739659f727d711623c0f8"
  },
  {
    "url": "icon/apple-touch-startup-image-1182x2208.png",
    "revision": "1370977e0ec528663e17158d01ed63c0"
  },
  {
    "url": "icon/apple-touch-startup-image-1242x2148.png",
    "revision": "172bdb4a96d97d47a37cec9e9ad7e918"
  },
  {
    "url": "icon/apple-touch-startup-image-1496x2048.png",
    "revision": "5bc6e4d89076e5041f1be10eb8a790fd"
  },
  {
    "url": "icon/apple-touch-startup-image-1536x2008.png",
    "revision": "77ac71313e66cdcd2fca09ef75df4149"
  },
  {
    "url": "icon/apple-touch-startup-image-320x460.png",
    "revision": "255d386d2f63277aec44109e6ed6e127"
  },
  {
    "url": "icon/apple-touch-startup-image-640x1096.png",
    "revision": "832f630cae6fa85af53cb69df7e64348"
  },
  {
    "url": "icon/apple-touch-startup-image-640x920.png",
    "revision": "6230c8630510b8eb52000db21bc7dccf"
  },
  {
    "url": "icon/apple-touch-startup-image-748x1024.png",
    "revision": "6eb6566c03e48af215484e45ca60e9e0"
  },
  {
    "url": "icon/apple-touch-startup-image-750x1294.png",
    "revision": "1765caa80e1da55e86be87bca2967c06"
  },
  {
    "url": "icon/apple-touch-startup-image-768x1004.png",
    "revision": "f1c571b4631ddb7dace0d7d1ad1da5cc"
  },
  {
    "url": "icon/coast-228x228.png",
    "revision": "d1fb6257eddf004db7c9891f2b8a0d33"
  },
  {
    "url": "icon/favicon-16x16.png",
    "revision": "eddc5945c5e8fb60f9dd55ee6ff729e1"
  },
  {
    "url": "icon/favicon-32x32.png",
    "revision": "e0d4b3258114cf8fe4e27f114408819f"
  },
  {
    "url": "icon/firefox_app_128x128.png",
    "revision": "81f05adbd1070bed8301589046e10f7a"
  },
  {
    "url": "icon/firefox_app_512x512.png",
    "revision": "f33c1b96de15505c14f14dbbf8de62d6"
  },
  {
    "url": "icon/firefox_app_60x60.png",
    "revision": "434e112166db463c3802aa01dd401e3e"
  },
  {
    "url": "icon/index.html",
    "revision": "b813a2077cd8f8c6a50c1bb9cccf2ff6"
  },
  {
    "url": "icon/manifest.json",
    "revision": "ee7d70e35e3c5593813df41a61c13849"
  },
  {
    "url": "icon/mstile-144x144.png",
    "revision": "99c50ae4a2ceb645080de900b9d1f76e"
  },
  {
    "url": "icon/mstile-150x150.png",
    "revision": "8951a8a1977323873d0784432b28d561"
  },
  {
    "url": "icon/mstile-310x150.png",
    "revision": "bf18d44712efa0a772455f08a55c8bca"
  },
  {
    "url": "icon/mstile-310x310.png",
    "revision": "b85f420a9385364665979a2186e52c5b"
  },
  {
    "url": "icon/mstile-70x70.png",
    "revision": "e77518c17ab6668206b146dfdb35282c"
  },
  {
    "url": "icon/yandex-browser-50x50.png",
    "revision": "86e62417be781704cf14cdbb192dfcca"
  },
  {
    "url": "icon/yandex-browser-manifest.json",
    "revision": "83cd4978bcaee40d1e624899387f6254"
  },
  {
    "url": "img/logo.png",
    "revision": "a04504eb6dddf0617b24c4875ecd55c5"
  },
  {
    "url": "img/painting/alien-landscape.jpg",
    "revision": "cb160eb4650a67319f0093a4e5e7ab47"
  },
  {
    "url": "img/painting/already-did-my-cat.jpg",
    "revision": "9ba0585649dfed1d5c0024ad0066c228"
  },
  {
    "url": "img/painting/gloomy-easter-islands.jpg",
    "revision": "db33096a7dae2725c7e2350524d7652c"
  },
  {
    "url": "img/painting/het-was-weer-eens-tijd.jpg",
    "revision": "afca85a7bc9d0c7ce19a7d7d36477f9c"
  },
  {
    "url": "img/painting/masterpiece.jpg",
    "revision": "feb8b8cd4bffb54c574358f12a3ffec7"
  },
  {
    "url": "img/painting/papua-longhouse.jpg",
    "revision": "7f13b3cbef1a6208e7e82470c5dccfec"
  },
  {
    "url": "img/painting/sammy-on-canvas.jpg",
    "revision": "825a3e2e346df601b226f9a2bf796805"
  },
  {
    "url": "img/painting/scheveningen-lighthouse.jpg",
    "revision": "896359a96811d0905c41bb78a6543d30"
  },
  {
    "url": "img/painting/seagul.jpg",
    "revision": "b8c4c9a468ee4561c2696232a0831daa"
  },
  {
    "url": "img/painting/voorweg-by-night.jpg",
    "revision": "194c3ae44ed7bce0d93e38b31b4acc67"
  },
  {
    "url": "index.html",
    "revision": "44f2b24283a810d9376d3ac858e514d1"
  },
  {
    "url": "service-worker.js",
    "revision": "a14996af94543b9cf0cdf7cdfe6801e1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
