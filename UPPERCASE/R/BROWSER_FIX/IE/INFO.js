OVERRIDE({origin:INFO,func:function(origin){"use strict";global.INFO=OBJECT({preset:function(){return origin},init:function(cls,inner,self){var getLang,checkIsDisplayTouchable,checkIsSlowBrowser;if(navigator.language===undefined){self.getLang=getLang=function(){var lang=UPPERCASE.STORE("__INFO").get("lang");if(lang===undefined){lang=navigator.userLanguage;if(lang.length>2){lang=lang.substring(0,2)}lang=lang.toLowerCase()}return lang}}self.checkIsDisplayTouchable=checkIsDisplayTouchable=function(){return window.navigator.msPointerEnabled!==undefined};if(IE.version<=8){self.checkIsSlowBrowser=checkIsSlowBrowser=function(){return true}}}})}});