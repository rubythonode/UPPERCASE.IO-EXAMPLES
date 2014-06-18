USCREEN.LAYER=CLASS({init:function(e,t,i,o){"use strict";var n,d,a,r,c,v,f,l,s,u,h,p,g,S,C,R,I,E,m,O,x,y,w,H,L,N=void 0!==o?o.img:void 0,T=void 0!==o&&void 0!==o.isOnCanvas?o.isOnCanvas:void 0===BROWSER_CONFIG.USCREEN||BROWSER_CONFIG.USCREEN.isLayerOnCanvas===!0,W=void 0!==o?o.isHide:void 0,z=void 0!==o&&void 0!==o.left?o.left:0,D=void 0!==o&&void 0!==o.top?o.top:0,F=void 0!==o?o.zIndex:void 0,b=void 0!==o&&void 0!==o.clipLeft?o.clipLeft:0,k=void 0!==o&&void 0!==o.clipTop?o.clipTop:0,U=void 0!==o?o.clipWidth:void 0,A=void 0!==o?o.clipHeight:void 0,B=void 0!==o?o.width:void 0,G=void 0!==o?o.height:void 0,V=0,_=0,M=0,P=[],Y=[],X=[];T===!0?(i.addRemoveHandler=v=function(e){X.push(e)},i.getDiv=f=function(){},i.appendTo=l=function(t){return n=t,n.type===e?n.getChildren().push(i):n.addRemoveHandler(function(){u()}),i},i.getChildren=s=function(){return P},i.remove=u=function(){EACH(P,function(e){e.remove()}),EACH(X,function(e){e()}),REMOVE({data:n.getChildren(),value:i})},i.moveTo=h=function(e){void 0!==e.left&&(z=e.left),void 0!==e.top&&(D=e.top),void 0!==e.zIndex&&(F=e.zIndex)},i.hide=p=function(){W=!0},i.show=g=function(){W=!1},i.checkIsShow=S=function(){return W!==!0},i.turnLeft=C=function(){c=!1},i.turnRight=R=function(){c=!0},i.setImg=I=function(e){void 0!==N&&N.remove(),N=e},i.appendDom=E=function(e){Y.push(e),e.addStyle({position:"absolute"}),e.appendTo(BODY),e.addRemoveHandler(function(){REMOVE({data:Y,dom:e})})},i.findRealImgInfosForDraw=m=function(e){var t,i,o,n,d,a,r,v,f=e.left,l=e.top,s=e.degree,u=e.isRightSide,h=e.realImgInfos,p=e.rootLeft,g=e.rootTop,S=e.canvasScale;if(W!==!0){for(i=u===!0?c!==!0:c===!0,o=i===!0?-(f+z)-(void 0===U?void 0===N?0:N.getWidth():U):f+z,n=l+D,d=void 0===F?0:F,a=s+M,void 0!==N?(r={img:N,left:S*o,top:S*n,zIndex:d,degree:a,isRightSide:i,clipLeft:b,clipTop:k,clipWidth:U,clipHeight:A,width:S*(void 0===B?void 0===U?N.getWidth():U:B),height:S*(void 0===G?void 0===A?N.getHeight():A:G)},0!==a&&(r.centerLeft=S*(o+V),r.centerTop=S*(n+_))):r={zIndex:d},v=0;v<Y.length;v+=1)Y[v].addStyle({left:p+o,top:g+n});for(void 0!==F?r.childInfos=t=[]:t=h,h.push(r),v=0;v<P.length;v+=1)P[v].findRealImgInfosForDraw({left:o,top:n,degree:a,isRightSide:i,realImgInfos:t,rootLeft:p,rootTop:g,canvasScale:S})}},i.updateCanvas=O=function(){var e,t=[];void 0===d&&(d=n.getContext()),d.clear(),m({left:0,top:0,zIndex:0,degree:0,isRightSide:c,realImgInfos:t,rootLeft:n.getLeft(),rootTop:n.getTop(),canvasScale:n.getCanvasScale()}),(e=function(t){var i,o;for(t.sort(function(e,t){return e.zIndex-t.zIndex}),o=0;o<t.length;o+=1)i=t[o],void 0!==i.img&&(d.save(),i.isRightSide===!0&&d.setScale({scaleWidth:-1,scaleHeight:1}),0!==i.degree&&d.rotate(i),d.drawImg(i),d.restore()),void 0!==i.childInfos&&e(i.childInfos)})(t)},i.setClipLeft=x=function(e){b=e},i.setClipTop=y=function(e){k=e},i.setClipWidth=w=function(e){U=e},i.setClipHeight=H=function(e){A=e},i.rotate=L=function(e){V=e.centerLeft,_=e.centerTop,M=e.degree}):(a=DIV({style:{position:"absolute",left:z,top:D,zIndex:F,display:W===!0?"none":"block"}}),i.addRemoveHandler=v=function(e){a.addRemoveHandler(e)},v(function(){REMOVE({data:n.getChildren(),value:i})}),i.getDiv=f=function(){return a},i.appendTo=l=function(t){return n=t,n.type===e?(n.getChildren().push(i),n.getDiv().append(a)):n.append(a),i},i.getChildren=s=function(){return P},i.remove=u=function(){a.remove()},i.moveTo=h=function(e){void 0!==e.left&&(z=e.left),void 0!==e.top&&(D=e.top),void 0!==e.zIndex&&(F=INTEGER(e.zIndex)),a.addStyle({left:z,top:D,zIndex:F})},i.hide=p=function(){W=!0,a.hide()},i.show=g=function(){W=!1,a.show()},i.checkIsShow=S=function(){return W!==!0},i.turnLeft=C=function(){c=!1,a.addStyle({transform:"none",filter:"none"})},i.turnRight=R=function(){c=!0,a.addStyle({transform:"scaleX(-1)",filter:"FlipH"})},i.setImg=I=function(e){void 0!==r&&(r.remove(),r=void 0),void 0!==N&&N.remove(),N=e,a.addStyle({width:void 0!==B?B:void 0===U?N.getWidth():U,height:void 0!==G?G:void 0===A?N.getHeight():A,background:"url("+N.getSrc()+")",backgroundRepeat:"no-repeat",backgroundPosition:-b+"px "+-k+"px",backgroundSize:(void 0!==B?B:N.getWidth())+"px "+(void 0!==G?G:N.getHeight())+"px"}),r=EVENT({node:N,name:"load"},function(){a.addStyle({width:void 0!==B?B:void 0===U?N.getWidth():U,height:void 0!==G?G:void 0===A?N.getHeight():A,backgroundSize:(void 0!==B?B:N.getWidth())+"px "+(void 0!==G?G:N.getHeight())+"px"}),r.remove(),r=void 0})},i.appendDom=E=function(e){e.addStyle({position:"absolute"}),a.append(e)},i.findRealImgInfosForDraw=m=function(){},i.updateCanvas=O=function(){},i.setClipLeft=x=function(e){b=e,a.addStyle({backgroundPosition:-b+"px "+-k+"px"})},i.setClipTop=y=function(e){k=e,a.addStyle({backgroundPosition:-b+"px "+-k+"px"})},i.setClipWidth=w=function(e){U=e,a.addStyle({width:U})},i.setClipHeight=H=function(e){A=e,a.addStyle({width:A})},i.rotate=L=function(e){V=e.centerLeft,_=e.centerTop,M=e.degree,a.addStyle({transformOrigin:V+"px "+_+"px",transform:"rotate("+M+"deg)"})}),void 0!==N&&I(N)}}),USCREEN.SURFACE=CLASS({preset:function(){"use strict";var e=void 0===BROWSER_CONFIG.USCREEN||BROWSER_CONFIG.USCREEN.isLayerOnCanvas===!0;return e===!0?CANVAS:DIV},init:function(e,t,i,o){"use strict";var n,d,a,r,c,v=void 0===BROWSER_CONFIG.USCREEN||BROWSER_CONFIG.USCREEN.isLayerOnCanvas===!0,f=BROWSER_CONFIG.isSupportingHD===!0&&INFO.checkIsDisplayHD()===!0,l=void 0===o||void 0===o.scale?1:o.scale,s=void 0===o||void 0===o.canvasScale?1:o.canvasScale;v===!0?(f===!0&&(s*=2),OVERRIDE(i.setSize,function(e){i.setSize=a=function(t){n=t.width,d=t.height,e({width:n*s,height:d*s}),i.addStyle({width:n*l,height:d*l})}}),1!==s&&i.getContext().setScale({scaleWidth:s,scaleHeight:s}),i.setScale=r=function(e){var t;return l=e,t={width:n*l,height:d*l},i.addStyle(t),t},i.getCanvasScale=c=function(){return s}):(i.setSize=a=function(e){n=e.width,d=e.height,i.addStyle({width:n,height:d})},i.setScale=r=function(e){return l=e,i.addStyle({transform:"scale("+l+","+l+")",transformOrigin:"0 0"}),{width:n*l,height:d*l}},i.addStyle({overflow:"hidden"}))}});