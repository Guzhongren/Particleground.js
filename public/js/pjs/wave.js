+function(t,o){"use strict";function e(t,o){r.createCanvas(t,this)&&(this.set=r.extend({},e.configDefault,o),this.dots=[],this.createDot(),this.draw(),this.resize())}var r=o.util,s=(Math.random,Math.sin),i=Math.PI/180;2*Math.PI;e.configDefault={opacity:1,color:[r.randomColor(),r.randomColor(),r.randomColor()],num:3,lineWidth:.4,crest:1,speed:6,resize:!0},e.prototype={version:"1.0.0",createDot:function(){for(var t=this.set,o=(this.ch,this.ch/2*t.crest),e=t.num,r=this.cw/2,s=[],i=((t.max-t.min)/r,0);e>i;i++){for(var a=1-i/t.num,n=[],c=0;r>c;c++)n.push({x:2*c,y:c/r*o*a,angle:c,r:1});s.push(n)}this.dots=s},draw:function(){var t=this.set,o=this.cxt,e=this.cw,r=this.ch,a=r/2,n=t.speed;o.clearRect(0,0,e,r),o.globalAlpha=t.opacity,this.dots.forEach(function(e,r){var c=t.color[r];o.save(),o.beginPath(),e.forEach(function(t,e){e?o.lineTo(t.x,t.y*s(t.angle*i)+a):o.moveTo(t.x,t.y*s(t.angle*i)+a),t.angle-=n}),o.strokeStyle=c,o.stroke(),o.restore()})}},o.extend(e.prototype),o.wave=e.prototype.constructor=e}(window,Particleground);
//# sourceMappingURL=../map/pjs/wave.js.map
