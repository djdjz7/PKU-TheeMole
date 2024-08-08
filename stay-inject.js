// ==UserScript==
// @name         PKU TheeMole
// @namespace    https://staybrowser.com/
// @version      0.2
// @description  Optimized Treehole UI for Stay
// @author       You
// @match        *://treehole.pku.edu.cn/*
// @grant        none
// ==/UserScript==
(function () {
  "use strict";
  const css = String.raw` .flow-item>.box{margin:.5em 0;padding:.5em .8em;position:relative;border-radius:.5em;box-shadow:rgba(0,0,0,.1) 0 10px 15px -3px,rgba(0,0,0,.05) 0 4px 6px -2px;-webkit-backdrop-filter:blur(4em);backdrop-filter:blur(4em);transition:all 150ms}.flow-item>.box:hover{box-shadow:rgba(0,0,0,.1) 0 20px 25px -5px,rgba(0,0,0,.04) 0 10px 10px -5px}.flow-reply-row>.box:first-child{margin:.5em 0;padding:.5em .5em .5em 1em}.flow-reply-row>.box{margin:.5em 0 .5em -.5em;border-radius:.5em;box-shadow:rgba(0,0,0,.1) 0 4px 6px -1px,rgba(0,0,0,.06) 0 2px 4px -1px}.flow-item-quote>.box{margin-left:2.5em;-webkit-backdrop-filter:blur(4em);backdrop-filter:blur(4em)}.flow-item-row{opacity:1!important}.title-bar{padding-top:.5em}.app-switcher{height:auto!important}.app-switcher>.app-switcher-item{transition:all 150ms!important;height:auto!important;padding:.2em 1em!important;border-radius:9999px!important;margin:0 .2em}.app-switcher>.app-switcher-item:hover{box-shadow:rgba(0,0,0,.1) 0 4px 6px -1px,rgba(0,0,0,.06) 0 2px 4px -1px;background:rgba(0,0,0,.5)!important}.app-switcher>.app-switcher-item-current{box-shadow:rgba(0,0,0,.1) 0 4px 6px -1px,rgba(0,0,0,.06) 0 2px 4px -1px;background:rgba(0,0,0,.5)!important;text-shadow:none!important}.aux-margin{display:none}.title-bar{height:auto;min-height:unset!important;-webkit-backdrop-filter:blur(4em)!important;backdrop-filter:blur(4em)!important}.title-bar{top:0!important}.quote-tip{color:gray}.control-btn{transition:all 150ms!important;padding:.2em 1em!important;border-radius:9999px!important;margin:0;width:max-content!important;height:auto!important;flex:0 0!important;align-self:stretch!important}.control-btn:hover{box-shadow:rgba(0,0,0,.1) 0 4px 6px -1px,rgba(0,0,0,.06) 0 2px 4px -1px;background:rgba(0,0,0,.5)!important}.control-btn>span{width:max-content!important}.control-search{width:auto!important}.control-bar{margin-top:.5em!important}.control-bar>.el-row{margin:unset!important}.left{gap:.5em}.flow-item-row p.img img{box-shadow:rgba(0,0,0,.1) 0 4px 6px -1px,rgba(0,0,0,.06) 0 2px 4px -1px}.box.reply-sticky{border-radius:1em;padding:.5em}.box.reply-sticky>div:first-child{margin:0!important}.box{box-shadow:rgba(0,0,0,.1) 0 10px 15px -3px,rgba(0,0,0,.05) 0 4px 6px -2px;border-radius:1em;margin:.5em 0;padding:.5em .8em}.sidebar-toolbar-item>a>label,.sidebar-toolbar-item>a>span>label{margin-left:.2em;cursor:pointer}.sidebar-title,.title-bar{box-shadow:rgba(0,0,0,.1) 0 10px 15px -3px,rgba(0,0,0,.05) 0 4px 6px -2px!important}.sidebar{-webkit-backdrop-filter:blur(4em)!important;backdrop-filter:blur(4em)!important}.box-header-badge{margin-right:0!important}@media screen and (max-width:570px){.app-switcher>.app-switcher-item{-webkit-box-flex:0!important;-ms-flex:1 0 0!important;flex:1 0 0!important;padding:.2em 0!important}}.quote{background-color:rgba(255,255,255,.5)!important}.quote.quote-dark{background-color:rgba(0,0,0,.5)!important}:root{--box-bgcolor-dark:rgba(0,0,0,.8)!important;--box-bgcolor-light:rgba(255,255,255,.8)!important}body{--theme_bgc_color:rgba(255,255,255,.8)!important}:root{--var-link-color:rgb(0,136,255)!important}input,select,textarea{padding:.2em .75em!important;border-width:1px!important;border-style:solid!important;border-color:rgba(128,128,128,.4)!important;border-radius:.5rem!important;background-color:var(--dark-bg)!important;transition:all 200ms!important;color:var(--dark-text)!important;align-self:stretch;height:auto!important;margin:0!important}input:focus,select:focus,textarea:focus{box-shadow:0 4px 6px rgba(0,0,0,.1)!important;outline:none!important}input:hover,select:hover,textarea:hover{box-shadow:0 4px 6px rgba(0,0,0,.1)!important}@media (prefers-color-scheme:dark){input,select,textarea{background-color:var(--dark-bg)!important;color:var(--light-text)!important}}.config-select{margin:.5em 0!important;height:unset}button{padding-top:.25rem;padding-bottom:.25rem;padding-left:1rem;padding-right:1rem;border-width:1px;border-style:solid;border-color:rgba(128,128,128,.4);border-radius:.5rem;font-size:.875rem;transition:all 200ms;color:black}button:focus{box-shadow:0 0 0 2px rgba(128,128,128,.5);outline:none}button:hover,button:focus{filter:brightness(95%);box-shadow:0 4px 6px rgba(0,0,0,.1)}@media (prefers-color-scheme:dark){button{background-color:var(--dark-bg);color:var(--light-text)}}@media screen and (max-width:900px){.flow-reply-row>.box:first-child{margin:1.5em 0!important}.flow-reply-row>.box{margin:1.5em 0 1em -.5em!important;position:relative!important;z-index:2!important}}@media screen and (max-width:769px){.right{margin-top:.5em}}@font-face{font-family:"Inter";font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCm3FwrK3iLTcvnUwkT9nA2.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:"Inter";font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCm3FwrK3iLTcvnUwAT9nA2.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:"Inter";font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCm3FwrK3iLTcvnUwgT9nA2.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:"Inter";font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCm3FwrK3iLTcvnUwcT9nA2.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:"Inter";font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCm3FwrK3iLTcvnUwsT9nA2.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:"Inter";font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCm3FwrK3iLTcvnUwoT9nA2.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:"Inter";font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCm3FwrK3iLTcvnUwQT9g.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:"Inter";font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcvvYwYL8g.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:"Inter";font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcvmYwYL8g.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:"Inter";font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcvuYwYL8g.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:"Inter";font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcvhYwYL8g.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:"Inter";font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcvtYwYL8g.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:"Inter";font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcvsYwYL8g.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:"Inter";font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcviYwY.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}*:not(code){font-family:"Inter",-apple-system,"Microsoft YaHei",sans-serif!important}@font-face{font-family:"bootstrap-icons";src:url("https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/bootstrap-icons/1.8.1/font/fonts/bootstrap-icons.woff2?524846017b983fc8ded9325d94ed40f3") format("woff2"),url("https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/bootstrap-icons/1.8.1/font/fonts/bootstrap-icons.woff?524846017b983fc8ded9325d94ed40f3") format("woff")}.icon::before,.app-switcher-item>img + span::before,.search-btn>button::before{display:inline-block!important;font-family:bootstrap-icons!important;font-style:normal!important;font-weight:normal!important;font-variant:normal!important;text-transform:none!important;line-height:1!important;vertical-align:-.125em!important;-webkit-font-smoothing:antialiased!important;-moz-osx-font-smoothing:grayscale!important}.app-switcher-item>img + span::before,.search-btn>button::before{margin-right:.25em}.icon-flag::before{content:"\f3cc"!important}.icon-refresh::before{content:"\f116"!important}.icon-order-rev::before{content:"\f574"!important}.icon-star::before{content:"\f588"!important}.icon-star-ok::before{content:"\f586"!important}.icon-reply::before{content:"\f268"!important}.icon-attention::before{content:"\f19f"}.icon-about::before{content:"\f4e1"}.icon-plus::before{content:"\f64d"}.icon-send::before{content:"\f6c0"}.icon-quote::before{content:"\f255"}.icon-close::before{content:"\f659"}.icon-back::before{content:"\f284"}.icon-textfile::before{content:"\f227";margin-right:.25em}.icon-logout::before{content:"\f1c3"}.icon-locate::before{content:"\f2cc"}.app-switcher-item>img{display:none}.app-switcher-item>img[src^="img/hole"] + span::before{content:"\f29a"}.app-switcher-item>img[src^="img/tree"] + span::before{content:"\f25e"}.app-switcher-item>img[src^="img/score"] + span::before{content:"\f4b5"}.app-switcher-item>img[src^="img/class"] + span::before{content:"\f208"}.search-btn>button::before{content:"\f52a"}@media screen and (min-width:1301px){.left-container .flow-item-row-with-prompt:hover:before{content:"\f132";position:absolute;left:10px;margin-top:1.5em;text-shadow:-1px -1px 0 rgba(0,0,0,.6),0 -1px 0 rgba(0,0,0,.6),1px -1px 0 rgba(0,0,0,.6),-1px 1px 0 rgba(0,0,0,.6),0 1px 0 rgba(0,0,0,.6),1px 1px 0 rgba(0,0,0,.6);display:inline-block!important;font-family:bootstrap-icons!important;font-style:normal!important;font-weight:normal!important;font-variant:normal!important;text-transform:none!important;line-height:1!important;vertical-align:-.125em!important;-webkit-font-smoothing:antialiased!important;-moz-osx-font-smoothing:grayscale!important}}.app-switcher>a:nth-child(2){display:none}`;
  function injectCss(css) {
    var style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    var head = document.querySelector("head");
    head.appendChild(style);
  }
  injectCss(css);
})();
