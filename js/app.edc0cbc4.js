(function(t){function e(e){for(var n,l,i=e[0],s=e[1],c=e[2],p=0,u=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&u.push(r[l][0]),r[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},o=[];function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/coast-serv/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=s;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"0c15":function(t,e,a){},"172c":function(t,e,a){},2370:function(t,e,a){"use strict";var n=a("172c"),r=a.n(n);r.a},3497:function(t,e,a){"use strict";var n=a("a8cd"),r=a.n(n);r.a},4007:function(t,e,a){"use strict";var n=a("bb31"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("ce5b"),o=a.n(r);a("bf40"),a("d1e7");n["default"].use(o.a);var l=new o.a({iconfont:"md",theme:{dark:!0}}),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"apptemp"}},[a("v-app-bar",{attrs:{floating:"","clipped-left":!0,app:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}},[a("v-icon",[t._v("\n        menu\n      ")])],1),a("v-toolbar-title",[a("h3",[t._v(t._s(t.appConfig.title))])])],1),a("v-navigation-drawer",{attrs:{width:"400",id:"navdrawer",clipped:"",fixed:"","hide-overlay":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("menu-component",{attrs:{id:"menu",map:t.map,layers:t.dataLayers},on:{"update:layers":function(e){t.dataLayers=e}}})],1),a("v-content",[a("v-mapbox",{ref:"map",attrs:{"access-token":t.appConfig.MAPBOX_TOKEN,"map-style":t.appConfig.map.background,center:t.appConfig.map.center,zoom:t.appConfig.map.zoom,pitch:0,bearing:0,id:"map"}})],1)],1)},s=[],c=(a("ac6a"),a("e192")),d=a.n(c),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"menu"}},[a("v-layout",{staticClass:"pa-4",attrs:{column:"","fill-height":"","justfy-space-around":""}},[a("v-flex",{attrs:{grow:""}},[a("data-layers",{attrs:{layers:t.layers,map:t.map},on:{"update:layers":function(e){t.layers=e},"data-layers":function(e){return t.$emit("update:data-layers",t.dataLayers)}}})],1),a("v-flex",{staticClass:"pt-2",attrs:{shrink:""}},[a("v-btn",{attrs:{outlined:"",block:""},on:{click:function(e){t.plotDialog=!0}}},[t._v("\n        SHOW GRAPH\n      ")])],1),a("v-flex",{staticClass:"py-2",attrs:{shrink:""}},[a("v-btn",{attrs:{outlined:"",block:""}},[t._v("\n        IMPORT POLYGON\n      ")])],1),a("v-flex",{staticClass:"pb-4",attrs:{shrink:""}},[a("v-btn",{attrs:{outlined:"",block:""},on:{click:function(e){t.exportDialog=!0}}},[t._v("\n        EXPORT\n      ")]),t.exportDialog?a("export-dialog",{attrs:{exportDialog:t.exportDialog},on:{"update:exportDialog":function(e){t.exportDialog=e},"update:export-dialog":function(e){t.exportDialog=e}}}):t._e(),a("plotDialog",{attrs:{plotDialog:t.plotDialog},on:{"update:plotDialog":function(e){t.plotDialog=e},"update:plot-dialog":function(e){t.plotDialog=e}}})],1)],1)],1)},u=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{attrs:{column:"","fill-height":""}},[a("v-flex",{attrs:{xs4:"","align-stretch":""}},[a("h1",{staticClass:"title"},[t._v("Data Layers")]),a("v-expansion-panels",{attrs:{dense:"",focusable:"",accordion:""}},[a("draggable",t._b({staticClass:"draggable",attrs:{id:"draggable"},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}},model:{value:t.mapLayers,callback:function(e){t.mapLayers=e},expression:"mapLayers"}},"draggable",{handle:".draghandle"},!1),t._l(t.layers,(function(e){return a("v-expansion-panel",{key:e.id},[a("v-expansion-panel-header",{staticClass:"pa-0"},[a("v-layout",{attrs:{"align-center":"","justify-space-end":""}},[a("v-flex",[a("v-icon",{staticClass:"ma-2 draghandle",attrs:{id:"dragicon",title:"Drag to change map layer drawing order"}},[t._v("drag_indicator")])],1),a("v-flex",{staticClass:"pa-1",attrs:{xs7:""}},[t._v("\n                  "+t._s(e.title)+"\n                ")]),a("v-flex",{attrs:{xs2:""},on:{click:function(t){t.stopPropagation()}}},[a("v-switch",{staticClass:"ma-0",on:{change:function(a){return t.$emit("setLayer",e)}},model:{value:e.active,callback:function(a){t.$set(e,"active",a)},expression:"layer.active"}})],1),a("v-flex",[a("v-icon",{staticClass:"ma-2",attrs:{id:"dragicon",title:"Open details"}},[t._v("keyboard_arrow_down")])],1)],1)],1),a("v-expansion-panel-content",{staticClass:"pa-0",attrs:{"extra-small":"","expand-icon":"fa-caret-down","hide-actions":""}},[a("div",{staticClass:"pa-2"},[e.info?a("div",{staticClass:"infodiv"},[a("h4",[t._v("Information")]),t._v("\n                  "+t._s(e.info)+"\n                  "),a("v-divider")],1):t._e(),e.legend?a("v-legend",{attrs:{layer:e}}):t._e(),e.opacity?a("div",{staticClass:"opacity"},[a("h4",[t._v("Transparancy: "+t._s(100-e.opacity)+"%")]),a("v-slider",{staticClass:"pa-0 ma-0",attrs:{"hide-details":"",title:"transparantie",min:1,max:100},model:{value:e.opacity,callback:function(a){t.$set(e,"opacity",a)},expression:"layer.opacity"}}),a("v-divider")],1):t._e()],1)])],1)})),1)],1)],1)],1)],1)},v=[],m=a("310e"),g=a.n(m),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"legenddiv"}},[a("div",{staticClass:"legend"},[a("h4",[t._v("Legenda")]),a("v-divider")],1),t.layer.legend.range?[t.layer.legend.colors?a("div",{staticClass:"color-ramp",style:"background: linear-gradient(to right, "+t.layer.legend.colors.join()+");"}):t._e(),a("div",{staticClass:"range-ramp"},[t._v(t._s(t.layer.legend.range))])]:t._e(),t.layer.legend.colors&&t.layer.legend.labels?a("div",{staticClass:"legend-colors"},[a("v-layout",{staticClass:"color-label",attrs:{wrap:""}},t._l(t.layer.legend.colors,(function(e,n){return a("v-layout",{key:n,attrs:{"align-center":""}},[a("span",{staticClass:"colored-span",style:"background-color: "+e}),a("label",{staticClass:"ma-1"},[t._v(t._s(t.layer.legend.labels[n]))])])})),1)],1):t._e()],2)},h=[],b={props:{layer:{type:Object}}},x=b,C=(a("2370"),a("2877")),_=Object(C["a"])(x,y,h,!1,null,null,null),w=_.exports,E={props:{layers:{type:Array},map:{type:Object}},computed:{mapLayers:{get:function(){return this.layers},set:function(t){this.$emit("update:layers",t)}}},data:function(){return{}},watch:{layers:{deep:!0,handler:function(){this.layers&&(this.toggleLayers(),this.sortLayers())}}},methods:{toggleLayers:function(){var t=this,e=["none","visible"];this.layers.forEach((function(a){a.data.forEach((function(n){n.id&&(a.active?(t.map.setLayoutProperty(n.id,"visibility",e[1]),t.setOpacity(a,n)):t.map.setLayoutProperty(n.id,"visibility",e[0]))}))}))},setOpacity:function(t,e){if(t.opacity)try{var a,n=Math.max(.01*t.opacity,.01);"raster"===e.type?a="raster-opacity":"fill"==e.type?a="fill-opacity":"line"==e.type&&(a="line-opacity"),a&&this.map.setPaintProperty(e.id,a,n)}catch(r){console.log("error setting opacity: "+n+"("+r.message+")")}},sortLayers:function(){for(var t=this.layers.length-2;t>=0;--t)for(var e=0;e<this.layers[t].length;++e)this.layers[t][e].id&&this.map.moveLayer(this.layers[t][e].id)}},components:{draggable:g.a,VLegend:w}},k=E,S=(a("e526"),Object(C["a"])(k,f,v,!1,null,null,null)),O=S.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"600px",width:"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[t._v("\n      Export Settings\n    ")]),a("v-card-text",[a("v-text-field",{attrs:{label:"File name",hint:"Model-boundaries.smt","persistent-hint":"",required:""}}),t._l(t.conditions,(function(e){return a("v-select",{key:e.name,attrs:{items:e.items,label:"cond.label",required:""},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"cond.value"}})})),a("v-select",{attrs:{items:t.parameters,label:"Select Paramaters",required:""},model:{value:t.parameter,callback:function(e){t.parameter=e},expression:"parameter"}})],2),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.$emit("update:export-dialog",!1)}}},[t._v("Close")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.$emit("update:export-dialog",!1)}}},[t._v("Save")])],1)],1)],1)},D=[],T=[{label:"Boundary conditions North",value:"BC 1",items:["BC 1","BC 2","BC 3"]},{label:"Boundary conditions East",value:"BC 1",items:["BC 1","BC 2","BC 3"]},{label:"Boundary conditions South",value:"BC 1",items:["BC 1","BC 2","BC 3"]},{label:"Boundary conditions West",value:"BC 1",items:["BC 1","BC 2","BC 3"]}],L=["parameter 1","parameter 2","parameter 3"],j={props:{exportDialog:{type:Boolean}},computed:{dialog:{get:function(){return this.exportDialog},set:function(t){this.$emit("update:export-dialog",t)}}},data:function(){return{parameter:"parameter 1",conditions:T,parameters:L}}},P=j,B=Object(C["a"])(P,M,D,!1,null,null,null),R=B.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{staticClass:"pa=4",attrs:{width:"600px","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[t._v("\n      Data plot\n    ")]),a("v-card-text",[a("e-charts",{staticClass:"chart",attrs:{width:"100%",theme:"dark",options:t.options}},[t._v('\n        :autoresize="true"\n      ')])],1),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.$emit("update:plot-dialog",!1)}}},[t._v("Close")])],1)],1)],1)},$=[],N=a("9ca8"),I=(a("ef97"),a("007d"),a("627c"),a("d28f"),{props:{plotDialog:{type:Boolean}},computed:{dialog:{get:function(){return this.plotDialog},set:function(t){this.$emit("update:plot-dialog",t)}}},data:function(){return{options:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[820,932,901,934,1290,1330,1320],type:"line"}]}}},methods:{deferredMountedTo:function(t){this.mapbox=t}},components:{ECharts:N["a"]}}),z=I,F=(a("4007"),Object(C["a"])(z,A,$,!1,null,null,null)),G=F.exports,W={name:"map-component",props:{map:{type:Object},layers:{type:Array}},watch:{map:function(t){this.map=t},layers:function(t){console.log("layers",t),this.layers=t}},mounted:function(){console.log(this.layers)},data:function(){return{exportDialog:!1,plotDialog:!1}},components:{DataLayers:O,ExportDialog:R,PlotDialog:G}},H=W,V=(a("3497"),Object(C["a"])(H,p,u,!1,null,null,null)),Y=V.exports,q=[{title:"CMEMS global analysis forecast",active:!0,texticonlegend:[{texticon:"-",style:"color: red; font-size: xx-large; line-height: 20px;",name:"-20m NAP"}],info:"WMS from CMEMS thredds server.",type:"datalayers",data:[{id:"global-analysis-forecast-phy-001-024-monthly",type:"raster",source:{type:"raster",tiles:["https://nrt.cmems-du.eu/thredds/wms/dataset-duacs-nrt-global-merged-allsat-phy-l4?FORMAT=image%2Fpng&TRANSPARENT=TRUE&STYLES=boxfill%2Frainbow&LAYERS=adt&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG:3857&WIDTH=256&HEIGHT=256&bbox={bbox-epsg-3857}"],tilesize:256}}]},{title:"CMEMS data 2",active:!0,texticonlegend:[{texticon:"-",style:"color: red; font-size: xx-large; line-height: 20px;",name:"-20m NAP"}],info:"WMS from CMEMS thredds server.",type:"datalayers",data:[{id:"global-analysis-forecast-phy-001-024-monthly-2",type:"raster",source:{type:"raster",tiles:["https://nrt.cmems-du.eu/thredds/wms/dataset-duacs-nrt-global-merged-allsat-phy-l4?FORMAT=image%2Fpng&TRANSPARENT=TRUE&STYLES=boxfill%2Frainbow&LAYERS=adt&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG:3857&WIDTH=256&HEIGHT=256&bbox={bbox-epsg-3857}"],tilesize:256}}]}],J=a("6ee6"),U=a.n(J),X=a("b106"),Q=a.n(X),K=(a("bdd0"),{name:"App",components:{MenuComponent:Y},data:function(){return{drawer:!0,map:null,dataLayers:q,draw:{}}},mounted:function(){var t=this;this.map=this.$refs.map.map;var e=U.a.modes;e.draw_rectangle=Q.a,this.draw=new U.a({modes:e}),console.log(this.draw,U.a),this.map.on("load",(function(){t.map.addControl(new d.a.NavigationControl),t.map.addControl(t.draw,"top-right"),t.draw.changeMode("draw_rectangle"),t.dataLayers.forEach((function(e){e.data.forEach((function(e){t.map.addLayer(e),console.log(t.map)}))}))}))},methods:{}}),Z=K,tt=(a("034f"),Object(C["a"])(Z,i,s,!1,null,null,null)),et=tt.exports,at=a("bd47"),nt=a.n(at),rt={MAPBOX_TOKEN:"pk.eyJ1IjoiY2FtdmR2cmllcyIsImEiOiJjajA4NXdpNmswMDB2MzNzMjk4dGM2cnhzIn0.lIwd8N7wf0hx7mq-kjTcbQ",title:"COASTSERV",map:{background:"mapbox://styles/mapbox/dark-v9",center:[-20.4,21.483],zoom:3}};n["default"].prototype.appConfig=rt,n["default"].use(nt.a),n["default"].config.productionTip=!1,new n["default"]({vuetify:l,render:function(t){return t(et)}}).$mount("#app")},"64a9":function(t,e,a){},a8cd:function(t,e,a){},bb31:function(t,e,a){},e526:function(t,e,a){"use strict";var n=a("0c15"),r=a.n(n);r.a}});
//# sourceMappingURL=app.edc0cbc4.js.map