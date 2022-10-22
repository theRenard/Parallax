System.register("chunks:///_virtual/main",["./ParallaxBackground.ts","./ParallaxCamera.ts","./ParallaxLayer.ts","./ScrollLeftRight.ts"],(function(){"use strict";return{setters:[null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/ParallaxBackground.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ParallaxCamera.ts","./ParallaxLayer.ts"],(function(a){"use strict";var r,e,t,l,n,i,o,s,c,p;return{setters:[function(a){r=a.applyDecoratedDescriptor,e=a.inheritsLoose,t=a.initializerDefineProperty,l=a.assertThisInitialized},function(a){n=a.cclegacy,i=a._decorator,o=a.Camera,s=a.Component},function(a){c=a.ParallaxCamera},function(a){p=a.ParallaxLayer}],execute:function(){var u,h,m,x,y;n._RF.push({},"502859MrrdJhpBZOmq4R9NB","ParallaxBackground",void 0);var f=i.ccclass,d=i.property;a("ParallaxBackground",(u=f("ParallaxBackground"),h=d({type:o}),u((y=r((x=function(a){function r(){for(var r,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r=a.call.apply(a,[this].concat(n))||this,t(r,"camera",y,l(r)),r.parallaxCamera=null,r.parallaxLayers=[],r}e(r,a);var n=r.prototype;return n.start=function(){this.parallaxCamera=this.camera.getComponent(c);var a=this.move.bind(this);null!=this.parallaxCamera&&this.parallaxCamera.registerCallback(a),this.parallaxLayers=this.node.getComponentsInChildren(p)},n.move=function(a){for(var r=0;r<this.parallaxLayers.length;r++)this.parallaxLayers[r].move(a)},r}(s)).prototype,"camera",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=x))||m));n._RF.pop()}}}));

System.register("chunks:///_virtual/ParallaxCamera.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var o,a,i,n,e;return{setters:[function(t){o=t.inheritsLoose},function(t){a=t.cclegacy,i=t._decorator,n=t.CameraComponent,e=t.Component}],execute:function(){var r;a._RF.push({},"26a40eFxsRFU7SLEWhmLE8B","ParallaxCamera",void 0);var s=i.ccclass;i.property,t("ParallaxCamera",s("ParallaxCamera")(r=function(t){function a(){for(var o,a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(o=t.call.apply(t,[this].concat(i))||this).oldPosition=0,o.camera=null,o.callback=null,o}o(a,t);var i=a.prototype;return i.start=function(){this.oldPosition=this.node.getPosition().x,this.camera=this.getComponent(n)},i.update=function(){if(this.node.position.x!==this.oldPosition){if(null!==this.callback){var t=this.oldPosition-this.node.getPosition().x;this.callback(t)}this.oldPosition=this.node.getPosition().x}},i.registerCallback=function(t){this.callback=t},a}(e))||r);a._RF.pop()}}}));

System.register("chunks:///_virtual/ParallaxLayer.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(r){"use strict";var a,t,e,o,i,n,l;return{setters:[function(r){a=r.applyDecoratedDescriptor,t=r.inheritsLoose,e=r.initializerDefineProperty,o=r.assertThisInitialized},function(r){i=r.cclegacy,n=r._decorator,l=r.Component}],execute:function(){var c,s,p;i._RF.push({},"07f47R47VxA8oyhWn+YD9GH","ParallaxLayer",void 0);var u=n.ccclass,y=n.property;r("ParallaxLayer",u("ParallaxLayer")((p=a((s=function(r){function a(){for(var a,t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];return a=r.call.apply(r,[this].concat(i))||this,e(a,"parallaxFactor",p,o(a)),a}return t(a,r),a.prototype.move=function(r){var a=this.node.getPosition();a.x-=r*this.parallaxFactor,this.node.setPosition(a)},a}(l)).prototype,"parallaxFactor",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),c=s))||c);i._RF.pop()}}}));

System.register("chunks:///_virtual/ScrollLeftRight.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var i,e,r,o;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,r=t._decorator,o=t.Component}],execute:function(){var n;e._RF.push({},"af964pcvc1DE7ObJrl8uY+V","ScrollLeftRight",void 0);var c=r.ccclass;r.property,t("ScrollLeftRight",c("ScrollLeftRight")(n=function(t){function e(){for(var i,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(i=t.call.apply(t,[this].concat(r))||this).direction="right",i.speed=50,i.limit=300,i}return i(e,t),e.prototype.update=function(t){var i=this.node.getPosition();i.x>this.limit?this.direction="left":i.x<-this.limit&&(this.direction="right"),"right"===this.direction?i.x+=t*this.speed:i.x-=t*this.speed,this.node.setPosition(i)},e}(o))||n);e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});