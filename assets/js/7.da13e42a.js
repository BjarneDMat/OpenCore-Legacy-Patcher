(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{389:function(e,t,n){"use strict";n.r(t);var a={name:"ThemeManager",beforeMount(){function e(e){window.__theme=e,t=e,document.body.setAttribute("data-theme",e),window.__onThemeChange(e)}var t;window.__onThemeChange=function(){};try{t=localStorage.getItem("theme")}catch(e){}window.__setPreferredTheme=function(t){e(t);try{localStorage.setItem("theme",t)}catch(e){}};var n=window.matchMedia("(prefers-color-scheme: dark)");n.addListener((function(e){window.__setPreferredTheme(e.matches?"dark":"light")})),e(t||(n.matches?"dark":"light"))}},o=n(10),i=Object(o.a)(a,(function(){return(0,this._self._c)("div",{staticStyle:{visibility:"hidden",display:"none"}})}),[],!1,null,null,null);t.default=i.exports}}]);