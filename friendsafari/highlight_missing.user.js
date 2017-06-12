// ==UserScript==
// @name        friendsafari - highlight missing
// @namespace   asottile
// @description highlight missing flairs
// @include     https://www.reddit.com/r/friendsafari/*
// @version     1
// @grant       GM_addStyle
// ==/UserScript==
GM_addStyle([
  '.flair-ferroseed.flair-skarmory.flair-klefki,',
  '.flair-mawile.flair-skarmory.flair-klefki,',
  '.flair-munna.flair-sigilyph.flair-girafarig,',
  '.flair-sunkern.flair-petilil.flair-maractus,',
  '.flair-woobat.flair-tropius,',
  '.flair-meditite.flair-throh.flair-riolu,',
  '.flair-dedenne.flair-mawile,',
  '.flair-emolga.flair-stunfisk,',
  '.flair-pawniard.flair-sneasel,',
  '.flair-pawniard.flair-sableye {',
  '    outline: 5px solid #f00;',
  '}'
].join(''));
