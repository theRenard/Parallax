System.register("chunks:///_virtual/main",["./ParallaxBackground.ts","./ParallaxCamera.ts","./ParallaxLayer.ts","./ScrollLeftRight.ts"],(function(){"use strict";return{setters:[null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/ParallaxBackground.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ParallaxCamera.ts","./ParallaxLayer.ts"],(function(a){"use strict";var r,e,l,t,s,n,i,o;return{setters:[function(a){r=a.applyDecoratedDescriptor,e=a.initializerDefineProperty},function(a){l=a.cclegacy,t=a.Camera,s=a._decorator,n=a.Component},function(a){i=a.ParallaxCamera},function(a){o=a.ParallaxLayer}],execute:function(){var c,p,u,h,m;l._RF.push({},"502859MrrdJhpBZOmq4R9NB","ParallaxBackground",void 0);const{ccclass:x,property:d}=s;a("ParallaxBackground",(c=x("ParallaxBackground"),p=d({type:t}),c((m=r((h=class extends n{constructor(...a){super(...a),e(this,"camera",m,this),this.parallaxCamera=null,this.parallaxLayers=[]}start(){this.parallaxCamera=this.camera.getComponent(i);const a=this.move.bind(this);null!=this.parallaxCamera&&this.parallaxCamera.registerCallback(a),this.parallaxLayers=this.node.getComponentsInChildren(o)}move(a){for(let r=0;r<this.parallaxLayers.length;r++)this.parallaxLayers[r].move(a)}}).prototype,"camera",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=h))||u));l._RF.pop()}}}));

System.register("chunks:///_virtual/ParallaxCamera.ts",["cc"],(function(t){"use strict";var a,s,o,i;return{setters:[function(t){a=t.cclegacy,s=t.Component,o=t.CameraComponent,i=t._decorator}],execute:function(){var e;a._RF.push({},"26a40eFxsRFU7SLEWhmLE8B","ParallaxCamera",void 0);const{ccclass:n,property:l}=i;t("ParallaxCamera",n("ParallaxCamera")(e=class extends s{constructor(...t){super(...t),this.oldPosition=0,this.camera=null,this.callback=null}start(){this.oldPosition=this.node.getPosition().x,this.camera=this.getComponent(o)}update(){if(this.node.position.x!==this.oldPosition){if(null!==this.callback){const t=this.oldPosition-this.node.getPosition().x;this.callback(t)}this.oldPosition=this.node.getPosition().x}}registerCallback(t){this.callback=t}})||e);a._RF.pop()}}}));

System.register("chunks:///_virtual/ParallaxLayer.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(r){"use strict";var e,t,a,o,i;return{setters:[function(r){e=r.applyDecoratedDescriptor,t=r.initializerDefineProperty},function(r){a=r.cclegacy,o=r._decorator,i=r.Component}],execute:function(){var n,l,s;a._RF.push({},"07f47R47VxA8oyhWn+YD9GH","ParallaxLayer",void 0);const{ccclass:c,property:p}=o;r("ParallaxLayer",c("ParallaxLayer")((s=e((l=class extends i{constructor(...r){super(...r),t(this,"parallaxFactor",s,this)}move(r){const e=this.node.getPosition();e.x-=r*this.parallaxFactor,this.node.setPosition(e)}}).prototype,"parallaxFactor",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),n=l))||n);a._RF.pop()}}}));

System.register("chunks:///_virtual/ScrollLeftRight.ts",["cc"],(function(t){"use strict";var i,e,s;return{setters:[function(t){i=t.cclegacy,e=t.Component,s=t._decorator}],execute:function(){var c;i._RF.push({},"af964pcvc1DE7ObJrl8uY+V","ScrollLeftRight",void 0);const{ccclass:o,property:r}=s;t("ScrollLeftRight",o("ScrollLeftRight")(c=class extends e{constructor(...t){super(...t),this.direction="right",this.speed=50,this.limit=300}update(t){const i=this.node.getPosition();i.x>this.limit?this.direction="left":i.x<-this.limit&&(this.direction="right"),"right"===this.direction?i.x+=t*this.speed:i.x-=t*this.speed,this.node.setPosition(i)}})||c);i._RF.pop()}}}));

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