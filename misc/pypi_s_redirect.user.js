// ==UserScript==
// @name         pypi.org s redirect
// @namespace    https://asottile.dev
// @version      0.1
// @author       asottile
// @match        https://pypi.org/s/*
// @icon         https://www.google.com/s2/favicons?domain=pypi.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.location.href = window.location.href.replace('/s/', '/simple/');
})();
