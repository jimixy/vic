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
    "url": "404.html",
    "revision": "088589d1c7134b69466c0df765c93d0e"
  },
  {
    "url": "assets/css/0.styles.b4a7f7fd.css",
    "revision": "6b058989186c41b83cbdcec82dd57e4c"
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
    "url": "assets/js/1.3339473f.js",
    "revision": "bcf40f73da25c3b873e020f661e1836a"
  },
  {
    "url": "assets/js/10.f41c5414.js",
    "revision": "9471d872b7c1f34421dfd462a12f01ba"
  },
  {
    "url": "assets/js/11.b699e366.js",
    "revision": "bc09181d400931e9f220ddc45d640c25"
  },
  {
    "url": "assets/js/12.dd78eff3.js",
    "revision": "1f5222add2c7082ee00776ff5b84f4d6"
  },
  {
    "url": "assets/js/13.b6e734b3.js",
    "revision": "06d01a034bcdc8101a62e7653f4f7b2b"
  },
  {
    "url": "assets/js/14.4c5ab671.js",
    "revision": "37ad5c2c51d05169432b2da3edf9793f"
  },
  {
    "url": "assets/js/15.3ce2da66.js",
    "revision": "8df4641df72e53c2fcbe9703fbdda1e7"
  },
  {
    "url": "assets/js/16.f175eb77.js",
    "revision": "0cb8f28b913c3a37885ac9d5cc186552"
  },
  {
    "url": "assets/js/17.48342fb8.js",
    "revision": "88053ed7584730ca039805d7299f8b6f"
  },
  {
    "url": "assets/js/3.aabc4740.js",
    "revision": "d363958443a558b1250821e944f37a24"
  },
  {
    "url": "assets/js/4.9d727f8d.js",
    "revision": "f301cc214e82fb1472e8e41e3d2fb14b"
  },
  {
    "url": "assets/js/5.9be222de.js",
    "revision": "7115c7e3a2cac1204ea895132ad02654"
  },
  {
    "url": "assets/js/6.ff1a2c1e.js",
    "revision": "435f744d817b7923bce860ed6facb32d"
  },
  {
    "url": "assets/js/7.6f9d8a75.js",
    "revision": "e6f678e79dfbb84ef7b9f2ce52f0ee60"
  },
  {
    "url": "assets/js/8.70ea702c.js",
    "revision": "968e0cdc5a7d08f4281f9053d3a87e5b"
  },
  {
    "url": "assets/js/9.d56434b0.js",
    "revision": "17a582889f7a3777f1d22166b1ccd6be"
  },
  {
    "url": "assets/js/app.c1689320.js",
    "revision": "09e573fdebf4f6deea0153c5782f0883"
  },
  {
    "url": "categories/index.html",
    "revision": "87930ce354174c401efeea28573ed4fa"
  },
  {
    "url": "demo.html",
    "revision": "be3954a9256750c3140fa3a8465d5b38"
  },
  {
    "url": "index.html",
    "revision": "f2734d24235be4ec29fa4438a6000c6b"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "0807eed21c7c65bbe5fafbae9cca0ea2"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "f63082aec2f0f69d9bb9e572cf2fa150"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "03e76246437ffb3fe37df61941cf607f"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "9cf2ba2ccea01b4928a7ba5410c7bcf7"
  },
  {
    "url": "tag/index.html",
    "revision": "a5bb3b4689c1c1ef14a4197f202e58e5"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "590b7ec2b4d654dfbada4fa79805c537"
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
