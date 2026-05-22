'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0c5828302d450487673888eb494cc655",
"assets/AssetManifest.bin.json": "f846188d07428415b5275806eb9d81d5",
"assets/AssetManifest.json": "f9b3fcf0b79ca49101d54615db017e59",
"assets/assets/icon/icon.png": "86b929aa2dc24fd4d68517f1f12895e9",
"assets/assets/icons/baned.svg": "f780b2d4411d766da58eec422efe5e55",
"assets/assets/icons/bleeding%2520out.svg": "7c81e920acbb9b7c884dd7e719310ced",
"assets/assets/icons/blessed.svg": "d47728dcd4f7be54acf94970ca3826e4",
"assets/assets/icons/blinded.svg": "e7b52d0873756e1405a49cad27dbe8b1",
"assets/assets/icons/charmed.svg": "efa29ffd8d1bdbc333719a63dbe613f8",
"assets/assets/icons/concentration.svg": "c33a85f840d9780cd6502b392f315906",
"assets/assets/icons/d20.svg": "8d23076a9351da858c24b2f87109798f",
"assets/assets/icons/deafened.svg": "55c9a8f37522d3c6bef05a05935a7153",
"assets/assets/icons/exhausted.svg": "87e0c7bbe8a7770f9a402e9be82e762d",
"assets/assets/icons/eye.svg": "fe1cb1ae6477b2ee0951b6a6d6dd7473",
"assets/assets/icons/features.svg": "71693d94efc8624310d00b59fad72060",
"assets/assets/icons/fight.svg": "58b48e84e8e16b0e85c6fc508a3fcc5b",
"assets/assets/icons/frightened.svg": "e4ac91d0dd25fc600e96230a4773adf2",
"assets/assets/icons/grappled.svg": "2bd93a0f667dbdcd6c8ce59e1cc9f75b",
"assets/assets/icons/heart.svg": "e4bbe0c0174bd4b3ecdb456bbd8572d5",
"assets/assets/icons/HoldingAction.svg": "9151e67064b0e51a375a7de975b5a5d1",
"assets/assets/icons/incapacitated.svg": "1972c515f9390d1db46657d5ca81c8cc",
"assets/assets/icons/initiative.svg": "7001f18c3070b3ac9714936e676ac88f",
"assets/assets/icons/inspired.svg": "b48e6e750ae4d790fb983b09fd98bb50",
"assets/assets/icons/invisible.svg": "1f9ac6a2600cafc695f3a5d707edd890",
"assets/assets/icons/mirrorImage.svg": "4a806c577137927682cf24267252a855",
"assets/assets/icons/onfire.svg": "a408fc38a59133f6fe70fe8c593a5d4f",
"assets/assets/icons/paralyzed.svg": "dc3c497b1fb8d79dfdfb7f0a811f7645",
"assets/assets/icons/petrified.svg": "68d29119ae821de1ec062c05f1c5db91",
"assets/assets/icons/poisoned.svg": "f5517d9eb6365a0addae6401eef69683",
"assets/assets/icons/potion.svg": "1ba5a3c33b5404d4397ea32595b3efa3",
"assets/assets/icons/prone.svg": "aa667b778752f327450fd3b672182d81",
"assets/assets/icons/raging.svg": "52ecf21b0bec4361087bc4f6a73231d4",
"assets/assets/icons/ReactionUsed.svg": "6ed65a5ff63568cf55f514ad71df9276",
"assets/assets/icons/restrained.svg": "9efb5c8b259e8b40a0ce76758907b136",
"assets/assets/icons/rules.svg": "984ecd38d52abdb8ca9a079f334720a6",
"assets/assets/icons/sanctuary.svg": "d017a80b57bcb28a8373962afb0dc8d6",
"assets/assets/icons/shield.svg": "42b58e4463ec5da166837186b0fc6036",
"assets/assets/icons/skull.svg": "09c868cfb683a33d3bb20d743e721828",
"assets/assets/icons/spellbook.svg": "ad78d2adea258db152d7f3a95cf1edd7",
"assets/assets/icons/stunned.svg": "6f39fc0c7574644ae058875e71b62334",
"assets/assets/icons/surprised.svg": "5d7325b9c59362ba218ebf001eb33706",
"assets/assets/icons/temphp.svg": "f98ebd7c4faa07a4a13e28ee7d88ce33",
"assets/assets/icons/wildshape.svg": "5639cc308ca9e44efc6fceabde318bd5",
"assets/assets/pictures/parchment_paper.png": "5a28209700d3057016c3982f0e4d58b2",
"assets/assets/sfx/dice.mp3": "c58247c400c8898e3d1da307f0f1d3e4",
"assets/assets/source_jsons/bestiary_sources/bestiary-full.json": "4849f07ec2f8a3ecfc37b7d32c7a2b4b",
"assets/assets/source_jsons/character_sources/char-full.json": "2b653a28d6ad3f093a3f773f4056c965",
"assets/assets/source_jsons/item_sources/items-full.json": "e900ce635d11bac0206f08d4ddbd00dd",
"assets/assets/source_jsons/others_sources/others-official.json": "bbdaeee4713265d9994c7230891d9a9f",
"assets/assets/source_jsons/spell_sources/spells-full.json": "b15e8befe5ad2d00f88ba13726ba65fe",
"assets/assets%255Cicon%255Cicon.png": "86b929aa2dc24fd4d68517f1f12895e9",
"assets/assets%255Cicons%255Cbaned.svg": "f780b2d4411d766da58eec422efe5e55",
"assets/assets%255Cicons%255Cbleeding%2520out.svg": "7c81e920acbb9b7c884dd7e719310ced",
"assets/assets%255Cicons%255Cblessed.svg": "d47728dcd4f7be54acf94970ca3826e4",
"assets/assets%255Cicons%255Cblinded.svg": "e7b52d0873756e1405a49cad27dbe8b1",
"assets/assets%255Cicons%255Ccharmed.svg": "efa29ffd8d1bdbc333719a63dbe613f8",
"assets/assets%255Cicons%255Cconcentration.svg": "c33a85f840d9780cd6502b392f315906",
"assets/assets%255Cicons%255Cd20.svg": "8d23076a9351da858c24b2f87109798f",
"assets/assets%255Cicons%255Cdeafened.svg": "55c9a8f37522d3c6bef05a05935a7153",
"assets/assets%255Cicons%255Cexhausted.svg": "87e0c7bbe8a7770f9a402e9be82e762d",
"assets/assets%255Cicons%255Ceye.svg": "fe1cb1ae6477b2ee0951b6a6d6dd7473",
"assets/assets%255Cicons%255Cfeatures.svg": "71693d94efc8624310d00b59fad72060",
"assets/assets%255Cicons%255Cfight.svg": "58b48e84e8e16b0e85c6fc508a3fcc5b",
"assets/assets%255Cicons%255Cfrightened.svg": "e4ac91d0dd25fc600e96230a4773adf2",
"assets/assets%255Cicons%255Cgrappled.svg": "2bd93a0f667dbdcd6c8ce59e1cc9f75b",
"assets/assets%255Cicons%255Cheart.svg": "e4bbe0c0174bd4b3ecdb456bbd8572d5",
"assets/assets%255Cicons%255CHoldingAction.svg": "9151e67064b0e51a375a7de975b5a5d1",
"assets/assets%255Cicons%255Cincapacitated.svg": "1972c515f9390d1db46657d5ca81c8cc",
"assets/assets%255Cicons%255Cinitiative.svg": "7001f18c3070b3ac9714936e676ac88f",
"assets/assets%255Cicons%255Cinspired.svg": "b48e6e750ae4d790fb983b09fd98bb50",
"assets/assets%255Cicons%255Cinvisible.svg": "1f9ac6a2600cafc695f3a5d707edd890",
"assets/assets%255Cicons%255CmirrorImage.svg": "4a806c577137927682cf24267252a855",
"assets/assets%255Cicons%255Confire.svg": "a408fc38a59133f6fe70fe8c593a5d4f",
"assets/assets%255Cicons%255Cparalyzed.svg": "dc3c497b1fb8d79dfdfb7f0a811f7645",
"assets/assets%255Cicons%255Cpetrified.svg": "68d29119ae821de1ec062c05f1c5db91",
"assets/assets%255Cicons%255Cpoisoned.svg": "f5517d9eb6365a0addae6401eef69683",
"assets/assets%255Cicons%255Cpotion.svg": "1ba5a3c33b5404d4397ea32595b3efa3",
"assets/assets%255Cicons%255Cprone.svg": "aa667b778752f327450fd3b672182d81",
"assets/assets%255Cicons%255Craging.svg": "52ecf21b0bec4361087bc4f6a73231d4",
"assets/assets%255Cicons%255CReactionUsed.svg": "6ed65a5ff63568cf55f514ad71df9276",
"assets/assets%255Cicons%255Crestrained.svg": "9efb5c8b259e8b40a0ce76758907b136",
"assets/assets%255Cicons%255Crules.svg": "984ecd38d52abdb8ca9a079f334720a6",
"assets/assets%255Cicons%255Csanctuary.svg": "d017a80b57bcb28a8373962afb0dc8d6",
"assets/assets%255Cicons%255Cshield.svg": "42b58e4463ec5da166837186b0fc6036",
"assets/assets%255Cicons%255Cskull.svg": "09c868cfb683a33d3bb20d743e721828",
"assets/assets%255Cicons%255Cspellbook.svg": "ad78d2adea258db152d7f3a95cf1edd7",
"assets/assets%255Cicons%255Cstunned.svg": "6f39fc0c7574644ae058875e71b62334",
"assets/assets%255Cicons%255Csurprised.svg": "5d7325b9c59362ba218ebf001eb33706",
"assets/assets%255Cicons%255Ctemphp.svg": "f98ebd7c4faa07a4a13e28ee7d88ce33",
"assets/assets%255Cicons%255Cwildshape.svg": "5639cc308ca9e44efc6fceabde318bd5",
"assets/assets%255Cpictures%255Cparchment_paper.png": "5a28209700d3057016c3982f0e4d58b2",
"assets/assets%255Csfx%255Cdice.mp3": "c58247c400c8898e3d1da307f0f1d3e4",
"assets/assets%255Csource_jsons%255Cbestiary_sources%255Cbestiary-full.json": "4849f07ec2f8a3ecfc37b7d32c7a2b4b",
"assets/assets%255Csource_jsons%255Ccharacter_sources%255Cchar-full.json": "2b653a28d6ad3f093a3f773f4056c965",
"assets/assets%255Csource_jsons%255Citem_sources%255Citems-full.json": "e900ce635d11bac0206f08d4ddbd00dd",
"assets/assets%255Csource_jsons%255Cothers_sources%255Cothers-official.json": "bbdaeee4713265d9994c7230891d9a9f",
"assets/assets%255Csource_jsons%255Cspell_sources%255Cspells-full.json": "b15e8befe5ad2d00f88ba13726ba65fe",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "d6f97be0c1a60b950eccfd3410f484fd",
"assets/NOTICES": "bfc6f59a10ab3f47fbd3ba231139b13d",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "ed6a604d7f16480d4607e20a19368da7",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "e53a82d8d54ff1fc65e5d6cbafbdaf61",
"icons/Icon-192.png": "6e6f2898a0a4bf761c124915e23c7496",
"icons/Icon-512.png": "9b3679d7d3736122a177feceb61f74b8",
"icons/Icon-maskable-192.png": "6e6f2898a0a4bf761c124915e23c7496",
"icons/Icon-maskable-512.png": "9b3679d7d3736122a177feceb61f74b8",
"index.html": "a2ba5159a71d512073e7bd5867962ce1",
"/": "a2ba5159a71d512073e7bd5867962ce1",
"main.dart.js": "b791ad6175e0086b97d9aeb1e664737d",
"main.dart.mjs": "b6ef3ba59ccdcc450cef2bfd575873f3",
"main.dart.wasm": "22c73b055ea30f3f82526ac84d17582e",
"manifest.json": "8818b2fbb01a5b6d9361bb6b1adb2fd0",
"version.json": "328ee4cb57b52e0f6f2bd493b477ea13"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
