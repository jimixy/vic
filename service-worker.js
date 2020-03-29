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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.b4138879.css",
    "revision": "8404c188b1f6fd2447066130690aee57"
  },
  {
    "url": "assets/img/create.e25f75be.png",
    "revision": "e25f75befa6d34f64851c51d60013d61"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.179e22fc.js",
    "revision": "7e1a9cf841162081b9490312345e1dec"
  },
  {
    "url": "assets/js/10.193b560a.js",
    "revision": "ccef484e564afa80bc93460d5f5d5a5a"
  },
  {
    "url": "assets/js/11.93445289.js",
    "revision": "ac663f2f8ac3ce4526021b8418b54c8f"
  },
  {
    "url": "assets/js/12.1c2395a6.js",
    "revision": "e398aaa222a484d671a00531be74d169"
  },
  {
    "url": "assets/js/13.9de85116.js",
    "revision": "68279e54700238a75946f01288fbb5e5"
  },
  {
    "url": "assets/js/14.33ac564a.js",
    "revision": "00589992e9fb52b5c545bb4bbed023d4"
  },
  {
    "url": "assets/js/15.5263ff45.js",
    "revision": "3fc6861898ccb62570019ef6458c60d5"
  },
  {
    "url": "assets/js/16.fa931275.js",
    "revision": "1fabc95eff3ebe8ce061b2f94e891f1b"
  },
  {
    "url": "assets/js/17.d08f9240.js",
    "revision": "64445f2fac6b362ea42ef46e57a8028b"
  },
  {
    "url": "assets/js/18.b8f9232e.js",
    "revision": "920ee72edd64b13afca2356c43113c3b"
  },
  {
    "url": "assets/js/19.67d4a8ac.js",
    "revision": "0c3b91ba9c9f84a68138b39b29d3d761"
  },
  {
    "url": "assets/js/20.49d0ffda.js",
    "revision": "1a83800a76d3f5ee6fe4286486193262"
  },
  {
    "url": "assets/js/21.9a9c2bd3.js",
    "revision": "1a4187da15c84a092d6c672e28241ce4"
  },
  {
    "url": "assets/js/22.3b3db2fb.js",
    "revision": "a228923a66718d6b5c2a0bc62e5c5c6a"
  },
  {
    "url": "assets/js/23.47251f43.js",
    "revision": "da4de81ccfeddbe48acc51a1e345549f"
  },
  {
    "url": "assets/js/24.2134c898.js",
    "revision": "ef07f8fedb7252eb04d9f2027d88ab14"
  },
  {
    "url": "assets/js/25.02e81803.js",
    "revision": "a7f84c4c4ce3fbdf21f1803b1afdf31e"
  },
  {
    "url": "assets/js/26.8643dc63.js",
    "revision": "ee262e92ab0d0e32328c0f850d082fa2"
  },
  {
    "url": "assets/js/27.bf9de55a.js",
    "revision": "a6aed5be972e104233d9e9a06ef9ceb6"
  },
  {
    "url": "assets/js/28.3a6230fe.js",
    "revision": "e6e2d81a2be7aa2bdc617a82cf142479"
  },
  {
    "url": "assets/js/3.2bd6378e.js",
    "revision": "c5a2ccb8fb97748816a9f1f853154937"
  },
  {
    "url": "assets/js/4.f63241c4.js",
    "revision": "d087ca6b3df5b0a460c5f01c309afbc8"
  },
  {
    "url": "assets/js/5.a2a0ceb8.js",
    "revision": "4c726911456edc5168945f6058730ebd"
  },
  {
    "url": "assets/js/6.f95672ff.js",
    "revision": "9cec99c77cb40ea7b103ce4c52f590de"
  },
  {
    "url": "assets/js/7.6cf567c2.js",
    "revision": "0db340691c990fd756f8b5a51af560f5"
  },
  {
    "url": "assets/js/8.c01f11c8.js",
    "revision": "3bb52c36f24ff2265558a0e1400e089c"
  },
  {
    "url": "assets/js/9.b7624c48.js",
    "revision": "159740ff31cf67af69df828184673773"
  },
  {
    "url": "assets/js/app.a5587e79.js",
    "revision": "22c12eae38d6629181a8177df0148654"
  },
  {
    "url": "categories/index.html",
    "revision": "f0d978c29d758b808b400ebe8ca6f2f6"
  },
  {
    "url": "demo.html",
    "revision": "3398c38c57fb9976f205eb3b7d5e2ccf"
  },
  {
    "url": "index.html",
    "revision": "13f419687c38dece0a3b586d052c7c0c"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "211b8fe676bbe0ad77561a81e7deed08"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "bc5361284023e7162ed7e1cb6bcf31a0"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "302cae9ba0d641b6019666daf17f20b4"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "13e203adb545a1e4df1cb578aecac51f"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "2c2c564d02811cce1f48c55f03ddc9e2"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "b8614e9929a657bbbb1edd1beede71fa"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "7b37122ad82a953f2ad07b8d79bd6e4e"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "70f73b6afc3509f4c84fb95b240076fb"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "56bd2e8b15f5e8a53aca7cd15a31de50"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "a43e4b4a20521d0367ef988e3a058f9f"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "09f786612c390618eee874293d4146de"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "12f7687e34c47f657ed9fec3bcfbb404"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "4b7d0ec79cc453e1c9f7a92c2b9d518a"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "90ef87b0399ee41085690252f3c9c048"
  },
  {
    "url": "tag/index.html",
    "revision": "9eac6bcc5130f785efc61c3b7bbe2247"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "5e461c21b1843a1c57d559a1302619fb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
