/*(function(){var e='<div id="wrapper-barra-brasil"><div class="brasil-flag"><a href="http://brasil.gov.br" class="link-barra">Brasil</a></div><span class="acesso-info"><a href="http://brasil.gov.br/barra#acesso-informacao" class="link-barra">Acesso &agrave; informa&ccedil;&atilde;o</a></span><ul class="list"><li class="list-item first"><a href="http://brasil.gov.br/barra#participe" class="link-barra">Participe</a></li><li class="list-item"><a href="http://www.servicos.gov.br/" class="link-barra">Servi&ccedil;os</a></li><li class="list-item"><a href="http://www.planalto.gov.br/legislacao" class="link-barra">Legisla&ccedil;&atilde;o</a></li><li class="list-item last last-item"><a href="http://brasil.gov.br/barra#orgaos-atuacao-canais" class="link-barra">Canais</a></li></ul></div>',t,n,r,i,s,o,u;n=document.getElementById("barra-brasil"),n&&n.parentNode.removeChild(n),r=document.getElementsByTagName("head")[0],t=document.getElementsByTagName("body")[0],o=document.createElement("link"),i=document.createAttribute("href"),u=document.createElement("div"),s=document.createAttribute("id"),s.nodeValue="barra-brasil",u.setAttributeNode(s),u.innerHTML=e,t.insertBefore(u,t.childNodes[0]),window._barrabrasil={insere_css:function(e){var t,n,i;return n=document.createElement("style"),i=document.createAttribute("type"),i.nodeValue="text/css",t=document.createAttribute("media"),t.nodeValue="all",n.setAttributeNode(i),n.setAttributeNode(t),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),r.appendChild(n)}};var r,a,f,l;r=document.getElementsByTagName("head")[0],a=document.createElement("script"),l=document.createAttribute("type"),l.nodeValue="text/javascript",f=document.createAttribute("src"),f.nodeValue="http://coletajavascript.serpro.gov.br/estatistica.js",a.setAttributeNode(l),a.setAttributeNode(f),r.appendChild(a)})(),window._barrabrasil.insere_css('#barra-brasil div,#barra-brasil a,#barra-brasil ul,#barra-brasil li{margin:0;padding:0;border:0;font-size:100%;font-family:inherit;vertical-align:baseline}#barra-brasil ul{list-style:none}@font-face{font-family:"Open Sans";font-style:normal;font-weight:700;src:local("Open Sans Bold"),local("OpenSans-Bold"),url("http://barra.brasil.gov.br/static/opensans-bold.woff") format("woff")}#barra-brasil{height:32px;background:#f1f1f1;font-weight:bold;font-size:12px;line-height:32px;font-family:"Open Sans",Arial,Helvetica,sans-serif}#barra-brasil a{text-decoration:none}div#wrapper-barra-brasil{position:relative;overflow:hidden;margin:0 auto;width:100%;max-width:960px}#barra-brasil .brasil-flag{float:left;padding:7px 0 6px;width:115px;height:19px;border-right:2px solid #dfdfdf}#barra-brasil .brasil-flag .link-barra{display:block;padding-left:42px;width:43px;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAATCAIAAAABJ4pRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABINJREFUeNqUVFtsFFUYPrfdmdnLbLe021baQqWUtdJKL5QiASPiNVqC0TYqUWLShJQmRH3RqPHFRKJvQqIPQNSAAcMDptGEiKjYpLZIkSqGXqjdFlppd3vb7c7Ozpxz/M+2wZD44snszOzJnP//vv///g9XnNiXtNISI1gYq4eUEu4CC7SyiLpJgtSOIJKg/1ySB3x+NmsvJLNpgVUwlAu08iIkzi2pUhHIAa/q1L9p7l6YWmmHEOSBWJD6LixwJ7DDAKR06c6imQOVYxoRyEV4BR3JBYfvqNqBtILrSGNEKgoCsVxWDMmxgAOADeDjQsP+oHbo1egk7B+Mju/vq7kwVYhohsAxoiogiIM5hBaSUIBFfS21WRcOSwUHOwgTqoJR+O0pv31u56XmUKrvt4o/RyNrjVRHw40iLdU9Hck4DPBQxOQKK/XQqQa7nGNb8UICSUoE4y4rCyweqh164b7Jk12N737x2NjtfMAeCDit268e7jj7yOqfX++p+ebvQk5coAB8BQIMroqaf7xt3p4TUATgxj0Y0wOVN96uHomE3I+Ob37zSJvUHURshjySIZ4JPLhp+IcPj3h1eSZ2zxu/R8cXDeThuSLJkGZSY/fGjGOrenG9xlz8vPnK/g0xEwprl52PH9ryUGRLk1lfXWqGCcE0lUqOjxeHVy01141V+5Mvlk+lOLmcAOwC6OpMo8FnqlOCh2j2taqRE1sHKk2LuFJq6NveumNd9f0Dt2IjC1aGVKwzdz1cUryaxSasW9Oo/dFfoaEB6jxdOl2Xt3BtwYw7Xh/VmQNNcNHj5fH3N40CQgnNAAUQMjgh+y/dpIblN9j14fHuHqEFvPUP5L3Svp4mHNtGmgbaVF1oWZNIi8GXextALUpEhLqnJ0o3f9fcEw9iD3RFCaUiMmvmG/lhI50VBQX6ujX5ju3+dHHm1Mmb9dGsxyRKSwylHNLRt2HvL42O4C5IhsLsgEII74+Hd1zY+s5AdMklguMnmkaLwn9RGgr7dSfLk5ZreGhJUdD0+oz0ZxSOMNQ1VdB4fscnw5VCiOUBpb7d91vcklBJJpDwXpwOn50qKdXs2tLZpoqJU99XxVPBbMayXRnOK/Dp5p5tZzpbu0cT+sErG9/6o2rW9iLKQbOget2jQbgay3UIJrlhlJSK6Yz3dKx4dD74Ut3Ivu2X5xe8CSvopdm1kdh7e7/sfO7Ho4PlrT0NvTMhTISaaRhUoImITr244Njz8WwSVKOMhBI1hdIBMQuXlARShxuvPbt+3k0gx9GMsDVp0c7emq8nSiSFjzkVlCuKfHl+Q0aQai21Gb4E7SA59wDWGLLBg+Kk6/lqrKw/4dtWOLfKn/74+r2t3fVX5/IwcyExIBAKFFWOhskyWVx4tG3GmUfKCFRbOHYBNjiC6hBkBTrQRl+mSLeHZkOYOXeMRxIFCb6SME5gYJiGvH7MPn0q5wBCgqkgF4xBEVfdhksTyMmNpFT/chJQJQbkgitE8o73gRe4HsRYe/RJy86IFYtU1pVzSqxC/J8F5fMz/z8CDAAkCSSg0qSX5AAAAABJRU5ErkJggg==") 8px center no-repeat;text-transform:uppercase;line-height:19px}#barra-brasil .acesso-info{position:absolute;left:130px}#barra-brasil .list{position:absolute;top:0;right:0}#barra-brasil .list .first{border-left:2px solid #dfdfdf}#barra-brasil .list-item{display:inline-block;padding:0 15px 0 13px;height:32px;border-right:2px solid #dfdfdf}#barra-brasil .link-barra{color:#606060}@media screen and (max-width: 668px){#barra-brasil .list{top:-100px}}@media screen and (min-width: 960px){#wrapper-barra-brasil{width:960px}}');*/
(function(){var e='<div id="wrapper-barra-brasil"><div class="brasil-flag"><a href="http://brasil.gov.br" class="link-barra">Brasil</a></div><span class="acesso-info"><a href="http://brasil.gov.br/barra#acesso-informacao" class="link-barra">Acesso &agrave; informa&ccedil;&atilde;o</a></span><ul class="list"><li class="list-item first"><a href="http://brasil.gov.br/barra#participe" class="link-barra">Participe</a></li><li class="list-item"><a href="http://www.servicos.gov.br/" class="link-barra">Servi&ccedil;os</a></li><li class="list-item"><a href="http://www.planalto.gov.br/legislacao" class="link-barra">Legisla&ccedil;&atilde;o</a></li><li class="list-item last last-item"><a href="http://brasil.gov.br/barra#orgaos-atuacao-canais" class="link-barra">Canais</a></li></ul></div>',t,n,r,i,s,o,u;n=document.getElementById("barra-brasil"),n&&n.parentNode.removeChild(n),r=document.getElementsByTagName("head")[0],t=document.getElementsByTagName("body")[0],o=document.createElement("link"),i=document.createAttribute("href"),u=document.createElement("div"),s=document.createAttribute("id"),s.nodeValue="barra-brasil",u.setAttributeNode(s),u.innerHTML=e,t.insertBefore(u,t.childNodes[0]),window._barrabrasil={insere_css:function(e){var t,n,i;return n=document.createElement("style"),i=document.createAttribute("type"),i.nodeValue="text/css",t=document.createAttribute("media"),t.nodeValue="all",n.setAttributeNode(i),n.setAttributeNode(t),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),r.appendChild(n)}};var r,a,f,l;r=document.getElementsByTagName("head")[0],a=document.createElement("script"),l=document.createAttribute("type"),l.nodeValue="text/javascript",f=document.createAttribute("src"),f.nodeValue="",a.setAttributeNode(l),a.setAttributeNode(f),r.appendChild(a)})(),window._barrabrasil.insere_css('#barra-brasil div,#barra-brasil a,#barra-brasil ul,#barra-brasil li{margin:0;padding:0;border:0;font-size:100%;font-family:inherit;vertical-align:baseline}#barra-brasil ul{list-style:none}@font-face{font-family:"Open Sans";font-style:normal;font-weight:700;src:local("Open Sans Bold"),local("OpenSans-Bold"),url("http://barra.brasil.gov.br/static/opensans-bold.woff") format("woff")}#barra-brasil{height:32px;background:#f1f1f1;font-weight:bold;font-size:12px;line-height:32px;font-family:"Open Sans",Arial,Helvetica,sans-serif}#barra-brasil a{text-decoration:none}div#wrapper-barra-brasil{position:relative;overflow:hidden;margin:0 auto;width:100%;max-width:960px}#barra-brasil .brasil-flag{float:left;padding:7px 0 6px;width:115px;height:19px;border-right:2px solid #dfdfdf}#barra-brasil .brasil-flag .link-barra{display:block;padding-left:42px;width:43px;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAATCAIAAAABJ4pRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABINJREFUeNqUVFtsFFUYPrfdmdnLbLe021baQqWUtdJKL5QiASPiNVqC0TYqUWLShJQmRH3RqPHFRKJvQqIPQNSAAcMDptGEiKjYpLZIkSqGXqjdFlppd3vb7c7Ozpxz/M+2wZD44snszOzJnP//vv///g9XnNiXtNISI1gYq4eUEu4CC7SyiLpJgtSOIJKg/1ySB3x+NmsvJLNpgVUwlAu08iIkzi2pUhHIAa/q1L9p7l6YWmmHEOSBWJD6LixwJ7DDAKR06c6imQOVYxoRyEV4BR3JBYfvqNqBtILrSGNEKgoCsVxWDMmxgAOADeDjQsP+oHbo1egk7B+Mju/vq7kwVYhohsAxoiogiIM5hBaSUIBFfS21WRcOSwUHOwgTqoJR+O0pv31u56XmUKrvt4o/RyNrjVRHw40iLdU9Hck4DPBQxOQKK/XQqQa7nGNb8UICSUoE4y4rCyweqh164b7Jk12N737x2NjtfMAeCDit268e7jj7yOqfX++p+ebvQk5coAB8BQIMroqaf7xt3p4TUATgxj0Y0wOVN96uHomE3I+Ob37zSJvUHURshjySIZ4JPLhp+IcPj3h1eSZ2zxu/R8cXDeThuSLJkGZSY/fGjGOrenG9xlz8vPnK/g0xEwprl52PH9ryUGRLk1lfXWqGCcE0lUqOjxeHVy01141V+5Mvlk+lOLmcAOwC6OpMo8FnqlOCh2j2taqRE1sHKk2LuFJq6NveumNd9f0Dt2IjC1aGVKwzdz1cUryaxSasW9Oo/dFfoaEB6jxdOl2Xt3BtwYw7Xh/VmQNNcNHj5fH3N40CQgnNAAUQMjgh+y/dpIblN9j14fHuHqEFvPUP5L3Svp4mHNtGmgbaVF1oWZNIi8GXextALUpEhLqnJ0o3f9fcEw9iD3RFCaUiMmvmG/lhI50VBQX6ujX5ju3+dHHm1Mmb9dGsxyRKSwylHNLRt2HvL42O4C5IhsLsgEII74+Hd1zY+s5AdMklguMnmkaLwn9RGgr7dSfLk5ZreGhJUdD0+oz0ZxSOMNQ1VdB4fscnw5VCiOUBpb7d91vcklBJJpDwXpwOn50qKdXs2tLZpoqJU99XxVPBbMayXRnOK/Dp5p5tZzpbu0cT+sErG9/6o2rW9iLKQbOget2jQbgay3UIJrlhlJSK6Yz3dKx4dD74Ut3Ivu2X5xe8CSvopdm1kdh7e7/sfO7Ho4PlrT0NvTMhTISaaRhUoImITr244Njz8WwSVKOMhBI1hdIBMQuXlARShxuvPbt+3k0gx9GMsDVp0c7emq8nSiSFjzkVlCuKfHl+Q0aQai21Gb4E7SA59wDWGLLBg+Kk6/lqrKw/4dtWOLfKn/74+r2t3fVX5/IwcyExIBAKFFWOhskyWVx4tG3GmUfKCFRbOHYBNjiC6hBkBTrQRl+mSLeHZkOYOXeMRxIFCb6SME5gYJiGvH7MPn0q5wBCgqkgF4xBEVfdhksTyMmNpFT/chJQJQbkgitE8o73gRe4HsRYe/RJy86IFYtU1pVzSqxC/J8F5fMz/z8CDAAkCSSg0qSX5AAAAABJRU5ErkJggg==") 8px center no-repeat;text-transform:uppercase;line-height:19px}#barra-brasil .acesso-info{position:absolute;left:130px}#barra-brasil .list{position:absolute;top:0;right:0}#barra-brasil .list .first{border-left:2px solid #dfdfdf}#barra-brasil .list-item{display:inline-block;padding:0 15px 0 13px;height:32px;border-right:2px solid #dfdfdf}#barra-brasil .link-barra{color:#606060}@media screen and (max-width: 668px){#barra-brasil .list{top:-100px}}@media screen and (min-width: 960px){#wrapper-barra-brasil{width:960px}}');

/**
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;





jQuery(document).ready(function($){
	
	
/*------------------------------------------------------------------------*/
/*	1.	Plugins Init
/*------------------------------------------------------------------------*/

	
	if ($("#playertv").length) $("#playertv")[0].innerHTML = '<iframe width="100%" height="200px" src="//www.youtube.com/embed/videoseries?list=UU0U4Kuznv0YtRzULknjaZ2w&theme=light&color=white&controls=2" frameborder="0" allowfullscreen color="white" controls="2" theme="light"></iframe>';


	$('.menu-toggle-btn').click(function(){
        $('.responsive_menu').stop(true,true).slideToggle();
    });

/************** FlexSlider *********************/

	$(window).load(function() {
	    $('.flexslider').flexslider({
	    	animation: "fade",
	    	touch: true,
	    	controlNav: false,
	    	prevText: "&nbsp;",  
			nextText: "&nbsp;" 
	    });
	});



/************** FancyBox *********************/
	$(".fancybox").fancybox({
		padding: 5,
		titlePosition: 'over'
	});



/************** pSlider *********************/

	$('#slider-testimonials').pSlider({
        slider: $('#slider-testimonials>ul>li'),
        visible: 1,
        button: {
            next: $('#slider-testimonials .next'),
            prev: $('#slider-testimonials .prev')
        }
    });

	
	$.creaseFont({
		  content     :  ['p', 'li a','p a'],
          defaultSize :  13,
          maxSize     :  36,
          minSize     :  8,
          stepSize    :  6,
		  animate     :  false,
          unit        :  'px'
	});

  (function() {
    var cx = '006122890299749994139:9vf-3zcljoi';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-26102952-3', 'ufsm.br');
  ga('send', 'pageview');



});

$(window).resize(function(){ 
        $("#box_skitter1m, .container_skitter").width($("#box_skitter1m").parent().width());
    });