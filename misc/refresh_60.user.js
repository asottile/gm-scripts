// ==UserScript==
// @name        reload every 60 seconds
// @namespace   asottile
// @description Reloads the page every 60 seconds
// @include     https://www.reddit.com/r/friendsafari/new/
// @version     1
// @grant       none
// ==/UserScript==
window.setTimeout(window.location.reload.bind(window.location), 60000);
