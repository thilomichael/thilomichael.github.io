var e=1e3,t=1001,n=1002,r=1003,i=1006,a=1008,o=1009,s=1012,c=1014,l=1015,u=1016,d=1017,f=1018,p=1020,m=1023,h=1026,g=1027,_=1029,v=1030,y=1031,b=1033,x=2300,S=2301,C=2302,w=2303,T=2400,E=2401,D=2402,O=`srgb`,k=`srgb-linear`,A=`linear`,j=`srgb`,M=7680,N=35048,P=2e3;function ee(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function F(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function I(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function te(){let e=I(`canvas`);return e.style.display=`block`,e}var L={};function ne(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function re(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=re(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=re(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function B(...e){let t=e.join(` `);t in L||(L[t]=!0,R(...e))}function ie(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ae={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},oe=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},se=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ce=1234567,le=Math.PI/180,V=180/Math.PI;function ue(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(se[e&255]+se[e>>8&255]+se[e>>16&255]+se[e>>24&255]+`-`+se[t&255]+se[t>>8&255]+`-`+se[t>>16&15|64]+se[t>>24&255]+`-`+se[n&63|128]+se[n>>8&255]+`-`+se[n>>16&255]+se[n>>24&255]+se[r&255]+se[r>>8&255]+se[r>>16&255]+se[r>>24&255]).toLowerCase()}function H(e,t,n){return Math.max(t,Math.min(n,e))}function de(e,t){return(e%t+t)%t}function fe(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function pe(e,t,n){return e===t?0:(n-e)/(t-e)}function me(e,t,n){return(1-n)*e+n*t}function he(e,t,n,r){return me(e,t,1-Math.exp(-n*r))}function ge(e,t=1){return t-Math.abs(de(e,t*2)-t)}function _e(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ve(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function ye(e,t){return e+Math.floor(Math.random()*(t-e+1))}function be(e,t){return e+Math.random()*(t-e)}function xe(e){return e*(.5-Math.random())}function Se(e){e!==void 0&&(ce=e);let t=ce+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ce(e){return e*le}function we(e){return e*V}function Te(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Ee(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function De(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Oe(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:R(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function ke(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ae(e,t){if(t.constructor===Float32Array)return e;let n=ke(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function je(e,t){if(t.constructor===Float32Array)return e;let n=ke(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Me={DEG2RAD:le,RAD2DEG:V,generateUUID:ue,clamp:H,euclideanModulo:de,mapLinear:fe,inverseLerp:pe,lerp:me,damp:he,pingpong:ge,smoothstep:_e,smootherstep:ve,randInt:ye,randFloat:be,randFloatSpread:xe,seededRandom:Se,degToRad:Ce,radToDeg:we,isPowerOfTwo:Te,ceilPowerOfTwo:Ee,floorPowerOfTwo:De,setQuaternionFromProperEuler:Oe,normalize:je,denormalize:Ae},U=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(H(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},W=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(H(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pe.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pe.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this.z=H(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this.z=H(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ne.copy(this).projectOnVector(e),this.sub(Ne)}reflect(e){return this.sub(Ne.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(H(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ne=new G,Pe=new W,K=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return B(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(q.makeScale(e,t)),this}rotate(e){return B(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(q.makeRotation(-e)),this}translate(e,t){return B(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(q.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},q=new K,Fe=new K().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),J=new K().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Y(){let e={enabled:!0,workingColorSpace:k,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Ie(e.r),e.g=Ie(e.g),e.b=Ie(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Le(e.r),e.g=Le(e.g),e.b=Le(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?A:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[k]:{primaries:t,whitePoint:r,transfer:A,toXYZ:Fe,fromXYZ:J,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:O},outputColorSpaceConfig:{drawingBufferColorSpace:O}},[O]:{primaries:t,whitePoint:r,transfer:j,toXYZ:Fe,fromXYZ:J,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:O}}}),e}var X=Y();function Ie(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Le(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Re,ze=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Re===void 0&&(Re=I(`canvas`)),Re.width=e.width,Re.height=e.height;let t=Re.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Re}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=I(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ie(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ie(t[e]/255)*255):t[e]=Ie(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Be=0,Ve=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Be++}),this.uuid=ue(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(He(r[t].image)):e.push(He(r[t]))}else e=He(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function He(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?ze.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var Ue=0,We=new G,Ge=class r extends oe{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,s=t,c=t,l=i,u=a,d=m,f=o,p=r.DEFAULT_ANISOTROPY,h=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ue++}),this.uuid=ue(),this.name=``,this.source=new Ve(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=c,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new U(0,0),this.repeat=new U(1,1),this.center=new U(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new K,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(We).x}get height(){return this.source.getSize(We).y}get depth(){return this.source.getSize(We).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ge.DEFAULT_IMAGE=null,Ge.DEFAULT_MAPPING=300,Ge.DEFAULT_ANISOTROPY=1;var Ke=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this.z=H(this.z,e.z,t.z),this.w=H(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this.z=H(this.z,e,t),this.w=H(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qe=class extends oe{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:i,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Ge({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:i,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ve(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Je=class extends qe{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ye=class extends Ge{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Xe=class extends Ge{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ze=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Qe.setFromMatrixColumn(e,0).length(),i=1/Qe.setFromMatrixColumn(e,1).length(),a=1/Qe.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(et,e,tt)}lookAt(e,t,n){let r=this.elements;return it.subVectors(e,t),it.lengthSq()===0&&(it.z=1),it.normalize(),nt.crossVectors(n,it),nt.lengthSq()===0&&(Math.abs(n.z)===1?it.x+=1e-4:it.z+=1e-4,it.normalize(),nt.crossVectors(n,it)),nt.normalize(),rt.crossVectors(it,nt),r[0]=nt.x,r[4]=rt.x,r[8]=it.x,r[1]=nt.y,r[5]=rt.y,r[9]=it.y,r[2]=nt.z,r[6]=rt.z,r[10]=it.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],ee=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*ee,i[12]=a*w+o*O+s*M+c*F,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*ee,i[13]=l*w+u*O+d*M+f*F,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*ee,i[14]=p*w+m*O+h*M+g*F,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*ee,i[15]=_*w+v*O+y*M+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Qe.set(r[0],r[1],r[2]).length(),o=Qe.set(r[4],r[5],r[6]).length(),s=Qe.set(r[8],r[9],r[10]).length();i<0&&(a=-a),$e.copy(this);let c=1/a,l=1/o,u=1/s;return $e.elements[0]*=c,$e.elements[1]*=c,$e.elements[2]*=c,$e.elements[4]*=l,$e.elements[5]*=l,$e.elements[6]*=l,$e.elements[8]*=u,$e.elements[9]*=u,$e.elements[10]*=u,t.setFromRotationMatrix($e),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=P,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=P,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qe=new G,$e=new Ze,et=new G(0,0,0),tt=new G(1,1,1),nt=new G,rt=new G,it=new G,at=new Ze,ot=new W,st=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(H(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-H(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(H(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-H(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(H(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-H(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return at.makeRotationFromQuaternion(e),this.setFromRotationMatrix(at,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ot.setFromEuler(this),this.setFromQuaternion(ot,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};st.DEFAULT_ORDER=`XYZ`;var ct=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},lt=0,ut=new G,dt=new W,ft=new Ze,pt=new G,mt=new G,ht=new G,gt=new W,_t=new G(1,0,0),vt=new G(0,1,0),yt=new G(0,0,1),bt={type:`added`},xt={type:`removed`},St={type:`childadded`,child:null},Ct={type:`childremoved`,child:null},wt=class e extends oe{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lt++}),this.uuid=ue(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new G,n=new st,r=new W,i=new G(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ze},normalMatrix:{value:new K}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ct,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dt.setFromAxisAngle(e,t),this.quaternion.multiply(dt),this}rotateOnWorldAxis(e,t){return dt.setFromAxisAngle(e,t),this.quaternion.premultiply(dt),this}rotateX(e){return this.rotateOnAxis(_t,e)}rotateY(e){return this.rotateOnAxis(vt,e)}rotateZ(e){return this.rotateOnAxis(yt,e)}translateOnAxis(e,t){return ut.copy(e).applyQuaternion(this.quaternion),this.position.add(ut.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_t,e)}translateY(e){return this.translateOnAxis(vt,e)}translateZ(e){return this.translateOnAxis(yt,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ft.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pt.copy(e):pt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),mt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ft.lookAt(mt,pt,this.up):ft.lookAt(pt,mt,this.up),this.quaternion.setFromRotationMatrix(ft),r&&(ft.extractRotation(r.matrixWorld),dt.setFromRotationMatrix(ft),this.quaternion.premultiply(dt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bt),St.child=e,this.dispatchEvent(St),St.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xt),Ct.child=e,this.dispatchEvent(Ct),Ct.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ft.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ft.multiply(e.parent.matrixWorld)),e.applyMatrix4(ft),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bt),St.child=e,this.dispatchEvent(St),St.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mt,e,ht),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mt,gt,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};wt.DEFAULT_UP=new G(0,1,0),wt.DEFAULT_MATRIX_AUTO_UPDATE=!0,wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tt=class extends wt{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Et={type:`move`},Dt=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Et)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ot={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kt={h:0,s:0,l:0},At={h:0,s:0,l:0};function jt(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Mt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=O){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,X.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=X.workingColorSpace){return this.r=e,this.g=t,this.b=n,X.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=X.workingColorSpace){if(e=de(e,1),t=H(t,0,1),n=H(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=jt(i,r,e+1/3),this.g=jt(i,r,e),this.b=jt(i,r,e-1/3)}return X.colorSpaceToWorking(this,r),this}setStyle(e,t=O){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=O){let n=Ot[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ie(e.r),this.g=Ie(e.g),this.b=Ie(e.b),this}copyLinearToSRGB(e){return this.r=Le(e.r),this.g=Le(e.g),this.b=Le(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=O){return X.workingToColorSpace(Nt.copy(this),e),Math.round(H(Nt.r*255,0,255))*65536+Math.round(H(Nt.g*255,0,255))*256+Math.round(H(Nt.b*255,0,255))}getHexString(e=O){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=X.workingColorSpace){X.workingToColorSpace(Nt.copy(this),t);let n=Nt.r,r=Nt.g,i=Nt.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=X.workingColorSpace){return X.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=O){X.workingToColorSpace(Nt.copy(this),e);let t=Nt.r,n=Nt.g,r=Nt.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(kt),this.setHSL(kt.h+e,kt.s+t,kt.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kt),e.getHSL(At);let n=me(kt.h,At.h,t),r=me(kt.s,At.s,t),i=me(kt.l,At.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nt=new Mt;Mt.NAMES=Ot;var Pt=class extends wt{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new st,this.environmentIntensity=1,this.environmentRotation=new st,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ft=new G,It=new G,Lt=new G,Rt=new G,zt=new G,Bt=new G,Vt=new G,Ht=new G,Ut=new G,Wt=new G,Gt=new Ke,Kt=new Ke,qt=new Ke,Jt=class e{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ft.subVectors(e,t),r.cross(Ft);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Ft.subVectors(r,t),It.subVectors(n,t),Lt.subVectors(e,t);let a=Ft.dot(Ft),o=Ft.dot(It),s=Ft.dot(Lt),c=It.dot(It),l=It.dot(Lt),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Rt)!==null&&Rt.x>=0&&Rt.y>=0&&Rt.x+Rt.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Rt)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Rt.x),s.addScaledVector(a,Rt.y),s.addScaledVector(o,Rt.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Gt.setScalar(0),Kt.setScalar(0),qt.setScalar(0),Gt.fromBufferAttribute(e,t),Kt.fromBufferAttribute(e,n),qt.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Gt,i.x),a.addScaledVector(Kt,i.y),a.addScaledVector(qt,i.z),a}static isFrontFacing(e,t,n,r){return Ft.subVectors(n,t),It.subVectors(e,t),Ft.cross(It).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ft.subVectors(this.c,this.b),It.subVectors(this.a,this.b),Ft.cross(It).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;zt.subVectors(r,n),Bt.subVectors(i,n),Ht.subVectors(e,n);let s=zt.dot(Ht),c=Bt.dot(Ht);if(s<=0&&c<=0)return t.copy(n);Ut.subVectors(e,r);let l=zt.dot(Ut),u=Bt.dot(Ut);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(zt,a);Wt.subVectors(e,i);let f=zt.dot(Wt),p=Bt.dot(Wt);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Bt,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Vt.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Vt,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(zt,a).addScaledVector(Bt,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yt=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Zt):Zt.fromBufferAttribute(r,t),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Qt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Qt.copy(e.boundingBox)),Qt.applyMatrix4(e.matrixWorld),this.union(Qt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(on),sn.subVectors(this.max,on),$t.subVectors(e.a,on),en.subVectors(e.b,on),tn.subVectors(e.c,on),nn.subVectors(en,$t),rn.subVectors(tn,en),an.subVectors($t,tn);let t=[0,-nn.z,nn.y,0,-rn.z,rn.y,0,-an.z,an.y,nn.z,0,-nn.x,rn.z,0,-rn.x,an.z,0,-an.x,-nn.y,nn.x,0,-rn.y,rn.x,0,-an.y,an.x,0];return!un(t,$t,en,tn,sn)||(t=[1,0,0,0,1,0,0,0,1],!un(t,$t,en,tn,sn))?!1:(cn.crossVectors(nn,rn),t=[cn.x,cn.y,cn.z],un(t,$t,en,tn,sn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Xt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xt)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xt=[new G,new G,new G,new G,new G,new G,new G,new G],Zt=new G,Qt=new Yt,$t=new G,en=new G,tn=new G,nn=new G,rn=new G,an=new G,on=new G,sn=new G,cn=new G,ln=new G;function un(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ln.fromArray(e,a);let o=i.x*Math.abs(ln.x)+i.y*Math.abs(ln.y)+i.z*Math.abs(ln.z),s=t.dot(ln),c=n.dot(ln),l=r.dot(ln);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var dn=new G,fn=new U,pn=0,mn=class extends oe{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pn++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=l,this.version=0,this._normalizationScale=e===void 0?void 0:ke(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXY(t,fn.x,fn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Ae(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?je(e,this.array):Math.round(e*t)}},hn=class extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},gn=class extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},_n=class extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}},vn=new Yt,yn=new G,bn=new G,xn=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?vn.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yn.subVectors(e,this.center);let t=yn.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(yn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yn.copy(e.center).add(bn)),this.expandByPoint(yn.copy(e.center).sub(bn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sn=0,Cn=new Ze,wn=new wt,Tn=new G,En=new Yt,Dn=new Yt,On=new G,kn=class e extends oe{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sn++}),this.uuid=ue(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(ee(e)?gn:hn)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new K().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return wn.lookAt(e),wn.updateMatrix(),this.applyMatrix4(wn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tn).negate(),this.translate(Tn.x,Tn.y,Tn.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new _n(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];En.setFromBufferAttribute(n),this.morphTargetsRelative?(On.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(On),On.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(On)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new G,1/0);else if(e){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Dn.setFromBufferAttribute(n),this.morphTargetsRelative?(On.addVectors(En.min,Dn.min),En.expandByPoint(On),On.addVectors(En.max,Dn.max),En.expandByPoint(On)):(En.expandByPoint(Dn.min),En.expandByPoint(Dn.max))}En.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)On.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(On));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)On.fromBufferAttribute(a,t),o&&(Tn.fromBufferAttribute(e,t),On.add(Tn)),r=Math.max(r,n.distanceToSquared(On))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new mn(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new G,s[e]=new G;let l=new G,u=new G,d=new G,f=new U,p=new U,m=new U,h=new G,g=new G;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new G,b=new G,x=new G,S=new G;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new mn(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new G,i=new G,a=new G,o=new G,s=new G,c=new G,l=new G,u=new G;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)On.fromBufferAttribute(e,t),On.normalize(),e.setXYZ(t,On.x,On.y,On.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new mn(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},An=new G,jn=new G,Mn=new K,Nn=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=An.subVectors(n,t).cross(jn.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(An),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Mn.getNormalMatrix(e),r=this.coplanarPoint(An).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Pn=0,Fn=class extends oe{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pn++}),this.uuid=ue(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=M,this.stencilZFail=M,this.stencilZPass=M,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Nn().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new U().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new U().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},In=new G,Ln=new G,Rn=new G,zn=new G,Bn=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ln.copy(e).add(t).multiplyScalar(.5),Rn.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(Ln);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Rn),o=zn.dot(this.direction),s=-zn.dot(Rn),c=zn.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ln).addScaledVector(Rn,d),f}intersectSphere(e,t){if(e.radius<0)return null;In.subVectors(e.center,this.origin);let n=In.dot(this.direction),r=In.dot(In)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,ee=C/w,F=1/w,I=T-P*D,te=E-ee*D,L=O-P*A,ne=k-ee*A,re=j-P*N,R=M-ee*N,z=re*ne-R*L,B=I*R-te*re,ie=L*te-ne*I;if(r){if(z<0||B<0||ie<0)return null}else if((z<0||B<0||ie<0)&&(z>0||B>0||ie>0))return null;let ae=z+B+ie;if(ae===0)return null;let oe=F*(z*D+B*A+ie*N);return(ae>0?oe<0:oe>0)?null:this.at(oe/ae,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vn=class extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new st,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Hn=new Ze,Un=new Bn,Wn=new xn,Gn=new G,Kn=new G,qn=new G,Jn=new G,Yn=new G,Xn=new G,Zn=new G,Qn=new G,$n=class extends wt{constructor(e=new kn,t=new Vn){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Xn.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Yn.fromBufferAttribute(s,e),a?Xn.addScaledVector(Yn,r):Xn.addScaledVector(Yn.sub(t),r))}t.add(Xn)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wn.copy(n.boundingSphere),Wn.applyMatrix4(i),Un.copy(e.ray).recast(e.near),Wn.containsPoint(Un.origin)===!1&&(Un.intersectSphere(Wn,Gn)===null||Un.origin.distanceToSquared(Gn)>(e.far-e.near)**2)||(Hn.copy(i).invert(),Un.copy(e.ray).applyMatrix4(Hn),(n.boundingBox===null||Un.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=tr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=tr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=tr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=tr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function er(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Qn.copy(s),Qn.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Qn);return l<n.near||l>n.far?null:{distance:l,point:Qn.clone(),object:e}}function tr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Kn),e.getVertexPosition(c,qn),e.getVertexPosition(l,Jn);let u=er(e,t,n,r,Kn,qn,Jn,Zn);if(u){let e=new G;Jt.getBarycoord(Zn,Kn,qn,Jn,e),i&&(u.uv=Jt.getInterpolatedAttribute(i,s,c,l,e,new U)),a&&(u.uv1=Jt.getInterpolatedAttribute(a,s,c,l,e,new U)),o&&(u.normal=Jt.getInterpolatedAttribute(o,s,c,l,e,new G),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new G,materialIndex:0};Jt.getNormal(Kn,qn,Jn,t.normal),u.face=t,u.barycoord=e}return u}var nr=class extends Ge{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},rr=new xn,ir=new U(.5,.5),ar=new G,or=class{constructor(e=new Nn,t=new Nn,n=new Nn,r=new Nn,i=new Nn,a=new Nn){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=P,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476+ir.distanceTo(e.center),rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ar.x=r.normal.x>0?e.max.x:e.min.x,ar.y=r.normal.y>0?e.max.y:e.min.y,ar.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ar)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},sr=new Ze,cr=class e{constructor(){this.coordinateSystem=P,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];sr.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new or),n[e].setFromProjectionMatrix(sr,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new or),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},lr=class extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ur=new G,dr=new G,fr=new Ze,pr=new Bn,mr=new xn,hr=new G,gr=new G,_r=class extends wt{constructor(e=new kn,t=new lr){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)ur.fromBufferAttribute(t,e-1),dr.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=ur.distanceTo(dr);e.setAttribute(`lineDistance`,new _n(n,1))}else R(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),mr.radius+=i,e.ray.intersectsSphere(mr)===!1)return;fr.copy(r).invert(),pr.copy(e.ray).applyMatrix4(fr);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=vr(this,e,pr,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=vr(this,e,pr,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=vr(this,e,pr,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=vr(this,e,pr,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function vr(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(ur.fromBufferAttribute(s,i),dr.fromBufferAttribute(s,a),n.distanceSqToSegment(ur,dr,hr,gr)>r)return;hr.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(hr);if(!(c<t.near||c>t.far))return{distance:c,point:gr.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var yr=new G,br=new G,xr=class extends _r{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)yr.fromBufferAttribute(t,e),br.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+yr.distanceTo(br);e.setAttribute(`lineDistance`,new _n(n,1))}else R(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Sr=class extends Ge{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Cr=class extends Ge{constructor(e,t,n=c,i,a,o,s=r,l=r,u,d=h,f=1){if(d!==1026&&d!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:f},i,a,o,s,l,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ve(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},wr=class extends Cr{constructor(e,t=c,n=301,i,a,o=r,s=r,l,u=h){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,i,a,o,s,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Tr=class extends Ge{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Er=class e extends kn{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new _n(c,3)),this.setAttribute(`normal`,new _n(l,3)),this.setAttribute(`uv`,new _n(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new G;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Dr=class e extends kn{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new _n(u,3)),this.setAttribute(`normal`,new _n(d,3)),this.setAttribute(`uv`,new _n(f,2));function _(){let a=new G,_=new G,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new U,m=new G,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Or=class e extends kn{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new _n(i,3)),this.setAttribute(`normal`,new _n(i.slice(),3)),this.setAttribute(`uv`,new _n(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new G,r=new G,i=new G;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new G;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new G;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new G,t=new G,n=new G,r=new G,o=new U,s=new U,c=new U;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},kr=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){R(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new U:new G);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new G,r=[],i=[],a=[],o=new G,s=new Ze;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new G)}i[0]=new G,a[0]=new G;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(H(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(H(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ar=class extends kr{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new U){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},jr=class extends Ar{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Mr(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Nr=new G,Pr=new G,Fr=new Mr,Ir=new Mr,Lr=new Mr,Rr=class extends kr{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new G){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Pr.subVectors(r[0],r[1]).add(r[0]),c=Pr);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Nr.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Nr),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Fr.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Ir.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Lr.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Fr.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Ir.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Lr.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Fr.calc(s),Ir.calc(s),Lr.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new G().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function zr(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Br(e,t){let n=1-e;return n*n*t}function Vr(e,t){return 2*(1-e)*e*t}function Hr(e,t){return e*e*t}function Ur(e,t,n,r){return Br(e,t)+Vr(e,n)+Hr(e,r)}function Wr(e,t){let n=1-e;return n*n*n*t}function Gr(e,t){let n=1-e;return 3*n*n*e*t}function Kr(e,t){return 3*(1-e)*e*e*t}function qr(e,t){return e*e*e*t}function Jr(e,t,n,r,i){return Wr(e,t)+Gr(e,n)+Kr(e,r)+qr(e,i)}var Yr=class extends kr{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Jr(e,r.x,i.x,a.x,o.x),Jr(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xr=class extends kr{constructor(e=new G,t=new G,n=new G,r=new G){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Jr(e,r.x,i.x,a.x,o.x),Jr(e,r.y,i.y,a.y,o.y),Jr(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zr=class extends kr{constructor(e=new U,t=new U){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qr=class extends kr{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$r=class extends kr{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ur(e,r.x,i.x,a.x),Ur(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ei=class extends kr{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ur(e,r.x,i.x,a.x),Ur(e,r.y,i.y,a.y),Ur(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ti=class extends kr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new U){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(zr(o,s.x,c.x,l.x,u.x),zr(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new U().fromArray(n))}return this}},ni=Object.freeze({__proto__:null,ArcCurve:jr,CatmullRomCurve3:Rr,CubicBezierCurve:Yr,CubicBezierCurve3:Xr,EllipseCurve:Ar,LineCurve:Zr,LineCurve3:Qr,QuadraticBezierCurve:$r,QuadraticBezierCurve3:ei,SplineCurve:ti}),ri=class extends kr{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ni[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ni[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},ii=class extends ri{constructor(e){super(),this.type=`Path`,this.currentPoint=new U,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Zr(this.currentPoint.clone(),new U(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new $r(this.currentPoint.clone(),new U(e,t),new U(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Yr(this.currentPoint.clone(),new U(e,t),new U(n,r),new U(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new ti([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Ar(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ai=class extends ii{constructor(e){super(e),this.uuid=ue(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new ii().fromJSON(n))}return this}};function oi(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=si(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=mi(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return li(a,o,n,s,c,l,0),o}function si(e,t,n,r,i){let a;if(i===Ri(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Fi(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Fi(i/r|0,e[i],e[i+1],a);return a&&Di(a,a.next)&&(Ii(a),a=a.next),a}function ci(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Di(n,n.next)||Ei(n.prev,n,n.next)===0)){if(Ii(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function li(e,t,n,r,i,a,o){if(!e)return;!o&&a&&yi(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?di(e,r,i,a):ui(e))t.push(c.i,e.i,l.i),Ii(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=fi(ci(e),t),li(e,t,n,r,i,a,2)):o===2&&pi(e,t,n,r,i,a):li(ci(e),t,n,r,i,a,1);break}}}function ui(e){let t=e.prev,n=e,r=e.next;if(Ei(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&wi(i,s,a,c,o,l,m.x,m.y)&&Ei(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function di(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Ei(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=xi(p,m,t,n,r),v=xi(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&wi(s,u,c,d,l,f,y.x,y.y)&&Ei(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&wi(s,u,c,d,l,f,b.x,b.y)&&Ei(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&wi(s,u,c,d,l,f,y.x,y.y)&&Ei(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&wi(s,u,c,d,l,f,b.x,b.y)&&Ei(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function fi(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Di(r,i)&&Oi(r,n,n.next,i)&&Mi(r,i)&&Mi(i,r)&&(t.push(r.i,n.i,i.i),Ii(n),Ii(n.next),n=e=i),n=n.next}while(n!==e);return ci(n)}function pi(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Ti(o,e)){let s=Pi(o,e);o=ci(o,o.next),s=ci(s,s.next),li(o,t,n,r,i,a,0),li(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function mi(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=si(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Si(o))}i.sort(hi);for(let e=0;e<i.length;e++)n=gi(i[e],n);return n}function hi(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function gi(e,t){let n=_i(e,t);if(!n)return t;let r=Pi(n,e);return ci(r,r.next),ci(n,n.next)}function _i(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Di(e,n))return n;do{if(Di(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Ci(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Mi(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&vi(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function vi(e,t){return Ei(e.prev,e,t.prev)<0&&Ei(t.next,e,e.next)<0}function yi(e,t,n,r){let i=e;do i.z===0&&(i.z=xi(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,bi(i)}function bi(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function xi(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Si(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Ci(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function wi(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Ci(e,t,n,r,i,a,o,s)}function Ti(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!ji(e,t)&&(Mi(e,t)&&Mi(t,e)&&Ni(e,t)&&(Ei(e.prev,e,t.prev)||Ei(e,t.prev,t))||Di(e,t)&&Ei(e.prev,e,e.next)>0&&Ei(t.prev,t,t.next)>0)}function Ei(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Di(e,t){return e.x===t.x&&e.y===t.y}function Oi(e,t,n,r){let i=Ai(Ei(e,t,n)),a=Ai(Ei(e,t,r)),o=Ai(Ei(n,r,e)),s=Ai(Ei(n,r,t));return!!(i!==a&&o!==s||i===0&&ki(e,n,t)||a===0&&ki(e,r,t)||o===0&&ki(n,e,r)||s===0&&ki(n,t,r))}function ki(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ai(e){return e>0?1:e<0?-1:0}function ji(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Oi(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Mi(e,t){return Ei(e.prev,e,e.next)<0?Ei(e,t,e.next)>=0&&Ei(e,e.prev,t)>=0:Ei(e,t,e.prev)<0||Ei(e,e.next,t)<0}function Ni(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Pi(e,t){let n=Li(e.i,e.x,e.y),r=Li(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Fi(e,t,n,r){let i=Li(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Ii(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Li(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ri(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var zi=class{static triangulate(e,t,n=2){return oi(e,t,n)}},Bi=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Vi(e),Hi(n,e);let a=e.length;t.forEach(Vi);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Hi(n,t[e]);let o=zi.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Vi(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Hi(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Ui=class e extends kn{constructor(e=new ai([new U(.5,.5),new U(-.5,.5),new U(-.5,-.5),new U(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new _n(r,3)),this.setAttribute(`uv`,new _n(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Wi:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new G,b=new G,x=new G}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Bi.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Bi.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||z(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new U(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new U(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,P=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),P=P.concat(N)}let ee;if(p===0)ee=Bi.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);re(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);re(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}ee=Bi.triangulateShape(e,t)}let F=ee.length,I=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],P[e],I):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),re(x.x,x.y,x.z)):re(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],P[t],I):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),re(x.x,x.y,x.z)):re(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);re(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?re(i.x,i.y+g[s-1].y,g[s-1].x+n):re(i.x,i.y,c+n)}}}te(),L();function te(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<F;e++){let n=ee[e];R(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<F;e++){let n=ee[e];R(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<F;e++){let t=ee[e];R(t[2],t[1],t[0])}for(let e=0;e<F;e++){let t=ee[e];R(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function L(){let e=r.length/3,t=0;ne(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ne(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ne(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);B(t+r+n,t+i+n,t+i+a,t+r+a)}}}function re(e,t,n){a.push(e),a.push(t),a.push(n)}function R(e,t,i){ie(e),ie(t),ie(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ae(o[0]),ae(o[1]),ae(o[2])}function B(e,t,i,a){ie(e),ie(t),ie(a),ie(t),ie(i),ie(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ae(s[0]),ae(s[1]),ae(s[3]),ae(s[1]),ae(s[2]),ae(s[3])}function ie(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ae(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Gi(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ni[i.type]().fromJSON(i)),new e(r,t.options)}},Wi={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new U(a,o),new U(s,c),new U(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new U(o,1-c),new U(l,1-d),new U(f,1-m),new U(h,1-_)]:[new U(s,1-c),new U(u,1-d),new U(p,1-m),new U(g,1-_)]}};function Gi(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Ki=class e extends Or{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},qi=class e extends kn{constructor(e=[new U(0,-.5),new U(.5,0),new U(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=H(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new G,d=new U,f=new G,p=new G,m=new G,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:m.normalize(),s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new _n(a,3)),this.setAttribute(`uv`,new _n(o,2)),this.setAttribute(`normal`,new _n(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Ji=class e extends kn{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new _n(p,3)),this.setAttribute(`normal`,new _n(m,3)),this.setAttribute(`uv`,new _n(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Yi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Zi(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Zi(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Xi(e){let t={};for(let n=0;n<e.length;n++){let r=Yi(e[n]);for(let e in r)t[e]=r[e]}return t}function Zi(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Qi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function $i(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:X.workingColorSpace}var ea={clone:Yi,merge:Xi},ta=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,na=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ra=class extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ta,this.fragmentShader=na,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=Qi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Mt().setHex(r.value);break;case`v2`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new G().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Ke().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new K().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Ze().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ia=class extends ra{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},aa=class extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oa=class extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function sa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ca(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var la=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ua=class extends la{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:T,endingEnd:T}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case E:i=e,o=2*t-n;break;case D:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case E:a=e,s=2*n-t;break;case D:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},da=class extends la{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},fa=class extends la{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},pa=class extends la{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ga(n,t,g,y,r);i[p]=ma(x,o,_,b,m)}return i}};function ma(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ha(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ga(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=ma(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ha(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var _a=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=sa(t,this.TimeBufferType),this.values=sa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:sa(e.times,Array),values:sa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),ca(e.settings)&&(n.settings={inTangents:sa(e.settings.inTangents,Array),outTangents:sa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new pa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case x:t=this.InterpolantFactoryMethodDiscrete;break;case S:t=this.InterpolantFactoryMethodLinear;break;case C:t=this.InterpolantFactoryMethodSmooth;break;case w:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return x;case this.InterpolantFactoryMethodLinear:return S;case this.InterpolantFactoryMethodSmooth:return C;case this.InterpolantFactoryMethodBezier:return w}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;ca(this.settings)&&(va(this.settings.inTangents,e),va(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ca(this.settings)&&(ya(this.settings.inTangents,e),ya(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&F(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===C,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ca(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function va(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function ya(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}_a.prototype.ValueTypeName=``,_a.prototype.TimeBufferType=Float32Array,_a.prototype.ValueBufferType=Float32Array,_a.prototype.DefaultInterpolation=S;var ba=class extends _a{constructor(e,t,n){super(e,t,n)}};ba.prototype.ValueTypeName=`bool`,ba.prototype.ValueBufferType=Array,ba.prototype.DefaultInterpolation=x,ba.prototype.InterpolantFactoryMethodLinear=void 0,ba.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends _a{constructor(e,t,n,r){super(e,t,n,r)}};xa.prototype.ValueTypeName=`color`;var Sa=class extends _a{constructor(e,t,n,r){super(e,t,n,r)}};Sa.prototype.ValueTypeName=`number`;var Ca=class extends la{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)W.slerpFlat(i,0,a,c-o,a,c,s);return i}},wa=class extends _a{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ca(this.times,this.values,this.getValueSize(),e)}};wa.prototype.ValueTypeName=`quaternion`,wa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends _a{constructor(e,t,n){super(e,t,n)}};Ta.prototype.ValueTypeName=`string`,Ta.prototype.ValueBufferType=Array,Ta.prototype.DefaultInterpolation=x,Ta.prototype.InterpolantFactoryMethodLinear=void 0,Ta.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends _a{constructor(e,t,n,r){super(e,t,n,r)}};Ea.prototype.ValueTypeName=`vector`;var Da={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Oa(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Oa(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Oa(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var ka=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Aa=class{constructor(e){this.manager=e===void 0?ka:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},this.priority=`auto`,this.cache=`default`,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Aa.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var ja=new WeakMap,Ma=class extends Aa{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Da.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=ja.get(a);e===void 0&&(e=[],ja.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=I(`img`);function s(){l(),t&&t(this);let n=ja.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}ja.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Da.remove(`image:${e}`);let n=ja.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}ja.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Da.add(`image:${e}`,o),i.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}},Na=class extends Aa{constructor(e){super(e)}load(e,t,n,r){let i=new Ge,a=new Ma(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Pa=new G,Fa=new W,Ia=new G,La=class extends wt{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=P,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pa,Fa,Ia),Ia.x===1&&Ia.y===1&&Ia.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,Fa,Ia.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Pa,Fa,Ia),Ia.x===1&&Ia.y===1&&Ia.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,Fa,Ia.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ra=new G,za=new U,Ba=new U,Va=class extends La{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=V*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(le*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return V*2*Math.atan(Math.tan(le*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ra.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ra.x,Ra.y).multiplyScalar(-e/Ra.z),Ra.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ra.x,Ra.y).multiplyScalar(-e/Ra.z)}getViewSize(e,t){return this.getViewBounds(e,za,Ba),t.subVectors(Ba,za)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(le*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ha=class extends La{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ua=-90,Wa=1,Ga=class extends wt{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Va(Ua,Wa,e,t);r.layers=this.layers,this.add(r);let i=new Va(Ua,Wa,e,t);i.layers=this.layers,this.add(i);let a=new Va(Ua,Wa,e,t);a.layers=this.layers,this.add(a);let o=new Va(Ua,Wa,e,t);o.layers=this.layers,this.add(o);let s=new Va(Ua,Wa,e,t);s.layers=this.layers,this.add(s);let c=new Va(Ua,Wa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ka=class extends Va{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},qa=`\\[\\]\\.:\\/`,Ja=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ya=`[^\\[\\]\\.:\\/]`,Xa=`[^`+qa.replace(`\\.`,``)+`]`,Za=`((?:WC+[\\/:])*)`.replace(`WC`,Ya),Qa=`(WCOD+)?`.replace(`WCOD`,Xa),$a=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ya),eo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ya),to=RegExp(`^`+Za+Qa+$a+eo+`$`),no=[`material`,`materials`,`bones`,`map`],ro=class{constructor(e,t,n){let r=n||io.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},io=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ja,``)}static parseTrackName(e){let t=to.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);no.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};io.Composite=ro,io.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},io.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},io.prototype.GetterByBindingType=[io.prototype._getValue_direct,io.prototype._getValue_array,io.prototype._getValue_arrayElement,io.prototype._getValue_toArray],io.prototype.SetterByBindingTypeAndVersioning=[[io.prototype._setValue_direct,io.prototype._setValue_direct_setNeedsUpdate,io.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[io.prototype._setValue_array,io.prototype._setValue_array_setNeedsUpdate,io.prototype._setValue_array_setMatrixWorldNeedsUpdate],[io.prototype._setValue_arrayElement,io.prototype._setValue_arrayElement_setNeedsUpdate,io.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[io.prototype._setValue_fromArray,io.prototype._setValue_fromArray_setNeedsUpdate,io.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ao=new Ze,oo=class{constructor(e,t,n=0,r=1/0){this.ray=new Bn(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ct,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):z(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return ao.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ao),this}intersectObject(e,t=!0,n=[]){return co(e,this,n,t),n.sort(so),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)co(e[r],this,n,t);return n.sort(so),n}};function so(e,t){return e.distance-t.distance}function co(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)co(r[e],t,n,!0)}}(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function lo(e,t,n,r){let i=uo(r);switch(n){case 1021:return e*t;case 1028:return e*t/i.components*i.byteLength;case _:return e*t/i.components*i.byteLength;case v:return e*t*2/i.components*i.byteLength;case y:return e*t*2/i.components*i.byteLength;case 1022:return e*t*3/i.components*i.byteLength;case m:return e*t*4/i.components*i.byteLength;case b:return e*t*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(e,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(e,8)*Math.max(t,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(e/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(e/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function uo(e){switch(e){case o:case 1010:return{byteLength:1,components:1};case s:case 1011:case u:return{byteLength:2,components:1};case d:case f:return{byteLength:2,components:4};case c:case 1013:case l:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function fo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function po(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Z={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Q={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new K},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new K}},envmap:{envMap:{value:null},envMapRotation:{value:new K},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new K}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new K}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new K},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new K},normalScale:{value:new U(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new K},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new K}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new K}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new K}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0},uvTransform:{value:new K}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new U(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new K},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0}}},mo={basic:{uniforms:Xi([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:Xi([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:Xi([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:Xi([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:Xi([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:Xi([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:Xi([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:Xi([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:Xi([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:Xi([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:Xi([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new K},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new K}},vertexShader:Z.backgroundCube_vert,fragmentShader:Z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distance:{uniforms:Xi([Q.common,Q.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distance_vert,fragmentShader:Z.distance_frag},shadow:{uniforms:Xi([Q.lights,Q.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}};mo.physical={uniforms:Xi([mo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new K},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new K},clearcoatNormalScale:{value:new U(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new K},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new K},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new K},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new K},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new K},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new K},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new K},transmissionSamplerSize:{value:new U},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new K},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new K},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new K},anisotropyVector:{value:new U},anisotropyMap:{value:null},anisotropyMapTransform:{value:new K}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};var ho={r:0,b:0,g:0},go=new Ze,_o=new K;_o.set(-1,0,0,0,1,0,0,0,1);function vo(e,t,n,r,i,a){let o=new Mt(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new $n(new Er(1,1,1),new ra({name:`BackgroundCubeMaterial`,uniforms:Yi(mo.backgroundCube.uniforms),vertexShader:mo.backgroundCube.vertexShader,fragmentShader:mo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(go.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(_o),l.material.toneMapped=X.getTransfer(i.colorSpace)!==j,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new $n(new Ji(2,2),new ra({name:`BackgroundMaterial`,uniforms:Yi(mo.background.uniforms),vertexShader:mo.background.vertexShader,fragmentShader:mo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=X.getTransfer(i.colorSpace)!==j,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ho,$i(e)),n.buffers.color.setClear(ho.r,ho.g,ho.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function yo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function bo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function xo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&R(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function So(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Nn,s=new K,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Co=class extends Je{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Sr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Er(5,5,5),a=new ra({name:`CubemapFromEquirect`,uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;let o=new $n(r,a),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=i),new Ga(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},wo=256,To=3,Eo=20,Do=256,Oo=16,ko=3,Ao=new G,jo=new Mt,Mo=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ga(1,10,null),this._boxMesh=new $n(new Er(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ao}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(jo));let h=new Ga(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ro(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(wo,De(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?wo:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=No(e,!1,!1),n=Math.log2(e)-To;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=No(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=zo()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ro()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Fo(),this._integrationMaterial=Io());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Oo);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-ko)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Do*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Lo());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function No(e,t,n){return new Co(e,{minFilter:a,generateMipmaps:t,type:u,colorSpace:k,depthBuffer:n})}function Po(e,t,n){return new ra({name:e,uniforms:t,vertexShader:Z.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Fo(){return Po(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Do}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Io(){return Po(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Oo}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Lo(){return Po(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Eo}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ro(){return Po(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function zo(){return Po(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Bo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Co(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Mo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Mo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Vo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&B(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ho(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?gn:hn)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Uo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Wo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Go(e,t,n){let r=new WeakMap,i=new Ke;function a(a,o,s){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u===void 0?0:u.length,f=r.get(o);if(f===void 0||f.count!==d){f!==void 0&&f.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],u=o.morphAttributes.color||[],p=0;e===!0&&(p=1),n===!0&&(p=2),a===!0&&(p=3);let m=o.attributes.position.count*p,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*d),_=new Ye(g,m,h,d);_.type=l,_.needsUpdate=!0;let v=p*4;for(let t=0;t<d;t++){let r=s[t],o=c[t],l=u[t],d=m*h*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(l,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=l.itemSize===4?i.w:1)}}f={count:d,texture:_,size:new U(m,h)},r.set(o,f);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,f.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,f.size)}return{update:a}}function Ko(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var qo={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Jo(e,t,n,r,i,a){let o=new Je(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,d=new kn;d.setAttribute(`position`,new _n([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute(`uv`,new _n([0,2,0,0,2,0],2));let f=new ia({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new $n(d,f),h=new Ha(-1,1,1,-1,0,1),_=null,v=null,y=!1,b,x=null,S=[],C=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<S.length;n++){let r=S[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){S=e,C=S.length>0&&S[0].isRenderPass===!0;let t=o.width,n=o.height;S.length>0&&s===null&&(s=new Je(t,n,{type:u,depthBuffer:!1,stencilBuffer:!1}),c=new Je(t,n,{type:u,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&S.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Cr(t,n),a===!0&&(l.format=g,l.type=p)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<S.length;e++){let i=S[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(y||e.toneMapping===0&&S.length===0)return!1;if(x=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return C===!1&&e.setRenderTarget(o),b=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return C},this.end=function(e,t){e.toneMapping=b,y=!0;let n=o,r=s;for(let i=0;i<S.length;i++){let a=S[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(_!==e.outputColorSpace||v!==e.toneMapping){_=e.outputColorSpace,v=e.toneMapping,f.defines={},X.getTransfer(_)===`srgb`&&(f.defines.SRGB_TRANSFER=``);let t=qo[v];t&&(f.defines[t]=``),f.needsUpdate=!0}f.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(x),e.render(m,h),x=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),d.dispose(),f.dispose()}}var Yo=new Ge,Xo=new Cr(1,1),Zo=new wr(1),Qo=new Ye,$o=new Xe,es=new Sr,ts=[],ns=[],rs=new Float32Array(16),is=new Float32Array(9),as=new Float32Array(4);function os(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ts[i];if(a===void 0&&(a=new Float32Array(i),ts[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ss(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function cs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function ls(e,t){let n=ns[t];n===void 0&&(n=new Int32Array(t),ns[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function us(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ds(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ss(n,t))return;e.uniform2fv(this.addr,t),cs(n,t)}}function fs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ss(n,t))return;e.uniform3fv(this.addr,t),cs(n,t)}}function ps(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ss(n,t))return;e.uniform4fv(this.addr,t),cs(n,t)}}function ms(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ss(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),cs(n,t)}else{if(ss(n,r))return;as.set(r),e.uniformMatrix2fv(this.addr,!1,as),cs(n,r)}}function hs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ss(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),cs(n,t)}else{if(ss(n,r))return;is.set(r),e.uniformMatrix3fv(this.addr,!1,is),cs(n,r)}}function gs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ss(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),cs(n,t)}else{if(ss(n,r))return;rs.set(r),e.uniformMatrix4fv(this.addr,!1,rs),cs(n,r)}}function _s(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function vs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ss(n,t))return;e.uniform2iv(this.addr,t),cs(n,t)}}function ys(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ss(n,t))return;e.uniform3iv(this.addr,t),cs(n,t)}}function bs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ss(n,t))return;e.uniform4iv(this.addr,t),cs(n,t)}}function xs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ss(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ss(n,t))return;e.uniform2uiv(this.addr,t),cs(n,t)}}function Cs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ss(n,t))return;e.uniform3uiv(this.addr,t),cs(n,t)}}function ws(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ss(n,t))return;e.uniform4uiv(this.addr,t),cs(n,t)}}function Ts(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Es(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Ts(Xo):Yo,n.setTexture2D(t||a,i)}function Ds(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||$o,i)}function Os(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Ts(Zo):es,n.setTextureCube(t||a,i)}function ks(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Qo,i)}function As(e){switch(e){case 5126:return us;case 35664:return ds;case 35665:return fs;case 35666:return ps;case 35674:return ms;case 35675:return hs;case 35676:return gs;case 5124:case 35670:return _s;case 35667:case 35671:return vs;case 35668:case 35672:return ys;case 35669:case 35673:return bs;case 5125:return xs;case 36294:return Ss;case 36295:return Cs;case 36296:return ws;case 35678:case 36198:case 36298:case 36306:case 35682:return Es;case 35679:case 36299:case 36307:return Ds;case 35680:case 36300:case 36308:case 36293:return Os;case 36289:case 36303:case 36311:case 36292:return ks}}function js(e,t){e.uniform1fv(this.addr,t)}function Ms(e,t){let n=os(t,this.size,2);e.uniform2fv(this.addr,n)}function Ns(e,t){let n=os(t,this.size,3);e.uniform3fv(this.addr,n)}function Ps(e,t){let n=os(t,this.size,4);e.uniform4fv(this.addr,n)}function Fs(e,t){let n=os(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Is(e,t){let n=os(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ls(e,t){let n=os(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Rs(e,t){e.uniform1iv(this.addr,t)}function zs(e,t){e.uniform2iv(this.addr,t)}function Bs(e,t){e.uniform3iv(this.addr,t)}function Vs(e,t){e.uniform4iv(this.addr,t)}function Hs(e,t){e.uniform1uiv(this.addr,t)}function Us(e,t){e.uniform2uiv(this.addr,t)}function Ws(e,t){e.uniform3uiv(this.addr,t)}function Gs(e,t){e.uniform4uiv(this.addr,t)}function Ks(e,t,n){let r=this.cache,i=t.length,a=ls(n,i);ss(r,a)||(e.uniform1iv(this.addr,a),cs(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ts(Xo):Yo;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function qs(e,t,n){let r=this.cache,i=t.length,a=ls(n,i);ss(r,a)||(e.uniform1iv(this.addr,a),cs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||$o,a[e])}function Js(e,t,n){let r=this.cache,i=t.length,a=ls(n,i);ss(r,a)||(e.uniform1iv(this.addr,a),cs(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Ts(Zo):es;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Ys(e,t,n){let r=this.cache,i=t.length,a=ls(n,i);ss(r,a)||(e.uniform1iv(this.addr,a),cs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Qo,a[e])}function Xs(e){switch(e){case 5126:return js;case 35664:return Ms;case 35665:return Ns;case 35666:return Ps;case 35674:return Fs;case 35675:return Is;case 35676:return Ls;case 5124:case 35670:return Rs;case 35667:case 35671:return zs;case 35668:case 35672:return Bs;case 35669:case 35673:return Vs;case 5125:return Hs;case 36294:return Us;case 36295:return Ws;case 36296:return Gs;case 35678:case 36198:case 36298:case 36306:case 35682:return Ks;case 35679:case 36299:case 36307:return qs;case 35680:case 36300:case 36308:case 36293:return Js;case 36289:case 36303:case 36311:case 36292:return Ys}}var Zs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=As(t.type)}},Qs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xs(t.type)}},$s=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},ec=/(\w+)(\])?(\[|\.)?/g;function tc(e,t){e.seq.push(t),e.map[t.id]=t}function nc(e,t,n){let r=e.name,i=r.length;for(ec.lastIndex=0;;){let a=ec.exec(r),o=ec.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){tc(n,l===void 0?new Zs(s,e,t):new Qs(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new $s(s),tc(n,e)),n=e}}}var rc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);nc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function ic(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var ac=37297,oc=0;function sc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var cc=new K;function lc(e){X._getMatrix(cc,X.workingColorSpace,e);let t=`mat3( ${cc.elements.map(e=>e.toFixed(4))} )`;switch(X.getTransfer(e)){case A:return[t,`LinearTransferOETF`];case j:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function uc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+sc(e.getShaderSource(t),r)}return i}function dc(e,t){let n=lc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var fc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function pc(e,t){let n=fc[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var mc=new G;function hc(){return X.getLuminanceCoefficients(mc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${mc.x.toFixed(4)}, ${mc.y.toFixed(4)}, ${mc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function gc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(yc).join(`
`)}function _c(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function vc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function yc(e){return e!==``}function bc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function xc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Sc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(e){return e.replace(Sc,wc)}function wc(e,t){let n=Z[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Cc(n)}var Tc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ec(e){return e.replace(Tc,Dc)}function Dc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Oc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var kc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Ac(e){return kc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var jc={302:`ENVMAP_MODE_REFRACTION`};function Mc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:jc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Nc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Pc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Nc[e.combine]||`ENVMAP_BLENDING_NONE`}function Fc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Ac(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Mc(n),d=Pc(n),f=gc(n),p=_c(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(yc).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(yc).join(`
`),g.length>0&&(g+=`
`)):(h=[Oc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(yc).join(`
`),g=[Oc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Z.tonemapping_pars_fragment,n.toneMapping===0?``:pc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Z.colorspace_pars_fragment,dc(`linearToOutputTexel`,n.outputColorSpace),hc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(yc).join(`
`)),o=Cc(o),o=bc(o,n),o=xc(o,n),s=Cc(s),s=bc(s,n),s=xc(s,n),o=Ec(o),s=Ec(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=ic(i,i.VERTEX_SHADER,v),x=ic(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=uc(i,b,`vertex`),n=uc(i,x,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new rc(i,m),w=vc(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,ac)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=oc++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Ic=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rc(e),t.set(e,n)),n}},Rc=class{constructor(e){this.id=Ic++,this.code=e,this.usedTimes=0}};function zc(e){return e===1030||e===37490||e===36285}function Bc(e,t,n,r,i,a){let o=new ct,s=new Lc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=mo[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,P=!!i.map,ee=!!i.matcap,F=!!b,I=F&&b.isPMREMTexture===!0,te=!!i.aoMap,L=!!i.lightMap,ne=!!i.bumpMap&&i.wireframe===!1,re=!!i.normalMap,z=!!i.displacementMap,B=!!i.emissiveMap,ie=!!i.metalnessMap,ae=!!i.roughnessMap,oe=i.anisotropy>0,se=i.clearcoat>0,ce=i.diffuseRoughness>0,le=i.dispersion>0,V=i.retroreflectivity>0,ue=i.iridescence>0,H=i.sheen>0,de=i.transmission>0,fe=oe&&!!i.anisotropyMap,pe=se&&!!i.clearcoatMap,me=se&&!!i.clearcoatNormalMap,he=se&&!!i.clearcoatRoughnessMap,ge=ce&&!!i.diffuseRoughnessMap,_e=ue&&!!i.iridescenceMap,ve=ue&&!!i.iridescenceThicknessMap,ye=H&&!!i.sheenColorMap,be=H&&!!i.sheenRoughnessMap,xe=!!i.specularMap,Se=!!i.specularColorMap,Ce=!!i.specularIntensityMap,we=de&&!!i.transmissionMap,Te=de&&!!i.thicknessMap,Ee=!!i.gradientMap,De=!!i.alphaMap,Oe=i.alphaTest>0,ke=!!i.alphaHash,Ae=!!i.extensions,je=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(je=e.toneMapping);let Me=I?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,U={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:X.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:ee,envMap:F,envMapMode:F&&b.mapping,envMapPMREM:I,envMapMaxLod:I?Me.length-1:null,envMapSize:I?Me[0].width:null,aoMap:te,lightMap:L,bumpMap:ne,normalMap:re,displacementMap:z,emissiveMap:B,normalMapObjectSpace:re&&i.normalMapType===1,normalMapTangentSpace:re&&i.normalMapType===0,packedNormalMap:re&&i.normalMapType===0&&zc(i.normalMap.format),metalnessMap:ie,roughnessMap:ae,anisotropy:oe,anisotropyMap:fe,clearcoat:se,clearcoatMap:pe,clearcoatNormalMap:me,clearcoatRoughnessMap:he,diffuseRoughness:ce,diffuseRoughnessMap:ge,dispersion:le,retroreflection:V,iridescence:ue,iridescenceMap:_e,iridescenceThicknessMap:ve,sheen:H,sheenColorMap:ye,sheenRoughnessMap:be,specularMap:xe,specularColorMap:Se,specularIntensityMap:Ce,transmission:de,transmissionMap:we,thicknessMap:Te,gradientMap:Ee,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:De,alphaTest:Oe,alphaHash:ke,combine:i.combine,mapUv:P&&p(i.map.channel),aoMapUv:te&&p(i.aoMap.channel),lightMapUv:L&&p(i.lightMap.channel),bumpMapUv:ne&&p(i.bumpMap.channel),normalMapUv:re&&p(i.normalMap.channel),displacementMapUv:z&&p(i.displacementMap.channel),emissiveMapUv:B&&p(i.emissiveMap.channel),metalnessMapUv:ie&&p(i.metalnessMap.channel),roughnessMapUv:ae&&p(i.roughnessMap.channel),anisotropyMapUv:fe&&p(i.anisotropyMap.channel),clearcoatMapUv:pe&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:me&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ge&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:_e&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:be&&p(i.sheenRoughnessMap.channel),specularMapUv:xe&&p(i.specularMap.channel),specularColorMapUv:Se&&p(i.specularColorMap.channel),specularIntensityMapUv:Ce&&p(i.specularIntensityMap.channel),transmissionMapUv:we&&p(i.transmissionMap.channel),thicknessMapUv:Te&&p(i.thicknessMap.channel),alphaMapUv:De&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(re||oe),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(P||De),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&re===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:je,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&X.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:B&&i.emissiveMap.isVideoTexture===!0&&X.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ae&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ae&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return U.vertexUv1s=c.has(1),U.vertexUv2s=c.has(2),U.vertexUv3s=c.has(3),c.clear(),U}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=mo[t];n=ea.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Fc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Vc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Hc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Uc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Wc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Hc),r.length>1&&r.sort(t||Uc),i.length>1&&i.sort(t||Uc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Gc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Wc,e.set(t,[i])):n>=r.length?(i=new Wc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Kc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new G,color:new Mt};break;case`SpotLight`:n={position:new G,direction:new G,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new G,color:new Mt,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new G,skyColor:new Mt,groundColor:new Mt};break;case`RectAreaLight`:n={color:new Mt,position:new G,halfWidth:new G,halfHeight:new G}}return e[t.id]=n,n}}}function qc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Jc=0;function Yc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Xc(e){let t=new Kc,n=qc(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new G);let i=new G,a=new Ze,o=new Ze;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Yc);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Jc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Zc(e){let t=new Xc(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Qc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Zc(e),t.set(n,[a])):r>=i.length?(a=new Zc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var $c=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,el=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tl=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],nl=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],rl=new Ze,il=new G,al=new G;function ol(e,t,n){let a=new or,o=new U,s=new U,d=new Ke,f=new aa,p=new oa,m={},g=n.maxTextureSize,_={0:1,1:0,2:2},y=new ra({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new U},radius:{value:4}},vertexShader:$c,fragmentShader:el}),b=y.clone();b.defines.HORIZONTAL_PASS=1;let x=new kn;x.setAttribute(`position`,new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new $n(x,y),C=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let w=this.type;this.render=function(t,n,f){if(C.enabled===!1||C.autoUpdate===!1&&C.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let p=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),y=e.state;y.setBlending(0),y.buffers.depth.getReversed()===!0?y.buffers.color.setClear(0,0,0,0):y.buffers.color.setClear(1,1,1,1),y.buffers.depth.setTest(!0),y.setScissorTest(!1);let b=w!==this.type;b&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let p=0,m=t.length;p<m;p++){let m=t[p],_=m.shadow;if(_===void 0){R(`WebGLShadowMap:`,m,`has no shadow.`);continue}if(_.autoUpdate===!1&&_.needsUpdate===!1)continue;o.copy(_.mapSize);let x=_.getFrameExtents();o.multiply(x),s.copy(_.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(s.x=Math.floor(g/x.x),o.x=s.x*x.x,_.mapSize.x=s.x),o.y>g&&(s.y=Math.floor(g/x.y),o.y=s.y*x.y,_.mapSize.y=s.y));let S=e.state.buffers.depth.getReversed();if(_.camera._reversedDepth=S,_.map===null||b===!0){if(_.map!==null&&(_.map.depthTexture!==null&&(_.map.depthTexture.dispose(),_.map.depthTexture=null),_.map.dispose()),this.type===3){if(m.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}_.map=new Je(o.x,o.y,{format:v,type:u,minFilter:i,magFilter:i,generateMipmaps:!1}),_.map.texture.name=m.name+`.shadowMap`,_.map.depthTexture=new Cr(o.x,o.y,l),_.map.depthTexture.name=m.name+`.shadowMapDepth`,_.map.depthTexture.format=h,_.map.depthTexture.compareFunction=null,_.map.depthTexture.minFilter=r,_.map.depthTexture.magFilter=r}else m.isPointLight?(_.map=new Co(o.x),_.map.depthTexture=new wr(o.x,c)):(_.map=new Je(o.x,o.y),_.map.depthTexture=new Cr(o.x,o.y,c)),_.map.depthTexture.name=m.name+`.shadowMap`,_.map.depthTexture.format=h,this.type===1?(_.map.depthTexture.compareFunction=S?518:515,_.map.depthTexture.minFilter=i,_.map.depthTexture.magFilter=i):(_.map.depthTexture.compareFunction=null,_.map.depthTexture.minFilter=r,_.map.depthTexture.magFilter=r);_.camera.updateProjectionMatrix()}_.map.isWebGLCubeRenderTarget!==!0&&(_.map.width!==o.x||_.map.height!==o.y)&&_.map.setSize(o.x,o.y);let C=_.map.isWebGLCubeRenderTarget?6:_.getViewportCount();m.isPointLight!==!0&&_.updateMatrices(m,f);let w=_.camera.layers.mask&4294967294?_.camera.layers:f.layers;for(let t=0;t<C;t++){let r=_.getCamera(t);if(m.isPointLight){let e=_.camera,n=_.matrix,r=m.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),il.setFromMatrixPosition(m.matrixWorld),e.position.copy(il),al.copy(e.position),al.add(tl[t]),e.up.copy(nl[t]),e.lookAt(al),e.updateMatrixWorld(),n.makeTranslation(-il.x,-il.y,-il.z),rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),_._frustum.setFromProjectionMatrix(rl,e.coordinateSystem,e.reversedDepth)}if(_.map.isWebGLCubeRenderTarget)e.setRenderTarget(_.map,t),e.clear();else{t===0&&(e.setRenderTarget(_.map),e.clear());let n=_.getViewport(t);d.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),y.viewport(d)}a=_.getFrustum(t),D(n,f,r,m,w,this.type)}_.isPointLightShadow!==!0&&this.type===3&&T(_,f),_.needsUpdate=!1}w=this.type,C.needsUpdate=!1,e.setRenderTarget(p,m,_)};function T(n,r){let i=t.update(S);y.defines.VSM_SAMPLES!==n.blurSamples&&(y.defines.VSM_SAMPLES=n.blurSamples,b.defines.VSM_SAMPLES=n.blurSamples,y.needsUpdate=!0,b.needsUpdate=!0),n.mapPass===null?n.mapPass=new Je(o.x,o.y,{format:v,type:u}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),y.uniforms.shadow_pass.value=n.map.depthTexture,y.uniforms.resolution.value.set(n.map.width,n.map.height),y.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,y,S,null),b.uniforms.shadow_pass.value=n.mapPass.texture,b.uniforms.resolution.value.set(n.map.width,n.map.height),b.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,b,S,null)}function E(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?p:f,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=m[e];r===void 0&&(r={},m[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,O)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?_[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function D(n,r,i,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(a))){n.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse,n.matrixWorld);let a=t.update(n),s=n.material;if(Array.isArray(s)){let t=a.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=E(n,d,o,c);n.onBeforeShadow(e,n,r,i,a,t,u),e.renderBufferDirect(i,null,a,t,n,u),n.onAfterShadow(e,n,r,i,a,t,u)}}}else if(s.visible){let t=E(n,s,o,c);n.onBeforeShadow(e,n,r,i,a,t,null),e.renderBufferDirect(i,null,a,t,n,null),n.onAfterShadow(e,n,r,i,a,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)D(l[e],r,i,o,s,c)}function O(e){e.target.removeEventListener(`dispose`,O);for(let t in m){let n=m[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function sl(e,t){function n(){let t=!1,n=new Ke,r=null,i=new Ke(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ie(e.DEPTH_TEST):oe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ae[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ie(e.STENCIL_TEST):oe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Mt(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,ee=e.getParameter(e.VERSION);ee.indexOf(`WebGL`)===-1?ee.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(ee)[1]),N=P>=1);let F=null,I={},te=e.getParameter(e.SCISSOR_BOX),L=e.getParameter(e.VIEWPORT),ne=new Ke().fromArray(te),re=new Ke().fromArray(L);function R(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let B={};B[e.TEXTURE_2D]=R(e.TEXTURE_2D,e.TEXTURE_2D,1),B[e.TEXTURE_CUBE_MAP]=R(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[e.TEXTURE_2D_ARRAY]=R(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),B[e.TEXTURE_3D]=R(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ie(e.DEPTH_TEST),o.setFunc(3),fe(!1),pe(1),ie(e.CULL_FACE),H(0);function ie(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function oe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function se(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ce(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function le(t){return h!==t&&(e.useProgram(t),h=t,!0)}let V={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};V[103]=e.MIN,V[104]=e.MAX;let ue={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function H(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(oe(e.BLEND),g=!1);else if(g===!1&&(ie(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(V[n],V[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ue[r],ue[i],ue[o],ue[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function de(t,n){t.side===2?oe(e.CULL_FACE):ie(e.CULL_FACE);let r=t.side===1;n&&(r=!r),fe(r),t.blending===1&&t.transparent===!1?H(0):H(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),he(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ie(e.SAMPLE_ALPHA_TO_COVERAGE):oe(e.SAMPLE_ALPHA_TO_COVERAGE)}function fe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function pe(t){t===0?oe(e.CULL_FACE):(ie(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function me(t){t!==k&&(N&&e.lineWidth(t),k=t)}function he(t,n,r){t?(ie(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):oe(e.POLYGON_OFFSET_FILL)}function ge(t){t?ie(e.SCISSOR_TEST):oe(e.SCISSOR_TEST)}function _e(t){t===void 0&&(t=e.TEXTURE0+M-1),F!==t&&(e.activeTexture(t),F=t)}function ve(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+M-1:F);let i=I[r];i===void 0&&(i={type:void 0,texture:void 0},I[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||B[t]),i.type=t,i.texture=n)}function ye(){let t=I[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function be(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function xe(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Se(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ce(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function we(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ee(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function De(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(t){return d[t]===void 0?e.getParameter(t):d[t]}function je(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Me(t){ne.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ne.copy(t))}function U(t){re.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),re.copy(t))}function W(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function G(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Ne(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},F=null,I={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Mt(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ne.set(0,0,e.canvas.width,e.canvas.height),re.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ie,disable:oe,bindFramebuffer:se,drawBuffers:ce,useProgram:le,setBlending:H,setMaterial:de,setFlipSided:fe,setCullFace:pe,setLineWidth:me,setPolygonOffset:he,setScissorTest:ge,activeTexture:_e,bindTexture:ve,unbindTexture:ye,compressedTexImage2D:be,compressedTexImage3D:xe,texImage2D:Oe,texImage3D:ke,pixelStorei:je,getParameter:Ae,updateUBOMapping:W,uniformBlockBinding:G,texStorage2D:Ee,texStorage3D:De,texSubImage2D:Se,texSubImage3D:Ce,compressedTexSubImage2D:we,compressedTexSubImage3D:Te,scissor:Me,viewport:U,reset:Ne}}function cl(o,s,c,l,u,d,f){let p=s.has(`WEBGL_multisampled_render_to_texture`)?s.get(`WEBGL_multisampled_render_to_texture`):null,m=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),h=new U,_=new WeakMap,v=new Set,y,b=new WeakMap,x=new Set,S=new FinalizationRegistry(e=>x.delete(e)),C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):I(`canvas`)}function T(e,t,n){let r=1,i=Ne(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);y===void 0&&(y=w(n,a));let o=t?w(n,a):y;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(e){o.generateMipmap(e)}function O(e){return e.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?o.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function k(e,t,n,r,i,a=!1){if(e!==null){if(o[e]!==void 0)return o[e];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let c;r&&(c=s.get(`EXT_texture_norm16`),c||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=t;if(t===o.RED&&(n===o.FLOAT&&(l=o.R32F),n===o.HALF_FLOAT&&(l=o.R16F),n===o.UNSIGNED_BYTE&&(l=o.R8),n===o.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),n===o.SHORT&&c&&(l=c.R16_SNORM_EXT)),t===o.RED_INTEGER&&(n===o.UNSIGNED_BYTE&&(l=o.R8UI),n===o.UNSIGNED_SHORT&&(l=o.R16UI),n===o.UNSIGNED_INT&&(l=o.R32UI),n===o.BYTE&&(l=o.R8I),n===o.SHORT&&(l=o.R16I),n===o.INT&&(l=o.R32I)),t===o.RG&&(n===o.FLOAT&&(l=o.RG32F),n===o.HALF_FLOAT&&(l=o.RG16F),n===o.UNSIGNED_BYTE&&(l=o.RG8),n===o.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),n===o.SHORT&&c&&(l=c.RG16_SNORM_EXT)),t===o.RG_INTEGER&&(n===o.UNSIGNED_BYTE&&(l=o.RG8UI),n===o.UNSIGNED_SHORT&&(l=o.RG16UI),n===o.UNSIGNED_INT&&(l=o.RG32UI),n===o.BYTE&&(l=o.RG8I),n===o.SHORT&&(l=o.RG16I),n===o.INT&&(l=o.RG32I)),t===o.RGB_INTEGER&&(n===o.UNSIGNED_BYTE&&(l=o.RGB8UI),n===o.UNSIGNED_SHORT&&(l=o.RGB16UI),n===o.UNSIGNED_INT&&(l=o.RGB32UI),n===o.BYTE&&(l=o.RGB8I),n===o.SHORT&&(l=o.RGB16I),n===o.INT&&(l=o.RGB32I)),t===o.RGBA_INTEGER&&(n===o.UNSIGNED_BYTE&&(l=o.RGBA8UI),n===o.UNSIGNED_SHORT&&(l=o.RGBA16UI),n===o.UNSIGNED_INT&&(l=o.RGBA32UI),n===o.BYTE&&(l=o.RGBA8I),n===o.SHORT&&(l=o.RGBA16I),n===o.INT&&(l=o.RGBA32I)),t===o.RGB&&(n===o.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),n===o.SHORT&&c&&(l=c.RGB16_SNORM_EXT),n===o.UNSIGNED_INT_5_9_9_9_REV&&(l=o.RGB9_E5),n===o.UNSIGNED_INT_10F_11F_11F_REV&&(l=o.R11F_G11F_B10F)),t===o.RGBA){let e=a?A:X.getTransfer(i);n===o.FLOAT&&(l=o.RGBA32F),n===o.HALF_FLOAT&&(l=o.RGBA16F),n===o.UNSIGNED_BYTE&&(l=e===`srgb`?o.SRGB8_ALPHA8:o.RGBA8),n===o.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),n===o.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),n===o.UNSIGNED_SHORT_4_4_4_4&&(l=o.RGBA4),n===o.UNSIGNED_SHORT_5_5_5_1&&(l=o.RGB5_A1)}return(l===o.R16F||l===o.R32F||l===o.RG16F||l===o.RG32F||l===o.RGBA16F||l===o.RGBA32F)&&s.get(`EXT_color_buffer_float`),l}function j(e,t){let n;return e?t===null||t===1014||t===1020?n=o.DEPTH24_STENCIL8:t===1015?n=o.DEPTH32F_STENCIL8:t===1012&&(n=o.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=o.DEPTH_COMPONENT24:t===1015?n=o.DEPTH_COMPONENT32F:t===1012&&(n=o.DEPTH_COMPONENT16),n}function M(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function N(e){let t=new WeakRef(e);l.get(e).__ref=t,x.add(t),S.register(e,t,t)}function P(e){let t=l.get(e).__ref;t!==void 0&&(x.delete(t),S.unregister(t))}function ee(e){te(e.target)}function F(e){L(e.target)}function te(e){e.removeEventListener(`dispose`,ee),P(e),re(e),e.isVideoTexture&&_.delete(e),e.isHTMLTexture&&v.delete(e)}function L(e){e.removeEventListener(`dispose`,F),P(e),ie(e)}function ne(){for(let e of x){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?L(t):te(t))}x.clear(),v.clear()}function re(e){let t=l.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=b.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&B(e),Object.keys(r).length===0&&b.delete(n)}l.remove(e)}function B(e){let t=l.get(e);o.deleteTexture(t.__webglTexture);let n=e.source,r=b.get(n);delete r[t.__cacheKey],f.memory.textures--}function ie(e){let t=l.get(e);t.__depthDisposeCallback&&t.__depthDisposeCallback();let n=e.depthTexture;if(n&&n.renderTarget===e&&te(n),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)o.deleteFramebuffer(t.__webglFramebuffer[e][n]);else o.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&o.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)o.deleteFramebuffer(t.__webglFramebuffer[e]);else o.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&o.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&o.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&o.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&o.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let r=e.textures;for(let e=0,t=r.length;e<t;e++){let t=l.get(r[e]);t.__webglTexture&&(o.deleteTexture(t.__webglTexture),f.memory.textures--),l.remove(r[e])}l.remove(e)}let ae=0;function oe(){ae=0}function se(){return ae}function ce(e){ae=e}function le(){let e=ae;return e>=u.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+u.maxTextures),ae+=1,e}function V(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ue(e,t){let n=l.get(e);if(e.isVideoTexture&&W(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{be(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);c.bindTexture(o.TEXTURE_2D,n.__webglTexture,o.TEXTURE0+t)}function H(e,t){let n=l.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?be(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),c.bindTexture(o.TEXTURE_2D_ARRAY,n.__webglTexture,o.TEXTURE0+t))}function de(e,t){let n=l.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?be(n,e,t):c.bindTexture(o.TEXTURE_3D,n.__webglTexture,o.TEXTURE0+t)}function fe(e,t){let n=l.get(e);e.version>0&&n.__version!==e.version?xe(n,e,t):c.bindTexture(o.TEXTURE_CUBE_MAP,n.__webglTexture,o.TEXTURE0+t)}let pe={[e]:o.REPEAT,[t]:o.CLAMP_TO_EDGE,[n]:o.MIRRORED_REPEAT},me={[r]:o.NEAREST,1004:o.NEAREST_MIPMAP_NEAREST,1005:o.NEAREST_MIPMAP_LINEAR,[i]:o.LINEAR,1007:o.LINEAR_MIPMAP_NEAREST,[a]:o.LINEAR_MIPMAP_LINEAR},he={512:o.NEVER,519:o.ALWAYS,513:o.LESS,515:o.LEQUAL,514:o.EQUAL,518:o.GEQUAL,516:o.GREATER,517:o.NOTEQUAL};function ge(e,t){if(t.type===1015&&s.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),o.texParameteri(e,o.TEXTURE_WRAP_S,pe[t.wrapS]),o.texParameteri(e,o.TEXTURE_WRAP_T,pe[t.wrapT]),(e===o.TEXTURE_3D||e===o.TEXTURE_2D_ARRAY)&&o.texParameteri(e,o.TEXTURE_WRAP_R,pe[t.wrapR]),o.texParameteri(e,o.TEXTURE_MAG_FILTER,me[t.magFilter]),o.texParameteri(e,o.TEXTURE_MIN_FILTER,me[t.minFilter]),t.compareFunction&&(o.texParameteri(e,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(e,o.TEXTURE_COMPARE_FUNC,he[t.compareFunction])),s.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&s.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||l.get(t).__currentAnisotropy){let n=s.get(`EXT_texture_filter_anisotropic`);o.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,u.getMaxAnisotropy())),l.get(t).__currentAnisotropy=t.anisotropy}}}function _e(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,ee),N(t));let r=t.source,i=b.get(r);i===void 0&&(i={},b.set(r,i));let a=V(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&B(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function ve(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ye(e,t,n,r){let i=e.updateRanges;if(i.length===0)c.texSubImage2D(o.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=ve(r.start,t.width,4),c=ve(n.start,t.width,4);r.start<=o+1&&s===c&&ve(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let s=c.getParameter(o.UNPACK_ROW_LENGTH),l=c.getParameter(o.UNPACK_SKIP_PIXELS),u=c.getParameter(o.UNPACK_SKIP_ROWS);c.pixelStorei(o.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],s=Math.floor(a.start/4),l=Math.ceil(a.count/4),u=s%t.width,d=Math.floor(s/t.width),f=l;c.pixelStorei(o.UNPACK_SKIP_PIXELS,u),c.pixelStorei(o.UNPACK_SKIP_ROWS,d),c.texSubImage2D(o.TEXTURE_2D,0,u,d,f,1,n,r,t.data)}e.clearUpdateRanges(),c.pixelStorei(o.UNPACK_ROW_LENGTH,s),c.pixelStorei(o.UNPACK_SKIP_PIXELS,l),c.pixelStorei(o.UNPACK_SKIP_ROWS,u)}}function be(e,t,n){let r=o.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=o.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=o.TEXTURE_3D);let i=_e(e,t),a=t.source;c.bindTexture(r,e.__webglTexture,o.TEXTURE0+n);let s=l.get(a);if(a.version!==s.__version||i===!0){if(c.activeTexture(o.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=X.getPrimaries(X.workingColorSpace),n=t.colorSpace===``?null:X.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?o.NONE:o.BROWSER_DEFAULT_WEBGL;c.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,t.flipY),c.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),c.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}c.pixelStorei(o.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,u.maxTextureSize);e=G(t,e);let l=d.convert(t.format,t.colorSpace),f=d.convert(t.type),p=k(t.internalFormat,l,f,t.normalized,t.colorSpace,t.isVideoTexture);ge(r,t);let m,h=t.mipmaps,_=t.isVideoTexture!==!0,y=s.__version===void 0||i===!0,b=a.dataReady,x=M(t,e);if(t.isDepthTexture)p=j(t.format===g,t.type),y&&(_?c.texStorage2D(o.TEXTURE_2D,1,p,e.width,e.height):c.texImage2D(o.TEXTURE_2D,0,p,e.width,e.height,0,l,f,null));else if(t.isDataTexture){if(h.length>0){_&&y&&c.texStorage2D(o.TEXTURE_2D,x,p,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)m=h[e],_?b&&c.texSubImage2D(o.TEXTURE_2D,e,0,0,m.width,m.height,l,f,m.data):c.texImage2D(o.TEXTURE_2D,e,p,m.width,m.height,0,l,f,m.data);t.generateMipmaps=!1}else _?(y&&c.texStorage2D(o.TEXTURE_2D,x,p,e.width,e.height),b&&ye(t,e,l,f)):c.texImage2D(o.TEXTURE_2D,0,p,e.width,e.height,0,l,f,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){_&&y&&c.texStorage3D(o.TEXTURE_2D_ARRAY,x,p,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(m=h[n],t.format!==1023){if(l!==null){if(_){if(b){if(t.layerUpdates.size>0){let e=lo(m.width,m.height,t.format,t.type);for(let r of t.layerUpdates){let t=m.data.subarray(r*e/m.data.BYTES_PER_ELEMENT,(r+1)*e/m.data.BYTES_PER_ELEMENT);c.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,n,0,0,r,m.width,m.height,1,l,t)}}else c.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,n,0,0,0,m.width,m.height,e.depth,l,m.data)}}else c.compressedTexImage3D(o.TEXTURE_2D_ARRAY,n,p,m.width,m.height,e.depth,0,m.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?b&&c.texSubImage3D(o.TEXTURE_2D_ARRAY,n,0,0,0,m.width,m.height,e.depth,l,f,m.data):c.texImage3D(o.TEXTURE_2D_ARRAY,n,p,m.width,m.height,e.depth,0,l,f,m.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{_&&y&&c.texStorage2D(o.TEXTURE_2D,x,p,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)m=h[e],t.format===1023?_?b&&c.texSubImage2D(o.TEXTURE_2D,e,0,0,m.width,m.height,l,f,m.data):c.texImage2D(o.TEXTURE_2D,e,p,m.width,m.height,0,l,f,m.data):l===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?b&&c.compressedTexSubImage2D(o.TEXTURE_2D,e,0,0,m.width,m.height,l,m.data):c.compressedTexImage2D(o.TEXTURE_2D,e,p,m.width,m.height,0,m.data)}}else if(t.isDataArrayTexture){if(_){if(y&&c.texStorage3D(o.TEXTURE_2D_ARRAY,x,p,e.width,e.height,e.depth),b){if(t.layerUpdates.size>0){let n=lo(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);c.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,l,f,t)}t.clearLayerUpdates()}else c.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,l,f,e.data)}}else c.texImage3D(o.TEXTURE_2D_ARRAY,0,p,e.width,e.height,e.depth,0,l,f,e.data)}else if(t.isData3DTexture)_?(y&&c.texStorage3D(o.TEXTURE_3D,x,p,e.width,e.height,e.depth),b&&c.texSubImage3D(o.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,l,f,e.data)):c.texImage3D(o.TEXTURE_3D,0,p,e.width,e.height,e.depth,0,l,f,e.data);else if(t.isFramebufferTexture){if(y){if(_)c.texStorage2D(o.TEXTURE_2D,x,p,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<x;e++)c.texImage2D(o.TEXTURE_2D,e,p,t,n,0,l,f,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in o){let n=o.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),v.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of v)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,e);else{let t=o.RGBA,n=o.RGBA,r=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,t,n,r,e)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(h.length>0){if(_&&y){let e=Ne(h[0]);c.texStorage2D(o.TEXTURE_2D,x,p,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)m=h[e],_?b&&c.texSubImage2D(o.TEXTURE_2D,e,0,0,l,f,m):c.texImage2D(o.TEXTURE_2D,e,p,l,f,m);t.generateMipmaps=!1}else if(_){if(y){let t=Ne(e);c.texStorage2D(o.TEXTURE_2D,x,p,t.width,t.height)}b&&c.texSubImage2D(o.TEXTURE_2D,0,0,0,l,f,e)}else c.texImage2D(o.TEXTURE_2D,0,p,l,f,e);E(t)&&t.mipmapsAutoUpdate===!0&&D(r),s.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function xe(e,t,n){if(t.image.length!==6)return;let r=_e(e,t),i=t.source;c.bindTexture(o.TEXTURE_CUBE_MAP,e.__webglTexture,o.TEXTURE0+n);let a=l.get(i);if(i.version!==a.__version||r===!0){c.activeTexture(o.TEXTURE0+n);let e=X.getPrimaries(X.workingColorSpace),s=t.colorSpace===``?null:X.getPrimaries(t.colorSpace),l=t.colorSpace===``||e===s?o.NONE:o.BROWSER_DEFAULT_WEBGL;c.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,t.flipY),c.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),c.pixelStorei(o.UNPACK_ALIGNMENT,t.unpackAlignment),c.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let f=t.isCompressedTexture||t.image[0].isCompressedTexture,p=t.image[0]&&t.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(t.image[e],!0,u.maxCubemapSize):m[e]=p?t.image[e].image:t.image[e],m[e]=G(t,m[e]);let h=m[0],_=d.convert(t.format,t.colorSpace),v=d.convert(t.type),y=k(t.internalFormat,_,v,t.normalized,t.colorSpace),b=t.isVideoTexture!==!0,x=a.__version===void 0||r===!0,S=i.dataReady,C=M(t,h);ge(o.TEXTURE_CUBE_MAP,t);let w;if(t.isDepthTexture){if(y=j(t.format===g,t.type),x){if(b)c.texStorage2D(o.TEXTURE_CUBE_MAP,1,y,h.width,h.height);else for(let e=0;e<6;e++)c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,y,h.width,h.height,0,_,v,null)}}else if(f){b&&x&&c.texStorage2D(o.TEXTURE_CUBE_MAP,C,y,h.width,h.height);for(let e=0;e<6;e++){w=m[e].mipmaps;for(let n=0;n<w.length;n++){let r=w[n];t.format===1023?b?S&&c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,_,v,r.data):c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,y,r.width,r.height,0,_,v,r.data):_===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):b?S&&c.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,_,r.data):c.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,y,r.width,r.height,0,r.data)}}}else{if(w=t.mipmaps,b&&x){w.length>0&&C++;let e=Ne(m[0]);c.texStorage2D(o.TEXTURE_CUBE_MAP,C,y,e.width,e.height)}for(let e=0;e<6;e++)if(p){b?S&&c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,m[e].width,m[e].height,_,v,m[e].data):c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,y,m[e].width,m[e].height,0,_,v,m[e].data);for(let t=0;t<w.length;t++){let n=w[t].image[e].image;b?S&&c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,_,v,n.data):c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,y,n.width,n.height,0,_,v,n.data)}}else{b?S&&c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,_,v,m[e]):c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,y,_,v,m[e]);for(let t=0;t<w.length;t++){let n=w[t];b?S&&c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,_,v,n.image[e]):c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,y,_,v,n.image[e])}}}E(t)&&t.mipmapsAutoUpdate===!0&&D(o.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Se(e,t,n,r,i,a){let s=d.convert(n.format,n.colorSpace),u=d.convert(n.type),f=k(n.internalFormat,s,u,n.normalized,n.colorSpace),m=l.get(t),h=l.get(n);if(h.__renderTarget=t,!m.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===o.TEXTURE_3D||i===o.TEXTURE_2D_ARRAY?c.texImage3D(i,a,f,e,n,t.depth,0,s,u,null):c.texImage2D(i,a,f,e,n,0,s,u,null)}c.bindFramebuffer(o.FRAMEBUFFER,e),Me(t)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,r,i,h.__webglTexture,0,je(t)):(i===o.TEXTURE_2D||i>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,r,i,h.__webglTexture,a),c.bindFramebuffer(o.FRAMEBUFFER,null)}function Ce(e,t,n){if(o.bindRenderbuffer(o.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=j(t.stencilBuffer,i),s=t.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Me(t)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,je(t),a,t.width,t.height):n?o.renderbufferStorageMultisample(o.RENDERBUFFER,je(t),a,t.width,t.height):o.renderbufferStorage(o.RENDERBUFFER,a,t.width,t.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,s,o.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=d.convert(i.format,i.colorSpace),s=d.convert(i.type),c=k(i.internalFormat,a,s,i.normalized,i.colorSpace);Me(t)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,je(t),c,t.width,t.height):n?o.renderbufferStorageMultisample(o.RENDERBUFFER,je(t),c,t.width,t.height):o.renderbufferStorage(o.RENDERBUFFER,c,t.width,t.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function we(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(c.bindFramebuffer(o.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=l.get(t.depthTexture);i.__renderTarget=t;let a=r?t.depthTexture.image[0]:t.depthTexture.image;i.__webglTexture&&a.width===t.width&&a.height===t.height||(a.width=t.width,a.height=t.height,t.depthTexture.needsUpdate=!0),r?fe(t.depthTexture,0):ue(t.depthTexture,0);let s=i.__webglTexture,u=je(t),d=r?o.TEXTURE_CUBE_MAP_POSITIVE_X+n:o.TEXTURE_2D,f=t.depthTexture.format===1027?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Me(t)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,f,d,s,0,u):o.framebufferTexture2D(o.FRAMEBUFFER,f,d,s,0);else if(t.depthTexture.format===1027)Me(t)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,f,d,s,0,u):o.framebufferTexture2D(o.FRAMEBUFFER,f,d,s,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Te(e){let t=l.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)we(t.__webglFramebuffer[n],e,n);else e.texture.mipmaps.length>0?we(t.__webglFramebuffer[0],e,0):we(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(c.bindFramebuffer(o.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=o.createRenderbuffer(),Ce(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];o.bindRenderbuffer(o.RENDERBUFFER,i),o.framebufferRenderbuffer(o.FRAMEBUFFER,r,o.RENDERBUFFER,i)}}else if(e.texture.mipmaps.length>0?c.bindFramebuffer(o.FRAMEBUFFER,t.__webglFramebuffer[0]):c.bindFramebuffer(o.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=o.createRenderbuffer(),Ce(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,r),o.framebufferRenderbuffer(o.FRAMEBUFFER,n,o.RENDERBUFFER,r)}c.bindFramebuffer(o.FRAMEBUFFER,null)}function Ee(e,t,n){let r=l.get(e);t!==void 0&&Se(r.__webglFramebuffer,e,e.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),n!==void 0&&Te(e)}function De(e){let t=e.texture,n=l.get(e),r=l.get(t);e.addEventListener(`dispose`,F),N(e);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,s=i.length>1;if(s||(r.__webglTexture===void 0&&(r.__webglTexture=o.createTexture()),r.__version=t.version,f.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=o.createFramebuffer()}else n.__webglFramebuffer[e]=o.createFramebuffer()}else{if(t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=o.createFramebuffer()}else n.__webglFramebuffer=o.createFramebuffer();if(s)for(let e=0,t=i.length;e<t;e++){let t=l.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=o.createTexture(),f.memory.textures++)}if(e.samples>0&&Me(e)===!1){n.__webglMultisampledFramebuffer=o.createFramebuffer(),n.__webglColorRenderbuffer=[],c.bindFramebuffer(o.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=d.convert(r.format,r.colorSpace),s=d.convert(r.type),c=k(r.internalFormat,a,s,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),l=je(e);o.renderbufferStorageMultisample(o.RENDERBUFFER,l,c,e.width,e.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+t,o.RENDERBUFFER,n.__webglColorRenderbuffer[t])}o.bindRenderbuffer(o.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=o.createRenderbuffer(),Ce(n.__webglDepthRenderbuffer,e,!0)),c.bindFramebuffer(o.FRAMEBUFFER,null)}}if(a){c.bindTexture(o.TEXTURE_CUBE_MAP,r.__webglTexture),ge(o.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)Se(n.__webglFramebuffer[r][i],e,t,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else Se(n.__webglFramebuffer[r],e,t,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);E(t)?D(o.TEXTURE_CUBE_MAP):t.mipmaps.length>0&&o.texParameteri(o.TEXTURE_CUBE_MAP,o.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),c.unbindTexture()}else if(s){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=l.get(r),s=o.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(s=e.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),c.bindTexture(s,a.__webglTexture),ge(s,r),Se(n.__webglFramebuffer,e,r,o.COLOR_ATTACHMENT0+t,s,0),E(r)&&D(s)}c.unbindTexture()}else{let i=o.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),c.bindTexture(i,r.__webglTexture),ge(i,t),t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)Se(n.__webglFramebuffer[r],e,t,o.COLOR_ATTACHMENT0,i,r);else Se(n.__webglFramebuffer,e,t,o.COLOR_ATTACHMENT0,i,0);E(t)?D(i):t.mipmaps.length>0&&o.texParameteri(i,o.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),c.unbindTexture()}e.depthBuffer&&Te(e)}function Oe(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(E(r)&&r.mipmapsAutoUpdate===!0){let t=O(e),n=l.get(r).__webglTexture;c.bindTexture(t,n),D(t),c.unbindTexture()}}}let ke=[];function Ae(e){if(e.samples>0){if(Me(e)===!1){let t=e.textures,n=e.width,r=e.height,i=o.COLOR_BUFFER_BIT,a=e.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,s=l.get(e),u=t.length>1;if(u)for(let e=0;e<t.length;e++)c.bindFramebuffer(o.FRAMEBUFFER,s.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+e,o.RENDERBUFFER,null),c.bindFramebuffer(o.FRAMEBUFFER,s.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+e,o.TEXTURE_2D,null,0);c.bindFramebuffer(o.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.texture.mipmaps.length>0?c.bindFramebuffer(o.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):c.bindFramebuffer(o.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=o.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=o.STENCIL_BUFFER_BIT)),u){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,s.__webglColorRenderbuffer[c]);let e=l.get(t[c]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,e,0)}o.blitFramebuffer(0,0,n,r,0,0,n,r,i,o.NEAREST),m===!0&&(ke.length=0,ke.push(o.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&ke.push(a),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ke))}if(c.bindFramebuffer(o.READ_FRAMEBUFFER,null),c.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),u)for(let e=0;e<t.length;e++){c.bindFramebuffer(o.FRAMEBUFFER,s.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+e,o.RENDERBUFFER,s.__webglColorRenderbuffer[e]);let n=l.get(t[e]).__webglTexture;c.bindFramebuffer(o.FRAMEBUFFER,s.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+e,o.TEXTURE_2D,n,0)}c.bindFramebuffer(o.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&m){let t=e.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[t])}}}function je(e){return Math.min(u.maxSamples,e.samples)}function Me(e){let t=l.get(e);return e.samples>0&&s.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function W(e){let t=f.render.frame;_.get(e)!==t&&(_.set(e,t),e.update())}function G(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(X.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ne(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(h.width=e.naturalWidth||e.width,h.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(h.width=e.displayWidth,h.height=e.displayHeight):(h.width=e.width,h.height=e.height),h}this.allocateTextureUnit=le,this.resetTextureUnits=oe,this.getTextureUnits=se,this.setTextureUnits=ce,this.setTexture2D=ue,this.setTexture2DArray=H,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=Ee,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Me,this.dispose=ne}function ll(e,t){function n(n,r=``){let i,a=X.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var ul=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,fl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Tr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ra({vertexShader:ul,fragmentShader:dl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $n(new Ji(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pl=class extends oe{constructor(e,t){super();let n=this,r=null,i=1,a=null,s=`local-floor`,l=1,u=null,d=null,f=null,_=null,v=null,y=null,b=typeof XRWebGLBinding<`u`,x=new fl,S={},C=t.getContextAttributes(),w=null,T=null,E=[],D=[],O=new U,k=null,A=null,j=new Va;j.viewport=new Ke;let M=new Va;M.viewport=new Ke;let N=[j,M],P=new Ka,ee=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=E[e];return t===void 0&&(t=new Dt,E[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=E[e];return t===void 0&&(t=new Dt,E[e]=t),t.getGripSpace()},this.getHand=function(e){let t=E[e];return t===void 0&&(t=new Dt,E[e]=t),t.getHandSpace()};function I(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=E[t];n!==void 0&&(n.update(e.inputSource,e.frame,u||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,I),r.removeEventListener(`selectstart`,I),r.removeEventListener(`selectend`,I),r.removeEventListener(`squeeze`,I),r.removeEventListener(`squeezestart`,I),r.removeEventListener(`squeezeend`,I),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,L);for(let e=0;e<E.length;e++){let t=D[e];t!==null&&(D[e]=null,E[e].disconnect(t))}ee=null,F=null,x.reset();for(let e in S)delete S[e];if(e.setRenderTarget(w),v=null,_=null,f=null,r=null,T=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){s=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(e){u=e},this.getBaseLayer=function(){return _===null?v:_},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(d){if(r=d,r!==null){if(w=e.getRenderTarget(),r.addEventListener(`select`,I),r.addEventListener(`selectstart`,I),r.addEventListener(`selectend`,I),r.addEventListener(`squeeze`,I),r.addEventListener(`squeezestart`,I),r.addEventListener(`squeezeend`,I),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,L),C.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),b&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,s=null;C.depth&&(s=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=C.stencil?g:h,a=C.stencil?p:c);let l={colorFormat:t.RGBA8,depthFormat:s,scaleFactor:i};f=this.getBinding(),_=f.createProjectionLayer(l),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),T=new Je(_.textureWidth,_.textureHeight,{format:m,type:o,depthTexture:new Cr(_.textureWidth,_.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{let n={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:i};v=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),T=new Je(v.framebufferWidth,v.framebufferHeight,{format:m,type:o,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(s),ie.setContext(r),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function L(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,E[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<E.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=E[r];i&&i.connect(n)}}function ne(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;x.texture!==null&&(x.depthNear>0&&(t=x.depthNear),x.depthFar>0&&(n=x.depthFar)),P.near=M.near=j.near=t,P.far=M.far=j.far=n,(ee!==P.near||F!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),ee=P.near,F=P.far),P.layers.mask=e.layers.mask|6,j.layers.mask=P.layers.mask&-5,M.layers.mask=P.layers.mask&-3;let i=e.parent,a=P.cameras;ne(P,i);for(let e=0;e<a.length;e++)ne(a[e],i);P.projectionMatrix.copy(j.projectionMatrix),P.projectionMatrixInverse.copy(j.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),re(e,P,i)};function re(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=V*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(_!==null||v!==null)return l},this.setFoveation=function(e){l=e,_!==null&&(_.fixedFoveation=e),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=e)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(P)},this.getCameraTexture=function(e){return S[e]};let z=null;function B(t,i){if(d=i.getViewerPose(u||a),y=i,d!==null){let t=d.views;v!==null&&(e.setRenderTargetFramebuffer(T,v.framebuffer),e.setRenderTarget(T));let i=!1;t.length!==P.cameras.length&&(P.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(v!==null)a=v.getViewport(r);else{let t=f.getViewSubImage(_,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(T,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(T))}let o=N[n];o===void 0&&(o=new Va,o.layers.enable(n),o.viewport=new Ke,N[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(P.matrix.copy(o.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),i===!0&&P.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&b){f=n.getBinding();let e=f.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&x.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&b){e.state.unbindTexture(),f=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=S[n];e||(e=new Tr,S[n]=e);let t=f.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<E.length;e++){let t=D[e],n=E[e];t!==null&&n!==void 0&&n.update(t,i,u||a)}z&&z(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),y=null}let ie=new fo;ie.setAnimationLoop(B),this.setAnimationLoop=function(e){z=e},this.dispose=function(){}}},ml=new Ze,hl=new K;hl.set(-1,0,0,0,1,0,0,0,1);function gl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,$i(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ml.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(hl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function _l(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var vl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yl=null;function bl(){return yl===null&&(yl=new nr(vl,16,16,v,u),yl.name=`DFG_LUT`,yl.minFilter=i,yl.magFilter=i,yl.wrapS=t,yl.wrapT=t,yl.generateMipmaps=!1,yl.needsUpdate=!0),yl}var xl=class{constructor(e={}){let{canvas:t=te(),context:n=null,depth:r=!0,stencil:i=!1,alpha:l=!1,antialias:m=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:g=!1,powerPreference:v=`default`,failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:S=!1,outputBufferType:C=o}=e;this.isWebGLRenderer=!0;let w;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);w=n.getContextAttributes().alpha}else w=l;let T=C,E=new Set([b,y,_]),D=new Set([o,c,s,p,d,f]),k=new Uint32Array(4),A=new Int32Array(4),j={textures:[],min:[],max:[],resolution:[]},M=null,N=null,ee=[],F=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,re=!1,B=null,ae=null,oe=null,se=null;this._outputColorSpace=O;let ce=0,le=0,V=null,ue=-1,H=null,de=new Ke,fe=new Ke,pe=null,me=new Mt(0),he=0,ge=t.width,_e=t.height,ve=1,ye=null,be=null,xe=new Ke(0,0,ge,_e),Se=new Ke(0,0,ge,_e),Ce=!1,we=new or,Te=new cr,Ee=!1,De=!1,Oe=new Ze,ke=new G,Ae=new Ke,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function U(){return V===null?ve:1}let W=n;function Ne(e,n){return t.getContext(e,n)}let Pe,K,q,Fe,J,Y,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,qe,Ye,Xe,Qe,$e,et,tt;try{let e={alpha:!0,depth:r,stencil:i,antialias:m,premultipliedAlpha:h,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:x};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,it,!1),t.addEventListener(`webglcontextrestored`,at,!1),t.addEventListener(`webglcontextcreationerror`,ot,!1),W===null){let t=`webgl2`;if(W=Ne(t,e),W===null)throw Ne(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}nt()}catch(e){throw t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),z(`WebGLRenderer: `+e.message),e}function nt(){Pe=new Vo(W),Pe.init(),$e=new ll(W,Pe),K=new xo(W,Pe,e,$e),q=new sl(W,Pe),K.reversedDepthBuffer&&S&&q.buffers.depth.setReversed(!0),ae=W.createFramebuffer(),oe=W.createFramebuffer(),se=W.createFramebuffer(),Fe=new Wo(W),J=new Vc,Y=new cl(W,Pe,q,J,K,$e,Fe),Ie=new Bo(L),Le=new po(W),et=new yo(W,Le),Re=new Ho(W,Le,Fe,et),ze=new Ko(W,Re,Le,et,Fe),Ye=new Go(W,K,Y),We=new So(J),Be=new Bc(L,Ie,Pe,K,et,We),Ve=new gl(L,J),He=new Gc,Ue=new Qc(Pe),qe=new vo(L,Ie,q,ze,w,h),Ge=new ol(L,ze,K),tt=new _l(W,Fe,K,q),Xe=new bo(W,Pe,Fe),Qe=new Uo(W,Pe,Fe),Fe.programs=Be.programs,L.capabilities=K,L.extensions=Pe,L.properties=J,L.renderLists=He,L.shadowMap=Ge,L.state=q,L.info=Fe}T!==1009&&(I=new Jo(T,t.width,t.height,m,r,i));let rt=new pl(L,W);this.xr=rt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(e){e!==void 0&&(ve=e,this.setSize(ge,_e,!1))},this.getSize=function(e){return e.set(ge,_e)},this.setSize=function(e,n,r=!0){rt.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(ge=e,_e=n,t.width=Math.floor(e*ve),t.height=Math.floor(n*ve),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ge*ve,_e*ve).floor()},this.setDrawingBufferSize=function(e,n,r){ge=e,_e=n,ve=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(T===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}I.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(de)},this.getViewport=function(e){return e.copy(xe)},this.setViewport=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),q.viewport(de.copy(xe).multiplyScalar(U()).round())},this.getScissor=function(e){return e.copy(Se)},this.setScissor=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),q.scissor(fe.copy(Se).multiplyScalar(U()).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(e){q.setScissorTest(Ce=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){be=e},this.getClearColor=function(e){return e.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(V!==null){let t=V.texture.format;e=E.has(t)}if(e){let e=V.texture.type,t=D.has(e),n=qe.getClearColor(),r=qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(k[0]=i,k[1]=a,k[2]=o,k[3]=r,W.clearBufferuiv(W.COLOR,0,k)):(A[0]=i,A[1]=a,A[2]=o,A[3]=r,W.clearBufferiv(W.COLOR,0,A))}else r|=W.COLOR_BUFFER_BIT}t&&(r|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&W.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),B=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),qe.dispose(),He.dispose(),Ue.dispose(),Y.dispose(),J.dispose(),Ie.dispose(),ze.dispose(),Re.dispose(),et.dispose(),tt.dispose(),Be.dispose(),rt.dispose(),rt.removeEventListener(`sessionstart`,pt),rt.removeEventListener(`sessionend`,mt),ht.stop()};function it(e){e.preventDefault(),ne(`WebGLRenderer: Context Lost.`),re=!0}function at(){ne(`WebGLRenderer: Context Restored.`),re=!1;let e=Fe.autoReset,t=Ge.enabled,n=Ge.autoUpdate,r=Ge.needsUpdate,i=Ge.type;nt(),Fe.autoReset=e,Ge.enabled=t,Ge.autoUpdate=n,Ge.needsUpdate=r,Ge.type=i}function ot(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function st(e){let t=e.target;t.removeEventListener(`dispose`,st),ct(t)}function ct(e){lt(e),J.remove(e)}function lt(e){let t=J.get(e).programs;t!==void 0&&(t.forEach(function(e){Be.releaseProgram(e)}),e.isShaderMaterial&&Be.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=je);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Et(e,t,n,r,i);q.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Re.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;et.setup(i,r,s,n,c);let h,g=Xe;if(c!==null&&(h=Le.get(c),g=Qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(q.setLineWidth(r.wireframeLinewidth*U()),g.setMode(W.LINES)):g.setMode(W.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),q.setLineWidth(e*U()),i.isLineSegments?g.setMode(W.LINES):i.isLineLoop?g.setMode(W.LINE_LOOP):g.setMode(W.LINE_STRIP)}else i.isPoints?g.setMode(W.POINTS):i.isSprite&&g.setMode(W.TRIANGLES);if(i.isBatchedMesh){if(Pe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Le.get(c).bytesPerElement:1,o=J.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(W,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ut(e,t,n,r){B!==null&&e.isNodeMaterial&&B.setObject(r,e),Ee===!0&&We.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,St(e,t,r),e.side=0,e.needsUpdate=!0,St(e,t,r),e.side=2):St(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),B!==null&&B.renderStart(e,t,n),N=Ue.get(n),N.init(t),F.push(N),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(N.pushLight(e),e.castShadow&&N.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(N.pushLight(e),e.castShadow&&N.pushShadow(e))}),N.setupLights(),B!==null&&B.updateLights(N.state.lightsArray),De=this.localClippingEnabled,Ee=We.init(this.clippingPlanes,De),Ee===!0&&We.setGlobalState(this.clippingPlanes,t),B!==null&&Ge.render(N.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ut(o,n,t,e),r.add(o)}else ut(i,n,t,e),r.add(i)}}),N=F.pop(),B!==null&&B.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=J.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Pe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let dt=null;function ft(e){dt&&dt(e)}function pt(){ht.stop()}function mt(){ht.start()}let ht=new fo;ht.setAnimationLoop(ft),typeof self<`u`&&ht.setContext(self),this.setAnimationLoop=function(e){dt=e,rt.setAnimationLoop(e),e===null?ht.stop():ht.start()},rt.addEventListener(`sessionstart`,pt),rt.addEventListener(`sessionend`,mt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(re===!0)return;B!==null&&B.renderStart(e,t);let n=rt.enabled===!0&&rt.isPresenting===!0,r=I!==null&&(V===null||n)&&I.begin(L,V);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(t),t=rt.getCamera()),e.isScene===!0&&e.onBeforeRender(L,e,t,V),N=Ue.get(e,F.length),N.init(t),N.state.textureUnits=Y.getTextureUnits(),F.push(N),Oe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Te.setFromArrayCamera(t):we.setFromProjectionMatrix(Oe,P,t.reversedDepth),De=this.localClippingEnabled,Ee=We.init(this.clippingPlanes,De),M=He.get(e,ee.length),M.init(),ee.push(M),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let e=L.xr.getDepthSensingMesh();e!==null&&gt(e,t,-1/0,L.sortObjects)}gt(e,t,0,L.sortObjects),M.finish(),B!==null&&B.updateLights(N.state.lightsArray),L.sortObjects===!0&&M.sort(ye,be),Me=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Me&&qe.addToRenderList(M,e),this.info.autoReset===!0&&this.info.reset(),Ee===!0&&We.beginShadows();let i=N.state.shadowsArray;if(Ge.render(i,e,t),Ee===!0&&We.endShadows(),(r&&I.hasRenderPass())===!1){let n=M.opaque,r=M.transmissive;if(N.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];vt(n,r,e,a)}Me&&qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];_t(M,e,n,n.viewport)}}else r.length>0&&vt(n,r,e,t),Me&&qe.render(e),_t(M,e,t)}V!==null&&le===0&&(Y.updateMultisampleRenderTarget(V),Y.updateRenderTargetMipmap(V)),r&&I.end(L),e.isScene===!0&&e.onAfterRender(L,e,t),et.resetDefaultState(),ue=-1,H=null,F.pop(),F.length>0?(N=F[F.length-1],Y.setTextureUnits(N.state.textureUnits),Ee===!0&&We.setGlobalState(L.clippingPlanes,N.state.camera)):N=null,ee.pop(),M=ee.length>0?ee[ee.length-1]:null,B!==null&&B.renderEnd()};function gt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)N.pushLight(e),e.castShadow&&N.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Te:we;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Ae.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Oe);let i=ze.update(e),a=e.material;a.visible&&M.push(e,i,a,n,Ae.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Te:we;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=ze.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ae.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ae.copy(e.boundingSphere.center)),Ae.applyMatrix4(e.matrixWorld).applyMatrix4(Oe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&M.push(e,i,c,n,Ae.z,s,t)}}else a.visible&&M.push(e,i,a,n,Ae.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)gt(i[e],t,n,r)}function _t(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;N.setupLightsView(n),Ee===!0&&We.setGlobalState(L.clippingPlanes,n),r&&q.viewport(de.copy(r)),i.length>0&&yt(i,t,n),a.length>0&&yt(a,t,n),o.length>0&&yt(o,t,n),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function vt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[r.id]===void 0){let e=Pe.has(`EXT_color_buffer_half_float`)||Pe.has(`EXT_color_buffer_float`);N.state.transmissionRenderTarget[r.id]=new Je(1,1,{generateMipmaps:!0,type:e?u:o,minFilter:a,samples:Math.max(4,K.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:X.workingColorSpace})}let s=N.state.transmissionRenderTarget[r.id],c=r.viewport||de;s.setSize(c.z*L.transmissionResolutionScale,c.w*L.transmissionResolutionScale);let l=L.getRenderTarget(),d=L.getActiveCubeFace(),f=L.getActiveMipmapLevel();L.setRenderTarget(s),L.getClearColor(me),he=L.getClearAlpha(),he<1&&L.setClearColor(16777215,.5),L.clear(),Me&&qe.render(n);let p=L.toneMapping;L.toneMapping=0;let m=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),N.setupLightsView(r),Ee===!0&&We.setGlobalState(L.clippingPlanes,r),yt(e,n,r),Y.updateMultisampleRenderTarget(s),Y.updateRenderTargetMipmap(s),Pe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,bt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Y.updateMultisampleRenderTarget(s),Y.updateRenderTargetMipmap(s))}L.setRenderTarget(l,d,f),L.setClearColor(me,he),m!==void 0&&(r.viewport=m),L.toneMapping=p}function yt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&bt(o,t,n,s,l,c)}}function bt(e,t,n,r,i,a){B!==null&&i.isNodeMaterial&&B.setObject(e,i),e.onBeforeRender(L,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(L,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,L.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,L.renderBufferDirect(n,t,r,i,e,a),i.side=2):L.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(L,t,n,r,i,a)}function xt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function St(e,t,n){t.isScene!==!0&&(t=je);let r=J.get(e),i=N.state.lights,a=N.state.shadowsArray,o=i.state.version,s=Be.getParameters(e,i.state,a,t,n,N.state.lightProbeGridArray),c=Be.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ie.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,st),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Tt(e,s),d}else s.uniforms=Be.getUniforms(e),B!==null&&e.isNodeMaterial&&B.build(e,n,s),e.onBeforeCompile(s,L),d=Be.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=We.uniform),Tt(e,s),r.needsLights=Ot(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=xt(N.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Ct(e,t,n,r,i){let a=J.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=St(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function wt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=rc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Tt(e,t){let n=J.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Et(e,t,n,r,i){t.isScene!==!0&&(t=je),Y.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=V===null?L.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:X.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ie.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(h=L.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=J.get(r),y=N.state.lights;if(Ee===!0&&(De===!0||e!==H)){let t=e===H&&r.id===ue;We.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==We.numPlanes||v.numIntersection!==We.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===xt(N.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?Ct(r,t,i,s,h):St(r,t,i),B&&r.isNodeMaterial&&B.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),D=v.uniforms;if(q.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==ue&&(ue=r.id,w=!0),C||H!==e){q.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(W,`projectionMatrix`,e.projectionMatrix),E.setValue(W,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(W,ke.setFromMatrixPosition(e.matrixWorld)),K.logarithmicDepthBuffer&&E.setValue(W,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(W,`isOrthographic`,e.isOrthographicCamera===!0),H!==e&&(H=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(W,`sunShadowMap`,y.state.sunShadowMap,Y),y.state.directionalShadowMap.length>0&&E.setValue(W,`directionalShadowMap`,y.state.directionalShadowMap,Y),y.state.spotShadowMap.length>0&&E.setValue(W,`spotShadowMap`,y.state.spotShadowMap,Y),y.state.pointShadowMap.length>0&&E.setValue(W,`pointShadowMap`,y.state.pointShadowMap,Y)),i.isSkinnedMesh){E.setOptional(W,i,`bindMatrix`),E.setOptional(W,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(W,`boneTexture`,e.boneTexture,Y))}i.isBatchedMesh&&(E.setOptional(W,i,`batchingTexture`),E.setValue(W,`batchingTexture`,i._matricesTexture,Y),E.setOptional(W,i,`batchingIdTexture`),E.setValue(W,`batchingIdTexture`,i._indirectTexture,Y),E.setOptional(W,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(W,`batchingColorTexture`,i._colorsTexture,Y));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&Ye.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(W,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=bl()),w){if(E.setValue(W,`toneMappingExposure`,L.toneMappingExposure),v.needsLights&&Dt(D,T),a&&r.fog===!0&&Ve.refreshFogUniforms(D,a),Ve.refreshMaterialUniforms(D,r,ve,_e,N.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=j,t=0;for(let n of N.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;D.probesSH.value=e.textures,D.probesMin.value=e.min,D.probesMax.value=e.max,D.probesResolution.value=e.resolution}rc.upload(W,wt(v),D,Y)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(rc.upload(W,wt(v),D,Y),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(W,`center`,i.center),E.setValue(W,`modelViewMatrix`,i.modelViewMatrix),E.setValue(W,`normalMatrix`,i.normalMatrix),E.setValue(W,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];tt.update(n,S),tt.bind(n,S)}}return S}function Dt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ot(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(e,t,n){let r=J.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),J.get(e.texture).__webglTexture=t,J.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=J.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){V=e,ce=t,le=n;let r=null,i=!1,a=!1;if(e){let o=J.get(e);if(o.__useDefaultFramebuffer!==void 0){q.bindFramebuffer(W.FRAMEBUFFER,o.__webglFramebuffer),de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest,q.viewport(de),q.scissor(fe),q.setScissorTest(pe),ue=-1;return}if(o.__webglFramebuffer===void 0)Y.setupRenderTarget(e);else if(o.__hasExternalTextures)Y.rebindTextures(e,J.get(e.texture).__webglTexture,J.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&J.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Y.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=J.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Y.useMultisampledRTT(e)===!1?J.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest}else de.copy(xe).multiplyScalar(ve).floor(),fe.copy(Se).multiplyScalar(ve).floor(),pe=Ce;if(n!==0&&(r=ae),q.bindFramebuffer(W.FRAMEBUFFER,r)&&q.drawBuffers(e,r),q.viewport(de),q.scissor(fe),q.setScissorTest(pe),i){let r=J.get(e.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=J.get(e.textures[t]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=J.get(e.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,t.__webglTexture,n)}ue=-1};function kt(e){let t=J.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=K.textureFormatReadable(e.format),t.__typeReadable=K.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=J.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){q.bindFramebuffer(W.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+s);let u=kt(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&W.readPixels(t,n,r,i,$e.convert(c),$e.convert(l),a)}finally{let e=V===null?null:J.get(V).__webglFramebuffer;q.bindFramebuffer(W.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=J.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){q.bindFramebuffer(W.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+s);let d=kt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,f),W.bufferData(W.PIXEL_PACK_BUFFER,a.byteLength,W.STREAM_READ),W.readPixels(t,n,r,i,$e.convert(l),$e.convert(u),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);let p=V===null?null:J.get(V).__webglFramebuffer;q.bindFramebuffer(W.FRAMEBUFFER,p);let m=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await ie(W,m,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,f),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,a),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(f),W.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Y.setTexture2D(e,0),W.copyTexSubImage2D(W.TEXTURE_2D,n,0,0,o,s,i,a),q.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=$e.convert(t.format),_=$e.convert(t.type),v;t.isData3DTexture?(Y.setTexture3D(t,0),v=W.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Y.setTexture2DArray(t,0),v=W.TEXTURE_2D_ARRAY):(Y.setTexture2D(t,0),v=W.TEXTURE_2D),q.activeTexture(W.TEXTURE0),q.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,t.flipY),q.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),q.pixelStorei(W.UNPACK_ALIGNMENT,t.unpackAlignment);let y=q.getParameter(W.UNPACK_ROW_LENGTH),b=q.getParameter(W.UNPACK_IMAGE_HEIGHT),x=q.getParameter(W.UNPACK_SKIP_PIXELS),S=q.getParameter(W.UNPACK_SKIP_ROWS),C=q.getParameter(W.UNPACK_SKIP_IMAGES);q.pixelStorei(W.UNPACK_ROW_LENGTH,h.width),q.pixelStorei(W.UNPACK_IMAGE_HEIGHT,h.height),q.pixelStorei(W.UNPACK_SKIP_PIXELS,l),q.pixelStorei(W.UNPACK_SKIP_ROWS,u),q.pixelStorei(W.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=J.get(e),r=J.get(t),h=J.get(n.__renderTarget),g=J.get(r.__renderTarget);q.bindFramebuffer(W.READ_FRAMEBUFFER,h.__webglFramebuffer),q.bindFramebuffer(W.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,J.get(e).__webglTexture,i,d+n),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,J.get(t).__webglTexture,a,m+n)),W.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,W.DEPTH_BUFFER_BIT,W.NEAREST);q.bindFramebuffer(W.READ_FRAMEBUFFER,null),q.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||J.has(e)){let n=J.get(e),r=J.get(t);q.bindFramebuffer(W.READ_FRAMEBUFFER,oe),q.bindFramebuffer(W.DRAW_FRAMEBUFFER,se);for(let e=0;e<c;e++)w?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,n.__webglTexture,i),T?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,r.__webglTexture,a),i===0?T?W.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):W.copyTexSubImage2D(v,a,f,p,l,u,o,s):W.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,W.COLOR_BUFFER_BIT,W.NEAREST);q.bindFramebuffer(W.READ_FRAMEBUFFER,null),q.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?W.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?W.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):W.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):W.texSubImage2D(W.TEXTURE_2D,a,f,p,o,s,g,_,h);q.pixelStorei(W.UNPACK_ROW_LENGTH,y),q.pixelStorei(W.UNPACK_IMAGE_HEIGHT,b),q.pixelStorei(W.UNPACK_SKIP_PIXELS,x),q.pixelStorei(W.UNPACK_SKIP_ROWS,S),q.pixelStorei(W.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&W.generateMipmap(v),q.unbindTexture()},this.initRenderTarget=function(e){J.get(e).__webglFramebuffer===void 0&&Y.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Y.setTextureCube(e,0):e.isData3DTexture?Y.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Y.setTexture2DArray(e,0):Y.setTexture2D(e,0),q.unbindTexture()},this.resetState=function(){ce=0,le=0,V=null,q.reset(),et.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return P}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=X._getDrawingBufferColorSpace(e),t.unpackColorSpace=X._getUnpackColorSpace()}};function Sl(e,t=1e-4){t=Math.max(t,2**-52);let n={},r=e.getIndex(),i=e.getAttribute(`position`),a=r?r.count:i.count,o=0,s=Object.keys(e.attributes),c=[],l=new Map,u=[],d=[`getX`,`getY`,`getZ`,`getW`],f=t*.5,p=10**Math.log10(1/t),m=f*p;for(let t=0;t<a;t++){let i=r?r.getX(t):t,a=``;for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),o=r.itemSize;for(let e=0;e<o;e++)a+=`${Math.trunc(r[d[e]](i)*p+m)},`}a in n?u.push(n[a]):(c.push(i),n[a]=o,u.push(o),o++)}let h=e.clone();for(let t in e.attributes)h.setAttribute(t,Cl(e.attributes[t],c,l));for(let t in e.morphAttributes)h.morphAttributes[t]=e.morphAttributes[t].map(e=>Cl(e,c,l));return h.setIndex(u),h}function Cl(e,t,n=new Map){let r=e.isInterleavedBufferAttribute,i=r?e.data:e,a=r?i.stride:e.itemSize,o=r?n.get(i):void 0;if(o===void 0){let s=new i.array.constructor(t.length*a);for(let e=0;e<t.length;e++)for(let n=0;n<a;n++)s[e*a+n]=i.array[t[e]*a+n];o=r?new i.constructor(s,a,i.meshPerAttribute):new e.constructor(s,e.itemSize,e.normalized,e.meshPerAttribute),o.setUsage(i.usage),r&&n.set(i,o)}let s=r?new e.constructor(o,e.itemSize,e.offset,e.normalized):o;return s.name=e.name,r||(s.gpuType=e.gpuType),s}var wl=`# PotatoCam shell, exported from Onshape, units: mm (Y = depth, Z = up)
v 56.29 49.00 15.79
v 52.78 49.00 26.21
v 53.18 49.00 26.37
v 54.72 49.00 15.35
v 52.36 49.00 26.09
v 66.30 49.00 27.57
v 55.45 49.00 29.35
v 55.49 49.00 29.78
v 65.95 49.00 25.99
v 55.35 49.00 28.93
v 65.43 49.00 24.45
v 64.75 49.00 22.97
v 55.03 49.00 28.13
v 63.92 49.00 21.58
v 54.81 49.00 27.76
v 61.82 49.00 19.11
v 54.25 49.00 27.10
v 54.55 49.00 27.41
v 60.58 49.00 18.06
v 53.92 49.00 26.82
v 53.12 49.00 15.09
v 51.93 49.00 26.02
v 45.20 49.00 16.39
v 49.82 49.00 26.37
v 50.22 49.00 26.21
v 43.77 49.00 17.15
v 49.44 49.00 26.57
v 42.42 49.00 18.06
v 49.08 49.00 26.82
v 41.18 49.00 19.11
v 48.75 49.00 27.10
v 39.08 49.00 21.58
v 48.19 49.00 27.76
v 48.45 49.00 27.41
v 38.25 49.00 22.97
v 47.97 49.00 28.13
v 55.22 49.00 28.52
v 62.93 49.00 20.29
v 59.23 49.00 17.15
v 53.56 49.00 26.57
v 57.80 49.00 16.39
v 40.07 49.00 20.29
v 37.57 49.00 24.45
v 47.78 49.00 28.52
v 37.05 49.00 25.99
v 47.65 49.00 28.93
v 36.70 49.00 27.57
v 47.55 49.00 29.35
v 36.52 49.00 29.19
v 47.51 49.00 29.78
v 65.43 49.00 35.55
v 55.22 49.00 31.48
v 55.03 49.00 31.87
v 65.95 49.00 34.01
v 55.35 49.00 31.07
v 66.30 49.00 32.43
v 55.45 49.00 30.65
v 66.48 49.00 30.81
v 55.49 49.00 30.22
v 63.92 49.00 38.42
v 54.81 49.00 32.24
v 54.55 49.00 32.59
v 64.75 49.00 37.03
v 51.50 49.00 15.00
v 51.50 49.00 26.00
v 49.88 49.00 15.09
v 51.07 49.00 26.02
v 48.28 49.00 15.35
v 50.64 49.00 26.09
v 46.71 49.00 15.79
v 36.70 49.00 32.43
v 47.55 49.00 30.65
v 47.51 49.00 30.22
v 37.05 49.00 34.01
v 47.65 49.00 31.07
v 41.18 49.00 40.89
v 48.75 49.00 32.90
v 48.45 49.00 32.59
v 42.42 49.00 41.94
v 49.08 49.00 33.18
v 37.57 49.00 35.55
v 47.78 49.00 31.48
v 38.25 49.00 37.03
v 47.97 49.00 31.87
v 39.08 49.00 38.42
v 48.19 49.00 32.24
v 40.07 49.00 39.71
v 56.29 49.00 44.21
v 52.78 49.00 33.79
v 52.36 49.00 33.91
v 57.80 49.00 43.61
v 53.18 49.00 33.63
v 60.58 49.00 41.94
v 53.92 49.00 33.18
v 53.56 49.00 33.43
v 61.82 49.00 40.89
v 54.25 49.00 32.90
v 66.48 49.00 29.19
v 43.77 49.00 42.85
v 49.44 49.00 33.43
v 59.23 49.00 42.85
v 62.93 49.00 39.71
v 46.71 49.00 44.21
v 50.22 49.00 33.79
v 49.82 49.00 33.63
v 48.28 49.00 44.65
v 50.64 49.00 33.91
v 54.72 49.00 44.65
v 51.93 49.00 33.98
v 36.52 49.00 30.81
v 45.20 49.00 43.61
v 53.12 49.00 44.91
v 51.50 49.00 34.00
v 49.88 49.00 44.91
v 51.07 49.00 33.98
v 51.50 49.00 45.00
v 51.50 48.00 34.00
v 51.07 48.00 33.98
v 50.64 48.00 33.91
v 50.22 48.00 33.79
v 49.82 48.00 33.63
v 49.44 48.00 33.43
v 49.08 48.00 33.18
v 48.75 48.00 32.90
v 48.45 48.00 32.59
v 48.19 48.00 32.24
v 47.97 48.00 31.87
v 47.78 48.00 31.48
v 47.65 48.00 31.07
v 47.55 48.00 30.65
v 47.51 48.00 30.22
v 47.51 48.00 29.78
v 47.55 48.00 29.35
v 47.65 48.00 28.93
v 47.78 48.00 28.52
v 47.97 48.00 28.13
v 48.19 48.00 27.76
v 48.45 48.00 27.41
v 48.75 48.00 27.10
v 49.08 48.00 26.82
v 49.44 48.00 26.57
v 49.82 48.00 26.37
v 50.22 48.00 26.21
v 50.64 48.00 26.09
v 51.07 48.00 26.02
v 51.50 48.00 26.00
v 51.93 48.00 26.02
v 52.36 48.00 26.09
v 52.78 48.00 26.21
v 53.18 48.00 26.37
v 53.56 48.00 26.57
v 53.92 48.00 26.82
v 54.25 48.00 27.10
v 54.55 48.00 27.41
v 54.81 48.00 27.76
v 55.03 48.00 28.13
v 55.22 48.00 28.52
v 55.35 48.00 28.93
v 55.45 48.00 29.35
v 55.49 48.00 29.78
v 55.49 48.00 30.22
v 55.45 48.00 30.65
v 55.35 48.00 31.07
v 55.22 48.00 31.48
v 55.03 48.00 31.87
v 54.81 48.00 32.24
v 54.55 48.00 32.59
v 54.25 48.00 32.90
v 53.92 48.00 33.18
v 53.56 48.00 33.43
v 53.18 48.00 33.63
v 52.78 48.00 33.79
v 52.36 48.00 33.91
v 51.93 48.00 33.98
v 51.50 64.00 15.00
v 49.88 64.00 15.09
v 48.28 64.00 15.35
v 46.71 64.00 15.79
v 45.20 64.00 16.39
v 43.77 64.00 17.15
v 42.42 64.00 18.06
v 41.18 64.00 19.11
v 40.07 64.00 20.29
v 39.08 64.00 21.58
v 38.25 64.00 22.97
v 37.57 64.00 24.45
v 37.05 64.00 25.99
v 36.70 64.00 27.57
v 36.52 64.00 29.19
v 36.52 64.00 30.81
v 36.70 64.00 32.43
v 37.05 64.00 34.01
v 37.57 64.00 35.55
v 38.25 64.00 37.03
v 39.08 64.00 38.42
v 40.07 64.00 39.71
v 41.18 64.00 40.89
v 42.42 64.00 41.94
v 43.77 64.00 42.85
v 45.20 64.00 43.61
v 46.71 64.00 44.21
v 48.28 64.00 44.65
v 49.88 64.00 44.91
v 51.50 64.00 45.00
v 53.12 64.00 44.91
v 54.72 64.00 44.65
v 56.29 64.00 44.21
v 57.80 64.00 43.61
v 59.23 64.00 42.85
v 60.58 64.00 41.94
v 61.82 64.00 40.89
v 62.93 64.00 39.71
v 63.92 64.00 38.42
v 64.75 64.00 37.03
v 65.43 64.00 35.55
v 65.95 64.00 34.01
v 66.30 64.00 32.43
v 66.48 64.00 30.81
v 66.48 64.00 29.19
v 66.30 64.00 27.57
v 65.95 64.00 25.99
v 65.43 64.00 24.45
v 64.75 64.00 22.97
v 63.92 64.00 21.58
v 62.93 64.00 20.29
v 61.82 64.00 19.11
v 60.58 64.00 18.06
v 59.23 64.00 17.15
v 57.80 64.00 16.39
v 56.29 64.00 15.79
v 54.72 64.00 15.35
v 53.12 64.00 15.09
v 34.52 64.00 29.08
v 34.52 64.00 30.92
v 35.71 64.00 36.29
v 36.48 64.00 37.96
v 56.93 64.00 13.89
v 55.15 64.00 13.40
v 53.34 64.00 13.10
v 51.50 64.00 13.00
v 34.72 64.00 32.75
v 35.12 64.00 34.55
v 64.46 64.00 18.99
v 63.19 64.00 17.66
v 61.79 64.00 16.47
v 60.26 64.00 15.43
v 58.64 64.00 14.57
v 49.66 64.00 13.10
v 47.85 64.00 13.40
v 37.43 64.00 39.54
v 38.54 64.00 41.01
v 35.12 64.00 25.45
v 34.72 64.00 27.25
v 41.21 64.00 43.53
v 42.74 64.00 44.57
v 46.07 64.00 46.11
v 47.85 64.00 46.60
v 49.66 64.00 46.90
v 46.07 64.00 13.89
v 44.36 64.00 14.57
v 36.48 64.00 22.04
v 35.71 64.00 23.71
v 39.81 64.00 42.34
v 44.36 64.00 45.43
v 51.50 64.00 47.00
v 55.15 64.00 46.60
v 56.93 64.00 46.11
v 68.48 64.00 30.92
v 68.48 64.00 29.08
v 68.28 64.00 27.25
v 66.52 64.00 22.04
v 65.57 64.00 20.46
v 42.74 64.00 15.43
v 41.21 64.00 16.47
v 39.81 64.00 17.66
v 38.54 64.00 18.99
v 37.43 64.00 20.46
v 58.64 64.00 45.43
v 63.19 64.00 42.34
v 64.46 64.00 41.01
v 67.88 64.00 25.45
v 67.29 64.00 23.71
v 53.34 64.00 46.90
v 60.26 64.00 44.57
v 61.79 64.00 43.53
v 65.57 64.00 39.54
v 66.52 64.00 37.96
v 67.29 64.00 36.29
v 67.88 64.00 34.55
v 68.28 64.00 32.75
v 51.50 49.00 13.00
v 53.34 49.00 13.10
v 55.15 49.00 13.40
v 56.93 49.00 13.89
v 58.64 49.00 14.57
v 60.26 49.00 15.43
v 61.79 49.00 16.47
v 63.19 49.00 17.66
v 64.46 49.00 18.99
v 65.57 49.00 20.46
v 66.52 49.00 22.04
v 67.29 49.00 23.71
v 67.88 49.00 25.45
v 68.28 49.00 27.25
v 68.48 49.00 29.08
v 68.48 49.00 30.92
v 68.28 49.00 32.75
v 67.88 49.00 34.55
v 67.29 49.00 36.29
v 66.52 49.00 37.96
v 65.57 49.00 39.54
v 64.46 49.00 41.01
v 63.19 49.00 42.34
v 61.79 49.00 43.53
v 60.26 49.00 44.57
v 58.64 49.00 45.43
v 56.93 49.00 46.11
v 55.15 49.00 46.60
v 53.34 49.00 46.90
v 51.50 49.00 47.00
v 49.66 49.00 46.90
v 47.85 49.00 46.60
v 46.07 49.00 46.11
v 44.36 49.00 45.43
v 42.74 49.00 44.57
v 41.21 49.00 43.53
v 39.81 49.00 42.34
v 38.54 49.00 41.01
v 37.43 49.00 39.54
v 36.48 49.00 37.96
v 35.71 49.00 36.29
v 35.12 49.00 34.55
v 34.72 49.00 32.75
v 34.52 49.00 30.92
v 34.52 49.00 29.08
v 34.72 49.00 27.25
v 35.12 49.00 25.45
v 35.71 49.00 23.71
v 36.48 49.00 22.04
v 37.43 49.00 20.46
v 38.54 49.00 18.99
v 39.81 49.00 17.66
v 41.21 49.00 16.47
v 42.74 49.00 15.43
v 44.36 49.00 14.57
v 46.07 49.00 13.89
v 47.85 49.00 13.40
v 49.66 49.00 13.10
v 83.00 49.00 0.00
v 20.00 49.00 0.00
v 83.00 49.00 60.00
v 20.00 49.00 60.00
v 17.91 48.89 0.00
v 17.91 48.89 60.00
v 15.84 48.56 0.00
v 15.84 48.56 60.00
v 13.82 48.02 0.00
v 13.82 48.02 60.00
v 11.87 47.27 0.00
v 11.87 47.27 60.00
v 10.00 46.32 0.00
v 10.00 46.32 60.00
v 8.24 45.18 0.00
v 8.24 45.18 60.00
v 6.62 43.86 0.00
v 6.62 43.86 60.00
v 5.14 42.38 0.00
v 5.14 42.38 60.00
v 3.82 40.76 0.00
v 3.82 40.76 60.00
v 2.68 39.00 0.00
v 2.68 39.00 60.00
v 1.73 37.13 0.00
v 1.73 37.13 60.00
v 0.98 35.18 0.00
v 0.98 35.18 60.00
v 0.44 33.16 0.00
v 0.44 33.16 60.00
v 0.11 31.09 0.00
v 0.11 31.09 60.00
v 0.00 29.22 34.63
v 0.00 29.00 35.04
v 0.00 29.41 34.21
v 0.00 29.33 34.39
v 0.01 29.71 33.33
v 0.01 29.60 33.70
v 0.02 29.82 32.88
v 0.02 29.79 32.98
v 0.02 29.94 31.96
v 0.02 29.91 32.24
v 0.02 29.95 31.50
v 0.02 29.94 31.04
v 0.02 29.89 32.42
v 0.02 29.89 30.58
v 0.02 29.91 30.76
v 0.01 29.71 29.67
v 0.02 29.79 30.02
v 0.02 29.82 30.12
v 0.01 29.58 29.23
v 0.01 29.60 29.30
v 0.00 29.42 28.80
v 0.01 29.58 33.77
v 0.00 29.22 28.37
v 0.00 29.33 28.61
v 0.00 29.00 0.00
v 0.00 29.00 27.96
v 0.00 29.00 60.00
v 0.00 24.96 38.18
v 0.00 25.67 37.93
v 0.00 26.34 37.61
v 0.00 26.97 37.22
v 0.00 27.56 36.76
v 0.00 28.10 36.25
v 0.00 28.58 35.67
v 0.00 28.99 35.05
v 0.00 28.99 27.95
v 0.00 28.58 27.33
v 0.00 28.10 26.75
v 0.00 27.56 26.24
v 0.00 26.97 25.78
v 0.00 26.34 25.39
v 0.00 25.67 25.07
v 0.00 24.96 24.82
v 2.00 25.00 34.37
v 2.00 25.29 34.15
v 2.00 25.56 33.88
v 2.00 25.80 33.60
v 2.00 26.01 33.29
v 2.00 26.18 32.95
v 2.00 26.32 32.61
v 2.00 26.42 32.24
v 2.00 26.48 31.87
v 2.00 26.50 31.50
v 2.00 26.48 31.13
v 2.00 26.42 30.76
v 2.00 26.32 30.39
v 2.00 26.18 30.05
v 2.00 26.01 29.71
v 2.00 25.80 29.40
v 2.00 25.56 29.12
v 2.00 25.29 28.86
v 2.00 25.00 28.63
v 2.00 24.68 28.43
v 0.12 24.35 24.74
v 0.35 24.35 24.90
v 0.00 24.35 24.67
v 0.44 24.35 24.97
v 0.67 24.35 25.17
v 0.73 24.35 25.22
v 1.01 24.35 25.51
v 1.18 24.35 25.73
v 1.40 24.35 26.05
v 1.23 24.35 25.81
v 1.59 24.35 26.41
v 1.46 24.35 26.17
v 1.65 24.35 26.56
v 1.75 24.35 26.79
v 1.78 24.35 26.90
v 1.82 24.35 27.01
v 1.92 24.35 27.41
v 1.80 24.35 26.96
v 1.98 24.35 27.82
v 1.98 24.35 27.83
v 2.00 24.35 28.24
v 2.00 24.68 34.57
v 2.00 24.35 34.76
v 2.00 24.35 34.73
v 1.99 24.35 35.04
v 1.97 24.35 35.18
v 1.94 24.35 35.47
v 1.91 24.35 35.61
v 1.85 24.35 35.89
v 1.78 24.35 36.10
v 1.80 24.35 36.04
v 1.71 24.35 36.30
v 1.66 24.35 36.43
v 1.65 24.35 36.45
v 1.28 24.35 37.14
v 1.49 24.35 36.79
v 1.23 24.35 37.19
v 1.03 24.35 37.46
v 0.92 24.35 37.59
v 0.97 24.35 37.53
v 0.64 24.35 37.86
v 0.33 24.35 38.11
v 0.35 24.35 38.10
v 0.00 24.35 38.33
v 2.00 24.35 28.27
v 0.35 25.58 37.72
v 0.35 26.23 37.41
v 0.35 26.84 37.03
v 0.35 27.41 36.59
v 0.35 27.93 36.09
v 0.35 28.39 35.54
v 0.35 28.79 34.94
v 0.35 28.39 27.46
v 0.35 27.93 26.91
v 0.35 27.41 26.41
v 0.35 26.84 25.97
v 0.35 26.23 25.59
v 0.35 25.58 25.28
v 0.35 24.90 25.04
v 0.35 24.90 37.96
v 0.68 25.48 37.48
v 0.68 26.10 37.18
v 0.68 26.69 36.82
v 0.68 27.24 36.39
v 0.68 27.74 35.91
v 0.68 28.18 35.38
v 0.68 28.57 34.80
v 0.35 29.13 34.30
v 0.68 28.89 34.19
v 0.35 29.39 33.63
v 0.68 29.14 33.54
v 0.35 29.58 32.93
v 0.68 29.32 32.88
v 0.35 29.70 32.22
v 0.68 29.44 32.19
v 0.35 29.74 31.50
v 0.68 29.47 31.50
v 0.35 29.70 30.78
v 0.68 29.44 30.81
v 0.35 29.58 30.07
v 0.68 29.32 30.12
v 0.35 29.39 29.37
v 0.68 29.14 29.46
v 0.35 29.13 28.70
v 0.68 28.89 28.81
v 0.35 28.79 28.06
v 0.68 28.57 28.20
v 0.68 28.18 27.62
v 0.68 27.74 27.09
v 0.68 27.24 26.61
v 0.68 26.69 26.18
v 0.68 26.10 25.82
v 0.68 25.48 25.52
v 0.68 24.82 25.29
v 0.68 24.82 37.71
v 0.97 25.36 37.21
v 0.97 25.96 36.92
v 0.97 26.52 36.57
v 0.97 27.04 36.17
v 0.97 27.52 35.71
v 0.97 27.94 35.20
v 0.97 28.31 34.65
v 0.97 28.62 34.07
v 0.97 28.86 33.45
v 0.97 29.04 32.81
v 0.97 29.14 32.16
v 0.97 29.18 31.50
v 0.97 29.14 30.84
v 0.97 29.04 30.19
v 0.97 28.86 29.55
v 0.97 28.62 28.93
v 0.97 28.31 28.35
v 0.97 27.94 27.80
v 0.97 27.52 27.29
v 0.97 27.04 26.83
v 0.97 26.52 26.43
v 0.97 25.96 26.08
v 0.97 25.36 25.79
v 0.97 24.74 25.57
v 0.97 24.74 37.43
v 1.24 25.24 36.91
v 1.24 25.80 36.64
v 1.24 26.34 36.31
v 1.24 26.83 35.92
v 1.24 27.28 35.49
v 1.24 27.68 35.01
v 1.24 28.03 34.49
v 1.24 28.32 33.93
v 1.24 28.55 33.35
v 1.24 28.72 32.74
v 1.24 28.82 32.13
v 1.24 28.85 31.50
v 1.24 28.82 30.87
v 1.24 28.72 30.26
v 1.24 28.55 29.65
v 1.24 28.32 29.07
v 1.24 28.03 28.51
v 1.24 27.68 27.99
v 1.24 27.28 27.51
v 1.24 26.83 27.08
v 1.24 26.34 26.69
v 1.24 25.80 26.36
v 1.24 25.24 26.09
v 1.24 24.65 25.89
v 1.24 24.65 37.11
v 1.46 25.11 36.58
v 1.46 25.64 36.33
v 1.46 26.14 36.02
v 1.46 26.60 35.66
v 1.46 27.03 35.25
v 1.46 27.40 34.80
v 1.46 27.73 34.31
v 1.46 28.00 33.78
v 1.46 28.22 33.24
v 1.46 28.37 32.67
v 1.46 28.47 32.09
v 1.46 28.50 31.50
v 1.46 28.47 30.91
v 1.46 28.37 30.33
v 1.46 28.22 29.76
v 1.46 28.00 29.22
v 1.46 27.73 28.69
v 1.46 27.40 28.20
v 1.46 27.03 27.75
v 1.46 26.60 27.34
v 1.46 26.14 26.98
v 1.46 25.64 26.67
v 1.46 25.11 26.42
v 1.46 24.55 26.22
v 1.46 24.55 36.78
v 1.65 24.96 36.24
v 1.65 25.46 36.00
v 1.65 25.92 35.71
v 1.65 26.36 35.37
v 1.65 26.75 34.99
v 1.65 27.10 34.57
v 1.65 27.41 34.12
v 1.65 27.66 33.63
v 1.65 27.86 33.12
v 1.65 28.01 32.59
v 1.65 28.10 32.05
v 1.65 28.13 31.50
v 1.65 28.10 30.95
v 1.65 28.01 30.41
v 1.65 27.86 29.88
v 1.65 27.66 29.37
v 1.65 27.41 28.88
v 1.65 27.10 28.43
v 1.65 26.75 28.01
v 1.65 26.36 27.63
v 1.65 25.92 27.29
v 1.65 25.46 27.00
v 1.65 24.96 26.76
v 1.65 24.44 26.58
v 1.80 25.27 35.66
v 1.80 25.70 35.39
v 1.80 26.10 35.08
v 1.80 26.47 34.73
v 1.80 26.79 34.34
v 1.80 27.07 33.92
v 1.80 27.31 33.47
v 1.80 27.49 33.00
v 1.80 27.63 32.51
v 1.80 27.71 32.01
v 1.80 27.74 31.50
v 1.80 27.71 30.99
v 1.80 27.63 30.49
v 1.80 27.49 30.00
v 1.80 27.31 29.53
v 1.80 27.07 29.08
v 1.80 26.79 28.66
v 1.80 26.47 28.27
v 1.80 26.10 27.92
v 1.80 25.70 27.61
v 1.80 25.27 27.34
v 1.80 24.81 27.12
v 1.80 24.81 35.88
v 1.91 25.08 35.30
v 1.91 25.47 35.06
v 1.91 25.84 34.77
v 1.91 26.17 34.45
v 1.91 26.47 34.10
v 1.91 26.73 33.71
v 1.91 26.94 33.30
v 1.91 27.11 32.87
v 1.91 27.23 32.42
v 1.91 27.31 31.96
v 1.91 27.33 31.50
v 1.91 27.31 31.04
v 1.91 27.23 30.58
v 1.91 27.11 30.13
v 1.91 26.94 29.70
v 1.91 26.73 29.29
v 1.91 26.47 28.90
v 1.91 26.17 28.55
v 1.91 25.84 28.23
v 1.91 25.47 27.94
v 1.91 25.08 27.70
v 1.91 24.66 27.50
v 1.91 24.66 35.50
v 1.98 24.88 34.94
v 1.98 25.23 34.72
v 1.98 25.57 34.46
v 1.98 25.87 34.17
v 1.98 26.14 33.85
v 1.98 26.37 33.50
v 1.98 26.56 33.13
v 1.98 26.72 32.74
v 1.98 26.83 32.33
v 1.98 26.90 31.92
v 1.98 26.92 31.50
v 1.98 26.90 31.08
v 1.98 26.83 30.67
v 1.98 26.72 30.26
v 1.98 26.56 29.87
v 1.98 26.37 29.50
v 1.98 26.14 29.15
v 1.98 25.87 28.83
v 1.98 25.57 28.54
v 1.98 25.23 28.28
v 1.98 24.88 28.06
v 1.98 24.50 27.88
v 1.98 24.50 35.12
v 1.65 24.44 36.42
v 5.00 24.35 19.25
v 5.00 24.35 43.75
v 0.00 24.35 43.75
v 0.00 24.35 19.25
v 5.00 21.65 43.75
v 0.00 21.65 43.75
v 0.00 21.65 19.25
v 5.00 21.65 19.25
v 0.00 17.00 60.00
v -0.00 17.42 35.67
v -0.00 17.01 35.05
v -0.00 19.66 37.61
v -0.00 19.03 37.22
v -0.00 21.04 38.18
v -0.00 17.90 36.25
v -0.00 20.33 37.93
v 0.00 21.65 38.33
v -0.00 18.44 36.76
v 0.00 17.00 35.04
v -0.00 21.04 24.82
v 0.00 21.65 24.67
v 0.00 17.00 0.00
v 0.00 17.00 27.96
v -0.00 17.01 27.95
v -0.00 20.33 25.07
v -0.00 19.03 25.78
v -0.00 19.66 25.39
v -0.00 17.90 26.75
v -0.00 18.44 26.24
v -0.00 17.42 27.33
v 2.00 21.65 28.27
v 2.00 21.65 34.73
v 1.99 21.65 27.96
v 2.00 21.65 28.24
v 1.82 21.65 35.99
v 1.80 21.65 36.04
v 2.00 21.65 34.76
v 1.40 21.65 36.95
v 1.23 21.65 37.19
v 1.78 21.65 36.10
v 1.94 21.65 27.53
v 1.97 21.65 27.82
v 1.18 21.65 37.27
v 1.75 21.65 36.21
v 1.65 21.65 36.44
v 1.92 21.65 35.59
v 1.98 21.65 35.17
v 1.98 21.65 35.18
v 0.92 21.65 25.41
v 0.97 21.65 25.47
v 0.12 21.65 38.26
v 0.44 21.65 38.03
v 0.35 21.65 38.10
v 1.01 21.65 37.49
v 1.59 21.65 36.59
v 1.46 21.65 36.83
v 1.71 21.65 26.70
v 1.78 21.65 26.90
v 1.49 21.65 26.21
v 1.65 21.65 26.55
v 1.03 21.65 25.54
v 1.23 21.65 25.81
v 0.64 21.65 25.14
v 0.73 21.65 37.78
v 0.67 21.65 37.83
v 1.80 21.65 26.96
v 1.66 21.65 26.57
v 0.33 21.65 24.89
v 0.35 21.65 24.90
v 1.85 21.65 27.11
v 1.91 21.65 27.39
v 1.28 21.65 25.86
v 2.00 21.00 28.63
v 2.00 20.71 28.86
v 2.00 20.44 29.12
v 2.00 20.20 29.40
v 2.00 19.99 29.71
v 2.00 19.82 30.05
v 2.00 19.68 30.39
v 2.00 19.58 30.76
v 2.00 19.52 31.13
v 2.00 19.50 31.50
v 2.00 19.52 31.87
v 2.00 19.58 32.24
v 2.00 19.68 32.61
v 2.00 19.82 32.95
v 2.00 19.99 33.29
v 2.00 20.20 33.60
v 2.00 20.44 33.88
v 2.00 20.71 34.15
v 2.00 21.00 34.37
v 2.00 21.32 34.57
v 0.00 16.78 28.37
v 0.00 16.59 28.79
v 0.00 16.67 28.61
v 0.01 16.42 29.23
v 0.01 16.40 29.30
v 0.01 16.29 29.67
v 0.02 16.18 30.12
v 0.02 16.11 30.58
v 0.02 16.21 30.02
v 0.02 16.06 31.04
v 0.02 16.09 30.76
v 0.02 16.05 31.50
v 0.02 16.06 31.96
v 0.02 16.11 32.42
v 0.02 16.18 32.88
v 0.02 16.09 32.24
v 0.01 16.29 33.33
v 0.02 16.21 32.98
v 0.01 16.42 33.77
v 0.00 16.58 34.20
v 0.01 16.40 33.70
v 0.00 16.78 34.63
v 0.00 16.67 34.39
v 2.00 21.32 28.43
v 0.35 20.42 25.28
v 0.35 19.77 25.59
v 0.35 19.16 25.97
v 0.35 18.59 26.41
v 0.35 18.07 26.91
v 0.35 17.61 27.46
v 0.35 17.21 28.06
v 0.35 17.61 35.54
v 0.35 18.07 36.09
v 0.35 18.59 36.59
v 0.35 19.16 37.03
v 0.35 19.77 37.41
v 0.35 20.42 37.72
v 0.35 21.10 37.96
v 0.35 21.10 25.04
v 0.68 20.52 25.52
v 0.68 19.90 25.82
v 0.68 19.31 26.18
v 0.68 18.76 26.61
v 0.68 18.26 27.09
v 0.68 17.82 27.62
v 0.68 17.43 28.20
v 0.35 16.87 28.70
v 0.68 17.11 28.81
v 0.35 16.61 29.37
v 0.68 16.86 29.46
v 0.35 16.42 30.07
v 0.68 16.68 30.12
v 0.35 16.30 30.78
v 0.68 16.56 30.81
v 0.35 16.26 31.50
v 0.68 16.53 31.50
v 0.35 16.30 32.22
v 0.68 16.56 32.19
v 0.35 16.42 32.93
v 0.68 16.68 32.88
v 0.35 16.61 33.63
v 0.68 16.86 33.54
v 0.35 16.87 34.30
v 0.68 17.11 34.19
v 0.35 17.21 34.94
v 0.68 17.43 34.80
v 0.68 17.82 35.38
v 0.68 18.26 35.91
v 0.68 18.76 36.39
v 0.68 19.31 36.82
v 0.68 19.90 37.18
v 0.68 20.52 37.48
v 0.68 21.18 37.71
v 0.68 21.18 25.29
v 0.97 20.64 25.79
v 0.97 20.04 26.08
v 0.97 19.48 26.43
v 0.97 18.95 26.83
v 0.97 18.48 27.29
v 0.97 18.06 27.80
v 0.97 17.69 28.35
v 0.97 17.38 28.93
v 0.97 17.14 29.55
v 0.97 16.96 30.19
v 0.97 16.86 30.84
v 0.97 16.82 31.50
v 0.97 16.86 32.16
v 0.97 16.96 32.81
v 0.97 17.14 33.45
v 0.97 17.38 34.07
v 0.97 17.69 34.65
v 0.97 18.06 35.20
v 0.97 18.48 35.71
v 0.97 18.95 36.17
v 0.97 19.48 36.57
v 0.97 20.04 36.92
v 0.97 20.64 37.21
v 0.97 21.26 37.43
v 0.97 21.26 25.57
v 1.24 20.76 26.09
v 1.24 20.20 26.36
v 1.24 19.66 26.69
v 1.24 19.17 27.08
v 1.24 18.72 27.51
v 1.24 18.32 27.99
v 1.24 17.97 28.51
v 1.24 17.68 29.07
v 1.24 17.45 29.65
v 1.24 17.28 30.26
v 1.24 17.18 30.87
v 1.24 17.15 31.50
v 1.24 17.18 32.13
v 1.24 17.28 32.74
v 1.24 17.45 33.35
v 1.24 17.68 33.93
v 1.24 17.97 34.49
v 1.24 18.32 35.01
v 1.24 18.72 35.49
v 1.24 19.17 35.92
v 1.24 19.66 36.31
v 1.24 20.20 36.64
v 1.24 20.76 36.91
v 1.24 21.35 37.11
v 1.24 21.35 25.89
v 1.46 20.89 26.42
v 1.46 20.36 26.67
v 1.46 19.86 26.98
v 1.46 19.40 27.34
v 1.46 18.97 27.75
v 1.46 18.60 28.20
v 1.46 18.27 28.69
v 1.46 18.00 29.22
v 1.46 17.78 29.76
v 1.46 17.63 30.33
v 1.46 17.53 30.91
v 1.46 17.50 31.50
v 1.46 17.53 32.09
v 1.46 17.63 32.67
v 1.46 17.78 33.24
v 1.46 18.00 33.78
v 1.46 18.27 34.31
v 1.46 18.60 34.80
v 1.46 18.97 35.25
v 1.46 19.40 35.66
v 1.46 19.86 36.02
v 1.46 20.36 36.33
v 1.46 20.89 36.58
v 1.46 21.45 36.78
v 1.46 21.45 26.22
v 1.65 21.04 26.76
v 1.65 20.54 27.00
v 1.65 20.08 27.29
v 1.65 19.64 27.63
v 1.65 19.25 28.01
v 1.65 18.90 28.43
v 1.65 18.59 28.88
v 1.65 18.34 29.37
v 1.65 18.14 29.88
v 1.65 17.99 30.41
v 1.65 17.90 30.95
v 1.65 17.87 31.50
v 1.65 17.90 32.05
v 1.65 17.99 32.59
v 1.65 18.14 33.12
v 1.65 18.34 33.63
v 1.65 18.59 34.12
v 1.65 18.90 34.57
v 1.65 19.25 34.99
v 1.65 19.64 35.37
v 1.65 20.08 35.71
v 1.65 20.54 36.00
v 1.65 21.04 36.24
v 1.65 21.56 36.42
v 1.80 20.73 27.34
v 1.80 20.30 27.61
v 1.80 19.90 27.92
v 1.80 19.53 28.27
v 1.80 19.21 28.66
v 1.80 18.93 29.08
v 1.80 18.69 29.53
v 1.80 18.51 30.00
v 1.80 18.37 30.49
v 1.80 18.29 30.99
v 1.80 18.26 31.50
v 1.80 18.29 32.01
v 1.80 18.37 32.51
v 1.80 18.51 33.00
v 1.80 18.69 33.47
v 1.80 18.93 33.92
v 1.80 19.21 34.34
v 1.80 19.53 34.73
v 1.80 19.90 35.08
v 1.80 20.30 35.39
v 1.80 20.73 35.66
v 1.80 21.19 35.88
v 1.80 21.19 27.12
v 1.91 20.92 27.70
v 1.91 20.53 27.94
v 1.91 20.16 28.23
v 1.91 19.83 28.55
v 1.91 19.53 28.90
v 1.91 19.27 29.29
v 1.91 19.06 29.70
v 1.91 18.89 30.13
v 1.91 18.77 30.58
v 1.91 18.69 31.04
v 1.91 18.67 31.50
v 1.91 18.69 31.96
v 1.91 18.77 32.42
v 1.91 18.89 32.87
v 1.91 19.06 33.30
v 1.91 19.27 33.71
v 1.91 19.53 34.10
v 1.91 19.83 34.45
v 1.91 20.16 34.77
v 1.91 20.53 35.06
v 1.91 20.92 35.30
v 1.91 21.34 35.50
v 1.91 21.34 27.50
v 1.98 21.12 28.06
v 1.98 20.77 28.28
v 1.98 20.43 28.54
v 1.98 20.13 28.83
v 1.98 19.86 29.15
v 1.98 19.63 29.50
v 1.98 19.44 29.87
v 1.98 19.28 30.26
v 1.98 19.17 30.67
v 1.98 19.10 31.08
v 1.98 19.08 31.50
v 1.98 19.10 31.92
v 1.98 19.17 32.33
v 1.98 19.28 32.74
v 1.98 19.44 33.13
v 1.98 19.63 33.50
v 1.98 19.86 33.85
v 1.98 20.13 34.17
v 1.98 20.43 34.46
v 1.98 20.77 34.72
v 1.98 21.12 34.94
v 1.98 21.50 35.12
v 1.98 21.50 27.88
v 1.65 21.56 26.58
v 0.11 14.91 60.00
v 0.11 14.91 0.00
v 0.44 12.84 0.00
v 0.44 12.84 60.00
v 0.98 10.82 0.00
v 0.98 10.82 60.00
v 1.73 8.87 0.00
v 1.73 8.87 60.00
v 2.68 7.00 0.00
v 2.68 7.00 60.00
v 3.82 5.24 0.00
v 3.82 5.24 60.00
v 5.14 3.62 0.00
v 5.14 3.62 60.00
v 6.62 2.14 0.00
v 6.62 2.14 60.00
v 8.24 0.82 0.00
v 8.24 0.82 60.00
v 10.00 -0.32 0.00
v 10.00 -0.32 60.00
v 11.87 -1.27 0.00
v 11.87 -1.27 60.00
v 13.82 -2.02 0.00
v 13.82 -2.02 60.00
v 15.84 -2.56 0.00
v 15.84 -2.56 60.00
v 17.91 -2.89 0.00
v 17.91 -2.89 60.00
v 20.00 -3.00 13.50
v 20.00 -3.00 49.50
v 20.00 -3.00 0.00
v 20.00 -3.00 60.00
v 97.86 3.62 -0.00
v 87.16 -2.56 -0.00
v 85.09 -2.89 -0.00
v 89.18 -2.02 -0.00
v 96.38 2.14 -0.00
v 94.76 0.82 -0.00
v 93.00 46.32 0.00
v 102.56 33.16 0.00
v 102.89 31.09 0.00
v 96.38 43.86 0.00
v 97.86 42.38 0.00
v 91.13 -1.27 -0.00
v 93.00 -0.32 -0.00
v 83.00 -3.00 0.00
v 100.32 7.00 -0.00
v 99.18 5.24 -0.00
v 102.02 10.82 -0.00
v 101.27 8.87 -0.00
v 102.02 35.18 0.00
v 99.18 40.76 0.00
v 100.32 39.00 0.00
v 94.76 45.18 0.00
v 103.00 29.00 -0.00
v 89.18 48.02 0.00
v 91.13 47.27 0.00
v 102.89 14.91 -0.00
v 102.56 12.84 -0.00
v 101.27 37.13 0.00
v 87.16 48.56 0.00
v 85.09 48.89 0.00
v 103.00 17.00 -0.00
v 103.00 29.00 3.00
v 103.00 17.00 3.00
v 20.00 0.00 13.50
v 20.00 0.00 49.50
v 82.62 -3.00 21.48
v 83.00 -3.00 60.00
v 70.00 -3.00 49.50
v 81.20 -3.00 15.00
v 80.88 -3.00 15.21
v 81.88 -3.00 21.32
v 82.25 -3.00 21.42
v 70.00 -3.00 13.50
v 79.51 -3.00 17.81
v 79.51 -3.00 18.19
v 80.59 -3.00 15.46
v 81.53 -3.00 14.82
v 82.25 -3.00 14.58
v 81.88 -3.00 14.68
v 81.53 -3.00 21.18
v 79.63 -3.00 18.94
v 79.75 -3.00 19.30
v 79.55 -3.00 17.43
v 79.75 -3.00 16.70
v 79.63 -3.00 17.06
v 80.33 -3.00 15.73
v 81.20 -3.00 21.00
v 80.59 -3.00 20.54
v 80.88 -3.00 20.79
v 79.55 -3.00 18.57
v 80.10 -3.00 16.04
v 79.91 -3.00 16.36
v 80.10 -3.00 19.96
v 80.33 -3.00 20.27
v 79.91 -3.00 19.64
v 83.00 -3.00 14.50
v 82.62 -3.00 14.52
v 83.00 -3.00 21.50
v 70.00 0.00 49.50
v 70.00 0.00 13.50
v 83.00 0.00 3.00
v 80.88 0.00 15.21
v 81.53 0.00 14.82
v 81.88 0.00 14.68
v 81.20 0.00 15.00
v 80.33 0.00 15.73
v 80.59 0.00 15.46
v 80.10 0.00 16.04
v 79.55 0.00 18.57
v 79.51 0.00 18.19
v 82.62 0.00 21.48
v 82.25 0.00 21.42
v 79.75 0.00 16.70
v 79.91 0.00 16.36
v 79.55 0.00 17.43
v 79.63 0.00 17.06
v 79.51 0.00 17.81
v 79.75 0.00 19.30
v 81.88 0.00 21.32
v 81.53 0.00 21.18
v 83.00 0.00 60.00
v 82.25 0.00 14.58
v 82.62 0.00 14.52
v 79.63 0.00 18.94
v 81.20 0.00 21.00
v 80.88 0.00 20.79
v 80.59 0.00 20.54
v 80.33 0.00 20.27
v 80.10 0.00 19.96
v 79.91 0.00 19.64
v 83.00 0.00 21.50
v 20.00 0.00 60.00
v 83.00 0.00 14.50
v 20.00 0.00 3.00
v 83.38 -3.00 21.48
v 83.19 -3.00 21.49
v 83.19 0.00 21.49
v 83.57 -2.99 21.45
v 83.38 0.00 21.48
v 83.57 0.01 21.45
v 83.75 -2.99 21.42
v 83.94 -2.98 21.37
v 83.75 0.02 21.42
v 83.94 0.03 21.37
v 84.12 -2.97 21.32
v 84.47 -2.95 21.18
v 84.12 0.04 21.32
v 84.30 0.05 21.25
v 84.80 -2.92 21.00
v 84.47 0.06 21.18
v 84.78 0.09 21.01
v 84.80 0.10 21.00
v 85.12 0.13 20.79
v 85.12 -2.89 20.79
v 85.09 -2.89 20.80
v 85.41 -2.85 20.54
v 85.67 -2.82 20.27
v 85.41 0.17 20.54
v 85.90 -2.79 19.96
v 85.67 0.21 20.27
v 86.09 -2.76 19.64
v 85.90 0.25 19.96
v 86.25 -2.73 19.30
v 86.09 0.28 19.64
v 86.32 0.33 19.12
v 86.37 -2.71 18.94
v 86.32 -2.72 19.12
v 86.25 0.31 19.30
v 86.37 0.34 18.94
v 86.42 0.35 18.75
v 86.45 -2.70 18.57
v 86.42 -2.71 18.75
v 86.45 0.35 18.57
v 86.48 -2.69 18.38
v 86.49 -2.69 18.19
v 86.48 0.36 18.38
v 86.49 0.36 18.19
v 86.50 -2.69 18.00
v 86.50 0.36 18.00
v 86.49 0.36 17.81
v 86.49 -2.69 17.81
v 86.48 0.36 17.62
v 86.48 -2.69 17.62
v 86.45 0.35 17.43
v 86.45 -2.70 17.43
v 86.42 0.35 17.25
v 86.37 0.34 17.06
v 86.42 -2.71 17.25
v 86.37 -2.71 17.06
v 86.32 0.33 16.88
v 86.25 0.31 16.70
v 86.32 -2.72 16.88
v 86.25 -2.73 16.70
v 86.09 0.28 16.36
v 86.09 -2.76 16.36
v 85.90 0.25 16.04
v 85.90 -2.79 16.04
v 85.67 0.21 15.73
v 85.67 -2.82 15.73
v 85.41 0.17 15.46
v 85.41 -2.85 15.46
v 85.12 0.13 15.21
v 84.80 0.10 15.00
v 85.09 -2.89 15.20
v 85.12 -2.89 15.21
v 84.80 -2.92 15.00
v 84.78 0.09 14.99
v 84.47 0.06 14.82
v 84.47 -2.95 14.82
v 84.30 0.05 14.75
v 84.12 0.04 14.68
v 83.94 -2.98 14.63
v 84.12 -2.97 14.68
v 83.94 0.03 14.63
v 83.75 0.02 14.58
v 83.75 -2.99 14.58
v 83.57 -2.99 14.55
v 83.57 0.01 14.55
v 83.38 0.00 14.52
v 83.38 -3.00 14.52
v 83.19 -3.00 14.51
v 83.19 0.00 14.51
v 18.22 0.09 60.00
v 18.22 0.09 3.00
v 16.47 0.37 60.00
v 14.75 0.83 60.00
v 16.47 0.37 3.00
v 13.09 1.47 60.00
v 14.75 0.83 3.00
v 11.50 2.28 60.00
v 13.09 1.47 3.00
v 10.01 3.25 60.00
v 11.50 2.28 3.00
v 8.62 4.37 60.00
v 10.01 3.25 3.00
v 7.37 5.62 60.00
v 8.62 4.37 3.00
v 6.25 7.01 60.00
v 7.37 5.62 3.00
v 5.28 8.50 60.00
v 6.25 7.01 3.00
v 4.47 10.09 60.00
v 5.28 8.50 3.00
v 3.83 11.75 60.00
v 4.47 10.09 3.00
v 3.37 13.47 60.00
v 3.83 11.75 3.00
v 3.09 15.22 60.00
v 3.37 13.47 3.00
v 3.00 17.00 60.00
v 3.09 15.22 3.00
v 3.00 17.00 3.00
v 5.00 20.90 16.40
v 5.00 25.10 16.40
v 5.00 25.10 46.60
v 5.00 20.90 46.60
v 13.00 20.90 46.60
v 13.00 25.10 46.60
v 13.00 25.10 16.40
v 13.00 20.90 16.40
v 13.00 27.10 48.60
v 13.00 18.90 48.60
v 13.00 18.90 14.40
v 13.00 27.10 14.40
v 3.00 27.10 48.60
v 3.00 18.90 48.60
v 3.00 18.90 14.40
v 3.00 27.10 14.40
v 3.00 29.00 3.00
v 3.00 29.00 60.00
v 3.09 30.78 60.00
v 3.37 32.53 60.00
v 3.09 30.78 3.00
v 3.83 34.25 60.00
v 3.37 32.53 3.00
v 4.47 35.91 60.00
v 3.83 34.25 3.00
v 5.28 37.50 60.00
v 4.47 35.91 3.00
v 6.25 38.99 60.00
v 5.28 37.50 3.00
v 7.37 40.38 60.00
v 6.25 38.99 3.00
v 8.62 41.63 60.00
v 7.37 40.38 3.00
v 10.01 42.75 60.00
v 8.62 41.63 3.00
v 11.50 43.72 60.00
v 10.01 42.75 3.00
v 13.09 44.53 60.00
v 11.50 43.72 3.00
v 14.75 45.17 60.00
v 13.09 44.53 3.00
v 16.47 45.63 60.00
v 14.75 45.17 3.00
v 18.22 45.91 60.00
v 16.47 45.63 3.00
v 20.00 46.00 60.00
v 18.22 45.91 3.00
v 20.00 46.00 3.00
v 85.09 -2.89 60.00
v 84.78 0.09 60.00
v 87.16 -2.56 60.00
v 89.18 -2.02 60.00
v 88.25 0.83 60.00
v 91.13 -1.27 60.00
v 89.91 1.47 60.00
v 83.00 46.00 60.00
v 84.78 45.91 60.00
v 86.53 0.37 60.00
v 93.00 -0.32 60.00
v 94.76 0.82 60.00
v 92.99 3.25 60.00
v 96.38 2.14 60.00
v 94.38 4.37 60.00
v 91.50 2.28 60.00
v 101.27 37.13 60.00
v 98.53 35.91 60.00
v 99.17 34.25 60.00
v 100.32 39.00 60.00
v 97.72 37.50 60.00
v 93.00 46.32 60.00
v 91.50 43.72 60.00
v 92.99 42.75 60.00
v 91.13 47.27 60.00
v 89.91 44.53 60.00
v 89.18 48.02 60.00
v 88.25 45.17 60.00
v 87.16 48.56 60.00
v 86.53 45.63 60.00
v 85.09 48.89 60.00
v 102.02 35.18 60.00
v 99.63 32.53 60.00
v 97.86 42.38 60.00
v 96.38 43.86 60.00
v 94.38 41.63 60.00
v 94.76 45.18 60.00
v 99.18 40.76 60.00
v 96.75 38.99 60.00
v 95.63 40.38 60.00
v 103.00 29.00 60.00
v 102.89 31.09 60.00
v 99.91 30.78 60.00
v 102.56 33.16 60.00
v 100.32 7.00 60.00
v 97.72 8.50 60.00
v 96.75 7.01 60.00
v 101.27 8.87 60.00
v 98.53 10.09 60.00
v 102.02 10.82 60.00
v 99.17 11.75 60.00
v 102.56 12.84 60.00
v 99.63 13.47 60.00
v 103.00 17.00 60.00
v 100.00 17.00 60.00
v 99.91 15.22 60.00
v 100.00 29.00 60.00
v 97.86 3.62 60.00
v 95.63 5.62 60.00
v 99.18 5.24 60.00
v 102.89 14.91 60.00
v 100.00 29.00 18.70
v 100.00 17.00 18.70
v 102.00 29.50 18.70
v 102.00 16.50 18.70
v 99.99 16.50 18.70
v 99.99 29.50 18.70
v 102.00 16.50 12.00
v 99.99 16.50 12.00
v 102.00 29.50 12.00
v 99.99 29.50 12.00
v 100.00 29.00 12.00
v 100.00 17.00 12.00
v 100.00 29.00 10.50
v 100.00 17.00 10.50
v 88.25 0.83 3.00
v 86.53 0.37 3.00
v 89.91 1.47 3.00
v 91.50 2.28 3.00
v 92.99 3.25 3.00
v 94.38 4.37 3.00
v 95.63 5.62 3.00
v 96.75 7.01 3.00
v 97.72 8.50 3.00
v 98.53 10.09 3.00
v 99.17 11.75 3.00
v 99.63 13.47 3.00
v 84.78 0.09 3.00
v 99.91 15.22 10.50
v 99.73 14.00 10.50
v 99.73 14.00 3.00
v 99.17 34.25 3.00
v 99.63 32.53 3.00
v 98.53 35.91 3.00
v 97.72 37.50 3.00
v 96.75 38.99 3.00
v 95.63 40.38 3.00
v 94.38 41.63 3.00
v 92.99 42.75 3.00
v 91.50 43.72 3.00
v 89.91 44.53 3.00
v 88.25 45.17 3.00
v 86.53 45.63 3.00
v 84.78 45.91 3.00
v 83.00 46.00 3.00
v 99.73 32.00 10.50
v 99.73 32.00 3.00
v 99.91 30.78 10.50
v 101.00 32.00 10.50
v 101.00 14.00 10.50
v 101.00 14.00 3.00
v 101.00 32.00 3.00
v 101.00 29.50 3.00
v 101.00 16.50 3.00
v 102.99 16.50 3.00
v 102.99 29.50 3.00
v 102.99 29.60 3.01
v 101.00 29.60 3.01
v 102.99 29.71 3.02
v 101.00 29.71 3.02
v 102.98 29.81 3.05
v 101.00 29.81 3.05
v 102.98 29.91 3.09
v 101.00 29.91 3.09
v 102.97 30.00 3.13
v 101.00 30.00 3.13
v 102.97 30.09 3.19
v 101.00 30.09 3.19
v 102.97 30.17 3.26
v 101.00 30.17 3.26
v 102.96 30.24 3.33
v 101.00 30.24 3.33
v 102.96 30.31 3.41
v 101.00 30.31 3.41
v 102.95 30.37 3.50
v 101.00 30.37 3.50
v 102.95 30.41 3.59
v 101.00 30.41 3.59
v 102.95 30.45 3.69
v 101.00 30.45 3.69
v 102.94 30.48 3.79
v 101.00 30.48 3.79
v 102.94 30.49 3.90
v 101.00 30.49 3.90
v 102.94 30.50 4.00
v 101.00 30.50 4.00
v 102.94 30.50 8.00
v 101.00 30.50 8.00
v 102.94 30.49 8.10
v 102.98 29.91 8.91
v 102.97 30.00 8.87
v 102.97 30.09 8.81
v 102.97 30.17 8.74
v 102.99 29.71 8.98
v 102.98 29.81 8.95
v 102.99 29.60 8.99
v 103.00 29.00 9.00
v 102.99 29.50 9.00
v 102.96 30.24 8.67
v 102.96 30.31 8.59
v 102.95 30.37 8.50
v 102.95 30.41 8.41
v 102.95 30.45 8.31
v 102.94 30.48 8.21
v 101.00 30.49 8.10
v 101.00 30.48 8.21
v 101.00 30.45 8.31
v 101.00 30.41 8.41
v 101.00 30.37 8.50
v 101.00 30.31 8.59
v 101.00 30.24 8.67
v 101.00 30.17 8.74
v 101.00 30.09 8.81
v 101.00 30.00 8.87
v 101.00 29.91 8.91
v 101.00 29.81 8.95
v 101.00 29.71 8.98
v 101.00 29.60 8.99
v 101.00 29.50 9.00
v 101.00 16.50 9.00
v 103.00 17.00 9.00
v 102.99 16.50 9.00
v 102.99 16.40 8.99
v 102.98 16.09 8.91
v 102.98 16.19 8.95
v 102.97 15.91 8.81
v 102.97 16.00 8.87
v 102.97 15.83 8.74
v 102.99 16.29 8.98
v 102.96 15.69 8.59
v 102.96 15.76 8.67
v 102.95 15.63 8.50
v 102.95 15.59 8.41
v 102.95 15.55 8.31
v 102.94 15.52 8.21
v 102.94 15.51 8.10
v 102.94 15.50 8.00
v 102.94 15.50 4.00
v 102.94 15.51 3.90
v 102.98 16.09 3.09
v 102.97 16.00 3.13
v 102.98 16.19 3.05
v 102.97 15.91 3.19
v 102.99 16.29 3.02
v 102.97 15.83 3.26
v 102.99 16.40 3.01
v 102.96 15.76 3.33
v 102.96 15.69 3.41
v 102.95 15.63 3.50
v 102.95 15.59 3.59
v 102.95 15.55 3.69
v 102.94 15.52 3.79
v 101.00 16.19 3.05
v 101.00 16.29 3.02
v 101.00 15.51 3.90
v 101.00 15.52 3.79
v 101.00 15.50 8.00
v 101.00 16.29 8.98
v 101.00 16.19 8.95
v 101.00 16.09 3.09
v 101.00 15.91 3.19
v 101.00 16.00 3.13
v 101.00 15.55 3.69
v 101.00 15.50 4.00
v 101.00 15.55 8.31
v 101.00 15.52 8.21
v 101.00 16.00 8.87
v 101.00 15.91 8.81
v 101.00 16.09 8.91
v 101.00 15.76 3.33
v 101.00 15.83 3.26
v 101.00 15.63 3.50
v 101.00 15.69 3.41
v 101.00 15.59 3.59
v 101.00 15.51 8.10
v 101.00 15.59 8.41
v 101.00 16.40 3.01
v 101.00 15.63 8.50
v 101.00 16.40 8.99
v 101.00 15.76 8.67
v 101.00 15.69 8.59
v 101.00 15.83 8.74
v 55.80 46.00 34.30
v 47.20 46.00 34.30
v 47.20 46.00 25.70
v 55.80 46.00 25.70
v 55.80 48.00 25.70
v 47.20 48.00 25.70
v 47.20 48.00 34.30
v 55.80 48.00 34.30
v 103.00 26.50 17.45
v 103.00 19.50 17.45
v 103.00 19.50 13.25
v 103.00 26.50 13.25
v 102.00 26.50 13.25
v 102.00 26.50 17.45
v 102.00 19.50 13.25
v 102.00 19.50 17.45
f 1 2 3
f 1 4 5
f 6 7 8
f 6 9 10
f 11 12 13
f 12 14 15
f 16 17 18
f 16 19 20
f 5 2 1
f 4 21 22
f 23 24 25
f 23 26 27
f 28 29 27
f 28 30 31
f 32 33 34
f 32 35 36
f 10 7 6
f 9 11 37
f 15 13 12
f 14 38 18
f 20 17 16
f 19 39 40
f 41 3 40
f 22 5 4
f 27 24 23
f 31 29 28
f 42 34 31
f 36 33 32
f 43 44 36
f 43 45 46
f 47 48 46
f 47 49 50
f 51 52 53
f 51 54 55
f 56 57 55
f 56 58 59
f 37 10 9
f 18 15 14
f 40 20 19
f 3 41 1
f 27 26 28
f 34 42 32
f 46 44 43
f 50 48 47
f 60 61 62
f 60 63 53
f 55 52 51
f 59 57 56
f 13 37 11
f 40 39 41
f 64 65 22
f 64 66 67
f 68 69 67
f 68 70 25
f 31 30 42
f 46 45 47
f 71 72 73
f 71 74 75
f 76 77 78
f 76 79 80
f 53 61 60
f 55 54 56
f 18 38 16
f 67 65 64
f 25 69 68
f 36 35 43
f 75 72 71
f 74 81 82
f 81 83 84
f 83 85 86
f 87 78 86
f 80 77 76
f 88 89 90
f 88 91 92
f 93 94 95
f 93 96 97
f 53 63 51
f 98 8 59
f 22 21 64
f 25 70 23
f 82 75 74
f 86 84 83
f 78 87 76
f 79 99 100
f 92 89 88
f 91 101 95
f 97 94 93
f 96 102 62
f 59 58 98
f 67 66 68
f 84 82 81
f 100 80 79
f 103 104 105
f 103 106 107
f 108 90 109
f 95 92 91
f 62 97 96
f 8 98 6
f 49 110 73
f 86 85 87
f 111 105 100
f 107 104 103
f 112 109 113
f 90 108 88
f 62 102 60
f 73 110 71
f 105 111 103
f 106 114 115
f 109 112 108
f 73 50 49
f 115 107 106
f 114 116 113
f 95 101 93
f 113 115 114
f 100 99 111
f 113 116 112
f 115 113 117
f 107 115 118
f 104 107 119
f 105 104 120
f 100 105 121
f 80 100 122
f 77 80 123
f 78 77 124
f 86 78 125
f 84 86 126
f 82 84 127
f 75 82 128
f 72 75 129
f 73 72 130
f 50 73 131
f 48 50 132
f 46 48 133
f 44 46 134
f 36 44 135
f 33 36 136
f 34 33 137
f 31 34 138
f 29 31 139
f 27 29 140
f 24 27 141
f 25 24 142
f 69 25 143
f 67 69 144
f 65 67 145
f 22 65 146
f 5 22 147
f 2 5 148
f 3 2 149
f 40 3 150
f 20 40 151
f 17 20 152
f 18 17 153
f 15 18 154
f 13 15 155
f 37 13 156
f 10 37 157
f 7 10 158
f 8 7 159
f 59 8 160
f 57 59 161
f 55 57 162
f 52 55 163
f 53 52 164
f 61 53 165
f 62 61 166
f 97 62 167
f 94 97 168
f 95 94 169
f 92 95 170
f 89 92 171
f 90 89 172
f 109 90 173
f 113 109 174
f 174 117 113
f 173 174 109
f 172 173 90
f 171 172 89
f 170 171 92
f 169 170 95
f 168 169 94
f 167 168 97
f 166 167 62
f 165 166 61
f 164 165 53
f 163 164 52
f 162 163 55
f 161 162 57
f 160 161 59
f 159 160 8
f 158 159 7
f 157 158 10
f 156 157 37
f 155 156 13
f 154 155 15
f 153 154 18
f 152 153 17
f 151 152 20
f 150 151 40
f 149 150 3
f 148 149 2
f 147 148 5
f 146 147 22
f 145 146 65
f 144 145 67
f 143 144 69
f 142 143 25
f 141 142 24
f 140 141 27
f 139 140 29
f 138 139 31
f 137 138 34
f 136 137 33
f 135 136 36
f 134 135 44
f 133 134 46
f 132 133 48
f 131 132 50
f 130 131 73
f 129 130 72
f 128 129 75
f 127 128 82
f 126 127 84
f 125 126 86
f 124 125 78
f 123 124 77
f 122 123 80
f 121 122 100
f 120 121 105
f 119 120 104
f 118 119 107
f 117 118 115
f 66 64 175
f 68 66 176
f 70 68 177
f 23 70 178
f 26 23 179
f 28 26 180
f 30 28 181
f 42 30 182
f 32 42 183
f 35 32 184
f 43 35 185
f 45 43 186
f 47 45 187
f 49 47 188
f 110 49 189
f 71 110 190
f 74 71 191
f 81 74 192
f 83 81 193
f 85 83 194
f 87 85 195
f 76 87 196
f 79 76 197
f 99 79 198
f 111 99 199
f 103 111 200
f 106 103 201
f 114 106 202
f 116 114 203
f 112 116 204
f 108 112 205
f 88 108 206
f 91 88 207
f 101 91 208
f 93 101 209
f 96 93 210
f 102 96 211
f 60 102 212
f 63 60 213
f 51 63 214
f 54 51 215
f 56 54 216
f 58 56 217
f 98 58 218
f 6 98 219
f 9 6 220
f 11 9 221
f 12 11 222
f 14 12 223
f 38 14 224
f 16 38 225
f 19 16 226
f 39 19 227
f 41 39 228
f 1 41 229
f 4 1 230
f 21 4 231
f 64 21 232
f 232 175 64
f 231 232 21
f 230 231 4
f 229 230 1
f 228 229 41
f 227 228 39
f 226 227 19
f 225 226 16
f 224 225 38
f 223 224 14
f 222 223 12
f 221 222 11
f 220 221 9
f 219 220 6
f 218 219 98
f 217 218 58
f 216 217 56
f 215 216 54
f 214 215 51
f 213 214 63
f 212 213 60
f 211 212 102
f 210 211 96
f 209 210 93
f 208 209 101
f 207 208 91
f 206 207 88
f 205 206 108
f 204 205 112
f 203 204 116
f 202 203 114
f 201 202 106
f 200 201 103
f 199 200 111
f 198 199 99
f 197 198 79
f 196 197 76
f 195 196 87
f 194 195 85
f 193 194 83
f 192 193 81
f 191 192 74
f 190 191 71
f 189 190 110
f 188 189 49
f 187 188 47
f 186 187 45
f 185 186 43
f 184 185 35
f 183 184 32
f 182 183 42
f 181 182 30
f 180 181 28
f 179 180 26
f 178 179 23
f 177 178 70
f 176 177 68
f 175 176 66
f 233 189 188
f 233 234 190
f 235 193 192
f 236 194 193
f 237 230 229
f 237 238 231
f 239 232 231
f 239 240 175
f 190 189 233
f 234 241 191
f 241 242 192
f 193 235 236
f 243 244 226
f 244 245 227
f 246 228 227
f 246 247 229
f 231 230 237
f 175 232 239
f 240 248 176
f 248 249 177
f 191 190 234
f 192 242 235
f 250 195 194
f 250 251 196
f 227 226 244
f 229 228 246
f 231 238 239
f 177 176 248
f 252 187 186
f 252 253 188
f 192 191 241
f 196 195 250
f 254 198 197
f 254 255 199
f 256 257 202
f 258 203 202
f 227 245 246
f 176 175 240
f 249 259 178
f 259 260 179
f 261 185 184
f 261 262 186
f 188 187 252
f 194 236 250
f 263 197 196
f 199 198 254
f 264 200 199
f 256 201 200
f 202 257 258
f 265 204 203
f 266 206 205
f 266 267 207
f 268 269 219
f 269 270 220
f 271 223 222
f 271 272 224
f 229 247 237
f 179 178 259
f 273 180 179
f 273 274 181
f 275 182 181
f 275 276 183
f 276 277 184
f 186 185 261
f 188 253 233
f 197 263 254
f 200 264 256
f 203 258 265
f 207 206 266
f 267 278 208
f 279 211 210
f 280 212 211
f 268 218 217
f 220 219 269
f 281 221 220
f 281 282 222
f 224 223 271
f 272 243 225
f 178 177 249
f 181 180 273
f 183 182 275
f 184 277 261
f 196 251 263
f 202 201 256
f 283 205 204
f 208 207 267
f 284 209 208
f 284 285 210
f 211 279 280
f 286 213 212
f 287 214 213
f 287 288 215
f 289 216 215
f 289 290 217
f 219 218 268
f 222 221 281
f 225 224 272
f 179 260 273
f 184 183 276
f 199 255 264
f 205 283 266
f 210 209 284
f 212 280 286
f 215 214 287
f 217 216 289
f 220 270 281
f 226 225 243
f 186 262 252
f 208 278 284
f 213 286 287
f 217 290 268
f 181 274 275
f 210 285 279
f 222 282 271
f 215 288 289
f 204 265 283
f 291 240 239
f 292 239 238
f 293 238 237
f 294 237 247
f 295 247 246
f 296 246 245
f 297 245 244
f 298 244 243
f 299 243 272
f 300 272 271
f 301 271 282
f 302 282 281
f 303 281 270
f 304 270 269
f 305 269 268
f 306 268 290
f 307 290 289
f 308 289 288
f 309 288 287
f 310 287 286
f 311 286 280
f 312 280 279
f 313 279 285
f 314 285 284
f 315 284 278
f 316 278 267
f 317 267 266
f 318 266 283
f 319 283 265
f 320 265 258
f 321 258 257
f 322 257 256
f 323 256 264
f 324 264 255
f 325 255 254
f 326 254 263
f 327 263 251
f 328 251 250
f 329 250 236
f 330 236 235
f 331 235 242
f 332 242 241
f 333 241 234
f 334 234 233
f 335 233 253
f 336 253 252
f 337 252 262
f 338 262 261
f 339 261 277
f 340 277 276
f 341 276 275
f 342 275 274
f 343 274 273
f 344 273 260
f 345 260 259
f 346 259 249
f 347 249 248
f 348 248 240
f 240 291 348
f 248 348 347
f 249 347 346
f 259 346 345
f 260 345 344
f 273 344 343
f 274 343 342
f 275 342 341
f 276 341 340
f 277 340 339
f 261 339 338
f 262 338 337
f 252 337 336
f 253 336 335
f 233 335 334
f 234 334 333
f 241 333 332
f 242 332 331
f 235 331 330
f 236 330 329
f 250 329 328
f 251 328 327
f 263 327 326
f 254 326 325
f 255 325 324
f 264 324 323
f 256 323 322
f 257 322 321
f 258 321 320
f 265 320 319
f 283 319 318
f 266 318 317
f 267 317 316
f 278 316 315
f 284 315 314
f 285 314 313
f 279 313 312
f 280 312 311
f 286 311 310
f 287 310 309
f 288 309 308
f 289 308 307
f 290 307 306
f 268 306 305
f 269 305 304
f 270 304 303
f 281 303 302
f 282 302 301
f 271 301 300
f 272 300 299
f 243 299 298
f 244 298 297
f 245 297 296
f 246 296 295
f 247 295 294
f 237 294 293
f 238 293 292
f 239 292 291
f 349 293 294
f 349 350 291
f 349 297 298
f 294 295 349
f 291 292 349
f 349 296 297
f 292 293 349
f 350 344 345
f 295 296 349
f 350 347 348
f 350 343 344
f 351 349 305
f 349 301 302
f 348 291 350
f 345 346 350
f 350 336 337
f 350 352 334
f 352 330 331
f 351 318 319
f 351 308 309
f 305 306 351
f 302 303 349
f 349 299 300
f 346 347 350
f 350 341 342
f 350 339 340
f 337 338 350
f 334 335 350
f 352 329 330
f 352 327 328
f 352 323 324
f 352 351 320
f 351 317 318
f 351 315 316
f 351 312 313
f 351 310 311
f 351 307 308
f 349 304 305
f 300 301 349
f 342 343 350
f 338 339 350
f 352 333 334
f 331 332 352
f 352 326 327
f 324 325 352
f 320 321 352
f 316 317 351
f 313 314 351
f 309 310 351
f 303 304 349
f 340 341 350
f 332 333 352
f 325 326 352
f 321 322 352
f 314 315 351
f 306 307 351
f 335 336 350
f 322 323 352
f 311 312 351
f 328 329 352
f 298 299 349
f 319 320 351
f 352 350 353
f 354 353 355
f 356 355 357
f 358 357 359
f 360 359 361
f 362 361 363
f 364 363 365
f 366 365 367
f 368 367 369
f 370 369 371
f 372 371 373
f 374 373 375
f 376 375 377
f 378 377 379
f 380 381 382
f 380 383 384
f 380 385 386
f 380 387 388
f 380 389 390
f 380 391 389
f 380 392 391
f 390 393 380
f 379 394 395
f 395 392 379
f 392 380 379
f 379 396 397
f 397 398 379
f 398 394 379
f 379 399 400
f 400 396 379
f 393 387 380
f 388 385 380
f 379 401 399
f 386 402 380
f 402 383 380
f 379 403 404
f 404 401 379
f 384 381 380
f 379 405 406
f 406 403 379
f 382 407 380
f 379 380 378
f 377 378 376
f 375 376 374
f 373 374 372
f 371 372 370
f 369 370 368
f 367 368 366
f 365 366 364
f 363 364 362
f 361 362 360
f 359 360 358
f 357 358 356
f 355 356 354
f 353 354 352
f 408 409 489
f 409 410 490
f 410 411 491
f 411 412 492
f 412 413 493
f 413 414 494
f 414 415 495
f 416 417 496
f 417 418 497
f 418 419 498
f 419 420 499
f 420 421 500
f 421 422 501
f 422 423 502
f 503 489 504
f 489 490 505
f 490 491 506
f 491 492 507
f 492 493 508
f 493 494 509
f 494 495 510
f 495 511 512
f 511 513 514
f 513 515 516
f 515 517 518
f 517 519 520
f 519 521 522
f 521 523 524
f 523 525 526
f 525 527 528
f 527 529 530
f 529 496 531
f 496 497 532
f 497 498 533
f 498 499 534
f 499 500 535
f 500 501 536
f 501 502 537
f 538 504 539
f 504 505 540
f 505 506 541
f 506 507 542
f 507 508 543
f 508 509 544
f 509 510 545
f 510 512 546
f 512 514 547
f 514 516 548
f 516 518 549
f 518 520 550
f 520 522 551
f 522 524 552
f 524 526 553
f 526 528 554
f 528 530 555
f 530 531 556
f 531 532 557
f 532 533 558
f 533 534 559
f 534 535 560
f 535 536 561
f 536 537 562
f 563 539 564
f 539 540 565
f 540 541 566
f 541 542 567
f 542 543 568
f 543 544 569
f 544 545 570
f 545 546 571
f 546 547 572
f 547 548 573
f 548 549 574
f 549 550 575
f 550 551 576
f 551 552 577
f 552 553 578
f 553 554 579
f 554 555 580
f 555 556 581
f 556 557 582
f 557 558 583
f 558 559 584
f 559 560 585
f 560 561 586
f 561 562 587
f 588 564 589
f 564 565 590
f 565 566 591
f 566 567 592
f 567 568 593
f 568 569 594
f 569 570 595
f 570 571 596
f 571 572 597
f 572 573 598
f 573 574 599
f 574 575 600
f 575 576 601
f 576 577 602
f 577 578 603
f 578 579 604
f 579 580 605
f 580 581 606
f 581 582 607
f 582 583 608
f 583 584 609
f 584 585 610
f 585 586 611
f 586 587 612
f 613 589 614
f 589 590 615
f 590 591 616
f 591 592 617
f 592 593 618
f 593 594 619
f 594 595 620
f 595 596 621
f 596 597 622
f 597 598 623
f 598 599 624
f 599 600 625
f 600 601 626
f 601 602 627
f 602 603 628
f 603 604 629
f 604 605 630
f 605 606 631
f 606 607 632
f 607 608 633
f 608 609 634
f 609 610 635
f 610 611 636
f 611 612 637
f 614 615 638
f 615 616 639
f 616 617 640
f 617 618 641
f 618 619 642
f 619 620 643
f 620 621 644
f 621 622 645
f 622 623 646
f 623 624 647
f 624 625 648
f 625 626 649
f 626 627 650
f 627 628 651
f 628 629 652
f 629 630 653
f 630 631 654
f 631 632 655
f 632 633 656
f 633 634 657
f 634 635 658
f 635 636 659
f 660 638 661
f 638 639 662
f 639 640 663
f 640 641 664
f 641 642 665
f 642 643 666
f 643 644 667
f 644 645 668
f 645 646 669
f 646 647 670
f 647 648 671
f 648 649 672
f 649 650 673
f 650 651 674
f 651 652 675
f 652 653 676
f 653 654 677
f 654 655 678
f 655 656 679
f 656 657 680
f 657 658 681
f 658 659 682
f 683 661 684
f 661 662 685
f 662 663 686
f 663 664 687
f 664 665 688
f 665 666 689
f 666 667 690
f 667 668 691
f 668 669 692
f 669 670 693
f 670 671 694
f 671 672 695
f 672 673 696
f 673 674 697
f 674 675 698
f 675 676 699
f 676 677 700
f 677 678 701
f 678 679 702
f 679 680 703
f 680 681 704
f 681 682 705
f 684 685 424
f 685 686 425
f 686 687 426
f 687 688 427
f 688 689 428
f 689 690 429
f 690 691 430
f 691 692 431
f 692 693 432
f 693 694 433
f 694 695 434
f 695 696 435
f 696 697 436
f 697 698 437
f 698 699 438
f 699 700 439
f 700 701 440
f 701 702 441
f 702 703 442
f 703 704 443
f 495 382 381
f 381 511 495
f 495 415 382
f 513 511 383
f 511 384 383
f 383 402 513
f 513 386 385
f 385 515 513
f 515 387 393
f 515 388 387
f 393 517 515
f 519 517 389
f 517 390 389
f 519 391 392
f 392 521 519
f 523 521 394
f 394 398 523
f 521 395 394
f 525 523 396
f 523 397 396
f 525 399 401
f 401 527 525
f 525 400 399
f 529 527 403
f 527 404 403
f 403 406 529
f 423 444 445
f 423 446 444
f 502 447 448
f 502 445 447
f 449 450 562
f 537 448 449
f 562 450 451
f 451 587 562
f 612 587 452
f 587 453 452
f 637 612 454
f 612 455 454
f 637 456 457
f 636 637 458
f 458 659 636
f 659 459 460
f 659 461 459
f 682 460 462
f 705 462 463
f 704 705 464
f 464 443 704
f 684 465 466
f 465 467 466
f 706 466 468
f 683 706 469
f 469 470 683
f 660 683 471
f 471 472 660
f 614 660 473
f 660 474 473
f 707 473 475
f 475 476 707
f 613 707 477
f 478 588 613
f 613 479 478
f 563 588 480
f 480 481 563
f 538 563 482
f 563 483 482
f 503 538 484
f 408 503 485
f 503 486 485
f 485 487 408
f 484 486 503
f 482 484 538
f 481 483 563
f 478 480 588
f 477 479 613
f 476 477 707
f 473 707 614
f 472 474 660
f 470 471 683
f 468 469 706
f 466 706 684
f 464 488 443
f 463 464 705
f 462 705 682
f 460 682 659
f 458 461 659
f 457 458 637
f 454 456 637
f 452 455 612
f 451 453 587
f 562 537 449
f 448 537 502
f 445 502 423
f 406 416 529
f 401 404 527
f 396 400 525
f 398 397 523
f 392 395 521
f 389 391 519
f 393 390 517
f 385 388 515
f 402 386 513
f 381 384 511
f 443 442 703
f 442 441 702
f 441 440 701
f 440 439 700
f 439 438 699
f 438 437 698
f 437 436 697
f 436 435 696
f 435 434 695
f 434 433 694
f 433 432 693
f 432 431 692
f 431 430 691
f 430 429 690
f 429 428 689
f 428 427 688
f 427 426 687
f 426 425 686
f 425 424 685
f 424 465 684
f 705 704 681
f 704 703 680
f 703 702 679
f 702 701 678
f 701 700 677
f 700 699 676
f 699 698 675
f 698 697 674
f 697 696 673
f 696 695 672
f 695 694 671
f 694 693 670
f 693 692 669
f 692 691 668
f 691 690 667
f 690 689 666
f 689 688 665
f 688 687 664
f 687 686 663
f 686 685 662
f 685 684 661
f 684 706 683
f 682 681 658
f 681 680 657
f 680 679 656
f 679 678 655
f 678 677 654
f 677 676 653
f 676 675 652
f 675 674 651
f 674 673 650
f 673 672 649
f 672 671 648
f 671 670 647
f 670 669 646
f 669 668 645
f 668 667 644
f 667 666 643
f 666 665 642
f 665 664 641
f 664 663 640
f 663 662 639
f 662 661 638
f 661 683 660
f 659 658 635
f 658 657 634
f 657 656 633
f 656 655 632
f 655 654 631
f 654 653 630
f 653 652 629
f 652 651 628
f 651 650 627
f 650 649 626
f 649 648 625
f 648 647 624
f 647 646 623
f 646 645 622
f 645 644 621
f 644 643 620
f 643 642 619
f 642 641 618
f 641 640 617
f 640 639 616
f 639 638 615
f 638 660 614
f 637 636 611
f 636 635 610
f 635 634 609
f 634 633 608
f 633 632 607
f 632 631 606
f 631 630 605
f 630 629 604
f 629 628 603
f 628 627 602
f 627 626 601
f 626 625 600
f 625 624 599
f 624 623 598
f 623 622 597
f 622 621 596
f 621 620 595
f 620 619 594
f 619 618 593
f 618 617 592
f 617 616 591
f 616 615 590
f 615 614 589
f 614 707 613
f 612 611 586
f 611 610 585
f 610 609 584
f 609 608 583
f 608 607 582
f 607 606 581
f 606 605 580
f 605 604 579
f 604 603 578
f 603 602 577
f 602 601 576
f 601 600 575
f 600 599 574
f 599 598 573
f 598 597 572
f 597 596 571
f 596 595 570
f 595 594 569
f 594 593 568
f 593 592 567
f 592 591 566
f 591 590 565
f 590 589 564
f 589 613 588
f 587 586 561
f 586 585 560
f 585 584 559
f 584 583 558
f 583 582 557
f 582 581 556
f 581 580 555
f 580 579 554
f 579 578 553
f 578 577 552
f 577 576 551
f 576 575 550
f 575 574 549
f 574 573 548
f 573 572 547
f 572 571 546
f 571 570 545
f 570 569 544
f 569 568 543
f 568 567 542
f 567 566 541
f 566 565 540
f 565 564 539
f 564 588 563
f 562 561 536
f 561 560 535
f 560 559 534
f 559 558 533
f 558 557 532
f 557 556 531
f 556 555 530
f 555 554 528
f 554 553 526
f 553 552 524
f 552 551 522
f 551 550 520
f 550 549 518
f 549 548 516
f 548 547 514
f 547 546 512
f 546 545 510
f 545 544 509
f 544 543 508
f 543 542 507
f 542 541 506
f 541 540 505
f 540 539 504
f 539 563 538
f 537 536 501
f 536 535 500
f 535 534 499
f 534 533 498
f 533 532 497
f 532 531 496
f 531 530 529
f 530 528 527
f 528 526 525
f 526 524 523
f 524 522 521
f 522 520 519
f 520 518 517
f 518 516 515
f 516 514 513
f 514 512 511
f 512 510 495
f 510 509 494
f 509 508 493
f 508 507 492
f 507 506 491
f 506 505 490
f 505 504 489
f 504 538 503
f 502 501 422
f 501 500 421
f 500 499 420
f 499 498 419
f 498 497 418
f 497 496 417
f 496 529 416
f 495 494 414
f 494 493 413
f 493 492 412
f 492 491 411
f 491 490 410
f 490 489 409
f 489 503 408
f 465 440 441
f 430 431 432
f 435 427 428
f 435 425 426
f 465 439 440
f 465 437 438
f 429 433 434
f 433 429 430
f 426 427 435
f 438 439 465
f 465 435 436
f 432 433 430
f 435 424 425
f 436 437 465
f 428 429 435
f 441 442 465
f 435 465 424
f 434 435 429
f 443 467 465
f 442 443 465
f 443 488 467
f 708 709 467
f 709 468 466
f 708 459 461
f 708 488 464
f 466 467 709
f 708 452 453
f 461 458 708
f 467 488 708
f 709 470 469
f 453 451 708
f 708 457 456
f 708 460 459
f 708 463 462
f 469 468 709
f 709 482 483
f 708 444 446
f 708 447 445
f 451 450 708
f 708 454 455
f 458 457 708
f 464 463 708
f 709 473 474
f 709 479 477
f 709 481 480
f 709 484 482
f 445 444 708
f 708 449 448
f 455 452 708
f 462 460 708
f 709 475 473
f 477 476 709
f 483 481 709
f 709 485 486
f 448 447 708
f 456 454 708
f 476 475 709
f 486 484 709
f 709 710 487
f 450 449 708
f 709 472 471
f 709 478 479
f 487 485 709
f 471 470 709
f 480 478 709
f 474 472 709
f 446 711 708
f 712 713 710
f 710 709 712
f 708 711 714
f 714 715 708
f 716 717 718
f 716 719 720
f 721 716 713
f 716 722 717
f 716 723 719
f 713 724 721
f 408 487 710
f 407 411 410
f 716 725 722
f 721 723 716
f 407 409 408
f 407 412 411
f 407 414 413
f 407 382 415
f 720 725 716
f 716 407 710
f 410 409 407
f 415 414 407
f 710 713 716
f 413 412 407
f 710 407 408
f 718 726 716
f 423 405 711
f 405 417 416
f 711 446 423
f 405 418 417
f 405 421 420
f 423 422 405
f 727 728 714
f 729 730 731
f 405 419 418
f 422 421 405
f 729 732 727
f 729 733 734
f 729 735 736
f 731 737 729
f 420 419 405
f 729 714 711
f 734 732 729
f 737 735 729
f 711 405 729
f 736 733 729
f 714 729 727
f 416 406 405
f 715 738 739
f 715 740 741
f 712 742 743
f 712 739 744
f 741 738 715
f 712 745 746
f 743 747 712
f 739 712 715
f 715 748 749
f 746 750 712
f 712 751 752
f 712 753 742
f 712 754 755
f 749 740 715
f 715 756 757
f 712 758 724
f 712 759 760
f 750 761 712
f 712 762 763
f 747 751 712
f 744 754 712
f 715 764 765
f 715 766 767
f 715 768 769
f 715 770 756
f 760 758 712
f 712 771 772
f 763 745 712
f 755 753 712
f 765 773 715
f 767 774 715
f 757 768 715
f 715 775 776
f 772 759 712
f 752 762 712
f 774 764 715
f 776 770 715
f 715 714 728
f 761 771 712
f 715 777 778
f 715 779 766
f 728 775 715
f 778 748 715
f 769 779 715
f 773 777 715
f 724 713 712
f 727 732 824
f 732 734 825
f 734 733 826
f 733 736 827
f 736 735 828
f 735 737 829
f 737 731 830
f 718 717 831
f 717 722 832
f 722 725 833
f 725 720 834
f 720 719 835
f 719 723 836
f 723 721 837
f 838 824 839
f 824 825 840
f 825 826 841
f 826 827 842
f 827 828 843
f 828 829 844
f 829 830 845
f 830 846 847
f 846 848 849
f 848 850 851
f 850 852 853
f 852 854 855
f 854 856 857
f 856 858 859
f 858 860 861
f 860 862 863
f 862 864 865
f 864 831 866
f 831 832 867
f 832 833 868
f 833 834 869
f 834 835 870
f 835 836 871
f 836 837 872
f 873 839 874
f 839 840 875
f 840 841 876
f 841 842 877
f 842 843 878
f 843 844 879
f 844 845 880
f 845 847 881
f 847 849 882
f 849 851 883
f 851 853 884
f 853 855 885
f 855 857 886
f 857 859 887
f 859 861 888
f 861 863 889
f 863 865 890
f 865 866 891
f 866 867 892
f 867 868 893
f 868 869 894
f 869 870 895
f 870 871 896
f 871 872 897
f 898 874 899
f 874 875 900
f 875 876 901
f 876 877 902
f 877 878 903
f 878 879 904
f 879 880 905
f 880 881 906
f 881 882 907
f 882 883 908
f 883 884 909
f 884 885 910
f 885 886 911
f 886 887 912
f 887 888 913
f 888 889 914
f 889 890 915
f 890 891 916
f 891 892 917
f 892 893 918
f 893 894 919
f 894 895 920
f 895 896 921
f 896 897 922
f 923 899 924
f 899 900 925
f 900 901 926
f 901 902 927
f 902 903 928
f 903 904 929
f 904 905 930
f 905 906 931
f 906 907 932
f 907 908 933
f 908 909 934
f 909 910 935
f 910 911 936
f 911 912 937
f 912 913 938
f 913 914 939
f 914 915 940
f 915 916 941
f 916 917 942
f 917 918 943
f 918 919 944
f 919 920 945
f 920 921 946
f 921 922 947
f 948 924 949
f 924 925 950
f 925 926 951
f 926 927 952
f 927 928 953
f 928 929 954
f 929 930 955
f 930 931 956
f 931 932 957
f 932 933 958
f 933 934 959
f 934 935 960
f 935 936 961
f 936 937 962
f 937 938 963
f 938 939 964
f 939 940 965
f 940 941 966
f 941 942 967
f 942 943 968
f 943 944 969
f 944 945 970
f 945 946 971
f 946 947 972
f 949 950 973
f 950 951 974
f 951 952 975
f 952 953 976
f 953 954 977
f 954 955 978
f 955 956 979
f 956 957 980
f 957 958 981
f 958 959 982
f 959 960 983
f 960 961 984
f 961 962 985
f 962 963 986
f 963 964 987
f 964 965 988
f 965 966 989
f 966 967 990
f 967 968 991
f 968 969 992
f 969 970 993
f 970 971 994
f 995 973 996
f 973 974 997
f 974 975 998
f 975 976 999
f 976 977 1000
f 977 978 1001
f 978 979 1002
f 979 980 1003
f 980 981 1004
f 981 982 1005
f 982 983 1006
f 983 984 1007
f 984 985 1008
f 985 986 1009
f 986 987 1010
f 987 988 1011
f 988 989 1012
f 989 990 1013
f 990 991 1014
f 991 992 1015
f 992 993 1016
f 993 994 1017
f 1018 996 1019
f 996 997 1020
f 997 998 1021
f 998 999 1022
f 999 1000 1023
f 1000 1001 1024
f 1001 1002 1025
f 1002 1003 1026
f 1003 1004 1027
f 1004 1005 1028
f 1005 1006 1029
f 1006 1007 1030
f 1007 1008 1031
f 1008 1009 1032
f 1009 1010 1033
f 1010 1011 1034
f 1011 1012 1035
f 1012 1013 1036
f 1013 1014 1037
f 1014 1015 1038
f 1015 1016 1039
f 1016 1017 1040
f 1019 1020 780
f 1020 1021 781
f 1021 1022 782
f 1022 1023 783
f 1023 1024 784
f 1024 1025 785
f 1025 1026 786
f 1026 1027 787
f 1027 1028 788
f 1028 1029 789
f 1029 1030 790
f 1030 1031 791
f 1031 1032 792
f 1032 1033 793
f 1033 1034 794
f 1034 1035 795
f 1035 1036 796
f 1036 1037 797
f 1037 1038 798
f 1038 1039 799
f 830 730 800
f 800 846 830
f 830 731 730
f 848 846 801
f 846 802 801
f 801 803 848
f 848 804 805
f 805 850 848
f 850 806 807
f 850 808 806
f 807 852 850
f 854 852 809
f 852 810 809
f 854 811 812
f 812 856 854
f 858 856 813
f 813 814 858
f 856 815 813
f 860 858 816
f 858 817 816
f 860 818 819
f 819 862 860
f 860 820 818
f 864 862 821
f 862 822 821
f 821 726 864
f 721 758 760
f 721 724 758
f 837 759 772
f 837 760 759
f 771 761 897
f 872 772 771
f 897 761 750
f 750 922 897
f 947 922 745
f 922 746 745
f 972 947 762
f 947 763 762
f 972 752 751
f 971 972 747
f 747 994 971
f 994 742 753
f 994 743 742
f 1017 753 755
f 1040 755 754
f 1039 1040 744
f 744 799 1039
f 1019 823 741
f 823 738 741
f 1041 741 740
f 1018 1041 749
f 749 748 1018
f 995 1018 778
f 778 777 995
f 949 995 765
f 995 773 765
f 1042 765 764
f 764 774 1042
f 948 1042 767
f 779 923 948
f 948 766 779
f 898 923 769
f 769 768 898
f 873 898 756
f 898 757 756
f 838 873 770
f 727 838 775
f 838 776 775
f 775 728 727
f 770 776 838
f 756 770 873
f 768 757 898
f 779 769 923
f 767 766 948
f 774 767 1042
f 765 1042 949
f 777 773 995
f 748 778 1018
f 740 749 1041
f 741 1041 1019
f 744 739 799
f 754 744 1040
f 755 1040 1017
f 753 1017 994
f 747 743 994
f 751 747 972
f 762 752 972
f 745 763 947
f 750 746 922
f 897 872 771
f 772 872 837
f 760 837 721
f 726 718 864
f 819 822 862
f 816 820 860
f 814 817 858
f 812 815 856
f 809 811 854
f 807 810 852
f 805 808 850
f 803 804 848
f 800 802 846
f 799 798 1038
f 798 797 1037
f 797 796 1036
f 796 795 1035
f 795 794 1034
f 794 793 1033
f 793 792 1032
f 792 791 1031
f 791 790 1030
f 790 789 1029
f 789 788 1028
f 788 787 1027
f 787 786 1026
f 786 785 1025
f 785 784 1024
f 784 783 1023
f 783 782 1022
f 782 781 1021
f 781 780 1020
f 780 823 1019
f 1040 1039 1016
f 1039 1038 1015
f 1038 1037 1014
f 1037 1036 1013
f 1036 1035 1012
f 1035 1034 1011
f 1034 1033 1010
f 1033 1032 1009
f 1032 1031 1008
f 1031 1030 1007
f 1030 1029 1006
f 1029 1028 1005
f 1028 1027 1004
f 1027 1026 1003
f 1026 1025 1002
f 1025 1024 1001
f 1024 1023 1000
f 1023 1022 999
f 1022 1021 998
f 1021 1020 997
f 1020 1019 996
f 1019 1041 1018
f 1017 1016 993
f 1016 1015 992
f 1015 1014 991
f 1014 1013 990
f 1013 1012 989
f 1012 1011 988
f 1011 1010 987
f 1010 1009 986
f 1009 1008 985
f 1008 1007 984
f 1007 1006 983
f 1006 1005 982
f 1005 1004 981
f 1004 1003 980
f 1003 1002 979
f 1002 1001 978
f 1001 1000 977
f 1000 999 976
f 999 998 975
f 998 997 974
f 997 996 973
f 996 1018 995
f 994 993 970
f 993 992 969
f 992 991 968
f 991 990 967
f 990 989 966
f 989 988 965
f 988 987 964
f 987 986 963
f 986 985 962
f 985 984 961
f 984 983 960
f 983 982 959
f 982 981 958
f 981 980 957
f 980 979 956
f 979 978 955
f 978 977 954
f 977 976 953
f 976 975 952
f 975 974 951
f 974 973 950
f 973 995 949
f 972 971 946
f 971 970 945
f 970 969 944
f 969 968 943
f 968 967 942
f 967 966 941
f 966 965 940
f 965 964 939
f 964 963 938
f 963 962 937
f 962 961 936
f 961 960 935
f 960 959 934
f 959 958 933
f 958 957 932
f 957 956 931
f 956 955 930
f 955 954 929
f 954 953 928
f 953 952 927
f 952 951 926
f 951 950 925
f 950 949 924
f 949 1042 948
f 947 946 921
f 946 945 920
f 945 944 919
f 944 943 918
f 943 942 917
f 942 941 916
f 941 940 915
f 940 939 914
f 939 938 913
f 938 937 912
f 937 936 911
f 936 935 910
f 935 934 909
f 934 933 908
f 933 932 907
f 932 931 906
f 931 930 905
f 930 929 904
f 929 928 903
f 928 927 902
f 927 926 901
f 926 925 900
f 925 924 899
f 924 948 923
f 922 921 896
f 921 920 895
f 920 919 894
f 919 918 893
f 918 917 892
f 917 916 891
f 916 915 890
f 915 914 889
f 914 913 888
f 913 912 887
f 912 911 886
f 911 910 885
f 910 909 884
f 909 908 883
f 908 907 882
f 907 906 881
f 906 905 880
f 905 904 879
f 904 903 878
f 903 902 877
f 902 901 876
f 901 900 875
f 900 899 874
f 899 923 898
f 897 896 871
f 896 895 870
f 895 894 869
f 894 893 868
f 893 892 867
f 892 891 866
f 891 890 865
f 890 889 863
f 889 888 861
f 888 887 859
f 887 886 857
f 886 885 855
f 885 884 853
f 884 883 851
f 883 882 849
f 882 881 847
f 881 880 845
f 880 879 844
f 879 878 843
f 878 877 842
f 877 876 841
f 876 875 840
f 875 874 839
f 874 898 873
f 872 871 836
f 871 870 835
f 870 869 834
f 869 868 833
f 868 867 832
f 867 866 831
f 866 865 864
f 865 863 862
f 863 861 860
f 861 859 858
f 859 857 856
f 857 855 854
f 855 853 852
f 853 851 850
f 851 849 848
f 849 847 846
f 847 845 830
f 845 844 829
f 844 843 828
f 843 842 827
f 842 841 826
f 841 840 825
f 840 839 824
f 839 873 838
f 837 836 723
f 836 835 719
f 835 834 720
f 834 833 725
f 833 832 722
f 832 831 717
f 831 864 718
f 830 829 737
f 829 828 735
f 828 827 736
f 827 826 733
f 826 825 734
f 825 824 732
f 824 838 727
f 787 792 793
f 787 789 790
f 794 783 784
f 787 791 792
f 787 788 789
f 784 785 794
f 823 794 795
f 790 791 787
f 785 786 794
f 794 781 782
f 794 823 780
f 823 797 798
f 795 796 823
f 786 787 794
f 780 781 794
f 796 797 823
f 782 783 794
f 793 794 787
f 799 738 823
f 798 799 823
f 799 739 738
f 1043 1044 1045
f 1046 1045 1047
f 1048 1047 1049
f 1050 1049 1051
f 1052 1051 1053
f 1054 1053 1055
f 1056 1055 1057
f 1058 1057 1059
f 1060 1059 1061
f 1062 1061 1063
f 1064 1063 1065
f 1066 1065 1067
f 1068 1067 1069
f 1070 1069 1071
f 1071 1072 1070
f 1069 1073 1071
f 1044 800 730
f 1044 801 802
f 1044 805 804
f 1044 806 808
f 1044 809 810
f 1044 811 809
f 810 807 1044
f 1043 812 811
f 1043 813 815
f 815 812 1043
f 811 1044 1043
f 1043 816 817
f 817 814 1043
f 814 813 1043
f 1043 818 820
f 820 816 1043
f 807 806 1044
f 808 805 1044
f 1043 819 818
f 804 803 1044
f 803 801 1044
f 1043 821 822
f 822 819 1043
f 802 800 1044
f 1043 716 726
f 726 821 1043
f 730 729 1044
f 1072 1074 1070
f 1069 1070 1068
f 1067 1068 1066
f 1065 1066 1064
f 1063 1064 1062
f 1061 1062 1060
f 1059 1060 1058
f 1057 1058 1056
f 1055 1056 1054
f 1053 1054 1052
f 1051 1052 1050
f 1049 1050 1048
f 1047 1048 1046
f 1045 1046 1043
f 1057 1053 1051
f 1057 1055 1053
f 1049 1059 1057
f 1049 1063 1061
f 1075 1076 1077
f 1063 1049 1047
f 1061 1059 1049
f 1075 1078 1076
f 1075 1079 1080
f 1081 1082 1083
f 1081 1084 1085
f 1063 1045 1044
f 1051 1049 1057
f 729 1067 1065
f 729 1073 1069
f 1075 1086 1078
f 1080 1087 1075
f 1088 1089 1090
f 1088 1091 1092
f 1081 1093 1082
f 1081 1094 1095
f 1081 1096 1084
f 1097 1098 1099
f 369 355 353
f 369 359 357
f 365 363 361
f 359 369 367
f 1047 1045 1063
f 1069 1067 729
f 1087 1086 1075
f 1092 1089 1088
f 1088 1100 1101
f 1081 1102 1093
f 1085 1094 1081
f 1097 1103 1098
f 1097 349 1104
f 357 355 369
f 367 365 359
f 350 373 371
f 350 377 375
f 1065 1063 729
f 1090 1075 1088
f 1088 1105 1100
f 1095 1102 1081
f 1104 1103 1097
f 361 359 365
f 375 373 350
f 1044 729 1063
f 405 1097 1088
f 1101 1091 1088
f 1099 1081 1097
f 1097 405 350
f 371 369 350
f 350 405 379
f 1088 1073 405
f 1088 1097 1105
f 350 349 1097
f 379 377 350
f 1077 1088 1075
f 353 350 369
f 1083 1097 1081
f 729 405 1073
f 1105 1097 1106
f 1106 1107 1105
f 1071 1108 1109
f 1109 1072 1071
f 1110 1111 1112
f 1088 1113 1114
f 1112 1115 1116
f 1117 1118 1119
f 1117 1114 1120
f 1088 1121 1113
f 1088 1122 1123
f 1112 1124 1115
f 1117 1125 1126
f 1117 1127 1118
f 1117 1128 1129
f 1120 1130 1117
f 1123 1121 1088
f 1112 1131 1124
f 1112 1132 1133
f 1117 1134 1125
f 1129 1127 1117
f 1117 1135 1136
f 1114 1117 1088
f 1133 1131 1112
f 1112 1137 1138
f 1112 1126 1139
f 1119 1134 1117
f 1130 1135 1117
f 1088 1140 1141
f 1138 1132 1112
f 1126 1112 1117
f 1141 1122 1088
f 1112 1116 1110
f 1136 1128 1117
f 1073 1088 1117
f 1139 1137 1112
f 1110 1142 1111
f 1074 1072 1112
f 1112 1111 1074
f 1117 1071 1073
f 1112 1143 1144
f 1144 1117 1112
f 1117 1144 1108
f 1108 1071 1117
f 1072 1109 1143
f 1143 1112 1072
f 1145 1144 1146
f 1145 1147 1148
f 1146 1149 1145
f 1144 1150 1151
f 1149 1147 1145
f 1144 1152 1150
f 1144 1153 1154
f 1155 1156 1143
f 1151 1146 1144
f 1144 1157 1158
f 1144 1159 1160
f 1154 1161 1144
f 1144 1143 1162
f 1143 1163 1164
f 1143 1165 1155
f 1145 1166 1167
f 1158 1152 1144
f 1161 1159 1144
f 1162 1168 1144
f 1143 1169 1170
f 1156 1163 1143
f 1148 1166 1145
f 1168 1153 1144
f 1143 1171 1172
f 1164 1169 1143
f 1160 1157 1144
f 1143 1173 1174
f 1170 1171 1143
f 1174 1162 1143
f 1165 1175 1155
f 1176 1165 1143
f 1172 1173 1143
f 1167 1177 1145
f 1178 1108 1144
f 1144 1145 1178
f 1143 1109 1176
f 1177 1167 1141
f 1167 1166 1122
f 1166 1148 1123
f 1148 1147 1121
f 1147 1149 1113
f 1149 1146 1114
f 1146 1151 1120
f 1151 1150 1130
f 1150 1152 1135
f 1152 1158 1136
f 1158 1157 1128
f 1157 1160 1129
f 1160 1159 1127
f 1159 1161 1118
f 1161 1154 1119
f 1154 1153 1134
f 1153 1168 1125
f 1168 1162 1126
f 1162 1174 1139
f 1174 1173 1137
f 1173 1172 1138
f 1172 1171 1132
f 1171 1170 1133
f 1170 1169 1131
f 1169 1164 1124
f 1164 1163 1115
f 1163 1156 1116
f 1156 1155 1110
f 1155 1175 1142
f 1179 1180 1181
f 1180 1142 1175
f 1175 1181 1180
f 1182 1179 1183
f 1184 1185 1182
f 1183 1184 1182
f 1186 1187 1188
f 1188 1189 1186
f 1186 1185 1187
f 1190 1189 1191
f 1191 1192 1190
f 1193 1190 1194
f 1194 1195 1193
f 1196 1197 1198
f 1198 1199 1196
f 1200 1198 1197
f 1201 1200 1202
f 1203 1201 1204
f 1205 1203 1206
f 1207 1205 1208
f 1209 1210 1211
f 1211 1212 1209
f 1209 1213 1210
f 1214 1215 1216
f 1216 1213 1214
f 1214 1217 1215
f 1218 1215 1217
f 1219 1218 1220
f 1220 1221 1219
f 1222 1219 1221
f 1222 1223 1224
f 1224 1225 1222
f 1225 1224 1226
f 1227 1226 1228
f 1228 1229 1227
f 1230 1231 1232
f 1229 1228 1230
f 1231 1233 1232
f 1234 1235 1236
f 1233 1231 1234
f 1235 1237 1236
f 1237 1235 1238
f 1239 1238 1240
f 1241 1240 1242
f 1243 1242 1244
f 1245 1244 1246
f 1247 1248 1249
f 1247 1250 1248
f 1250 1251 1252
f 1250 1247 1251
f 1253 1254 1255
f 1253 1252 1254
f 1256 1257 1258
f 1259 1260 1256
f 1257 1255 1258
f 1261 1262 1263
f 1263 1264 1261
f 1260 1259 1262
f 1265 1266 1177
f 1264 1263 1266
f 1266 1265 1264
f 1177 1140 1265
f 1261 1260 1262
f 1258 1259 1256
f 1255 1257 1253
f 1252 1253 1250
f 1249 1246 1247
f 1246 1249 1245
f 1244 1245 1243
f 1242 1243 1241
f 1240 1241 1239
f 1238 1239 1237
f 1236 1233 1234
f 1232 1229 1230
f 1226 1227 1225
f 1221 1223 1222
f 1217 1220 1218
f 1216 1210 1213
f 1211 1207 1212
f 1208 1212 1207
f 1206 1208 1205
f 1204 1206 1203
f 1202 1204 1201
f 1197 1202 1200
f 1199 1193 1196
f 1195 1196 1193
f 1192 1194 1190
f 1188 1191 1189
f 1184 1187 1185
f 1181 1183 1179
f 1142 1110 1155
f 1110 1116 1156
f 1116 1115 1163
f 1115 1124 1164
f 1124 1131 1169
f 1131 1133 1170
f 1133 1132 1171
f 1132 1138 1172
f 1138 1137 1173
f 1137 1139 1174
f 1139 1126 1162
f 1126 1125 1168
f 1125 1134 1153
f 1134 1119 1154
f 1119 1118 1161
f 1118 1127 1159
f 1127 1129 1160
f 1129 1128 1157
f 1128 1136 1158
f 1136 1135 1152
f 1135 1130 1150
f 1130 1120 1151
f 1120 1114 1146
f 1114 1113 1149
f 1113 1121 1147
f 1121 1123 1148
f 1123 1122 1166
f 1122 1141 1167
f 1141 1140 1177
f 1267 1109 1108
f 1108 1268 1267
f 1267 1176 1109
f 1269 1267 1268
f 1270 1269 1271
f 1272 1270 1273
f 1274 1272 1275
f 1276 1274 1277
f 1278 1276 1279
f 1280 1278 1281
f 1282 1280 1283
f 1284 1282 1285
f 1286 1284 1287
f 1288 1286 1289
f 1290 1288 1291
f 1292 1290 1293
f 1294 1292 1295
f 1295 1296 1294
f 1293 1295 1292
f 1291 1293 1290
f 1289 1291 1288
f 1287 1289 1286
f 1285 1287 1284
f 1283 1285 1282
f 1281 1283 1280
f 1279 1281 1278
f 1277 1279 1276
f 1275 1277 1274
f 1273 1275 1272
f 1271 1273 1270
f 1268 1271 1269
f 1108 1178 1268
f 1297 1298 708
f 1298 1299 709
f 709 708 1298
f 1299 1300 712
f 712 709 1299
f 1297 715 712
f 712 1300 1297
f 708 715 1297
f 1301 1300 1299
f 1299 1302 1301
f 1303 1302 1299
f 1299 1298 1303
f 1304 1303 1298
f 1298 1297 1304
f 1304 1297 1300
f 1300 1301 1304
f 1305 1306 1301
f 1306 1307 1304
f 1304 1301 1306
f 1307 1308 1303
f 1305 1302 1303
f 1303 1304 1307
f 1301 1302 1305
f 1303 1308 1305
f 1305 1309 1310
f 1310 1306 1305
f 1306 1310 1311
f 1311 1307 1306
f 1307 1311 1312
f 1312 1308 1307
f 1308 1312 1309
f 1309 1305 1308
f 1313 1314 1309
f 1294 1310 1309
f 1294 1296 1311
f 1296 1313 1312
f 1309 1314 1294
f 1312 1311 1296
f 1311 1310 1294
f 1309 1312 1313
f 1315 1314 1313
f 1316 1315 1317
f 1318 1316 1319
f 1320 1318 1321
f 1322 1320 1323
f 1324 1322 1325
f 1326 1324 1327
f 1328 1326 1329
f 1330 1328 1331
f 1332 1330 1333
f 1334 1332 1335
f 1336 1334 1337
f 1338 1336 1339
f 1340 1338 1341
f 1342 1340 1343
f 1343 1344 1342
f 1341 1343 1340
f 1339 1341 1338
f 1337 1339 1336
f 1335 1337 1334
f 1333 1335 1332
f 1331 1333 1330
f 1329 1331 1328
f 1327 1329 1326
f 1325 1327 1324
f 1323 1325 1322
f 1321 1323 1320
f 1319 1321 1318
f 1317 1319 1316
f 1313 1317 1315
f 1064 1066 1270
f 1066 1068 1269
f 1062 1274 1276
f 1062 1064 1272
f 1269 1270 1066
f 1068 1070 1267
f 1070 1074 1176
f 1165 1176 1074
f 1050 1286 1288
f 1050 1052 1284
f 1272 1274 1062
f 1267 1269 1068
f 1074 1111 1165
f 1111 1345 1346
f 1347 1348 1349
f 1348 1350 1351
f 351 1352 1353
f 1342 1352 351
f 1294 1314 407
f 716 1043 1292
f 1284 1286 1050
f 1052 1054 1282
f 1270 1272 1064
f 1346 1165 1111
f 1347 1354 1346
f 1351 1349 1348
f 1355 1356 1357
f 1356 1358 1359
f 351 352 1342
f 352 354 1340
f 364 366 1328
f 366 368 1326
f 380 407 1314
f 1292 1294 716
f 1046 1048 1288
f 1282 1284 1052
f 1056 1280 1282
f 1056 1058 1278
f 1176 1267 1070
f 1349 1354 1347
f 1350 1355 1360
f 1359 1357 1356
f 1361 1362 1363
f 1361 1364 1365
f 1366 1367 1368
f 1366 1369 1370
f 1369 1371 1372
f 1371 1373 1374
f 1375 1353 1374
f 1340 1342 352
f 1326 1328 366
f 368 370 1324
f 370 372 1322
f 372 374 1320
f 378 380 1315
f 407 716 1294
f 1043 1046 1290
f 1288 1048 1050
f 1278 1280 1056
f 1058 1060 1276
f 1346 1345 1347
f 1357 1360 1355
f 1376 1363 1377
f 1365 1362 1361
f 1378 1379 1380
f 1379 1381 1368
f 1370 1367 1366
f 1374 1372 1371
f 1353 1375 351
f 354 356 1338
f 358 1336 1338
f 358 360 1334
f 362 1332 1334
f 362 364 1330
f 1324 1326 368
f 1320 1322 372
f 374 376 1318
f 376 378 1316
f 1314 1315 380
f 1288 1290 1046
f 1276 1278 1058
f 1360 1351 1350
f 1363 1376 1361
f 1364 1382 1383
f 1382 1378 1384
f 1368 1380 1379
f 1372 1370 1369
f 1338 1340 354
f 1334 1336 358
f 1330 1332 362
f 1322 1324 370
f 1316 1318 376
f 1290 1292 1043
f 1276 1060 1062
f 1385 1386 1387
f 1386 1388 1377
f 1383 1365 1364
f 1380 1384 1378
f 1374 1373 1375
f 1334 360 362
f 1318 1320 374
f 1282 1054 1056
f 1377 1387 1386
f 1384 1383 1382
f 1338 356 358
f 1315 1316 378
f 1389 1390 1391
f 1389 1392 1393
f 1394 1395 1393
f 1394 1396 1397
f 1398 1399 1400
f 1385 1401 1399
f 1377 1388 1376
f 1328 1330 364
f 1402 1403 1359
f 1402 1404 1391
f 1393 1390 1389
f 1397 1395 1394
f 1405 1400 1397
f 1399 1398 1385
f 1368 1381 1366
f 1391 1403 1402
f 1393 1392 1394
f 1400 1405 1398
f 1359 1358 1402
f 1397 1396 1405
f 1391 1404 1389
f 1387 1401 1385
f 1399 1401 1406
f 1406 1407 1399
f 1408 1409 1407
f 1409 1410 1407
f 1407 1406 1408
f 1406 1411 1408
f 1409 1412 1413
f 1413 1410 1409
f 1414 1408 1411
f 1411 1415 1414
f 1414 1416 1417
f 1414 1415 1416
f 1417 1412 1414
f 1417 1413 1412
f 1417 1416 1418
f 1418 1419 1417
f 1420 1421 1354
f 1422 1420 1349
f 1423 1422 1351
f 1424 1423 1360
f 1425 1424 1357
f 1426 1425 1359
f 1427 1426 1403
f 1428 1427 1391
f 1429 1428 1390
f 1430 1429 1393
f 1431 1430 1395
f 1432 1258 1255
f 1255 1254 1432
f 1432 1262 1259
f 1259 1258 1432
f 1432 1263 1262
f 1432 1145 1266
f 1145 1177 1266
f 1266 1263 1432
f 1254 1252 1432
f 1354 1196 1195
f 1354 1197 1196
f 1354 1202 1197
f 1354 1204 1202
f 1354 1206 1204
f 1354 1208 1206
f 1354 1214 1213
f 1354 1217 1214
f 1354 1220 1217
f 1354 1421 1223
f 1223 1221 1354
f 1221 1220 1354
f 1421 1224 1223
f 1213 1209 1354
f 1421 1235 1234
f 1234 1231 1421
f 1231 1230 1421
f 1230 1228 1421
f 1228 1226 1421
f 1226 1224 1421
f 1209 1212 1354
f 1421 1238 1235
f 1212 1208 1354
f 1421 1432 1251
f 1251 1247 1421
f 1247 1246 1421
f 1246 1244 1421
f 1244 1242 1421
f 1242 1240 1421
f 1240 1238 1421
f 1346 1181 1175
f 1346 1184 1183
f 1346 1191 1188
f 1188 1187 1346
f 1187 1184 1346
f 1346 1194 1192
f 1192 1191 1346
f 1183 1181 1346
f 1346 1195 1194
f 1419 1433 1413
f 1433 1400 1410
f 1410 1413 1433
f 1399 1407 1410
f 1410 1400 1399
f 1431 1397 1434
f 1400 1433 1434
f 1434 1397 1400
f 1434 1435 1431
f 1413 1417 1419
f 1175 1165 1346
f 1195 1346 1354
f 1252 1251 1432
f 1395 1397 1431
f 1393 1395 1430
f 1390 1393 1429
f 1391 1390 1428
f 1403 1391 1427
f 1359 1403 1426
f 1357 1359 1425
f 1360 1357 1424
f 1351 1360 1423
f 1349 1351 1422
f 1354 1349 1420
f 1436 1437 1377
f 1438 1436 1363
f 1439 1438 1362
f 1440 1439 1365
f 1441 1440 1383
f 1442 1441 1384
f 1443 1442 1380
f 1444 1443 1368
f 1445 1444 1367
f 1446 1445 1370
f 1447 1446 1372
f 1448 1447 1374
f 1449 1448 1353
f 1387 1377 1450
f 1437 1451 1450
f 1450 1377 1437
f 1401 1387 1411
f 1452 1415 1411
f 1418 1416 1415
f 1415 1452 1418
f 1411 1387 1452
f 1411 1406 1401
f 1450 1452 1387
f 1353 1352 1449
f 1374 1353 1448
f 1372 1374 1447
f 1370 1372 1446
f 1367 1370 1445
f 1368 1367 1444
f 1380 1368 1443
f 1384 1380 1442
f 1383 1384 1441
f 1365 1383 1440
f 1362 1365 1439
f 1363 1362 1438
f 1377 1363 1436
f 1453 1454 1419
f 1419 1418 1453
f 1454 1433 1419
f 1454 1434 1433
f 1418 1452 1453
f 1452 1450 1453
f 1454 1455 1435
f 1435 1434 1454
f 1456 1453 1450
f 1450 1451 1456
f 1321 1329 1327
f 1327 1325 1321
f 1321 1343 1341
f 1321 1331 1329
f 1321 1335 1333
f 1321 1339 1337
f 1321 1344 1343
f 1441 1438 1439
f 1178 1275 1273
f 1178 1295 1293
f 1344 1321 1319
f 1333 1331 1321
f 1341 1339 1321
f 1437 1446 1447
f 1438 1442 1443
f 1439 1440 1441
f 1423 1421 1420
f 1423 1145 1432
f 1273 1271 1178
f 1178 1283 1281
f 1178 1287 1285
f 1293 1291 1178
f 1319 1317 1344
f 1337 1335 1321
f 1447 1448 1437
f 1437 1444 1445
f 1441 1442 1438
f 1444 1437 1436
f 1145 1428 1429
f 1432 1421 1423
f 1178 1277 1275
f 1281 1279 1178
f 1178 1289 1287
f 1178 1296 1295
f 1325 1323 1321
f 1445 1446 1437
f 1436 1438 1444
f 1429 1430 1145
f 1145 1426 1427
f 1145 1424 1425
f 1420 1422 1423
f 1279 1277 1178
f 1291 1289 1178
f 1317 1313 1344
f 1296 1451 1449
f 1443 1444 1438
f 1427 1428 1145
f 1423 1424 1145
f 1451 1296 1178
f 1285 1283 1178
f 1449 1344 1296
f 1449 1451 1437
f 1457 1458 1107
f 1145 1431 1435
f 1425 1426 1145
f 1271 1268 1178
f 1448 1449 1437
f 1107 1106 1457
f 1435 1455 1458
f 1430 1431 1145
f 1313 1296 1344
f 1451 1145 1457
f 1458 1459 1107
f 1435 1457 1145
f 1457 1456 1451
f 1458 1457 1435
f 1106 1460 1457
f 1178 1145 1451
f 1457 1460 1461
f 1462 1461 1463
f 1464 1463 1465
f 1466 1465 1467
f 1468 1467 1469
f 1470 1469 1471
f 1472 1471 1473
f 1474 1473 1475
f 1476 1475 1477
f 1478 1477 1479
f 1480 1479 1481
f 1482 1481 1483
f 1484 1483 1485
f 1486 1485 1487
f 1488 1487 1489
f 1489 1490 1488
f 1487 1488 1486
f 1485 1486 1484
f 1483 1484 1482
f 1481 1482 1480
f 1479 1480 1478
f 1477 1478 1476
f 1475 1476 1474
f 1473 1474 1472
f 1471 1472 1470
f 1469 1470 1468
f 1467 1468 1466
f 1465 1466 1464
f 1463 1464 1462
f 1461 1462 1457
f 1490 1489 1491
f 1491 1492 1490
f 349 351 1375
f 1104 1375 1373
f 1103 1373 1371
f 1098 1371 1369
f 1099 1369 1366
f 1081 1366 1381
f 1096 1381 1379
f 1084 1379 1378
f 1085 1378 1382
f 1094 1382 1364
f 1095 1364 1361
f 1102 1361 1376
f 1093 1376 1388
f 1082 1388 1386
f 1097 1461 1460
f 1083 1463 1461
f 1083 1471 1469
f 1469 1467 1083
f 1083 1473 1471
f 1467 1465 1083
f 1083 1475 1473
f 1465 1463 1083
f 1461 1097 1083
f 1083 1477 1475
f 1083 1479 1477
f 1083 1481 1479
f 1083 1483 1481
f 1083 1485 1483
f 1083 1487 1485
f 1386 1493 1491
f 1491 1083 1386
f 1491 1489 1083
f 1489 1487 1083
f 1386 1494 1495
f 1495 1496 1386
f 1496 1497 1386
f 1386 1498 1499
f 1386 1500 1498
f 1499 1494 1386
f 1385 1501 1502
f 1502 1386 1385
f 1502 1500 1386
f 1497 1503 1386
f 1503 1504 1386
f 1504 1505 1386
f 1505 1506 1386
f 1506 1507 1386
f 1507 1508 1386
f 1508 1493 1386
f 1460 1106 1097
f 1386 1083 1082
f 1388 1082 1093
f 1376 1093 1102
f 1361 1102 1095
f 1364 1095 1094
f 1382 1094 1085
f 1378 1085 1084
f 1379 1084 1096
f 1381 1096 1081
f 1366 1081 1099
f 1369 1099 1098
f 1371 1098 1103
f 1373 1103 1104
f 1375 1104 349
f 1509 1492 1491
f 1510 1509 1493
f 1511 1510 1508
f 1512 1511 1507
f 1513 1512 1506
f 1514 1513 1505
f 1515 1514 1504
f 1516 1515 1503
f 1517 1516 1497
f 1518 1517 1496
f 1519 1518 1495
f 1520 1519 1494
f 1521 1520 1499
f 1522 1521 1498
f 1523 1522 1500
f 1500 1502 1523
f 1498 1500 1522
f 1499 1498 1521
f 1494 1499 1520
f 1495 1494 1519
f 1496 1495 1518
f 1497 1496 1517
f 1503 1497 1516
f 1504 1503 1515
f 1505 1504 1514
f 1506 1505 1513
f 1507 1506 1512
f 1508 1507 1511
f 1493 1508 1510
f 1491 1493 1509
f 1524 1523 1501
f 1501 1525 1524
f 1523 1502 1501
f 1525 1526 1524
f 1100 1405 1396
f 1101 1396 1394
f 1091 1394 1392
f 1092 1392 1389
f 1089 1389 1404
f 1090 1404 1402
f 1075 1402 1358
f 1079 1358 1356
f 1080 1356 1355
f 1087 1355 1350
f 1086 1350 1348
f 1078 1348 1347
f 1345 1190 1193
f 1345 1185 1186
f 1345 1179 1182
f 1182 1185 1345
f 1345 1111 1142
f 1142 1180 1345
f 1180 1179 1345
f 1186 1189 1345
f 1189 1190 1345
f 1076 1249 1248
f 1076 1245 1249
f 1076 1243 1245
f 1076 1241 1243
f 1076 1239 1241
f 1076 1232 1233
f 1233 1236 1076
f 1076 1227 1229
f 1076 1222 1225
f 1225 1227 1076
f 1076 1219 1222
f 1229 1232 1076
f 1347 1218 1219
f 1347 1211 1210
f 1210 1216 1347
f 1216 1215 1347
f 1215 1218 1347
f 1219 1076 1347
f 1236 1237 1076
f 1347 1205 1207
f 1207 1211 1347
f 1347 1345 1199
f 1199 1198 1347
f 1198 1200 1347
f 1200 1201 1347
f 1201 1203 1347
f 1203 1205 1347
f 1237 1239 1076
f 1077 1264 1265
f 1077 1261 1264
f 1077 1256 1260
f 1077 1257 1256
f 1260 1261 1077
f 1265 1088 1077
f 1077 1253 1257
f 1077 1248 1250
f 1250 1253 1077
f 1398 1527 1526
f 1398 1528 1529
f 1398 1530 1531
f 1398 1532 1530
f 1531 1528 1398
f 1529 1533 1398
f 1533 1527 1398
f 1398 1534 1535
f 1398 1536 1534
f 1398 1537 1536
f 1398 1538 1537
f 1398 1539 1538
f 1535 1532 1398
f 1405 1540 1539
f 1539 1398 1405
f 1405 1100 1541
f 1100 1542 1541
f 1100 1543 1542
f 1100 1544 1545
f 1100 1546 1544
f 1545 1547 1100
f 1100 1548 1546
f 1547 1549 1100
f 1100 1105 1550
f 1550 1548 1100
f 1105 1107 1459
f 1459 1550 1105
f 1549 1551 1100
f 1551 1552 1100
f 1552 1553 1100
f 1553 1554 1100
f 1554 1555 1100
f 1555 1556 1100
f 1556 1543 1100
f 1541 1540 1405
f 1526 1525 1398
f 1265 1140 1088
f 1248 1077 1076
f 1193 1199 1345
f 1347 1076 1078
f 1348 1078 1086
f 1350 1086 1087
f 1355 1087 1080
f 1356 1080 1079
f 1358 1079 1075
f 1402 1075 1090
f 1404 1090 1089
f 1389 1089 1092
f 1392 1092 1091
f 1394 1091 1101
f 1396 1101 1100
f 1455 1557 1558
f 1455 1559 1560
f 1455 1454 1561
f 1454 1562 1563
f 1453 1512 1513
f 1456 1490 1492
f 1455 1564 1557
f 1455 1565 1566
f 1560 1567 1455
f 1561 1568 1455
f 1454 1569 1570
f 1454 1571 1572
f 1563 1573 1454
f 1454 1453 1523
f 1453 1511 1512
f 1453 1509 1510
f 1492 1453 1456
f 1456 1484 1486
f 1566 1564 1455
f 1455 1574 1575
f 1455 1576 1577
f 1567 1578 1455
f 1454 1579 1561
f 1454 1580 1569
f 1573 1571 1454
f 1523 1524 1454
f 1453 1514 1515
f 1510 1511 1453
f 1456 1488 1490
f 1456 1482 1484
f 1456 1474 1476
f 1558 1581 1455
f 1577 1574 1455
f 1568 1559 1455
f 1454 1582 1580
f 1454 1583 1562
f 1453 1522 1523
f 1453 1519 1520
f 1513 1514 1453
f 1486 1488 1456
f 1456 1472 1474
f 1575 1565 1455
f 1570 1579 1454
f 1454 1584 1585
f 1524 1583 1454
f 1520 1521 1453
f 1453 1516 1517
f 1492 1509 1453
f 1456 1478 1480
f 1456 1470 1472
f 1456 1466 1468
f 1578 1576 1455
f 1454 1586 1584
f 1521 1522 1453
f 1517 1518 1453
f 1480 1482 1456
f 1468 1470 1456
f 1456 1457 1462
f 1585 1582 1454
f 1518 1519 1453
f 1476 1478 1456
f 1462 1464 1456
f 1572 1586 1454
f 1464 1466 1456
f 1515 1516 1453
f 1581 1458 1455
f 1561 1541 1542
f 1542 1568 1561
f 1559 1568 1542
f 1560 1559 1543
f 1567 1560 1556
f 1578 1567 1555
f 1576 1578 1554
f 1577 1576 1553
f 1574 1577 1552
f 1575 1574 1551
f 1565 1575 1549
f 1566 1565 1547
f 1564 1566 1545
f 1557 1564 1544
f 1558 1557 1546
f 1581 1558 1548
f 1458 1581 1550
f 1550 1459 1458
f 1548 1550 1581
f 1546 1548 1558
f 1544 1546 1557
f 1545 1544 1564
f 1547 1545 1566
f 1549 1547 1565
f 1551 1549 1575
f 1552 1551 1574
f 1553 1552 1577
f 1554 1553 1576
f 1555 1554 1578
f 1556 1555 1567
f 1543 1556 1560
f 1542 1543 1559
f 1524 1526 1527
f 1583 1527 1533
f 1562 1533 1529
f 1563 1529 1528
f 1573 1528 1531
f 1571 1531 1530
f 1572 1530 1532
f 1586 1532 1535
f 1584 1535 1534
f 1585 1534 1536
f 1582 1536 1537
f 1580 1537 1538
f 1569 1538 1539
f 1570 1539 1540
f 1579 1540 1541
f 1541 1561 1579
f 1540 1579 1570
f 1539 1570 1569
f 1538 1569 1580
f 1537 1580 1582
f 1536 1582 1585
f 1534 1585 1584
f 1535 1584 1586
f 1532 1586 1572
f 1530 1572 1571
f 1531 1571 1573
f 1528 1573 1563
f 1529 1563 1562
f 1533 1562 1583
f 1527 1583 1524
f 1449 1352 1587
f 1352 1342 1588
f 1588 1587 1352
f 1344 1589 1588
f 1588 1342 1344
f 1344 1449 1590
f 1590 1589 1344
f 1587 1590 1449
f 1591 150 149
f 149 148 1591
f 1591 154 153
f 1591 157 156
f 1591 160 159
f 1591 151 150
f 153 152 1591
f 156 155 1591
f 159 158 1591
f 1592 138 137
f 1592 141 140
f 1592 143 142
f 152 151 1591
f 158 157 1591
f 1593 125 124
f 1593 131 130
f 1592 134 133
f 1592 136 135
f 1592 139 138
f 142 141 1592
f 155 154 1591
f 1594 173 172
f 1593 121 120
f 1593 126 125
f 1593 128 127
f 130 129 1593
f 135 134 1592
f 140 139 1592
f 148 147 1591
f 1591 1594 161
f 1594 163 162
f 1594 165 164
f 172 171 1594
f 1593 122 121
f 124 123 1593
f 129 128 1593
f 137 136 1592
f 1592 145 144
f 161 160 1591
f 164 163 1594
f 1594 174 173
f 1593 118 117
f 120 119 1593
f 127 126 1593
f 1593 1592 132
f 144 143 1592
f 1592 1591 146
f 162 161 1594
f 1594 167 166
f 1594 170 169
f 1594 117 174
f 119 118 1593
f 132 131 1593
f 146 145 1592
f 166 165 1594
f 169 168 1594
f 117 1594 1593
f 133 132 1592
f 168 167 1594
f 123 122 1593
f 171 170 1594
f 147 146 1591
f 1591 1590 1587
f 1587 1594 1591
f 1594 1587 1588
f 1588 1593 1594
f 1593 1588 1589
f 1589 1592 1593
f 1592 1589 1590
f 1590 1591 1592
f 1501 1385 1595
f 1398 1596 1595
f 1595 1385 1398
f 1525 1597 1596
f 1596 1398 1525
f 1525 1501 1598
f 1598 1597 1525
f 1595 1598 1501
f 1414 1599 1600
f 1414 1412 1601
f 1601 1599 1414
f 1412 1409 1602
f 1602 1601 1412
f 1409 1408 1600
f 1600 1602 1409
f 1600 1408 1414
f 1598 1595 1600
f 1600 1599 1598
f 1596 1602 1600
f 1600 1595 1596
f 1597 1601 1602
f 1602 1596 1597
f 1597 1598 1599
f 1599 1601 1597
`,Tl=`# PotatoCam lid, exported from Onshape, units: mm (Y = depth, Z = up)
v 67.27 7.65 60.00
v 66.98 8.09 60.00
v 66.98 8.09 63.00
v 67.60 7.25 60.00
v 67.27 7.65 63.00
v 67.97 6.88 60.00
v 67.60 7.25 63.00
v 68.38 6.55 60.00
v 67.97 6.88 63.00
v 68.82 6.27 60.00
v 68.38 6.55 63.00
v 69.29 6.04 60.00
v 68.82 6.27 63.00
v 69.78 5.85 60.00
v 69.29 6.04 63.00
v 70.28 5.72 60.00
v 69.78 5.85 63.00
v 70.80 5.64 60.00
v 70.28 5.72 63.00
v 71.33 5.61 60.00
v 70.80 5.64 63.00
v 71.33 5.61 63.00
v 60.66 18.91 60.00
v 60.66 18.91 63.00
v 60.39 23.44 60.00
v 60.63 23.90 60.00
v 60.63 23.90 63.00
v 60.21 22.95 60.00
v 60.39 23.44 63.00
v 60.08 22.44 60.00
v 60.21 22.95 63.00
v 60.00 21.92 60.00
v 60.08 22.44 63.00
v 59.97 21.40 60.00
v 60.00 21.92 63.00
v 60.00 20.88 60.00
v 59.97 21.40 63.00
v 60.09 20.36 60.00
v 60.00 20.88 63.00
v 60.23 19.86 60.00
v 60.09 20.36 63.00
v 60.42 19.37 60.00
v 60.23 19.86 63.00
v 60.42 19.37 63.00
v 66.83 34.79 60.00
v 66.83 34.79 63.00
v 70.62 37.28 60.00
v 71.15 37.31 60.00
v 71.15 37.31 63.00
v 70.11 37.20 60.00
v 70.62 37.28 63.00
v 69.60 37.06 60.00
v 70.11 37.20 63.00
v 69.12 36.87 60.00
v 69.60 37.06 63.00
v 68.65 36.63 60.00
v 69.12 36.87 63.00
v 68.21 36.34 60.00
v 68.65 36.63 63.00
v 67.81 36.01 60.00
v 68.21 36.34 63.00
v 67.44 35.64 60.00
v 67.81 36.01 63.00
v 67.11 35.23 60.00
v 67.44 35.64 63.00
v 67.11 35.23 63.00
v 83.67 37.39 60.00
v 83.67 37.39 63.00
v 87.73 35.35 60.00
v 88.02 34.91 60.00
v 88.02 34.91 63.00
v 87.40 35.75 60.00
v 87.73 35.35 63.00
v 87.03 36.12 60.00
v 87.40 35.75 63.00
v 86.62 36.45 60.00
v 87.03 36.12 63.00
v 86.18 36.73 60.00
v 86.62 36.45 63.00
v 85.71 36.96 60.00
v 86.18 36.73 63.00
v 85.22 37.15 60.00
v 85.71 36.96 63.00
v 84.72 37.28 60.00
v 85.22 37.15 63.00
v 84.20 37.36 60.00
v 84.72 37.28 63.00
v 84.20 37.36 63.00
v 94.34 24.09 60.00
v 94.34 24.09 63.00
v 94.61 19.56 60.00
v 94.37 19.10 60.00
v 94.37 19.10 63.00
v 94.79 20.05 60.00
v 94.61 19.56 63.00
v 94.92 20.56 60.00
v 94.79 20.05 63.00
v 95.00 21.08 60.00
v 94.92 20.56 63.00
v 95.03 21.60 60.00
v 95.00 21.08 63.00
v 95.00 22.12 60.00
v 95.03 21.60 63.00
v 94.91 22.64 60.00
v 95.00 22.12 63.00
v 94.77 23.14 60.00
v 94.91 22.64 63.00
v 94.58 23.63 60.00
v 94.77 23.14 63.00
v 94.58 23.63 63.00
v 88.17 8.21 60.00
v 88.17 8.21 63.00
v 84.38 5.72 60.00
v 83.85 5.69 60.00
v 83.85 5.69 63.00
v 84.89 5.80 60.00
v 84.38 5.72 63.00
v 85.40 5.94 60.00
v 84.89 5.80 63.00
v 85.88 6.13 60.00
v 85.40 5.94 63.00
v 86.35 6.37 60.00
v 85.88 6.13 63.00
v 86.79 6.66 60.00
v 86.35 6.37 63.00
v 87.19 6.99 60.00
v 86.79 6.66 63.00
v 87.56 7.36 60.00
v 87.19 6.99 63.00
v 87.89 7.77 60.00
v 87.56 7.36 63.00
v 87.89 7.77 63.00
v 83.00 44.00 60.00
v 84.57 43.92 60.00
v 95.99 36.50 60.00
v 96.70 35.10 60.00
v 97.67 13.88 60.00
v 97.27 12.36 60.00
v 97.92 15.43 60.00
v 86.12 43.67 60.00
v 97.27 33.64 60.00
v 97.92 30.57 60.00
v 98.00 29.00 60.00
v 97.67 32.12 60.00
v 95.99 9.50 60.00
v 95.14 8.18 60.00
v 96.70 10.90 60.00
v 87.64 43.27 60.00
v 94.15 39.04 60.00
v 95.14 37.82 60.00
v 94.15 6.96 60.00
v 98.00 17.00 60.00
v 87.64 2.73 60.00
v 86.12 2.33 60.00
v 89.10 42.70 60.00
v 90.50 41.99 60.00
v 84.57 2.08 60.00
v 83.00 2.00 60.00
v 20.00 2.00 60.00
v 93.04 5.85 60.00
v 91.82 4.86 60.00
v 89.10 3.30 60.00
v 20.00 44.00 60.00
v 90.50 4.01 60.00
v 12.50 4.01 60.00
v 13.90 42.70 60.00
v 15.36 43.27 60.00
v 11.18 4.86 60.00
v 6.30 10.90 60.00
v 5.73 12.36 60.00
v 7.01 9.50 60.00
v 7.86 37.82 60.00
v 8.85 39.04 60.00
v 12.50 41.99 60.00
v 18.43 43.92 60.00
v 91.82 41.14 60.00
v 93.04 40.15 60.00
v 8.85 6.96 60.00
v 7.86 8.18 60.00
v 9.96 5.85 60.00
v 5.08 30.57 60.00
v 5.33 32.12 60.00
v 5.00 29.00 60.00
v 7.01 36.50 60.00
v 5.73 33.64 60.00
v 6.30 35.10 60.00
v 11.18 41.14 60.00
v 16.88 43.67 60.00
v 15.36 2.73 60.00
v 13.90 3.30 60.00
v 18.43 2.08 60.00
v 16.88 2.33 60.00
v 5.33 13.88 60.00
v 9.96 40.15 60.00
v 5.08 15.43 60.00
v 5.00 17.00 60.00
v 98.00 17.00 57.00
v 97.92 15.43 57.00
v 97.67 13.88 57.00
v 97.27 12.36 57.00
v 96.70 10.90 57.00
v 95.99 9.50 57.00
v 95.14 8.18 57.00
v 94.15 6.96 57.00
v 93.04 5.85 57.00
v 91.82 4.86 57.00
v 90.50 4.01 57.00
v 89.10 3.30 57.00
v 87.64 2.73 57.00
v 86.12 2.33 57.00
v 84.57 2.08 57.00
v 83.00 2.00 57.00
v 98.00 29.00 57.00
v 83.00 44.00 57.00
v 84.57 43.92 57.00
v 86.12 43.67 57.00
v 87.64 43.27 57.00
v 89.10 42.70 57.00
v 90.50 41.99 57.00
v 91.82 41.14 57.00
v 93.04 40.15 57.00
v 94.15 39.04 57.00
v 95.14 37.82 57.00
v 95.99 36.50 57.00
v 96.70 35.10 57.00
v 97.27 33.64 57.00
v 97.67 32.12 57.00
v 97.92 30.57 57.00
v 20.00 44.00 57.00
v 5.00 29.00 57.00
v 5.08 30.57 57.00
v 5.33 32.12 57.00
v 5.73 33.64 57.00
v 6.30 35.10 57.00
v 7.01 36.50 57.00
v 7.86 37.82 57.00
v 8.85 39.04 57.00
v 9.96 40.15 57.00
v 11.18 41.14 57.00
v 12.50 41.99 57.00
v 13.90 42.70 57.00
v 15.36 43.27 57.00
v 16.88 43.67 57.00
v 18.43 43.92 57.00
v 5.00 17.00 57.00
v 20.00 2.00 57.00
v 18.43 2.08 57.00
v 16.88 2.33 57.00
v 15.36 2.73 57.00
v 13.90 3.30 57.00
v 12.50 4.01 57.00
v 11.18 4.86 57.00
v 9.96 5.85 57.00
v 8.85 6.96 57.00
v 7.86 8.18 57.00
v 7.01 9.50 57.00
v 6.30 10.90 57.00
v 5.73 12.36 57.00
v 5.33 13.88 57.00
v 5.08 15.43 57.00
v 85.09 48.89 63.00
v 83.00 49.00 63.00
v 87.16 48.56 63.00
v 100.32 7.00 63.00
v 101.27 8.87 63.00
v 97.86 3.62 63.00
v 99.18 5.24 63.00
v 15.84 48.56 63.00
v 102.02 10.82 63.00
v 102.89 31.09 63.00
v 102.56 33.16 63.00
v 103.00 29.00 63.00
v 93.00 46.32 63.00
v 91.13 47.27 63.00
v 89.18 48.02 63.00
v 20.00 49.00 63.00
v 13.82 48.02 63.00
v 83.00 -3.00 63.00
v 102.56 12.84 63.00
v 96.38 2.14 63.00
v 17.91 48.89 63.00
v 11.87 47.27 63.00
v 1.73 8.87 63.00
v 2.68 7.00 63.00
v 0.44 12.84 63.00
v 0.98 10.82 63.00
v 5.14 3.62 63.00
v 6.62 2.14 63.00
v 17.91 -2.89 63.00
v 20.00 -3.00 63.00
v 85.09 -2.89 63.00
v 101.27 37.13 63.00
v 100.32 39.00 63.00
v 102.02 35.18 63.00
v 10.00 46.32 63.00
v 3.82 40.76 63.00
v 3.82 5.24 63.00
v 8.24 0.82 63.00
v 10.00 -0.32 63.00
v 15.84 -2.56 63.00
v 94.76 0.82 63.00
v 102.89 14.91 63.00
v 97.86 42.38 63.00
v 2.68 39.00 63.00
v 0.44 33.16 63.00
v 0.11 31.09 63.00
v 0.11 14.91 63.00
v 11.87 -1.27 63.00
v 13.82 -2.02 63.00
v 87.16 -2.56 63.00
v 89.18 -2.02 63.00
v 91.13 -1.27 63.00
v 93.00 -0.32 63.00
v 99.18 40.76 63.00
v 96.38 43.86 63.00
v 94.76 45.18 63.00
v 1.73 37.13 63.00
v 0.98 35.18 63.00
v 0.00 17.00 63.00
v 103.00 17.00 63.00
v 0.00 29.00 63.00
v 6.62 43.86 63.00
v 5.14 42.38 63.00
v 8.24 45.18 63.00
v 83.00 49.00 60.00
v 85.09 48.89 60.00
v 87.16 48.56 60.00
v 89.18 48.02 60.00
v 91.13 47.27 60.00
v 93.00 46.32 60.00
v 94.76 45.18 60.00
v 96.38 43.86 60.00
v 97.86 42.38 60.00
v 99.18 40.76 60.00
v 100.32 39.00 60.00
v 101.27 37.13 60.00
v 102.02 35.18 60.00
v 102.56 33.16 60.00
v 102.89 31.09 60.00
v 103.00 29.00 60.00
v 20.00 49.00 60.00
v 17.91 48.89 60.00
v 15.84 48.56 60.00
v 13.82 48.02 60.00
v 11.87 47.27 60.00
v 10.00 46.32 60.00
v 8.24 45.18 60.00
v 6.62 43.86 60.00
v 5.14 42.38 60.00
v 3.82 40.76 60.00
v 2.68 39.00 60.00
v 1.73 37.13 60.00
v 0.98 35.18 60.00
v 0.44 33.16 60.00
v 0.11 31.09 60.00
v 0.00 29.00 60.00
v 0.00 17.00 60.00
v 0.11 14.91 60.00
v 0.44 12.84 60.00
v 0.98 10.82 60.00
v 1.73 8.87 60.00
v 2.68 7.00 60.00
v 3.82 5.24 60.00
v 5.14 3.62 60.00
v 6.62 2.14 60.00
v 8.24 0.82 60.00
v 10.00 -0.32 60.00
v 11.87 -1.27 60.00
v 13.82 -2.02 60.00
v 15.84 -2.56 60.00
v 17.91 -2.89 60.00
v 20.00 -3.00 60.00
v 103.00 17.00 60.00
v 102.89 14.91 60.00
v 102.56 12.84 60.00
v 102.02 10.82 60.00
v 101.27 8.87 60.00
v 100.32 7.00 60.00
v 99.18 5.24 60.00
v 97.86 3.62 60.00
v 96.38 2.14 60.00
v 94.76 0.82 60.00
v 93.00 -0.32 60.00
v 91.13 -1.27 60.00
v 89.18 -2.02 60.00
v 87.16 -2.56 60.00
v 85.09 -2.89 60.00
v 83.00 -3.00 60.00
v 20.00 45.90 60.00
v 18.23 45.81 60.00
v 83.00 45.90 60.00
v 6.33 7.07 60.00
v 7.44 5.69 60.00
v 5.36 8.55 60.00
v 4.56 10.13 60.00
v 3.93 11.78 60.00
v 84.77 45.81 60.00
v 86.51 45.53 60.00
v 88.22 45.07 60.00
v 99.90 29.00 60.00
v 99.81 30.77 60.00
v 99.90 17.00 60.00
v 20.00 0.10 60.00
v 18.23 0.19 60.00
v 8.69 4.44 60.00
v 3.47 13.49 60.00
v 3.19 15.23 60.00
v 3.10 17.00 60.00
v 3.10 29.00 60.00
v 3.47 32.51 60.00
v 3.19 30.77 60.00
v 3.93 34.22 60.00
v 10.07 42.67 60.00
v 8.69 41.56 60.00
v 11.55 43.64 60.00
v 13.13 44.44 60.00
v 14.78 45.07 60.00
v 16.49 45.53 60.00
v 99.53 32.51 60.00
v 99.07 34.22 60.00
v 99.81 15.23 60.00
v 91.45 2.36 60.00
v 92.93 3.33 60.00
v 89.87 1.56 60.00
v 86.51 0.47 60.00
v 88.22 0.93 60.00
v 84.77 0.19 60.00
v 83.00 0.10 60.00
v 4.56 35.87 60.00
v 89.87 44.44 60.00
v 91.45 43.64 60.00
v 97.64 37.45 60.00
v 96.67 38.93 60.00
v 98.44 35.87 60.00
v 99.53 13.49 60.00
v 99.07 11.78 60.00
v 97.64 8.55 60.00
v 98.44 10.13 60.00
v 96.67 7.07 60.00
v 16.49 0.47 60.00
v 14.78 0.93 60.00
v 11.55 2.36 60.00
v 13.13 1.56 60.00
v 10.07 3.33 60.00
v 5.36 37.45 60.00
v 6.33 38.93 60.00
v 92.93 42.67 60.00
v 94.31 41.56 60.00
v 95.56 40.31 60.00
v 95.56 5.69 60.00
v 94.31 4.44 60.00
v 7.44 40.31 60.00
v 7.44 40.31 57.00
v 8.69 41.56 57.00
v 10.07 42.67 57.00
v 11.55 43.64 57.00
v 99.90 29.00 57.00
v 99.90 17.00 57.00
v 99.81 15.23 57.00
v 94.31 4.44 57.00
v 92.93 3.33 57.00
v 84.77 0.19 57.00
v 83.00 0.10 57.00
v 20.00 0.10 57.00
v 13.13 44.44 57.00
v 99.81 30.77 57.00
v 91.45 2.36 57.00
v 89.87 1.56 57.00
v 88.22 0.93 57.00
v 86.51 0.47 57.00
v 18.23 0.19 57.00
v 10.07 3.33 57.00
v 8.69 4.44 57.00
v 3.47 13.49 57.00
v 3.19 15.23 57.00
v 3.10 17.00 57.00
v 3.10 29.00 57.00
v 5.36 37.45 57.00
v 6.33 38.93 57.00
v 14.78 45.07 57.00
v 91.45 43.64 57.00
v 92.93 42.67 57.00
v 94.31 41.56 57.00
v 95.56 40.31 57.00
v 96.67 38.93 57.00
v 97.64 8.55 57.00
v 96.67 7.07 57.00
v 95.56 5.69 57.00
v 16.49 0.47 57.00
v 14.78 0.93 57.00
v 13.13 1.56 57.00
v 11.55 2.36 57.00
v 16.49 45.53 57.00
v 18.23 45.81 57.00
v 20.00 45.90 57.00
v 83.00 45.90 57.00
v 84.77 45.81 57.00
v 89.87 44.44 57.00
v 99.53 13.49 57.00
v 98.44 10.13 57.00
v 6.33 7.07 57.00
v 5.36 8.55 57.00
v 4.56 10.13 57.00
v 3.93 11.78 57.00
v 3.19 30.77 57.00
v 3.47 32.51 57.00
v 3.93 34.22 57.00
v 4.56 35.87 57.00
v 97.64 37.45 57.00
v 98.44 35.87 57.00
v 99.53 32.51 57.00
v 7.44 5.69 57.00
v 86.51 45.53 57.00
v 88.22 45.07 57.00
v 99.07 34.22 57.00
v 99.07 11.78 57.00
f 1 2 3
f 4 1 5
f 6 4 7
f 8 6 9
f 10 8 11
f 12 10 13
f 14 12 15
f 16 14 17
f 18 16 19
f 20 18 21
f 21 22 20
f 19 21 18
f 17 19 16
f 15 17 14
f 13 15 12
f 11 13 10
f 9 11 8
f 7 9 6
f 5 7 4
f 3 5 1
f 3 2 23
f 23 24 3
f 25 26 27
f 28 25 29
f 30 28 31
f 32 30 33
f 34 32 35
f 36 34 37
f 38 36 39
f 40 38 41
f 42 40 43
f 23 42 44
f 44 24 23
f 43 44 42
f 41 43 40
f 39 41 38
f 37 39 36
f 35 37 34
f 33 35 32
f 31 33 30
f 29 31 28
f 27 29 25
f 27 26 45
f 45 46 27
f 47 48 49
f 50 47 51
f 52 50 53
f 54 52 55
f 56 54 57
f 58 56 59
f 60 58 61
f 62 60 63
f 64 62 65
f 45 64 66
f 66 46 45
f 65 66 64
f 63 65 62
f 61 63 60
f 59 61 58
f 57 59 56
f 55 57 54
f 53 55 52
f 51 53 50
f 49 51 47
f 67 68 49
f 49 48 67
f 69 70 71
f 72 69 73
f 74 72 75
f 76 74 77
f 78 76 79
f 80 78 81
f 82 80 83
f 84 82 85
f 86 84 87
f 67 86 88
f 88 68 67
f 87 88 86
f 85 87 84
f 83 85 82
f 81 83 80
f 79 81 78
f 77 79 76
f 75 77 74
f 73 75 72
f 71 73 69
f 89 90 71
f 71 70 89
f 91 92 93
f 94 91 95
f 96 94 97
f 98 96 99
f 100 98 101
f 102 100 103
f 104 102 105
f 106 104 107
f 108 106 109
f 89 108 110
f 110 90 89
f 109 110 108
f 107 109 106
f 105 107 104
f 103 105 102
f 101 103 100
f 99 101 98
f 97 99 96
f 95 97 94
f 93 95 91
f 111 112 93
f 93 92 111
f 113 114 115
f 116 113 117
f 118 116 119
f 120 118 121
f 122 120 123
f 124 122 125
f 126 124 127
f 128 126 129
f 130 128 131
f 111 130 132
f 132 112 111
f 131 132 130
f 129 131 128
f 127 129 126
f 125 127 124
f 123 125 122
f 121 123 120
f 119 121 118
f 117 119 116
f 115 117 113
f 20 22 115
f 115 114 20
f 67 48 133
f 134 86 67
f 70 135 136
f 111 137 138
f 92 139 137
f 133 134 67
f 140 84 86
f 136 141 70
f 137 111 92
f 133 47 50
f 86 134 140
f 70 142 143
f 141 144 70
f 111 145 146
f 138 147 111
f 48 47 133
f 140 148 82
f 144 142 70
f 70 149 150
f 146 151 111
f 92 152 139
f 153 154 118
f 82 84 140
f 155 78 80
f 156 76 78
f 149 70 69
f 150 135 70
f 147 145 111
f 154 116 118
f 157 113 116
f 114 157 158
f 158 14 16
f 159 12 14
f 159 6 8
f 148 80 82
f 78 155 156
f 143 89 70
f 151 160 111
f 111 160 161
f 162 124 126
f 162 153 122
f 116 154 157
f 158 18 20
f 14 158 159
f 8 10 159
f 163 58 60
f 163 54 56
f 163 50 52
f 80 148 155
f 143 108 89
f 161 130 111
f 161 164 128
f 122 124 162
f 118 120 153
f 158 20 114
f 10 12 159
f 159 1 4
f 38 40 165
f 28 166 167
f 56 58 163
f 50 163 133
f 143 106 108
f 152 100 102
f 128 130 161
f 126 164 162
f 114 113 157
f 4 6 159
f 165 168 38
f 36 169 170
f 36 38 171
f 30 172 173
f 28 174 166
f 25 175 163
f 52 54 163
f 156 176 74
f 176 177 72
f 69 177 149
f 152 98 100
f 152 94 96
f 126 128 164
f 16 18 158
f 38 178 179
f 168 180 38
f 171 169 36
f 30 181 182
f 30 32 183
f 30 184 172
f 30 185 186
f 28 187 174
f 25 188 175
f 60 62 163
f 72 74 176
f 143 104 106
f 102 143 152
f 152 91 94
f 120 122 153
f 159 42 23
f 40 189 190
f 40 191 192
f 180 178 38
f 170 193 36
f 183 181 30
f 186 184 30
f 28 194 187
f 25 167 188
f 163 64 45
f 74 76 156
f 102 104 143
f 92 91 152
f 23 2 159
f 192 189 40
f 40 42 159
f 193 195 36
f 196 34 36
f 183 32 34
f 173 28 30
f 28 173 194
f 45 26 163
f 69 72 177
f 2 1 159
f 159 191 40
f 36 195 196
f 182 185 30
f 163 26 25
f 96 98 152
f 179 171 38
f 167 25 28
f 190 165 40
f 62 64 163
f 34 196 183
f 139 152 197
f 137 139 198
f 138 137 199
f 147 138 200
f 145 147 201
f 146 145 202
f 151 146 203
f 160 151 204
f 161 160 205
f 164 161 206
f 162 164 207
f 153 162 208
f 154 153 209
f 157 154 210
f 158 157 211
f 211 212 158
f 210 211 157
f 209 210 154
f 208 209 153
f 207 208 162
f 206 207 164
f 205 206 161
f 204 205 160
f 203 204 151
f 202 203 146
f 201 202 145
f 200 201 147
f 199 200 138
f 198 199 137
f 197 198 139
f 197 152 143
f 143 213 197
f 134 133 214
f 140 134 215
f 148 140 216
f 155 148 217
f 156 155 218
f 176 156 219
f 177 176 220
f 149 177 221
f 150 149 222
f 135 150 223
f 136 135 224
f 141 136 225
f 144 141 226
f 142 144 227
f 143 142 228
f 228 213 143
f 227 228 142
f 226 227 144
f 225 226 141
f 224 225 136
f 223 224 135
f 222 223 150
f 221 222 149
f 220 221 177
f 219 220 176
f 218 219 156
f 217 218 155
f 216 217 148
f 215 216 140
f 214 215 134
f 214 133 163
f 163 229 214
f 181 183 230
f 182 181 231
f 185 182 232
f 186 185 233
f 184 186 234
f 172 184 235
f 173 172 236
f 194 173 237
f 187 194 238
f 174 187 239
f 166 174 240
f 167 166 241
f 188 167 242
f 175 188 243
f 163 175 244
f 244 229 163
f 243 244 175
f 242 243 188
f 241 242 167
f 240 241 166
f 239 240 174
f 238 239 187
f 237 238 194
f 236 237 173
f 235 236 172
f 234 235 184
f 233 234 186
f 232 233 185
f 231 232 182
f 230 231 181
f 230 183 196
f 196 245 230
f 191 159 246
f 192 191 247
f 189 192 248
f 190 189 249
f 165 190 250
f 168 165 251
f 180 168 252
f 178 180 253
f 179 178 254
f 171 179 255
f 169 171 256
f 170 169 257
f 193 170 258
f 195 193 259
f 196 195 260
f 260 245 196
f 259 260 195
f 258 259 193
f 257 258 170
f 256 257 169
f 255 256 171
f 254 255 179
f 253 254 178
f 252 253 180
f 251 252 168
f 250 251 165
f 249 250 190
f 248 249 189
f 247 248 192
f 246 247 191
f 246 159 158
f 158 212 246
f 261 262 68
f 262 49 68
f 262 51 49
f 263 261 88
f 262 53 51
f 112 264 265
f 112 266 267
f 263 87 85
f 68 88 261
f 29 27 268
f 93 112 269
f 267 264 112
f 71 270 271
f 71 90 272
f 273 274 81
f 275 85 83
f 88 87 263
f 27 46 276
f 268 277 29
f 115 22 278
f 269 279 93
f 112 280 266
f 272 270 71
f 274 83 81
f 85 275 263
f 276 55 53
f 276 281 27
f 277 282 29
f 39 283 284
f 39 285 286
f 41 287 288
f 44 289 290
f 291 117 115
f 265 269 112
f 71 292 293
f 271 294 71
f 83 274 275
f 276 57 55
f 276 61 59
f 276 65 63
f 282 295 29
f 33 31 296
f 286 283 39
f 41 297 287
f 43 298 299
f 44 300 289
f 278 291 115
f 301 131 129
f 132 131 301
f 302 95 93
f 294 292 71
f 303 73 71
f 53 262 276
f 63 61 276
f 281 268 27
f 296 304 33
f 35 305 306
f 305 35 33
f 39 307 285
f 41 284 297
f 43 308 309
f 43 288 298
f 44 309 300
f 290 5 3
f 290 278 19
f 22 21 278
f 291 310 119
f 311 123 121
f 312 125 123
f 312 313 127
f 301 280 132
f 279 302 93
f 71 314 303
f 315 316 77
f 316 273 79
f 59 57 276
f 46 66 276
f 304 317 33
f 33 318 305
f 319 307 39
f 288 43 41
f 299 308 43
f 3 24 290
f 290 9 7
f 290 13 11
f 290 17 15
f 21 19 278
f 310 121 119
f 123 311 312
f 313 129 127
f 112 132 280
f 320 272 105
f 272 110 109
f 293 314 71
f 79 77 316
f 66 65 276
f 31 29 295
f 306 321 35
f 321 319 37
f 284 41 39
f 290 24 44
f 11 9 290
f 19 17 290
f 121 310 311
f 129 313 301
f 272 107 105
f 90 110 272
f 315 75 73
f 81 79 273
f 31 322 323
f 295 324 31
f 37 35 321
f 309 44 43
f 15 13 290
f 127 125 312
f 95 302 320
f 320 101 99
f 109 107 272
f 77 75 315
f 324 322 31
f 39 37 319
f 119 117 291
f 99 97 320
f 73 303 315
f 317 318 33
f 320 97 95
f 323 296 31
f 320 103 101
f 7 5 290
f 105 103 320
f 325 262 261
f 326 261 263
f 327 263 275
f 328 275 274
f 329 274 273
f 330 273 316
f 331 316 315
f 332 315 303
f 333 303 314
f 334 314 293
f 335 293 292
f 336 292 294
f 337 294 271
f 338 271 270
f 339 270 272
f 272 340 339
f 270 339 338
f 271 338 337
f 294 337 336
f 292 336 335
f 293 335 334
f 314 334 333
f 303 333 332
f 315 332 331
f 316 331 330
f 273 330 329
f 274 329 328
f 275 328 327
f 263 327 326
f 261 326 325
f 276 341 342
f 281 342 343
f 268 343 344
f 277 344 345
f 282 345 346
f 295 346 347
f 324 347 348
f 322 348 349
f 323 349 350
f 296 350 351
f 304 351 352
f 317 352 353
f 318 353 354
f 305 354 355
f 306 355 356
f 356 321 306
f 355 306 305
f 354 305 318
f 353 318 317
f 352 317 304
f 351 304 296
f 350 296 323
f 349 323 322
f 348 322 324
f 347 324 295
f 346 295 282
f 345 282 277
f 344 277 268
f 343 268 281
f 342 281 276
f 262 325 341
f 341 276 262
f 319 357 358
f 307 358 359
f 285 359 360
f 286 360 361
f 283 361 362
f 284 362 363
f 297 363 364
f 287 364 365
f 288 365 366
f 298 366 367
f 299 367 368
f 308 368 369
f 309 369 370
f 300 370 371
f 289 371 372
f 372 290 289
f 371 289 300
f 370 300 309
f 369 309 308
f 368 308 299
f 367 299 298
f 366 298 288
f 365 288 287
f 364 287 297
f 363 297 284
f 362 284 283
f 361 283 286
f 360 286 285
f 359 285 307
f 358 307 319
f 373 320 302
f 374 302 279
f 375 279 269
f 376 269 265
f 377 265 264
f 378 264 267
f 379 267 266
f 380 266 280
f 381 280 301
f 382 301 313
f 383 313 312
f 384 312 311
f 385 311 310
f 386 310 291
f 387 291 278
f 278 388 387
f 291 387 386
f 310 386 385
f 311 385 384
f 312 384 383
f 313 383 382
f 301 382 381
f 280 381 380
f 266 380 379
f 267 379 378
f 264 378 377
f 265 377 376
f 269 376 375
f 279 375 374
f 302 374 373
f 290 372 388
f 388 278 290
f 373 340 272
f 272 320 373
f 321 356 357
f 357 319 321
f 341 389 390
f 341 325 391
f 363 392 393
f 362 394 392
f 361 395 394
f 361 360 396
f 391 389 341
f 326 397 391
f 327 398 397
f 327 328 399
f 340 400 401
f 402 400 340
f 388 372 403
f 372 371 404
f 366 365 405
f 365 364 393
f 392 363 362
f 396 395 361
f 359 406 396
f 359 358 407
f 358 357 408
f 357 356 409
f 354 410 411
f 353 412 410
f 347 413 414
f 346 415 413
f 345 416 415
f 345 344 417
f 343 418 417
f 342 390 418
f 391 325 326
f 399 398 327
f 338 419 420
f 338 339 401
f 340 373 402
f 374 421 402
f 383 422 423
f 384 424 422
f 386 425 426
f 387 427 425
f 388 428 427
f 404 403 372
f 393 405 365
f 394 362 361
f 407 406 359
f 409 408 357
f 410 354 353
f 353 352 429
f 413 347 346
f 417 416 345
f 418 343 342
f 397 326 327
f 329 430 399
f 329 330 431
f 335 432 433
f 335 336 434
f 401 419 338
f 402 373 374
f 375 435 421
f 375 376 436
f 378 437 438
f 379 439 437
f 422 383 384
f 385 426 424
f 425 386 387
f 403 428 388
f 370 440 404
f 369 441 440
f 367 442 443
f 367 366 444
f 393 364 363
f 408 407 358
f 355 411 409
f 429 412 353
f 351 445 429
f 350 446 445
f 415 346 345
f 390 342 341
f 431 430 329
f 331 447 431
f 332 448 447
f 333 449 448
f 434 432 335
f 336 337 420
f 401 339 340
f 436 435 375
f 437 378 379
f 380 450 439
f 381 451 450
f 382 423 451
f 424 384 385
f 427 387 388
f 440 370 369
f 369 368 443
f 444 442 367
f 396 360 359
f 411 355 354
f 445 351 350
f 349 452 446
f 349 348 414
f 417 344 343
f 431 330 331
f 448 332 333
f 334 433 449
f 420 434 336
f 421 374 375
f 377 438 436
f 439 379 380
f 451 381 382
f 426 385 386
f 443 441 369
f 405 444 366
f 429 352 351
f 414 452 349
f 399 328 329
f 449 333 334
f 420 337 338
f 438 377 378
f 423 382 383
f 443 368 367
f 446 350 349
f 447 331 332
f 436 376 377
f 404 371 370
f 414 348 347
f 450 380 381
f 433 334 335
f 409 356 355
f 453 237 236
f 453 454 238
f 238 237 453
f 454 455 239
f 239 238 454
f 455 456 240
f 457 458 197
f 459 198 197
f 460 205 204
f 460 461 206
f 462 463 212
f 212 463 464
f 240 239 455
f 456 465 241
f 466 457 213
f 197 458 459
f 206 205 460
f 461 467 207
f 468 469 209
f 469 470 210
f 464 246 212
f 471 247 246
f 472 252 251
f 472 473 253
f 474 259 258
f 474 475 260
f 475 476 245
f 476 477 230
f 478 235 234
f 479 236 235
f 241 240 456
f 480 242 241
f 481 482 220
f 482 483 221
f 483 484 222
f 484 485 223
f 466 228 227
f 197 213 457
f 486 202 201
f 486 487 203
f 487 488 204
f 207 206 461
f 468 208 207
f 210 209 469
f 246 464 471
f 471 489 248
f 489 490 249
f 490 491 250
f 492 251 250
f 253 252 472
f 260 259 474
f 230 245 476
f 235 478 479
f 241 465 480
f 493 243 242
f 493 494 244
f 229 495 496
f 496 497 215
f 498 218 217
f 498 481 219
f 221 220 482
f 223 222 484
f 213 228 466
f 459 499 199
f 500 201 200
f 203 202 486
f 204 488 460
f 209 208 468
f 470 462 211
f 248 247 471
f 250 249 490
f 251 492 472
f 501 502 256
f 503 257 256
f 504 258 257
f 245 260 475
f 505 231 230
f 506 232 231
f 506 507 233
f 507 508 234
f 236 479 453
f 244 243 493
f 495 229 244
f 215 214 496
f 219 218 498
f 222 221 483
f 485 509 224
f 509 510 225
f 511 227 226
f 199 198 459
f 201 500 486
f 207 467 468
f 212 211 462
f 250 491 492
f 512 254 253
f 512 501 255
f 256 502 503
f 258 504 474
f 231 505 506
f 234 233 507
f 242 480 493
f 496 214 229
f 513 216 215
f 513 514 217
f 220 219 481
f 225 224 509
f 515 226 225
f 227 511 466
f 204 203 487
f 249 248 489
f 255 254 512
f 257 503 504
f 233 232 506
f 244 494 495
f 217 216 513
f 224 223 485
f 226 515 511
f 499 516 200
f 211 210 470
f 256 255 501
f 234 508 478
f 217 514 498
f 200 199 499
f 253 473 512
f 215 497 513
f 200 516 500
f 225 510 515
f 230 477 505
f 457 400 402
f 402 458 457
f 428 463 462
f 427 462 470
f 425 470 469
f 426 469 468
f 424 468 467
f 422 467 461
f 423 461 460
f 451 460 488
f 450 488 487
f 439 487 486
f 437 486 500
f 438 500 516
f 436 516 499
f 435 499 459
f 421 459 458
f 458 402 421
f 459 421 435
f 499 435 436
f 516 436 438
f 500 438 437
f 486 437 439
f 487 439 450
f 488 450 451
f 460 451 423
f 461 423 422
f 467 422 424
f 468 424 426
f 469 426 425
f 470 425 427
f 462 427 428
f 463 428 403
f 403 464 463
f 408 476 475
f 407 475 474
f 406 474 504
f 396 504 503
f 395 503 502
f 394 502 501
f 392 501 512
f 393 512 473
f 405 473 472
f 444 472 492
f 442 492 491
f 443 491 490
f 441 490 489
f 440 489 471
f 404 471 464
f 464 403 404
f 471 404 440
f 489 440 441
f 490 441 443
f 491 443 442
f 492 442 444
f 472 444 405
f 473 405 393
f 512 393 392
f 501 392 394
f 502 394 395
f 503 395 396
f 504 396 406
f 474 406 407
f 475 407 408
f 408 409 477
f 477 476 408
f 389 495 494
f 390 494 493
f 418 493 480
f 417 480 465
f 416 465 456
f 415 456 455
f 413 455 454
f 414 454 453
f 452 453 479
f 446 479 478
f 445 478 508
f 429 508 507
f 412 507 506
f 410 506 505
f 411 505 477
f 477 409 411
f 505 411 410
f 506 410 412
f 507 412 429
f 508 429 445
f 478 445 446
f 479 446 452
f 453 452 414
f 454 414 413
f 455 413 415
f 456 415 416
f 465 416 417
f 480 417 418
f 493 418 390
f 494 390 389
f 495 389 391
f 391 496 495
f 400 457 466
f 401 466 511
f 419 511 515
f 420 515 510
f 434 510 509
f 432 509 485
f 433 485 484
f 449 484 483
f 448 483 482
f 447 482 481
f 431 481 498
f 430 498 514
f 399 514 513
f 398 513 497
f 397 497 496
f 496 391 397
f 497 397 398
f 513 398 399
f 514 399 430
f 498 430 431
f 481 431 447
f 482 447 448
f 483 448 449
f 484 449 433
f 485 433 432
f 509 432 434
f 510 434 420
f 515 420 419
f 511 419 401
f 466 401 400
`;function $(e,t={}){for(let t of Object.keys(e.attributes))t!==`position`&&e.deleteAttribute(t);return{geo:El(Sl(e,.001)),...t}}function El(e){let t=e.index.array,n=[];for(let e=0;e<t.length;e+=3){let[r,i,a]=[t[e],t[e+1],t[e+2]];r!==i&&i!==a&&r!==a&&n.push(r,i,a)}return e.setIndex(n),e}var Dl=(e,t,n,r,i,a)=>new Er(t-e,r-n,a-i).translate((e+t)/2,(n+r)/2,(i+a)/2);function Ol(e,t,n,r,i,a=i,o=32){let[s,c]=n<r?[n,r]:[r,n],[l,u]=n<r?[i,a]:[a,i],d=new Dr(u,l,c-s,o).translate(0,(s+c)/2,0);return e===`x`&&d.rotateZ(-Math.PI/2).translate(0,t[0],t[1]),e===`y`&&d.translate(t[0],0,t[1]),e===`z`&&d.rotateX(Math.PI/2).translate(t[0],t[1],0),d}function kl(e,t,n,r,i=48){return new qi(e.map(([e,t])=>new U(e,t)),i).rotateX(Math.PI/2).translate(t,n,r)}function Al(e,t,n,r,i,a,o){let s=Sl(new Ki(1,3),1e-4),c=s.attributes.position;for(let s=0;s<c.count;s++){let l=new G().fromBufferAttribute(c,s),u=1+.12*Math.sin(l.x*3.1+o)*Math.cos(l.y*2.7-o*1.3)+.08*Math.sin(l.z*4.3+o*2.1),d=l.z<0?.75:1;c.setXYZ(s,e+l.x*r*u,t+l.y*i*u,n+l.z*a*u*d)}return s}var jl=(e,t,n,r,i,a,o)=>$(Al(e,t,n,r,i,a,o),{crease:180,part:`wires`});function Ml(e){let t=[],n=[];for(let r of e.split(`
`)){let[e,...i]=r.trim().split(/\s+/);if(e===`v`&&t.push(...i.map(Number)),e===`f`){let e=i.map(e=>parseInt(e,10)-1);for(let t=1;t+1<e.length;t++)n.push(e[0],e[t],e[t+1])}}let r=new kn;return r.setAttribute(`position`,new _n(t,3)),r.setIndex(n),El(Sl(r,.01))}function Nl(e,t){let n=e.index.array,r=e.attributes.position,[i,a]=[[],[]],o=new G,s=new G,c=new G;for(let e=0;e<n.length;e+=3)o.fromBufferAttribute(r,n[e]),s.fromBufferAttribute(r,n[e+1]),c.fromBufferAttribute(r,n[e+2]),(t(o.add(s).add(c).divideScalar(3))?i:a).push(n[e],n[e+1],n[e+2]);return[i,a].map(e=>{let t=new kn;return t.setAttribute(`position`,r),t.setIndex(e),t})}function Pl(){let[e,t]=Nl(Ml(wl),e=>e.y>49.2),n={x:77.5,y:21.5,top:63},r={x:45,z:31.5},i=[];for(let e of[16.26,46.74]){i.push(Dl(23.5,64.2,7.2,9.7,e-1.27,e+1.27));for(let t=0;t<16;t++){let n=24.7+t*2.54;i.push(Dl(n-.32,n+.32,9.7,15.5,e-.32,e+.32))}}return[{id:`shell`,solids:[{geo:t}],explode:[0,0,-74],delay:.12,anchor:[96,47,52]},{id:`lens`,solids:[{geo:e}],explode:[0,0,-74],delay:.12,anchor:[51.5,64,47]},{id:`lid`,solids:[{geo:Ml(Tl)}],explode:[0,0,32],delay:0,anchor:[14,4,63]},{id:`button`,solids:[$(kl([[0,0],[16.8,0],[16.8,1.4],[0,1.4]],n.x,n.y,n.top),{crease:40}),$(kl([[0,1.4],[16.4,1.4],[16.4,2.6],[16.1,3.8],[15.5,5],[14.6,6],[13.4,6.8],[12.2,7.3],[12,7.3],[12,12.6],[11.8,13.2],[11.4,13.6],[10.8,13.8],[0,13.8]],n.x,n.y,n.top),{fill:`red`,crease:40}),$(Ol(`z`,[n.x,n.y],63,41,12.5)),$(Dl(71.5,83.5,18.5,24.5,31,41)),$(Dl(73.6,74.4,20,23,26,31)),$(Dl(80.6,81.4,20,23,26,31)),jl(74,21.5,26.5,1.8,1.8,1.6,24),jl(81,21.5,26.5,1.6,1.8,1.8,25)],explode:[0,0,46],delay:.04,anchor:[n.x+12,n.y,n.top+13.8]},{id:`board`,solids:[$(Dl(r.x-29.4,r.x+29.4,0,4.5,r.z-18.55,r.z+18.55)),$(Dl(20.9,69.1,5.6,7.2,14,49)),$(Dl(29,36,7.2,8.2,31,38)),$(Dl(38,43,7.2,8.2,31,36)),$(Dl(36,42,7.2,9,21,29)),$(Dl(53.5,57.5,7.2,9.6,22,40)),$(Dl(66.4,69.6,7.2,10.4,27,36)),...i.map(e=>$(e)),$(Dl(37,41,9,13,21.5,28.5),{part:`socket`}),jl(61.5,14,46.74,3.8,2.8,3,21),jl(61.5,14,16.26,3.6,3,2.8,22),jl(46.8,8.6,27,2.6,1.8,2.4,23)],explode:[0,-46,0],delay:.22,anchor:[17,4.5,50]},{id:`toggle`,solids:[$(Dl(76.5,89.5,.5,10.5,14,22)),$(Ol(`y`,[83,18],.5,-5,3.5,3.5,24)),$(Ol(`y`,[83,18],-3,-5,5.6,5.6,6),{crease:25}),$(new Dr(1.1,1.6,13,16).translate(0,6.5,0).rotateX(-Math.PI+.5).translate(83,-5,18)),...[79.5,83,86.5].map(e=>$(Dl(e-.6,e+.6,10.5,14,17.4,18.6))),jl(79.5,13.5,18,1.7,1.6,1.8,26),jl(83,13.5,18,1.9,1.8,1.6,27)],explode:[0,-36,6],delay:.26,anchor:[83,-16,13]},{id:`camera`,solids:[$(Dl(47.25,55.75,43,48,25.75,34.25)),$(Ol(`y`,[51.5,30],48,49.2,3.5,3.3,32)),$(Ol(`y`,[51.5,30],49.2,49.3,1.4,1.4,24)),$(Dl(44.75,58.25,30,43,29.85,30.15))],explode:[0,50,0],delay:.2,anchor:[51.5,49.2,33.5]},{id:`card`,solids:[$(Ll())],explode:[-62,0,0],delay:.3,anchor:[-3,23,43]},{id:`socket`,solids:[$(Dl(14,42,20,26.2,17.5,44.5))],explode:[-32,0,0],delay:.34,anchor:[30,26.2,44.5]},{id:`battery`,solids:[$(Dl(19,79,3,43,3.2,10.2))],explode:[0,0,0],delay:0,anchor:[79,43,10.2]},{id:`slide`,solids:[$(Dl(100,100.8,16.5,29.5,12,18.7)),$(Dl(94,100,17.5,28.5,12.5,18.2)),$(Dl(100.8,105.5,21.5,24.5,13.6,17)),...[19.5,23,26.5].map(e=>$(Dl(91,94,e-.4,e+.4,15,15.7))),jl(91.5,19.5,15.3,1.6,1.6,1.6,28),jl(91.5,23,15.3,1.8,1.6,1.7,29)],explode:[44,0,4],delay:.26,anchor:[105.5,23,17]},{id:`usb`,solids:[$(Rl(15,6,100,106.5,23,6),{fill:`glow`}),$(Dl(89,100,18,28,3.6,8.4),{fill:`glow`})],explode:[32,0,0],delay:.3,anchor:[106.5,30.5,9]},{id:`plug`,propOf:`usb`,solids:[$(Rl(8.3,2.5,100,106.5,23,6)),$(Rl(12,6.4,106.5,122,23,6)),$(Ol(`x`,[23,6],122,127,2.6,2,16)),$(Ol(`x`,[23,6],127,200,2,2,16))],explode:[32,0,0],delay:.3,anchor:[122,23,9.2]},{id:`glue`,solids:[Al(16.2,2.5,13.6,3.6,3,3.2,1),Al(73.8,2.5,13.6,3.4,3,3,2),Al(16.2,2.5,49.4,3.2,3,3.4,3),Al(73.8,2.5,49.4,3.8,3,3.2,4),Al(47.3,44.5,25.8,2.6,2.6,2.6,5),Al(55.7,44.5,34.2,2.8,2.6,2.4,6),Al(14,23,17.5,3,4,2.6,7),Al(14,23,44.5,3,4,2.6,8),Al(89.5,5,21.5,3,3.6,2.8,10),Al(19,3.5,7,4,3.4,3.4,9),Al(79,3.5,7,3.6,3.4,3.6,11),Al(19,42.5,7,3.8,3.4,3.2,12),Al(79,42.5,7,4.2,3.4,3.4,13),Al(94,23,9.2,4,5.5,2,14)].map(e=>$(e,{crease:180})),explode:[0,0,0],delay:0,anchor:[19,42.5,10]}]}var Fl=[{id:`ribbon`,part:`ribbon`,kind:`ribbon`,from:{part:`camera`,at:[51.5,30,30],dir:[0,-1,0]},to:{part:`board`,at:[55.5,9.6,31],dir:[0,1,0]},lift:[-6,0,26],reach:16,width:13,across:[[1,0,0],[0,0,1]]},{id:`sd-flex`,part:`socket`,kind:`ribbon`,from:{part:`socket`,at:[42,23,31],dir:[1,0,0]},to:{part:`board`,at:[39,13,25],dir:[0,1,0]},lift:[14,2,26],reach:12,width:9,across:[[0,0,1],[1,0,0]]},{id:`usb-cable`,part:`usb`,kind:`wire`,from:{part:`usb`,at:[89,23,6],dir:[-1,0,0]},to:{part:`board`,at:[69.6,8.8,31.5],dir:[1,0,0]},lift:[0,6,4],reach:8,radius:1.6},...[[`button`,[74,21.5,26],[0,0,-1],`board`,[61,14,46.74],[0,1,0],[0,6,8]],[`button`,[81,21.5,26],[0,0,-1],`board`,[62,14,16.26],[0,1,0],[0,4,4]],[`toggle`,[79.5,14,18],[0,1,0],`board`,[62,14,46.74],[0,1,0],[0,8,2]],[`toggle`,[83,14,18],[0,1,0],`board`,[61,14,16.26],[0,1,0],[0,10,-2]],[`battery`,[76,20,10.2],[0,0,1],`slide`,[91,19.5,15.3],[-1,0,0],[0,0,4]],[`slide`,[91,23,15.3],[-1,0,0],`board`,[47.5,7.2,27],[0,1,0],[0,10,-6]],[`battery`,[42,4,10.2],[0,0,1],`board`,[46,7.2,27],[0,1,0],[0,8,0]]].map(([e,t,n,r,i,a,o],s)=>({id:`wire-${s}`,part:`wires`,kind:`wire`,from:{part:e,at:[...t],dir:[...n]},to:{part:r,at:[...i],dir:[...a]},lift:[...o],reach:10}))],Il={ribbon:`ribbon`,wires:`wire-6`};function Ll(){let e=new ai;return e.moveTo(0,0),e.lineTo(32,0),e.lineTo(32,20),e.lineTo(28,24),e.lineTo(0,24),e.closePath(),new Ui(e,{depth:2.1,bevelEnabled:!1}).rotateX(Math.PI/2).translate(-3,24.05,19)}function Rl(e,t,n,r,i,a){let o=t/2,s=new ai;return s.moveTo(-e/2+o,-o),s.lineTo(e/2-o,-o),s.absarc(e/2-o,0,o,-Math.PI/2,Math.PI/2,!1),s.lineTo(-e/2+o,o),s.absarc(-e/2+o,0,o,Math.PI/2,3*Math.PI/2,!1),new Ui(s,{depth:r-n,bevelEnabled:!1,curveSegments:8}).rotateY(Math.PI/2).rotateX(Math.PI/2).translate(n,i,a)}var zl=`/_astro/screen.CUWISaCM.jpg`,Bl={red:`#ff3d2e`,green:`#2fe383`},Vl=e=>e*e*(3-2*e),Hl={in:e=>e*e*e,out:e=>1-(1-e)**3,back:e=>1+2.7*(e-1)**3+1.7*(e-1)**2};function Ul(e){let t=new Map,n=[],r=0;for(let t=0;t<e.length;t++)r=Math.max(r,e[t]+1);for(let i=0;i*3<e.length;i++)for(let a=0;a<3;a++){let o=e[i*3+a],s=e[i*3+(a+1)%3];o>s&&([o,s]=[s,o]);let c=o*r+s,l=t.get(c);l===void 0?(t.set(c,n.length),n.push(o,s,i,-1)):n[l+3]===-1&&(n[l+3]=i)}return new Int32Array(n)}function Wl(e,t,n){for(let r=0;r*3<t.length;r++){let i=t[r*3]*3,a=t[r*3+1]*3,o=t[r*3+2]*3,s=e[a]-e[i],c=e[a+1]-e[i+1],l=e[a+2]-e[i+2],u=e[o]-e[i],d=e[o+1]-e[i+1],f=e[o+2]-e[i+2],p=c*f-l*d,m=l*u-s*f,h=s*d-c*u,g=Math.hypot(p,m,h)||1;n[r*3]=p/g,n[r*3+1]=m/g,n[r*3+2]=h/g}}var Gl=40,Kl=6;function ql(e){let t=[],n=e===`wire`?Kl:2;for(let r=0;r<Gl;r++)for(let i=0;i<(e===`wire`?Kl:1);i++){let e=r*n+i,a=r*n+(i+1)%n,o=e+n,s=a+n;t.push(e,o,a,a,o,s)}return{count:41*n,index:t}}function Jl(e,t){let n=e.reach??10,r=e.radius??.55,i=new G(...e.lift??[0,0,0]),a=new G(...e.from.dir),o=new G(...e.to.dir),[s,c]=(e.across??[[1,0,0],[1,0,0]]).map(e=>new G(...e)),l=new Xr(new G,new G,new G,new G),u=new G,d=new G,f=new G,p=new G,m=new G;return(h,g)=>{let _=n+h.distanceTo(g)*.25;l.v0.copy(h),l.v1.copy(h).addScaledVector(a,_).add(i),l.v2.copy(g).addScaledVector(o,_).add(i),l.v3.copy(g);for(let n=0;n<=Gl;n++){let i=n/Gl;if(l.getPoint(i,u),l.getTangent(i,d),e.kind===`ribbon`){let r=Vl(i)*Math.PI/2;p.copy(s).multiplyScalar(Math.cos(r)).addScaledVector(c,Math.sin(r)),p.addScaledVector(d,-p.dot(d)).normalize().multiplyScalar(e.width/2),m.copy(u).sub(p).toArray(t,n*6),m.copy(u).add(p).toArray(t,n*6+3)}else{n===0&&f.set(+(Math.abs(d.z)>.99),0,Math.abs(d.z)>.99?0:1),f.addScaledVector(d,-f.dot(d)).normalize(),p.crossVectors(d,f);for(let e=0;e<Kl;e++){let i=e/Kl*Math.PI*2;m.copy(u).addScaledVector(f,Math.cos(i)*r).addScaledVector(p,Math.sin(i)*r),m.toArray(t,(n*Kl+e)*3)}}}}}function Yl(e,t,{reduced:n=!1}={}){let r=new xl({canvas:e,antialias:!0,alpha:!0});r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setClearColor(0,0);let i=new Pt,a=new Va(26,1,10,4e3),o=new Tt;o.matrixAutoUpdate=!1,o.matrix.set(-1,0,0,51.5,0,0,1,-31.5,0,1,0,-23,0,0,0,1),i.add(o);let s=Pl(),c=[],l=[],u=new Map,d=new Map,f=(e,t)=>{let n=`${e}:${t}`;return d.has(n)||d.set(n,new Vn({side:2,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1})),d.get(n)};for(let e of s){let t=e.propOf??e.id,n=new Tt;n.visible=!e.propOf,u.set(e.id,n),o.add(n);for(let r of e.solids){let e=r.part??t,i=new $n(r.geo,f(e,r.fill??`paper`));i.userData.part=e,n.add(i);let a=r.geo.index.array,o=new Float32Array(a.length);Wl(r.geo.attributes.position.array,a,o),c.push({part:e,mesh:i,pos:r.geo.attributes.position.array,index:a,normals:o,group:n,edges:Ul(a),creaseCos:Math.cos((r.crease??28)*Math.PI/180),fill:r.fill??`paper`,offset:n.position})}}let p=new Na().load(zl,()=>V());p.colorSpace=O;let m=new $n(new Ji(40.8,30.6).rotateX(Math.PI/2).translate(43.6,-.02,31.5),new Vn({map:p,polygonOffset:!0,polygonOffsetFactor:.5,polygonOffsetUnits:.5}));m.userData.part=`board`,u.get(`board`).add(m);for(let e of Fl){let{count:t,index:n}=ql(e.kind),r=new Float32Array(t*3),i=new kn;i.setAttribute(`position`,new mn(r,3).setUsage(N)),i.setIndex(n);let a=new $n(i,f(e.part,`paper`));a.userData.part=e.part,a.frustumCulled=!1,o.add(a);let s={part:e.part,mesh:a,pos:r,index:n,link:e,edges:Ul(n),normals:new Float32Array(n.length),creaseCos:Math.cos(70*Math.PI/180),fill:`paper`,offset:new G,build:Jl(e,r)};c.push(s),l.push(s)}let h=c.reduce((e,t)=>e+t.edges.length/4,0)*2,g=new Float32Array(h*3),_=new Float32Array(h*3),v=new kn;v.setAttribute(`position`,new mn(g,3).setUsage(N)),v.setAttribute(`color`,new mn(_,3).setUsage(N));let y=new xr(v,new lr({vertexColors:!0})),b=new xr(v,new lr({vertexColors:!0,transparent:!0,opacity:.2,depthWrite:!1,depthFunc:6}));for(let e of[y,b])e.frustumCulled=!1,o.add(e);b.renderOrder=1;let x=0,S,C=0,w=null,T={press:0,card:0,plug:0},E=new Map,D=0,k={azimuth:-.55,elevation:.42},A={...k},j={paper:new Mt,ink:new Mt,accent:new Mt,tint:new Mt},M={width:1,height:1},P=[];for(let e of s.filter(e=>!e.propOf))for(let t of e.solids){t.geo.computeBoundingBox();let{min:n,max:r}=t.geo.boundingBox;for(let t=0;t<8;t++)P.push({part:e.id,at:new G(t&1?r.x:n.x,t&2?r.y:n.y,t&4?r.z:n.z)})}function ee(e){j.paper.set(e.paper),j.ink.set(e.ink),j.accent.set(e.accent),j.tint.copy(j.paper).lerp(j.accent,.16),V()}ee(t);function F(e,t){let n=s.find(t=>t.id===e),r=Vl(Me.clamp((t-n.delay)/.6,0,1)),i=new G(...n.explode).multiplyScalar(r);return e===`button`&&(i.z-=T.press*3),e===`card`&&(i.x+=T.card),e===`plug`&&(i.x+=(1-T.plug)*45),i}function I(e,t,r){n?(e[t]=r[r.length-1][0],E.delete(t)):E.set(t,{obj:e,key:t,from:e[t],start:performance.now(),steps:r}),V()}function te(e){for(let[t,n]of E){let r=e-n.start,i=n.from,a=!0;for(let[e,t,o=Vl]of n.steps){if(r<t){n.obj[n.key]=i+(e-i)*o(r/t),a=!1;break}r-=t,i=e}a&&(n.obj[n.key]=i,E.delete(t))}E.size&&V()}function L(e){if(w!==e||C>.02)return;let t=e===`card`?1:-1;if(se(A).x*t<.35){let e=t*.95-A.azimuth;I(A,`azimuth`,[[A.azimuth+Math.atan2(Math.sin(e),Math.cos(e)),650]])}let n=E.has(`azimuth`)?450:0;e===`card`&&I(T,`card`,[[T.card,n],[1.5,110,Hl.out],[-13,420,Hl.back]]),e===`usb`&&I(T,`plug`,[[T.plug,n],[1,650]])}function ne(){T.card!==0&&E.get(`card`)?.steps.at(-1)?.[0]!==0&&I(T,`card`,[[1.5,220,Hl.in],[0,90]]),T.plug!==0&&E.get(`plug`)?.steps.at(-1)?.[0]!==0&&I(T,`plug`,[[0,320,Hl.in]])}let re=new G,R=new Ze;function z(){R.copy(o.matrix).invert();let e=a.position.clone().applyMatrix4(R),t=0;for(let n of c){if(n.group&&!n.group.visible)continue;let{pos:r,edges:i,normals:a,offset:o}=n;re.copy(e).sub(o);let s=n.part===w?j.accent:j.ink;for(let e=0;e<i.length;e+=4){let c=i[e]*3,l=i[e+1]*3,u=i[e+2]*3,d=i[e+3];if(d>=0){let e=d*3;if(a[u]*a[e]+a[u+1]*a[e+1]+a[u+2]*a[e+2]>n.creaseCos){let t=re.x-r[c],n=re.y-r[c+1],i=re.z-r[c+2];if((a[u]*t+a[u+1]*n+a[u+2]*i)*(a[e]*t+a[e+1]*n+a[e+2]*i)>0)continue}}for(let e of[c,l])g[t*3]=r[e]+o.x,g[t*3+1]=r[e+1]+o.y,g[t*3+2]=r[e+2]+o.z,_[t*3]=s.r,_[t*3+1]=s.g,_[t*3+2]=s.b,t++}}v.setDrawRange(0,t),v.attributes.position.needsUpdate=!0,v.attributes.color.needsUpdate=!0}let B=new G,ie=new G;function ae(){for(let e of l){let{from:t,to:n}=e.link;B.set(...t.at).add(F(t.part,C)),ie.set(...n.at).add(F(n.part,C)),e.build(B,ie),Wl(e.pos,e.index,e.normals),e.mesh.geometry.attributes.position.needsUpdate=!0,e.mesh.geometry.computeBoundingSphere()}}let oe=new G,se=e=>new G(Math.cos(e.elevation)*Math.sin(e.azimuth),Math.sin(e.elevation),Math.cos(e.elevation)*Math.cos(e.azimuth));function ce(){let e=M.width/M.height,t=Math.tan(Me.degToRad(a.fov)/2),n=t*(1-100/M.height),r=t*e*(1-100/M.width),i=se(k),c=new G(0,1,0).cross(i).normalize(),l=i.clone().cross(c),u=new Map(s.map(e=>[e.id,F(e.id,C)])),d=P.map(e=>e.at.clone().add(u.get(e.part)).applyMatrix4(o.matrix)),f=d.reduce((e,t)=>e.add(t),new G).divideScalar(d.length),p=1/0,m=-1/0,h=1/0,g=-1/0;for(let e of d){let t=e.clone().sub(f);p=Math.min(p,t.dot(c)),m=Math.max(m,t.dot(c)),h=Math.min(h,t.dot(l)),g=Math.max(g,t.dot(l))}f.addScaledVector(c,(p+m)/2).addScaledVector(l,(h+g)/2);let _=0;for(let e of d){let t=e.clone().sub(f),a=t.dot(i);_=Math.max(_,a+Math.abs(t.dot(c))/r,a+Math.abs(t.dot(l))/n)}oe.copy(f),a.aspect=e,a.position.copy(f).addScaledVector(se(A),_),a.lookAt(f),a.updateProjectionMatrix()}function le(e){x=0,te(e);for(let[e,t]of u)t.position.copy(F(e,C));u.get(`plug`).visible=T.plug>0;let t=T.plug===1;for(let[e,n]of d){let[r,i]=e.split(`:`);i===`red`?n.color.set(Bl.red):i===`glow`&&t?n.color.set(Bl.green):n.color.copy(r===w?j.tint:j.paper)}o.updateMatrixWorld(!0),ae(),ce(),z(),r.render(i,a),S?.()}function V(){x||=requestAnimationFrame(le)}let ue=new oo,H=[...c.map(e=>e.mesh),m];function de(e,t){ue.setFromCamera(new U(e/M.width*2-1,-(t/M.height)*2+1),a);let n=ue.intersectObjects(H,!1).find(e=>e.object.parent?.visible!==!1);return n?n.object.userData.part:null}function fe(){let e={},t=e=>(e.project(a),{x:(e.x+1)/2*M.width,y:(1-e.y)/2*M.height}),n=e=>t(e.applyMatrix4(o.matrix));for(let t of s)e[t.id]=n(new G(...t.anchor).add(F(t.id,C)));for(let[t,r]of Object.entries(Il)){let i=l.find(e=>e.link.id===r),a=Math.floor(Gl/2)*(i.link.kind===`wire`?Kl:2)*3;e[t]=n(new G(i.pos[a],i.pos[a+1],i.pos[a+2]))}return{points:e,center:t(oe.clone())}}return{resize(e,t){M={width:e,height:t},r.setSize(e,t,!1),V()},setExplode(e){C=e,e>.02&&ne(),V()},setActive(e){e!==w&&(w=e,clearTimeout(D),e!==`card`&&e!==`usb`?ne():(ne(),D=window.setTimeout(()=>L(e),220)),V())},press(){I(T,`press`,[[1,60],[0,140]])},rotate(e,t){E.delete(`azimuth`),A.azimuth+=e,A.elevation=Me.clamp(A.elevation+t,-.25,1.2),V()},resetView(){Object.assign(A,k),V()},setColors:ee,pick:de,anchors:fe,onFrame(e){S=e},get explode(){return C}}}export{Yl as createScene};