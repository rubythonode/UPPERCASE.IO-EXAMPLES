OVERRIDE(CLOSE_WIN,function(){"use strict";global.EXPORT_IMG_DATA=EXPORT_IMG_DATA=METHOD({statics:function(t){t.exportedImgDataSet={},t.exportingCallbackMap={}},run:function(t,e,a){var e,o,n=e.getSrc(),i=t.exportedImgDataSet[n],g=t.exportingCallbackMap[n];void 0===t.__TEMP_WRAPPER&&(t.__TEMP_WRAPPER=DIV({style:{position:"absolute",left:-999999,top:-999999}}).appendTo(BODY)),void 0!==i?a(i):void 0!==g?g.push(a):(g=t.exportingCallbackMap[n]=[a],o=EVENT({node:IMG({src:n}),name:"load"},function(e,a){var i,p,E=a.getWidth(),l=a.getHeight(),r=CANVAS({width:E,height:l}).appendTo(t.__TEMP_WRAPPER);i=r.getContext(),i.drawImg({img:a}),DELAY(.5,function(){p=i.getImgData(),t.exportedImgDataSet[n]=p,EACH(g,function(t){t(p)}),delete t.exportingCallbackMap[n]}),o.remove()}))}})});