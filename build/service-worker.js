"use strict";var precacheConfig=[["./index.html","bab1cb6e3523ba6741ff55e10d239471"],["./static/css/main.44c708b2.css","4d746de6559efb1b77e847132de6d46a"],["./static/js/main.875a7c5a.js","47e1eac413261f02de2d5a02aa83f021"],["./static/media/AG.e8dba318.jpg","e8dba318a2775bc53f798a341f581631"],["./static/media/BU.064e3b12.png","064e3b12ab28dfb8126de91ce853c59c"],["./static/media/DS.a7c82cbf.jpg","a7c82cbf8e1fd27d46eb149eb3bf307b"],["./static/media/DarylJohnston.1ba62d2e.jpg","1ba62d2e365c2b9fcf4f1c625450fe77"],["./static/media/JJW.c5dcd2e3.png","c5dcd2e3a7c0dc08a0d8e56d2d0d452a"],["./static/media/KJ.504cbc95.jpg","504cbc95056059f68fb31a4aa7aac53a"],["./static/media/LT.01a46936.png","01a469364710b2f634e540439ca58226"],["./static/media/MTL.06b1c8fa.jpg","06b1c8fab585cdda973cb5f8e3ac9698"],["./static/media/TM.43e15824.jpg","43e1582402b18700fa84ffaac1916ef2"],["./static/media/TP.6cb34b37.jpg","6cb34b37888e72b22298839f4e9fa75c"],["./static/media/TomBrady.a2f82f8c.jpeg","a2f82f8ce4d75ecb9b2142d3cd377374"],["./static/media/WP.df1344c9.png","df1344c9122bdc4f6a1156f3448ca70c"],["./static/media/WS.ee1c3df0.jpg","ee1c3df0bf289ef9f9a1b5f33da5433e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});