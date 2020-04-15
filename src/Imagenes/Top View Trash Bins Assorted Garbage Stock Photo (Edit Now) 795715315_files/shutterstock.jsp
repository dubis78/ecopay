Array.prototype.filter||(Array.prototype.filter=function(t,e){"use strict";if("Function"!=typeof t&&"function"!=typeof t||!this)throw new TypeError;var r=this.length>>>0,n=new Array(r),o=this,l=0,i=-1;if(void 0===e)for(;++i!==r;)i in this&&t(o[i],i,o)&&(n[l++]=o[i]);else for(;++i!==r;)i in this&&t.call(e,o[i],i,o)&&(n[l++]=o[i]);return n.length=l,n}),Array.prototype.forEach||(Array.prototype.forEach=function(t){var e,r;if(null===this||void 0===this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(arguments.length>1&&(e=arguments[1]),r=0;r<o;){var l;r in n&&(l=n[r],t.call(e,l,r,n)),r++}}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t,e){var r;if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return-1;var l=0|e;if(l>=o)return-1;for(r=Math.max(l>=0?l:o-Math.abs(l),0);r<o;){if(r in n&&n[r]===t)return r;r++}return-1}),document.getElementsByClassName||(document.getElementsByClassName=function(t){var e,r,n,o=document,l=[];if(o.querySelectorAll)return o.querySelectorAll("."+t);if(o.evaluate)for(r=".//*[contains(concat(' ', @class, ' '), ' "+t+" ')]",e=o.evaluate(r,o,null,0,null);n=e.iterateNext();)l.push(n);else for(e=o.getElementsByTagName("*"),r=new RegExp("(^|\\s)"+t+"(\\s|$)"),n=0;n<e.length;n++)r.test(e[n].className)&&l.push(e[n]);return l}),document.querySelectorAll||(document.querySelectorAll=function(t){var e,r=document.createElement("style"),n=[];for(document.documentElement.firstChild.appendChild(r),document._qsa=[],r.styleSheet.cssText=t+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",window.scrollBy(0,0),r.parentNode.removeChild(r);document._qsa.length;)(e=document._qsa.shift()).style.removeAttribute("x-qsa"),n.push(e);return document._qsa=null,n}),document.querySelector||(document.querySelector=function(t){var e=document.querySelectorAll(t);return e.length?e[0]:null}),Object.keys||(Object.keys=function(){"use strict";var t=Object.prototype.hasOwnProperty,e=!{toString:null}.propertyIsEnumerable("toString"),r=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],n=r.length;return function(o){if("function"!=typeof o&&("object"!=typeof o||null===o))throw new TypeError("Object.keys called on non-object");var l,i,s=[];for(l in o)t.call(o,l)&&s.push(l);if(e)for(i=0;i<n;i++)t.call(o,r[i])&&s.push(r[i]);return s}}()),"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),window.hasOwnProperty=window.hasOwnProperty||Object.prototype.hasOwnProperty;
if (typeof usi_commons === 'undefined') {
	usi_commons = {
		
		debug:location.href.indexOf("usidebug") != -1,
		
		log:function(msg) {
			if (this.debug) {
				if (msg instanceof Error) {
					console.log(msg.name + ': ' + msg.message);
				} else {
					console.log.apply(console, arguments);
				}
			}
		},
		log_error: function(msg) {
			if (this.debug) {
				if (msg instanceof Error) {
					console.log('%c USI Error:', usi_commons.log_styles.error, msg.name + ': ' + msg.message);
				} else {
					console.log('%c USI Error:', usi_commons.log_styles.error, msg);
				}
			}
		},
		log_success: function(msg) {
			if (this.debug) {
				console.log('%c USI Success:', usi_commons.log_styles.success, msg);
			}
		},
		dir:function(obj) {
			if (this.debug) {
				console.dir(obj);
			}
		},
		log_styles: {
			error: 'color: red; font-weight: bold;',
			success: 'color: green; font-weight: bold;'
		},
		domain: "https://www.upsellit.com",
		is_mobile: (/iphone|ipod|ipad|android|blackberry|mobi/i).test(navigator.userAgent.toLowerCase()),
		device: (/iphone|ipod|ipad|android|blackberry|mobi/i).test(navigator.userAgent.toLowerCase()) ? 'mobile' : 'desktop',
		gup:function(name) {
			name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
			var regexS = "[\\?&]" + name + "=([^&#\\?]*)";
			var regex = new RegExp(regexS);
			var results = regex.exec(window.location.href);
			if (results == null) return "";
			else return results[1];
		},
		load_script:function(source, callback) {
			var docHead = document.getElementsByTagName("head")[0];
			if (top.location != location) docHead = parent.document.getElementsByTagName("head")[0];
			var newScript = document.createElement('script');
			newScript.type = 'text/javascript';
			newScript.src = source;
			if (typeof callback == "function") newScript.onload = callback;
			docHead.appendChild(newScript);
		},
		load_display:function(usiQS, usiSiteID, usiKey, callback) {
			usiKey = usiKey || "";
			var source = this.domain + "/launch.jsp?qs=" + usiQS + "&siteID=" + usiSiteID + "&keys=" + usiKey;
			this.load_script(source, callback);
		},
		load_facebook:function(usiQS, usiSiteID, usiKey) {
		},
		load_view:function(usiHash, usiSiteID, usiKey, callback) {
			if (typeof(usi_force) != "undefined" || location.href.indexOf("usi_force") != -1 || (usi_cookies.get("usi_launched") == null && usi_cookies.get("usi_launched"+usiSiteID) == null)) {
				usiKey = usiKey || "";
				var usi_append = "";
				if (this.gup("usi_force_date") != "") usi_append = "&usi_force_date=" + this.gup("usi_force_date");
				else if (typeof usi_cookies !== 'undefined' && usi_cookies.get("usi_force_date") != null) usi_append = "&usi_force_date=" + usi_cookies.get("usi_force_date");
				if (typeof usi_cookies !== 'undefined' && usi_cookies.get("usi_id_cache") != null) usi_append += "&usi_id_cache=" + usi_cookies.get("usi_id_cache");
				var source = this.domain + "/view.jsp?hash=" + usiHash + "&siteID=" + usiSiteID + "&keys=" + usiKey + usi_append;
				if (typeof(this.last_view) !== "undefined" && this.last_view == usiSiteID+"_"+usiKey) return;
				this.last_view = usiSiteID+"_"+usiKey;
				if (typeof usi_js !== 'undefined' && typeof usi_js.cleanup === 'function') usi_js.cleanup();
				this.load_script(source, callback);
			}
		},
		load_precapture:function(usiQS, usiSiteID, callback) {
			var source = this.domain + "/hound/monitor.jsp?qs=" + usiQS + "&siteID=" + usiSiteID + "&domain=" + encodeURIComponent(this.domain);
			this.load_script(source, callback);
		},
		load_mail:function(qs, siteID, callback) {
			var source = this.domain + "/mail.jsp?qs=" + qs + "&siteID=" + siteID + "&domain=" + encodeURIComponent(this.domain);
			this.load_script(source, callback);
		},
		send_prod_rec:function(siteID, info, real_time) {
			var result = false;
			try {
				if (!!siteID && !!info.name && !!info.link && !!info.pid && !!info.price && !!info.image) {
					var queryString = siteID + "|" + info.name + "|" + info.link + "|" + info.pid + "|" + info.price + "|" + info.image;
					if (info.extra) queryString += "|" + info.extra;
					var filetype = real_time ? "jsp" : "js";
					this.load_script(this.domain + "/active/pv2." + filetype + "?" + encodeURIComponent(queryString));
					result = true;
				}
			} catch (e) {
				this.report_error(e);
				result = false;
			}
			return result;
		},
		report_error:function(err) {
			if (err == null) return;
			if (typeof err === 'string') err = new Error(err);
			if (!(err instanceof Error)) return;
			if (typeof(usi_commons.error_reported) !== "undefined") {
			    return;
            }
            usi_commons.error_reported = true;
			if (location.href.indexOf('usishowerrors') !== -1) throw err;
			else usi_commons.load_script(usi_commons.domain + '/err.jsp?oops=' + encodeURIComponent(err.message) + '-' + encodeURIComponent(err.stack));
			usi_commons.log_error(err.message);
			usi_commons.dir(err);
		},
		gup_or_get_cookie: function(name, expireSeconds, forceCookie) {
			if (typeof usi_cookies === 'undefined') {
				usi_commons.log_error('usi_cookies is not defined');
				return;
			}
			expireSeconds = (expireSeconds || usi_cookies.expire_time.day);
			var value = null;
			var qsValue = usi_commons.gup(name);
			if (qsValue !== '') {
				value = qsValue;
				usi_cookies.set(name, value, expireSeconds, forceCookie);
			} else {
				value = usi_cookies.get(name);
			}
			return (value || '');
		}
	};
}
if (typeof usi_app === 'undefined') {
	try {
		if("undefined"==typeof usi_cookies&&(usi_cookies={expire_time:{minute:60,hour:3600,two_hours:7200,four_hours:14400,day:86400,week:604800,two_weeks:1209600,month:2592e3,year:31536e3,never:31536e4},max_cookies_count:15,max_cookie_length:1e3,update_window_name:function(e,o,i){try{var n=-1;if(-1!=i){var t=new Date;t.setTime(t.getTime()+1e3*i),n=t.getTime()}var s=window.top||window,r=0;null!=o&&-1!=o.indexOf("=")&&(o=o.replace(new RegExp("=","g"),"USIEQLS")),null!=o&&-1!=o.indexOf(";")&&(o=o.replace(new RegExp(";","g"),"USIPRNS"));for(var u=s.name.split(";"),c="",a=0;a<u.length;a++){var l=u[a].split("=");3==l.length?(l[0]==e&&(l[1]=o,l[2]=n,r=1),null!=l[1]&&"null"!=l[1]&&(c+=l[0]+"="+l[1]+"="+l[2]+";")):""!=u[a]&&(c+=u[a]+";")}0==r&&(c+=e+"="+o+"="+n+";"),s.name=c}catch(e){}},flush_window_name:function(e){try{for(var o=window.top||window,i=o.name.split(";"),n="",t=0;t<i.length;t++){var s=i[t].split("=");3==s.length&&(0==s[0].indexOf(e)||(n+=i[t]+";"))}o.name=n}catch(e){}},get_from_window_name:function(e){try{for(var o=(window.top||window).name.split(";"),i=0;i<o.length;i++){var n=o[i].split("=");if(3==n.length){if(n[0]==e)if(-1!=(t=n[1]).indexOf("USIEQLS")&&(t=t.replace(new RegExp("USIEQLS","g"),"=")),-1!=t.indexOf("USIPRNS")&&(t=t.replace(new RegExp("USIPRNS","g"),";")),!("-1"!=n[2]&&usi_cookies.datediff(n[2])<0))return"undefined"==typeof usi_cookieless&&usi_cookies.create_cookie(n[0],t,usi_cookies.datediff(n[2])/1e3),usi_results=[t,n[2]],usi_results}else if(2==n.length){var t;if(n[0]==e)return-1!=(t=n[1]).indexOf("USIEQLS")&&(t=t.replace(new RegExp("USIEQLS","g"),"=")),-1!=t.indexOf("USIPRNS")&&(t=t.replace(new RegExp("USIPRNS","g"),";")),usi_results=[t,(new Date).getTime()+6048e5],usi_results}}}catch(e){}return null},datediff:function(e){return e-(new Date).getTime()},count_cookies:function(e){return e=e||"usi_",usi_cookies.search_cookies(e).length},root_domain:function(){try{var e=document.domain.split("."),o=e[e.length-1];if("com"==o||"net"==o||"org"==o||"us"==o||"co"==o||"ca"==o)return e[e.length-2]+"."+e[e.length-1]}catch(e){}return document.domain},create_cookie:function(e,o,i){var n="";if(-1!=i){var t=new Date;t.setTime(t.getTime()+1e3*i),n="; expires="+t.toGMTString()}var s="samesite=none;";0==location.href.indexOf("https://")&&(s+="secure;");var r=usi_cookies.root_domain();"undefined"!=typeof usi_parent_domain&&-1!=document.domain.indexOf(usi_parent_domain)&&(r=usi_parent_domain),document.cookie=e+"="+encodeURIComponent(o)+n+"; path=/;domain="+r+"; "+s},read_cookie:function(e){for(var o=e+"=",i=document.cookie.split(";"),n=0;n<i.length;n++){for(var t=i[n];" "==t.charAt(0);)t=t.substring(1,t.length);if(0==t.indexOf(o))return decodeURIComponent(t.substring(o.length,t.length))}return null},del:function(e){usi_cookies.set(e,null,-100)},get:function(e){var o=null,i=usi_cookies.get_from_window_name(e);if(null!=i&&i.length>1)try{o=decodeURIComponent(i[0])}catch(e){return i[0]}else o=usi_cookies.read_cookie(e);return null==o?null:o},get_json:function(e){var o=null,i=usi_cookies.get(e);if(null==i)return null;try{o=JSON.parse(i)}catch(e){i=i.replace(/\\"/g,'"');try{o=JSON.parse(JSON.parse(i))}catch(e){try{o=JSON.parse(i)}catch(e){}}}return o},search_cookies:function(e){e=e||"";var o=[];return document.cookie.split(";").forEach(function(i){var n=i.split("=")[0].trim();""!==e&&0!==n.indexOf(e)||o.push(n)}),o},set:function(e,o,i,n){"undefined"!=typeof usi_nevercookie&&(n=!1);try{o=o.replace(/(\r\n|\n|\r)/gm,"")}catch(e){}if("undefined"==typeof usi_windownameless&&usi_cookies.update_window_name(e+"",o+"",i),"undefined"==typeof usi_cookieless||n||null==o){if(null!=o){if(null==usi_cookies.read_cookie(e))if(!n)if(usi_cookies.search_cookies("usi_").length+1>usi_cookies.max_cookies_count)return void usi_cookies.report_error('Set cookie "'+e+'" failed. Max cookies count is '+usi_cookies.max_cookies_count);o.length>usi_cookies.max_cookie_length&&(usi_cookies.report_error('Cookie "'+e+'" truncated ('+o.length+"). Max single-cookie length is "+usi_cookies.max_cookie_length),o=o.substring(0,usi_cookies.max_cookie_length-1))}usi_cookies.create_cookie(e,o,i)}},set_json:function(e,o,i,n){var t=JSON.stringify(o).replace(/^"/,"").replace(/"$/,"");usi_cookies.set(e,t,i,n)},flush:function(e){e=e||"usi_";var o,i,n,t=document.cookie.split(";");for(o=0;o<t.length;o++)0==(i=t[o]).trim().toLowerCase().indexOf(e)&&(n=i.trim().split("=")[0],usi_cookies.del(n));usi_cookies.flush_window_name(e)},print:function(){for(var e=document.cookie.split(";"),o="",i=0;i<e.length;i++){var n=e[i];0==n.trim().toLowerCase().indexOf("usi_")&&(console.log(n.trim()+" (cookie)"),o+=","+n.trim().toLowerCase().split("=")[0]+",")}var t=(window.top||window).name.split(";");for(i=0;i<t.length;i++){var s=t[i].split("=");3==s.length&&0==s[0].indexOf("usi_")&&-1==o.indexOf(","+s[0]+",")&&console.log(s[0]+"="+s[1]+" (window.name)")}},value_exists:function(){var e,o;for(e=0;e<arguments.length;e++)if(""===(o=usi_cookies.get(arguments[e]))||null===o||"null"===o||"undefined"===o)return!1;return!0},report_error:function(e){"undefined"!=typeof usi_commons&&"function"==typeof usi_commons.report_error&&usi_commons.report_error(e)}},"undefined"!=typeof usi_commons&&"function"==typeof usi_commons.gup))try{""!=usi_commons.gup("usi_email_id")&&usi_cookies.set("usi_email_id",usi_commons.gup("usi_email_id").split(".")[0],Number(usi_commons.gup("usi_email_id").split(".")[1]),!0)}catch(e){usi_commons.report_error(e)}
"undefined"==typeof usi_dom&&(usi_dom={},usi_dom.get_elements=function(e,t){return t=t||document,Array.prototype.slice.call(t.querySelectorAll(e))},usi_dom.count_elements=function(e,t){return t=t||document,usi_dom.get_elements(e,t).length},usi_dom.get_nth_element=function(e,t,n){var r=null;n=n||document;var o=usi_dom.get_elements(t,n);return o.length>=e&&(r=o[e-1]),r},usi_dom.get_first_element=function(e,t){if(""===(e||""))return null;if(t=t||document,"[object Array]"===Object.prototype.toString.call(e)){for(var n=null,r=0;r<e.length;r++){var o=e[r];if(null!=(n=usi_dom.get_first_element(o,t)))break}return n}return t.querySelector(e)},usi_dom.get_element_text_no_children=function(e,t){var n="";if(null==t&&(t=!1),null!=(e=e||document)&&null!=e.childNodes)for(var r=0;r<e.childNodes.length;++r)3===e.childNodes[r].nodeType&&(n+=e.childNodes[r].textContent);return!0===t&&(n=usi_dom.clean_string(n)),n.trim()},usi_dom.clean_string=function(e){if("string"==typeof e){return(e=(e=(e=(e=(e=(e=(e=e.replace(/[\u2010-\u2015\u2043]/g,"-")).replace(/[\u2018-\u201B]/g,"'")).replace(/[\u201C-\u201F]/g,'"')).replace(/\u2024/g,".")).replace(/\u2025/g,"..")).replace(/\u2026/g,"...")).replace(/\u2044/g,"/")).replace(/[^\x20-\xFF\u0100-\u017F\u0180-\u024F\u20A0-\u20CF]/g,"").trim()}},usi_dom.encode=function(e){if("string"==typeof e){var t=encodeURIComponent(e);return t=t.replace(/[-_.!~*'()]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},usi_dom.get_closest=function(e,t){for(e=e||document,"function"!=typeof Element.prototype.matches&&(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1});null!=e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},usi_dom.get_classes=function(e){var t=[];return null!=e&&null!=e.classList&&(t=Array.prototype.slice.call(e.classList)),t},usi_dom.add_class=function(e,t){if(null!=e){var n=usi_dom.get_classes(e);-1===n.indexOf(t)&&(n.push(t),e.className=n.join(" "))}},usi_dom.string_to_decimal=function(e){var t=null;if("string"==typeof e)try{var n=parseFloat(e.replace(/[^0-9\.-]+/g,""));!1===isNaN(n)&&(t=n)}catch(e){usi_commons.log("Error: "+e.message)}return t},usi_dom.string_to_integer=function(e){var t=null;if("string"==typeof e)try{var n=parseInt(e.replace(/[^0-9-]+/g,""));!1===isNaN(n)&&(t=n)}catch(e){usi_commons.log("Error: "+e.message)}return t},usi_dom.get_currency_string_from_content=function(e){if("string"!=typeof e)return"";try{e=e.trim();var t=e.match(/^([^\$]*?)(\$(?:[\,\,]?\d{1,3})+(?:\.\d{2})?)(.*?)$/)||[];return 4===t.length?t[2]:""}catch(e){return usi_commons.log("Error: "+e.message),""}},usi_dom.get_absolute_url=function(){var e;return function(t){return(e=e||document.createElement("a")).href=t,e.href}}(),usi_dom.format_number=function(e,t){var n="";if("number"==typeof e){t=t||0;var r=e.toFixed(t).split(/\./g);if(1==r.length||2==r.length)n=r[0].replace(/./g,function(e,t,n){return t&&"."!==e&&(n.length-t)%3==0?","+e:e}),2==r.length&&(n+="."+r[1])}return n},usi_dom.format_currency=function(e,t,n){var r="";return e=Number(e),!1===isNaN(e)&&("object"==typeof Intl&&"function"==typeof Intl.NumberFormat?(t=t||"en-US",n=n||{style:"currency",currency:"USD"},r=e.toLocaleString(t,n)):r=e),r},usi_dom.to_decimal_places=function(e,t){if(null!=e&&"number"==typeof e&&null!=t&&"number"==typeof t){if(0==t)return parseFloat(Math.round(e));for(var n=10,r=1;r<t;r++)n*=10;return parseFloat(Math.round(e*n)/n)}return null},usi_dom.trim_string=function(e,t,n){return n=n||"",(e=e||"").length>t&&(e=e.substring(0,t),""!==n&&(e+=n)),e},usi_dom.attach_event=function(e,t,n){var r=usi_dom.find_supported_element(e,n);usi_dom.detach_event(e,t,r),r.addEventListener?r.addEventListener(e,t,!1):r.attachEvent("on"+e,t)},usi_dom.detach_event=function(e,t,n){var r=usi_dom.find_supported_element(e,n);r.removeEventListener?r.removeEventListener(e,t,!1):r.detachEvent("on"+e,t)},usi_dom.find_supported_element=function(e,t){return(t=t||document)===window?window:!0===usi_dom.is_event_supported(e,t)?t:t===document?window:usi_dom.find_supported_element(e,document)},usi_dom.is_event_supported=function(e,t){return null!=t&&void 0!==t["on"+e]},usi_dom.is_defined=function(e,t){if(null==e)return!1;if(""===(t||""))return!1;var n=!0,r=e;return t.split(".").forEach(function(e){!0===n&&(null==r||"object"!=typeof r||!1===r.hasOwnProperty(e)?n=!1:r=r[e])}),n},usi_dom.observe=function(e,t,n){var r=location.href,o=window.MutationObserver||window.WebkitMutationObserver;return t=t||{onUrlUpdate:!1,observerOptions:{childList:!0,subtree:!0}},function(e,n){var u=function(){var e=location.href;t.onUrlUpdate&&e!==r?(n(),r=e):n()};o?new o(function(e){var o=location.href,u=e[0].addedNodes.length||e[0].removedNodes.length;u&&t.onUrlUpdate&&o!==r?(n(),r=o):u&&n()}).observe(e,t.observerOptions):window.addEventListener&&(e.addEventListener("DOMNodeInserted",u,!1),e.addEventListener("DOMNodeRemoved",u,!1))}}(),usi_dom.params_to_object=function(e){var t={};""!=(e||"")&&e.split("&").forEach(function(e){var n=e.split("=");2===n.length?t[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):1===n.length&&(t[decodeURIComponent(n[0])]=null)});return t},usi_dom.object_to_params=function(e){var t=[];if(null!=e)for(var n in e)!0===e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+(null==e[n]?"":encodeURIComponent(e[n])));return t.join("&")},usi_dom.interval_with_timeout=function(e,t,n,r){if("function"!=typeof e)throw new Error("usi_dom.interval_with_timeout(): iterationFunction must be a function");if(null==t)t=function(e){return e};else if("function"!=typeof t)throw new Error("usi_dom.interval_with_timeout(): timeoutCallback must be a function");if(null==n)n=function(e){return e};else if("function"!=typeof n)throw new Error("usi_dom.interval_with_timeout(): completeCallback must be a function");var o=(r=r||{}).intervalMS||20,u=r.timeoutMS||2e3;if("number"!=typeof o)throw new Error("usi_dom.interval_with_timeout(): intervalMS must be a number");if("number"!=typeof u)throw new Error("usi_dom.interval_with_timeout(): timeoutMS must be a number");var i=!1,l=new Date,s=setInterval(function(){var r=new Date-l;if(r>=u)return clearInterval(s),t({elapsedMS:r});!1===i&&(i=!0,e(function(e,t){if(i=!1,!0===e)return clearInterval(s),(t=t||{}).elapsedMS=new Date-l,n(t)}))},o)},usi_dom.load_external_stylesheet=function(e,t,n){if(""!==(e||"")){""===(t||"")&&(t="usi_stylesheet_"+(new Date).getTime());var r={url:e,id:t},o=document.getElementsByTagName("head")[0];if(null!=o){var u=document.createElement("link");u.type="text/css",u.rel="stylesheet",u.id=r.id,u.href=e,usi_dom.attach_event("load",function(){if(null!=n)return n(null,r)},u),o.appendChild(u)}}else if(null!=n)return n(null,r)},usi_dom.ready=function(e){void 0!==document.readyState&&"complete"===document.readyState?e():window.addEventListener?window.addEventListener("load",e,!0):window.attachEvent?window.attachEvent("onload",e):setTimeout(e,5e3)});
'undefined'==typeof usi_url&&(usi_url={},usi_url.URL=function(a){a=a||location.href;var b=document.createElement('a');if(b.href=a,this.full=b.href||'',this.protocol=(b.protocol||'').split(':')[0],this.host=b.host||'',-1!=this.host.indexOf(':')&&(this.host=this.host.substring(0,this.host.indexOf(':'))),this.port=b.port||'',this.hash=b.hash||'',this.baseURL='',this.tld='',this.domain='',this.subdomain='',this.domain_tld='',''!==this.protocol&&''!==this.host){this.baseURL=this.protocol+'://'+this.host+'/';var c=this.host.split(/\./g);if(2<=c.length){if(-1<['co','com','org','net','int','edu','gov','mil'].indexOf(c[c.length-2])&&2===c[c.length-1].length){var d=c.pop(),e=c.pop();this.tld=e+'.'+d}else this.tld=c.pop()}0<c.length&&(this.domain=c.pop(),0<c.length&&(this.subdomain=c.join('.'))),this.domain_tld=this.domain+'.'+this.tld}var f=b.pathname||'';0!==f.indexOf('/')&&(f='/'+f),this.path=new usi_url.Path(f),this.params=new usi_url.Params((b.search||'').substr(1))},usi_url.URL.prototype.build=function(a,b,c){var d='';return''!==this.protocol&&''!==this.host&&(null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!0),!0==a&&(d+=this.protocol+':'),d+='//'+this.host,''!==this.port&&(d+=':'+this.port),!0==b&&(d+=this.path.full,!0==c&&0<Object.keys(this.params.parameters).length&&(d+='?',d+=this.params.build()))),d},usi_url.Path=function(a){a=a||'',this.full=a,this.directories=[],this.filename='';for(var b=a.substr(1).split(/\//g);0<b.length;)1===b.length?this.filename=b.shift():this.directories.push(b.shift());this.has_directory=function(a){return-1<this.directories.indexOf(a)},this.contains=function(a){return-1<this.full.indexOf(a)}},usi_url.Params=function(a){a=a||'',this.full=a,this.parameters=function(a){var b={};if(1===a.length&&''===a[0])return b;for(var c,d,e,f=0;f<a.length;f++)if(e=a[f].split('='),c=e[0]&&e[0].replace(/\+/g,' '),d=e[1]&&e[1].replace(/\+/g,' '),1===e.length)b[c]='';else try{b[c]=decodeURIComponent(d)}catch(a){b[c]=d}return b}(a.split('&')),this.count=Object.keys(this.parameters).length,this.get=function(a){return a in this.parameters?this.parameters[a]:null},this.has=function(a){return a in this.parameters},this.set=function(a,b){this.parameters[a]=b,this.count=Object.keys(this.parameters).length},this.remove=function(a){!0===this.has(a)&&delete this.parameters[a],this.count=Object.keys(this.parameters).length},this.build=function(){var a=this,b=[];for(var c in a.parameters)!0===a.parameters.hasOwnProperty(c)&&b.push(c+'='+encodeURIComponent(a.parameters[c]));return b.join('&')},this.remove_usi_params=function(a){var b=this;for(var c in a=a||[],-1===a.indexOf('usi_')&&a.push('usi_'),b.parameters)if(!0===b.parameters.hasOwnProperty(c)){var d=!1;a.forEach(function(a){0===c.indexOf(a)&&(d=!0)}),d&&b.remove(c)}},this.remove_all=function(){var a=this;for(var b in a.parameters)!0===a.parameters.hasOwnProperty(b)&&a.remove(b)}});
'undefined'==typeof usi_date&&(usi_date={},usi_date.PSTOffsetMinutes=480,usi_date.localOffsetMinutes=new Date().getTimezoneOffset(),usi_date.offsetDeltaMinutes=usi_date.localOffsetMinutes-usi_date.PSTOffsetMinutes,usi_date.toPST=function(a){return!1===usi_date.is_date(a)?a:new Date(a.getTime()+1e3*(60*usi_date.offsetDeltaMinutes))},usi_date.add_hours=function(a,b){return!1===usi_date.is_date(a)?a:new Date(a.getTime()+1e3*(60*(60*b)))},usi_date.add_minutes=function(a,b){return!1===usi_date.is_date(a)?a:new Date(a.getTime()+1e3*(60*b))},usi_date.add_seconds=function(a,b){return!1===usi_date.is_date(a)?a:new Date(a.getTime()+1e3*b)},usi_date.get_week_number=function(a){var b={year:-1,weekNumber:-1};try{if(usi_date.is_date(a)){var c=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate()));c.setUTCDate(c.getUTCDate()+4-(c.getUTCDay()||7));var d=new Date(Date.UTC(c.getUTCFullYear(),0,1)),e=Math.ceil(((c-d)/864e5+1)/7);b.year=c.getUTCFullYear(),b.weekNumber=e}}catch(a){}finally{return b}},usi_date.is_date=function(a){return null!=a&&'object'==typeof a&&!0==a instanceof Date&&!1===isNaN(a.getTime())},usi_date.is_date_within_range=function(a,b,c){if('undefined'==typeof a&&(a=usi_date.set_date()),!1===usi_date.is_date(a))return!1;var d=usi_date.string_to_date(b,!1),e=usi_date.string_to_date(c,!1),f=usi_date.toPST(a);return f>=d&&f<e},usi_date.is_date_after=function(a,b){if(!1===usi_date.is_date(a))return!1;var c=usi_date.string_to_date(b,!1),d=usi_date.toPST(a);return d>c},usi_date.is_date_before=function(a,b){if(!1===usi_date.is_date(a))return!1;var c=usi_date.string_to_date(b,!1),d=usi_date.toPST(a);return d<c},usi_date.string_to_date=function(a,b){b=b||!1;var c=null,d=/^[0-2]?[0-9]\/[0-3]?[0-9]\/\d{4}(\s[0-2]?[0-9]\:[0-5]?[0-9](?:\:[0-5]?[0-9])?)?$/,e=/^(\d{4}\-[0-2]?[0-9]\-[0-3]?[0-9])(\s[0-2]?[0-9]\:[0-5]?[0-9](?:\:[0-5]?[0-9])?)?$/,f=d.exec(a),g=e.exec(a);if(2===(f||[]).length){if(c=new Date(a),''===(f[1]||'')&&!0===b){var h=new Date;c=usi_date.add_hours(c,h.getHours()),c=usi_date.add_minutes(c,h.getMinutes()),c=usi_date.add_seconds(c,h.getSeconds())}}else if(3===(g||[]).length){var i=g[1].split(/\-/g),j=i[1]+'/'+i[2]+'/'+i[0];return j+=g[2]||'',usi_date.string_to_date(j,b)}return c},usi_date.set_date=function(){var a=new Date,b=usi_commons.gup('usi_force_date');if(''!==b){b=decodeURIComponent(b);var c=usi_date.string_to_date(b,!0);null==c?usi_cookies.del('usi_force_date'):(a=c,usi_cookies.set('usi_force_date',b,usi_cookies.expire_time.hour),usi_commons.log('Date forced to: '+a))}else a=null==usi_cookies.get('usi_force_date')?new Date:usi_date.string_to_date(usi_cookies.get('usi_force_date'),!0);return a},usi_date.diff=function(a,b,c,d){null==d&&(d=1),''!=(c||'')&&(c=usi_date.get_units(c));var e=null;if(!0===usi_date.is_date(b)&&!0===usi_date.is_date(a))try{var f=Math.abs(b-a);switch(c){case'ms':e=f;break;case'seconds':e=usi_dom.to_decimal_places(parseFloat(f)/parseFloat(1e3),d);break;case'minutes':e=usi_dom.to_decimal_places(parseFloat(f)/parseFloat(1e3)/parseFloat(60),d);break;case'hours':e=usi_dom.to_decimal_places(parseFloat(f)/parseFloat(1e3)/parseFloat(60)/parseFloat(60),d);break;case'days':e=usi_dom.to_decimal_places(parseFloat(f)/parseFloat(1e3)/parseFloat(60)/parseFloat(60)/parseFloat(24),d);break;default:}}catch(a){e=null}return e},usi_date.convert_units=function(a,b,c,d){var e=null,f=null;switch(usi_date.get_units(b)){case'days':e=24*(60*(60*(1e3*(1e6*a))));break;case'hours':e=60*(60*(1e3*(1e6*a)));break;case'minutes':e=60*(1e3*(1e6*a));break;case'seconds':e=1e3*(1e6*a);break;case'ms':e=1e6*a;break;default:}switch(usi_date.get_units(c)){case'days':f=usi_dom.to_decimal_places(parseFloat(e)/parseFloat(1e6)/parseFloat(1e3)/parseFloat(60)/parseFloat(60)/parseFloat(24),d);break;case'hours':f=usi_dom.to_decimal_places(parseFloat(e)/parseFloat(1e6)/parseFloat(1e3)/parseFloat(60)/parseFloat(60),d);break;case'minutes':f=usi_dom.to_decimal_places(parseFloat(e)/parseFloat(1e6)/parseFloat(1e3)/parseFloat(60),d);break;case'seconds':f=usi_dom.to_decimal_places(parseFloat(e)/parseFloat(1e6)/parseFloat(1e3),d);break;case'ms':f=usi_dom.to_decimal_places(parseFloat(e)/parseFloat(1e6),d);break;default:}return f},usi_date.get_units=function(a){var b='';switch(a.toLowerCase()){case'days':case'day':case'd':b='days';break;case'hours':case'hour':case'hrs':case'hr':case'h':b='hours';break;case'minutes':case'minute':case'mins':case'min':case'm':b='minutes';break;case'seconds':case'second':case'secs':case'sec':case's':b='seconds';break;case'ms':case'milliseconds':case'millisecond':case'millis':case'milli':b='ms';break;default:}return b});
"undefined"==typeof usi_split_test&&(usi_split_test={split_test_name:"usi_dice_roll",split_group:"-1",split_siteID:"-1",split_test_cookie_length:30,get_split_var:function(t){if(t=t||"",null==usi_cookies.get("usi_visitor_id"+t)){var i="v_"+Math.random().toString(36).substring(7)+"_"+Math.round((new Date).getTime()/1e3)+"_"+t;return usi_cookies.set("usi_visitor_id"+t,i,86400*this.split_test_cookie_length,!0),i}return usi_cookies.get("usi_visitor_id"+t)},report_test:function(t,i){var s=document.getElementsByTagName("head")[0],e=document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("src","//www.upsellit.com/utility/split_test.jsp?siteID="+t+"&group="+i+"&usi_visitor_id="+this.get_split_var(t)),s.appendChild(e),void 0!==usi_split_test.set_verification&&setTimeout("usi_split_test.set_verification("+i+");",1e3)},get_group:function(t){return usi_cookies.get(this.split_test_name+t)},instantiate:function(t,i,s){null==usi_cookies.get(this.split_test_name+t)||s?(0===i||i&&""!=i?this.split_group=i:Math.random()>.5?this.split_group="0":this.split_group="1",this.report_test(t,this.split_group),usi_cookies.set(this.split_test_name+t,this.split_group,86400*this.split_test_cookie_length,!0)):this.split_group=usi_cookies.get(this.split_test_name+t)}});

		usi_cookieless = true;
		usi_app = {};
		usi_app.main = function () {
			// General
			usi_app.url = new usi_url.URL(location.href.toLowerCase());
			usi_app.coupon = usi_cookies.value_exists("usi_coupon_applied") ? "" : usi_commons.gup_or_get_cookie("usi_coupon", usi_cookies.expire_time.week, true);
			usi_app.force_group = usi_commons.gup_or_get_cookie('usi_force_group');
			usi_app.is_english = usi_app.get_order_info("pageLanguage");
			usi_app.today = usi_date.set_date();

			// Pages
			usi_app.is_cart_page = usi_app.url.path.full === "/video/cart";
			usi_app.is_checkout_page = usi_app.url.path.full === "/purchase";
			usi_app.is_confirmation_page = location.href.indexOf("/purchase/success") != -1;


			// Booleans
			usi_app.is_enabled = usi_commons.gup_or_get_cookie("usi_enable", usi_cookies.expire_time.day, true) != "";
			usi_app.is_suppressed = usi_app.is_confirmation_page;

			// check suppressions
			if (usi_app.is_suppressed) {
				usi_commons.log("Company is suppressed");
				return;
			}

			if (usi_app.is_checkout_page) {
				//Suppress campaigns on images
				if (usi_dom.get_first_element(".g_k_a p") != null && usi_dom.get_first_element(".g_k_a p").textContent.indexOf("Image ID") != -1) {
					usi_commons.log("Image in the cart...suppress");
					return;
				}

			}

			// suppress existing customers
			if (usi_app.is_existing_customer() == true) {
				usi_commons.log("Existing customer suppressed");
				if (!usi_cookies.value_exists("usi_existing_customer")) usi_cookies.set("usi_existing_customer", "1", 604800*1)
				return;
			}

			// Active cart check
			if (usi_app.is_cart_page) {
				usi_app.check_for_button();
			}

			if (usi_app.is_checkout_page && usi_cookies.get("usi_clicked") != null) {
				// Re-place aff link
				usi_cookies.del("usi_clicked");
				var usi_link = "https://shutterstock.7eer.net/c/16669/581275/1305";
				usi_app.link_injection(usi_link);
			}

			if (usi_app.coupon != "") {
				setTimeout(function () {
					if (usi_app.is_checkout_page && document.querySelector("[data-automation='OrderSummary_coupon_input']") != null) {
						if (usi_cookies.get("usi_boostbar") != "closed") usi_app.boostbar.close();
						// apply coupons
						usi_app.apply_coupon();
						return;
					} else {
						// Load Boostbar
						usi_app.boostbar.load();
					}
				}, 1000);
			}

			// load campaigns
			usi_app.load();
		};

		usi_app.is_existing_customer = function() {
			try{
				if (usi_cookies.value_exists("usi_existing_customer")) return true;
				for (var i = 0; i < window.dataLayer.length; i++) {
					if (typeof(window.dataLayer[i].user) != "undefined") {
						if (typeof(window.dataLayer[i].user.totalNumSubscriptionsAllTime) != "undefined" && window.dataLayer[i].user.totalNumSubscriptionsAllTime != "0") {
							return true;
						} else if (typeof(window.dataLayer[i].user.totalNumSubscriptionsActive) != "undefined" && window.dataLayer[i].user.totalNumSubscriptionsActive != "0") {
							return true;
						}
					}
				}
				return false; // new customer
			} catch(err) {
				usi_commons.report_error(err);
			}
		};

		usi_app.load = function () {
			usi_commons.log("usi_app.load()");

			if (typeof usi_js !== 'undefined' && typeof usi_js.cleanup === 'function') {
				usi_js.cleanup();
			}

			if (usi_date.is_date_before(usi_app.today, '2020-04-15 21:00')) {
				if ((usi_app.url.path.contains("video") || (document.referrer.indexOf("/video/") != -1 && usi_app.is_checkout_page)) && usi_cookies.value_exists("usi_active_cart") && usi_app.is_english) {
					usi_split_test.instantiate('29855', usi_app.force_group);

					if (usi_split_test.get_group('29855') == '1') {
						// 25% off video clips
						usi_commons.load_view("VItyzzm54CUCIDFtjQyJB0Q", "29687", usi_commons.device);
					}
				}
			} else {
				// 10% Off TT
				if ((usi_app.url.path.contains("video") || usi_app.is_checkout_page) && usi_cookies.value_exists("usi_active_cart") && usi_app.is_english) {
					// if a group was not forced, set the percentages
					if (usi_app.force_group === '') {
						// 50% Eligible, 50% Control split
						usi_app.force_group = Math.random() < 0.50 ? '1' : '0';
					}
					usi_split_test.instantiate('29655', usi_app.force_group);
					// usi_split_test.get_group(''); ==> '0' or '1'
					if (usi_split_test.get_group('29655') == '1') {
						// launch solution
						usi_commons.load_view("hWH5f3JlazDE8vIjAJEnT0o", "28889", usi_commons.device);
					}
				}
			}
		};

		usi_app.apply_coupon = function() {
			usi_commons.log("usi_app.apply_coupon()");
			var coupon_input = document.querySelector("[data-automation='OrderSummary_coupon_input']");
			var coupon_button = document.querySelector("[data-automation='OrderSummary_apply_coupon_button']");
			if (coupon_input !== null && coupon_button !== null) {
				// Register something
				var customEvent = new Event('input', { bubbles: true});
				var lastValue = coupon_input.value;
				customEvent.simulated = true;
				coupon_input.value = usi_app.coupon;
				coupon_input.defaultValue = usi_app.coupon;
				var tracker = coupon_input._valueTracker;
				if (tracker) {
					tracker.setValue(lastValue);
				}
				coupon_input.dispatchEvent(customEvent);
				usi_cookies.set("usi_coupon_applied", usi_app.coupon, usi_cookies.expire_time.week);
				usi_cookies.del("usi_coupon");
				usi_app.coupon = "";
				coupon_button.disabled = false;
				coupon_button.click();
				usi_commons.log("Coupon applied");
			} else {
				if (usi_app.coupon_attempts == undefined) {
					usi_app.coupon_attempts = 0;
				} else if (usi_app.coupon_attempts >= 5) {
					usi_commons.report_error("Coupon elements not found");
					return;
				}
				usi_app.coupon_attempts++;
				usi_commons.log("Coupon elements missing, trying again. Tries: " + usi_app.coupon_attempts);
				setTimeout(usi_app.apply_coupon, 1000);
			}
		};

		usi_app.boostbar = {
			load: function(){
				usi_commons.log("usi_app.boostbar.load()");
				if (usi_cookies.get("usi_boostbar") == "closed") return;

				var usi_boost_css = [
					'#usi_boost_close {height:100%; width:5%; right:5%; top:0; bottom:0; position:absolute; color:rgba(12,18,28,.87); font-size:2em; text-decoration:none;}',
					'#usi_boost_container {position:fixed; bottom:0; left:0; right:0; width:100%; text-align:center; font-size:1.25em; background:#fff; color:rgba(12,18,28,.87); padding:1em 2.5em; line-height: 1; z-index:2147483647;box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.33);}'
				].join('');
				usi_app.boostbar.place_css(usi_boost_css);

				var usi_boost_container = document.createElement('div');
				usi_boost_container.innerHTML = [
					'<div id="usi_boost_container">',
					'<a id="usi_boost_close" href="javascript:usi_app.boostbar.close();">&times;</a>',
					'Your coupon will be applied at checkout!',
					'</div>'
				].join('');
				document.body.appendChild(usi_boost_container);
			},
			place_css:function(css) {
				usi_commons.log("usi_app.boostbar.place_css()");
				var usi_css = document.createElement("style");
				usi_css.type = "text/css";
				if (usi_css.styleSheet) usi_css.styleSheet.cssText = css;
				else usi_css.innerHTML = css;
				document.getElementsByTagName('head')[0].appendChild(usi_css);
			},
			close: function(){
				usi_commons.log("usi_app.boostbar.close()");
				var bar = document.getElementById('usi_boost_container');
				usi_cookies.set("usi_boostbar", "closed", usi_cookies.expire_time.week);
				if (bar != null) {
					bar.parentNode.removeChild(bar);
				}
			}
		};

		usi_app.get_order_info = function (property) {
			if (window.dataLayer != undefined) {
				for (var i in dataLayer) {
					if (dataLayer[i]["page"] != undefined && dataLayer[i]["page"].hasOwnProperty(property)) {
						return dataLayer[i]["page"][property] === "en";
					}
				}
			}
			return {};
		};

		usi_app.check_for_button = function(){
			var checkout_button = usi_dom.get_first_element("[data-automation='CartSubmit_button']");

			if (checkout_button == null) {
				usi_commons.log("button not found, trying again");
				return setTimeout(usi_app.check_for_button, 1000);
			}

			usi_commons.log("button found");

			if (checkout_button != null) {
				usi_cookies.set("usi_active_cart", "1", usi_cookies.expire_time.week);
			}
		};

		usi_app.link_injection = function (src) {
			var usi_dynamic_div = document.createElement("div");
			usi_dynamic_div.innerHTML = "<iframe style='width:1px;height:1px' src='" + src + "'></iframe>";
			document.getElementsByTagName('body')[0].appendChild(usi_dynamic_div);
			usi_commons.log("[ link_injection ] Link Injection Success")
		};

		usi_app.check_for_change = function(){
			if (usi_app.current_page == undefined || usi_app.current_page != location.href) {
				usi_app.current_page = location.href;
				setTimeout(usi_app.main, 500);
				usi_commons.log("USI: running main");
			}
		};

		setInterval(usi_app.check_for_change, 1000);
	} catch(err) {
		usi_commons.report_error(err);
	}
}