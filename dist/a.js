!function(){function setFont(a){Ap.font=a?"normal lighter 12px":"normal lighter 20px monospace"}function Ah(a,t){return!(t.l>a.h||t.h<a.l||t.top>a.AJ||t.AJ<a.top)}function Ai(a,t,e){return af[a][t]*e/2}function Ad(a,t,e,n,r,i){var o=this;o.x=a,o.y=t,o.vx=e,o.vy=n,o.size=r,o.ac=i,o.Aw=100,o.d=function(){return o.x+=o.vx,o.vy+=.2,o.y+=o.vy,o.size*=1,--o.Aw<0},o.ag=function(){Ap.fillStyle="hsla("+o.ac+","+o.Aw+"%, "+o.Aw+"%, "+o.Aw/100+")",Ap.fillRect(o.x,o.y,o.size,o.size)}}function Ac(a,t,e,n,r){for(var i=0;i<a.D.length;i++){var o=15&a.D[i];aq.push(new Ad(a.x+(a.aa?o:15-o)*a.e,a.y+(a.D[i]>>4)*a.e,((a.aa?o:15-o)-8)*t+e,((a.D[i]>>4)-8)*t+n-2,a.e,r))}}function randomAds(){aq.push(new Ad(-at.x+1024*Math.random(),at.y+720*Math.random(),0,.1,2,360*Math.random()))}function Ae(a,t,e,n){ar.push(new Af(a,t,e,n))}function restartAK(a){var t=levels[currentAK];Ag=[],ap=[],an=[],ar=[],Ap.translate(-at.x,-a+at.y),at.x=0,at.y=a,Am.reset(),aw.reset(),ax=void 0,xlevel=AKGenerator(t)}function amAK(){currentAK=levels[currentAK].aml,console.log(at.y),restartAK(at.y)}function bl(vx,vy){Ap.fillStyle="rgba(0,0,0,0.1)",Ap.fillRect(vx,vy,1024,720),randomAds(),Ap.fillStyle=Ab[1],Ap.strokeStyle="hsl("+ ++hue%720+",50%,50%)",Ap.font="normal lighter 242px fantasy",Ap.strokeText("VIER",vx+512,vy+216),Ap.font="normal lighter 30px fantasy",Ap.lineWidth=1,Ap.strokeText("W i z a r d    W a r s",vx+512,vy+360),Ap.font="normal lighter 20px monospace",Ap.fillText("Press         to Start",vx+512,vy+432),Ap.fillText("made by @agar3s",vx+512,vy+648),Ap.fillStyle=as%16==0?Ab[1]:Ab[0],Ap.fillText("      <Enter>         ",vx+512,vy+432);for(var i=aq.length-1;i>=0;i--)with(aq[i])ag(),d()&&aq.splice(i,1)}function bm(a,t){Ap.fillStyle="rgba(0,0,0,0.1)",Ap.fillRect(a,t,au.w,720),Ap.fillStyle=wbae,setFont(0),Ap.ft("PAUSE",a+512,t+144),Ap.ft("Controls",a+512,t+216),Ap.ft("<S>: Shoot",a+.5*au.w,t+288),Ap.ft("<- : move to l ",a+.2*au.w,t+720*.48),Ap.ft("-> : move to h",a+.2*au.w,t+381.6),Ap.ft("<space>   : ak       ",a+.5*au.w,t+720*.48),Ap.ft("<space>2X : double ak",a+.5*au.w,t+381.6),Ap.ft("<D> : am Au    ",a+.8*au.w,t+720*.48),Ap.ft("<A> : previous Au",a+.8*au.w,t+381.6),Ap.ft("ASs",a+512,t+453.6),Ap.ft("      beats      ",a+512,t+720*.7),Ap.ft("      beats     ",a+.7*au.w,t+576),Ap.ft("     beats    ",a+512,t+648),Ap.ft("    beats      ",a+.3*au.w,t+576),Ap.fillStyle=Ab[1],Ap.ft("Water            ",a+512,t+720*.7),Ap.ft("          Water",a+.3*au.w,t+576),Ap.fillStyle=Ab[2],Ap.ft("Earth           ",a+.7*au.w,t+576),Ap.ft("            Earth",a+512,t+720*.7),Ap.fillStyle=Ab[3],Ap.ft("Fire          ",a+512,t+648),Ap.ft("            Fire",a+.7*au.w,t+576),Ap.fillStyle=Ab[0],Ap.fillText("Air            ",a+.3*au.w,t+576),Ap.fillText("           Air",a+512,t+648)}function bn(a,t){Ap.fillStyle="rgba(0,0,0,0.6)",Ap.fillRect(a,t,au.w,720),Ap.fillStyle=wbae,setFont(0),Ap.fillText("DEAD",a+512,t+216),setFont(1),Ap.fillText("enter to restart level",a+512,t+360)}function Al(){var wx=-at.x,wy=at.y;Ap.clearRect(wx,wy,au.w,au.h),xlevel.ag(wx,wy),firexx.ag(),Am.b(.8),xlevel.Av(Am),aw.del||aw.d(),xlevel.onPlayerX(Am.x);for(var j=ap.length-1;j>=0;j--)with(ap[j])d(),S.ag(),as%4==0&&ah(),as%2==0&&Av(),(ai||del)&&ap.splice(j,1);for(var j=Ag.length-1;j>=0;j--)with(Ag[j]){if(del){Ag.splice(j,1),xlevel.onAWDied();continue}S.ag(),S.b(.8),xlevel.Av(S),d(),as%2==0&&S.ah()}for(var j=an.length-1;j>=0;j--)with(an[j])d(),S.ag(),as%4==0&&ah(),as%2==0&&v(Am.Aq()),(ai||del)&&an.splice(j,1);for(var i=aq.length-1;i>=0;i--)with(aq[i])ag(),d()&&aq.splice(i,1);for(var i=ar.length-1;i>=0;i--)with(ar[i])d(),xlevel.Av(S),S.ag(),as%2==0&&v(Am.Aq()),del&&ar.splice(i,1);as%8==0&&firexx.u(),firexx.c(),as%2==0&&Am.ah(),aw.del?bo="d":(Am.ag(),aw.aj(),aw.ag(wx,wy)),aw.S.x>450-wx&&aw.S.x<xlevel.w-au.w+450?(at.x-=aw.S.vx,xxx=-aw.S.vx):xxx=0,yyy=0,wy-at.oY<-au.h&&aw.S.y+at.oY+16*e>wy+au.h&&aw.S.vy>0?yyy=-aw.S.vy:aw.S.y-at.oY<at.y&&(aw.S.vy<0?yyy=-aw.S.vy:0==aw.S.vy&&(yyy=yOld-aw.S.y)),at.y-=yyy,yOld=aw.S.y,Ap.translate(xxx,yyy)}function bj(){bp[bo](-at.x,at.y),256&az&&(actionsScreen[bo](1),az-=256),as%64==0&&(as=0),as++,ra(bj)}var doc=document;doc.get=doc.getElementById;var i,j,xlevel,Ao=doc.get("c"),Ap=Ao.getContext("2d"),e=4,ppp=16,pp1=15,au={w:1024,h:720},at={x:0,y:-720,oY:250},bs="#000",wbae="#fff",av=(innerHeight-100)/au.h;Ao.width=au.w*av,Ao.height=au.h*av,Ap.scale(av,av),Ap.translate(at.x,-at.y);var ap=[],an=[],Aj=[55,205,115,25,99],Ab=["yellow","#09F","#1F0","#F60","purple"],Ag=[],aq=[],ar=[],ax=null,AualNames=["Air","Water","Earth","Fire"];Ap.textBaseline="middle",Ap.textAlign="center",setFont();for(var Ax=0,ay=["ms","moz","webkit","o"],x=0;x<ay.length&&!window.requestAnimationFrame;++x)requestAnimationFrame=window[ay[x]+"RequestAnimationFrame"];requestAnimationFrame||(requestAnimationFrame=function(a){var t=(new Date).getTime(),e=Math.max(0,16-(t-Ax)),n=setTimeout(function(){a(t+e)},e);return Ax=t+e,n}),ra=requestAnimationFrame;var az=0,Aa={37:1,38:2,39:4,40:8,65:16,83:32,68:64,32:128,13:256};doc.addEventListener("keydown",function(a){var t=a.keyCode||a.which;Aa[t]&&(az|=Aa[t],a.preventDefault())}),doc.addEventListener("keyup",function(a){var t=a.keyCode?a.keyCode:a.which;az&Aa[t]&&(az^=Aa[t],a.preventDefault())});for(var af=[[0,4,2,1],[1,0,4,2],[2,1,0,4],[4,2,1,0]],Ak=function(a,t){var e=this;e.Aus=a,e.As=[],e.locks=[0,0,0,0],e.current=e.Aus[0],e.bq=t;for(var n=0;n<a.length;n++)e.As.push(t);e.bd=function(a,t,n){if(e.As[e.current]-->0){var r=new AS(e.current,2,1,t,n,Am.aa?13:-13,a);ap.push(r),e.za()}else e.As[e.current]=0,e.za()},e.lock=function(a){e.locks[a]=1,console.log(e.locks)},e.za=function(){e.bq=e.As[e.current]},e.ag=function(a,t){for(var n=0;4>n;n++)e.locks[n]||(Ap.fillStyle=n==e.current&&as%8==0?"#000":Ab[n],Ap.fillText(""+e.As[n],a+40+(n%2==0?35:1==n?69:0),t-40-(n%2==1?30:0==n?60:0)));firexx.x=a+50,firexx.y=t-95,firexx.ag()}},fire="{f{g{h{i{u!$%056?@ABFORV`bcefostu~,",AX='{H{I{X{Y"#$134ACEQSVacdsu~.~1~=~@~M~P~]~^~`~a',Ar='{I{J{Y{Z"#$134ACERSVcdsu~.~0~=~?~M~O~]~^~_~`',AXrun='{Y{Z{i{j"#$134ACDESVWbcdqru~)~*~+~0~9~A~Q~a~b',AXak="{Z{[{g{h{i{j{k!#$134ACESTcesu~-~0~=~?~L~O~\\~_",AZ="ABCDEQSUabcdequ~,~0~<~@~L~P~\\~]~^~_~`",ab=["",'~A~>~0tqfUD2{i{h~@~=~1udVE1$#"{I{H',"B65VREA","~@~>tD2('&%{m{j{i~?~=udB651\"{J{I","~_~P~O~J~;~:~,tUB~b~a~Q~9~+~*~)uqWEA",'~`~M~?~>~=~/T2{k{[~P~J~A~;~:~0~,rdbVB1"{i{Y',"~k~j~Lo_N>~i~Y~Im]M=.","~p~n~m~l~`~]~~P~M~=~0~$pi`YOG?92({m{g{^{U{N{J{E{9{4{%~t~s~k~j~b~[~Z~R~K~J~;~%njb^[NKA>;/+!{p{k{`{[{O{K{H{;{8{*","~o~_~O~N~?~>~#hXPA@8'{l{]{M~a~Q~L~A~<~$oi_ZYOJ?:*{o{_{N","~/~.~-uqecaTR","~?~>~=~0~,usqdb","~O~N~M~@~<~0~.~,tr","~`~_~^~]~P~O~N~M~b~a~Z~Y~R~Q~J~I~B~A~2~1","~^~N~>~.s{j{i{[{X~a~]~~Q~M~L~<~0~,uTR{J{I{;{8","~o~n~m~^~~O~M~>~=~.~-pF6{3~q~p~k~`~[~P~L~?~<~/~,soVG{U","~]~Na`5%{2~o~l~^~~O~M~.p_UF6{V","~Y~X~:~+X9(~k~j~i~h~$~#8","~d~c~B~1N-{s~t~s~r~q~@nm.",".{r2{u{d{c{b"],defaultAnimations={i:{kf:"",f:[0]}},bw={i:{kf:AX,f:[0,0,0,0,0,0,0,0,0,1]},p:{kf:Ar,f:[2,3,3,2,0,-1]},r:{kf:AXrun,f:[0,4,0,5,0,5,0,4,0]},j:{kf:AXak,f:[0]}},Ay=function(a){for(var t=new Int16Array(ppp),e=0;e<a.length;e++)t[a[e]>>4]|=1<<pp1-(15&a[e]);return t},Az=function(a){for(var t=0,e=a[t],n=[];e;){var r=85;"{"==e[0]&&(e=a[++t],r=0),"~"==e[0]&&(e=a[++t],r=170),n.push(e.charCodeAt()+r-33),e=a[++t]}return n},faceMask=Az("{%{&{'{({){*{+{,{5{6{7{8{9{:{;{<{E{F{G{H{I{J{K{L{U{V{W{X{Y{Z{[{\\{e{f{g{h{i{j{k{l{u!\"#$%&'"),AM=function(a,t){var n=this;n.w=new Int16Array(ppp),n.D=Az(a),n.ab=[],n.ad=0,n.w=Ay(n.D),n.AD=2.2*e,n.n=.25,n.e=0,n.At=t||defaultAnimations,n.hp=1,n.reset=function(){n.ac=bs,n.x=0,n.y=-720,n.vx=0,n.vy=0,n.aa=1,n.p=0,n.z=0},n.reset(),n.AA=function(a){n.e=a,n.height=n.width=16*n.e},n.AA(e),n.generateFace=function(){for(var a=[],t=Ay(n.D),e=Ay(faceMask),r=0;ppp>r;r++)for(var i=t[r]&e[r],o=0;ppp>o;o++)1<<pp1-o&i&&a.push(r*ppp+o);n.faceAM=a},n.generateFace(),n.u=function(){for(var a=[],t=0;ppp>t;t++)for(var e=0;ppp>e;e++)n.w[t]&1<<pp1-e&&a.push(e*ppp+pp1-t);n.D=a,n.w=Ay(a)},n.AB=function(a){n.ab.push(Ay(a)),n.ad=n.ab.length-1},n.AC=function(){n.y+=n.vy,n.vy<0&&(n.p=0)},n.ah=function(){if(++n.ad>=n.ab.length&&(n.ad=0),"string"==typeof n.ab[n.ad])return n.o(n.ab[n.ad]);for(var a=[],t=0;ppp>t;t++){n.w[t]=n.w[t]^n.ab[n.ad][t];for(var e=0;ppp>e;e++)1<<pp1-e&n.w[t]&&a.push(t*ppp+e)}n.D=a},n.xi=function(){return n.x+5*n.e},n.xpi=function(){return n.x+n.e},n.xf=function(){return n.x+11*n.e},n.xpf=function(){return n.x+14*n.e},n.yi=function(){return n.y+2*n.e},n.yil=function(){return n.y+12*n.e},n.yf=function(){return n.y+16*n.e},n.b=function(a){n.vy+=a,n.vy>3*n.e&&(n.vy=3*n.e)},n.AH=function(a){n.p||n.o("i"),n.vy=0,n.p=1,n.z=1,n.downed=0,n.y=a-15*n.e},n.l=function(){n.vx>0&&(n.vx=0),n.vx-=n.n,n.p&&n.o("r"),n.vx<-n.AD&&(n.vx=-n.AD),n.aa=0},n.h=function(){n.vx<0&&(n.vx=0),n.vx+=n.n,n.p&&n.o("r"),n.vx>n.AD&&(n.vx=n.AD),n.aa=1},n.AI=function(){n.aa?n.x+17*e+n.vx<xlevel.w?n.h():n.g():n.x+n.vx>0?n.l():n.g()},n.turn=function(){n.aa=!n.aa},n.g=function(){0!=n.vx&&(n.vx=0,n.o("i"))},n.ak=function(){(n.p||n.z)&&(n.vy=3*-n.e,n.vy<-20&&(n.vy=-20),n.p||(n.z=0),n.p=0,n.o("j"))},n.d=function(){n.AC(),n.x+=n.vx},n.c=function(){n.x+=n.vx},n.dY=function(){n.y+=n.vy},n.ag=function(){Ap.fillStyle=n.ac;for(var a=0;a<n.D.length;a++){var t=15&n.D[a];Ap.fillRect(n.x+(n.aa?t:15-t)*n.e,n.y+(n.D[a]>>4)*n.e,n.e,n.e)}},n.agFace=function(a,t){Ap.fillStyle=n.ac;for(var e=0;e<n.faceAM.length;e++){var r=15&n.faceAM[e];Ap.fillRect(a+9*(n.aa?r:15-r),t+9*(n.faceAM[e]>>4),9,9)}},n.o=function(a){if(n.t!=a&&n.At[a]){n.t=a,n.ab=[];var t=n.At[a].f;for(n.w=Ay(Az(n.At[a].kf)),j=0;j<t.length;j++){var e=ab[t[j]];if(-1==t[j])return n.ad=n.ab.length,n.ab.push("i");n.AB(Az(e))}}},n.ba=function(a){return n.hp-=a,n.hp<0&&(n.hp=0),0==n.hp},n.Aq=function(){return{l:n.xi(),h:n.xf(),top:n.yi(),AJ:n.yf()}}},AF=function(a,t,e){var n=this;n.x=a,n.y=t,n.width=e,n.AG=1,n.Av=function(a){(a.xi()>n.x&&a.xi()<n.x+n.width||a.xf()>n.x&&a.xf()<n.x+n.width||a.xi()<n.x&&a.xf()>n.x+n.width)&&n.y>a.yil()&&n.y+5<a.yf()&&a.vy>=0?(n.AG=1,a.AH(t)):n.AG=0},n.ag=function(){Ap.fillRect(n.x,n.y,n.width,5)}},AS=function(a,t,e,n,r,i,o){var l=this;l.type=a,0==l.type&&(l.D=fire),1==l.type&&(l.D=fire),2==l.type&&(l.D=fire),3==l.type&&(l.D=fire),l.S=new AM(l.D),l.ai=0,l.ac=Aj[a],l.S.ac=Ab[a],l.S.x=n,l.S.y=r,l.S.AA(t),l.S.vx=i,l.S.vy=o,l.S.aa=i>0,l.bc=e,l.del=0,l.Av=function(){for(var a=Ag.length-1;a>=0;a--){var t=Ag[a].S;Ah(t.Aq(),l.S.Aq())&&(Ag[a].ba(l.type,l.bc,l.S.aa),l.del=1,Ac(l.S,2,l.S.vx/2,-3,l.ac))}},l.v=function(a){Ah(a,l.S.Aq())&&(aw.ba(l.type,l.bc,l.S.aa),l.del=1,Ac(l.S,2,l.S.vx/2,-3,l.ac))},l.d=function(){l.S.c(),l.S.dY(),l.ai=l.S.x>xlevel.w||l.S.x<-10},l.ah=function(){0==l.type&&l.S.u(),1==l.type&&l.S.u(),2==l.type&&l.S.u(),3==l.type&&l.S.u()}},Af=function(a,t,e,n){var r=this;r.type=a,r.AP=t,r.S=new AM(AZ),r.ac=Aj[a],r.S.ac=Ab[a],r.S.x=e,r.S.y=n,r.S.vy=.5,r.S.p=0,r.AR=256,r.del=0,r.d=function(){var t=as%32==0;r.S.p?(r.del=0==r.AR--,t=as%~~(r.AR/16)==0):r.S.dY(),r.S.ac=t?wbae:Ab[a]},r.v=function(a){Ah(a,r.S.Aq())&&(aw.AL(r.type,r.AP),r.del=1,Ac(r.S,0,0,-4,r.ac))}},monster0="{'{({){*{7{8{9{:{G{H{I{J{W{X{Y{Z{e{f{g{h{i{j{u!\"#$%./2367>?BCFGHRSbcrs~-~.~/~0~1~2~=~>~?~@~A~B~I~J~K~L~Q~R~Y~Z~[~\\~a~b",monster1="{3{4{8{9{B{C{D{E{H{I{J{K{S{T{U{V{X{Y{[{\\{d{e{f{h{i{l{u!$%&'1267BCQRSTUabcflpqrst~\"~'~*~+~,~.~8~9~:~;~I~J",monster2="{&{'{({){*{5{6{7{8{:{;{F{G{H{K{O{V{W{X{Y{Z{[{_{`{h{i{j{k{n{o{p!\"#$%)*+./013567:;=ABCDEHIJKMSZ[]^abcdejmnqsu~%~-~.~/~;~<~@~A~I~J~K~Q~R~Y~Z~[~a~b~i~q~r~s~t",monster3='{4{5{6{7{8{G{H{I{U{V{W{X{Y{g{h"123@BCDGORUV_bors~,~/~<~?~L~P~[~`~k~l~p~q',boss1="{D{L{S{T{V{W{X{Y{Z{\\{]{c{d{e{f{g{h{i{j{k{l{m{t{u#&'0123456@ABCDEFQRSTUabcderst",boss4="{&{'{({){*{5{6{7{8{9{:{;{E{H{K{U{X{[{e{f{j{k{u!%&./012345678=ABCDEIMRSTY]^bcdhimnrst~#~$~,~-~.~/~0~;~<~@~A~J~K~Q~R~Z~[~a~b~h~i~j~k~q~r~s~t",boss5='{6{:{E{F{I{J{K{V{W{X{Y{Z{[{b{c{d{g{h{i{k{s{t{u#$%&/012345@ABCDEFGOQRSTUX_cdimostu~"~$~)~-~.~/~0~3~>~?~M~N~]',Aual0='{8{;{H{I{J{K{Y{Z{g{k"#$%&123456@CEPRSTVW`bdru~,~0~<~?~L~M~O~P~Q~\\~]~_~`~a',by={A0:monster0,A1:monster1,A2:monster2,A3:monster3,A4:boss1,A5:AX,A6:AX,W0:monster0,W1:Aual0,W2:monster2,W3:monster3,W4:boss1,W5:AX,W6:AX,E0:monster0,E1:Aual0,E2:monster2,E3:monster3,E4:boss4,E5:AX,E6:AX,F0:monster0,F1:monster1,F2:monster2,F3:monster3,F4:boss1,F5:AX,F6:AX},bx={B0:{i:{kf:monster0,f:[0,0,0,12,0,12]}},B1:bw,B2:{i:{kf:monster2,f:[0,6,7,8,8,7,6,0]}},B3:{i:{kf:monster3,f:[0,14,0,0,0,14]}},B4:{i:{kf:boss1,f:[9,0,10,11,0,0,11,10,9,0]}},B5:bw,B6:bw},i=0;7>i;i++)bx["A"+i]=bx["B"+i],bx["W"+i]=bx["B"+i],bx["E"+i]=bx["B"+i],bx["F"+i]=bx["B"+i];bx.A1={i:{kf:monster1,f:[0]}},bx.F1=bx.A1,bx.E1={i:{kf:Aual0,f:[0,0,0,0,13]}},bx.W1=bx.E1,bx.E4={i:{kf:boss4,f:[0,0,16,0,0,16,0,0,17,0,0,17]}},bx.F4={i:{kf:boss5,f:[0,0,18]}},bx.W4=bx.F4;var Ba={a:"ljlw90taw90",b:"lf80sw30asw30t",c:"lg60asw5aw5r20s",d:"ljdsw60ajdw30at",e:"ltja30w20",f:"ltg30a30w20",m:"w20hk20f9w9m20tas",n:"ljw20tg60stf30asw20",o:"lja10lf30jla10t",p:"w15hk30af15am30tw15am30af15k30at",q:"w15thk30af15am30tw15am30f15k30a"},Bc={minion:"2060F0",Aual:"3102E2",monster:"3153C1",wizard:"415291",advanced:"304361",boss1:"310490",boss2:"420490",boss3:"430590",boss4:"330730",boss5:"420551"},Bb={a0:"00"+Bc.minion,a1:"01"+Bc.minion,a2:"02"+Bc.minion,a3:"03"+Bc.minion,b0:"10"+Bc.Aual,b1:"11"+Bc.Aual,b2:"12"+Bc.Aual,b3:"13"+Bc.Aual,c0:"20"+Bc.monster,c1:"21"+Bc.monster,c2:"22"+Bc.monster,c3:"23"+Bc.monster,d0:"30"+Bc.wizard,d1:"31"+Bc.wizard,d2:"32"+Bc.wizard,d3:"33"+Bc.wizard,e0:"10"+Bc.advanced,e1:"11"+Bc.advanced,e2:"12"+Bc.advanced,e3:"13"+Bc.advanced,f0:"20"+Bc.advanced,f1:"21"+Bc.advanced,f2:"22"+Bc.advanced,f3:"23"+Bc.advanced,x1:"23"+Bc.boss1,x2:"10"+Bc.boss2,x3:"40"+Bc.boss3,x4:"42"+Bc.boss4,x5:"41"+Bc.boss5,x6:"43"+Bc.boss5},generateMonster=function(a,t,e){var n=a[0],r=a[1],i=parseInt(a[2],16),o=parseInt(a[3]+a[4],16),l=parseInt(a[5])+4,A=3*parseInt(a[6],16),c=a[7];return new AW(n,r,100*t,i,e,o,l,A,c)},bt=["Minion","Elemental","Monster","Wizard","Master","Grand Master","Gran Elemental"],AW=function(a,t,e,n,r,i,o,l,A){var c=this;c.name=AualNames[t]+" "+bt[a],c.bc=parseInt(a)+1,c.ac=Aj[t],c.monsterCode=AualNames[t][0]+a,c.S=new AM(by[c.monsterCode],bx[c.monsterCode]),c.S.ac="hsl("+c.ac+",100%, 50%)",c.S.o("i"),c.S.AA(o),c.S.AD=n||2.2*c.e,c.S.x=e,c.S.y=-720,c.AN=new Ak([t]),c.AO=i,c.S.hp=i,c.q=l,c.maxColdown=l,c.triggerType=A||2,c.AV=100,c.del=0,c.AU=function(a){for(var t="",e=0;e<a.length;e++){var n=a[e],r=parseInt(a.substring(e+1,e+4));if(r){e+=(""+r).length;for(var i=0;r>i;i++)t+=n}else t+=n}c.AQ=t},c.AU(r||"f60taw20"),c.AY=0,c.attack1=function(){if(c.q<=0){c.S.o("p");var a=-(c.S.x-Am.x),t=-(c.S.y-Am.y),e=Math.sqrt(a*a+t*t);a/=e,t/=e;var n=new AS(c.AN.current,c.S.e/3,c.bc,c.S.x+24,c.S.y,3*a,3*t);an.push(n),c.q=c.maxColdown}},c.bb=function(){c.S.aa=c.S.x<Am.x,c.S.AI()},c.be=function(){c.S.aa=c.S.x>Am.x,c.S.AI()},c.actions={f:c.S.AI,t:c.S.turn,j:c.S.ak,m:function(){},a:c.attack1,b:c.attack2,c:c.attack3,s:c.S.g,w:function(){},l:function(){c.S.p||c.AY--},d:function(){c.S.p?c.S.g():(c.AY--,c.S.AI())},g:c.bb,r:c.be,h:function(){c.S.AC=function(){}},u:function(){c.S.y-=3},n:function(){c.S.y+=3},k:function(){c.actions.u(),c.S.AI()},m:function(){c.actions.n(),c.S.AI()}},c.ao=function(){var a=c.AQ[c.AY];c.actions[a](),++c.AY>=c.AQ.length&&(c.AY=0)},c.d=function(){c.ao(),c.S.d(),--c.q<0&&(c.q=0),c.S.y>400&&(c.del=1)},c.triggers=[function(){Ae(c.AN.current,c.AO,c.S.x,c.S.y)},function(){Ae(4,c.AO,c.S.x,c.S.y)},function(){0==~~(10*Math.random())?c.triggers[1]():c.triggers[0]()},function(){console.log("otra cosa")}],c.trigger=function(){c.triggers[c.triggerType]()},c.ba=function(a,t,e){var n=Ai(a,c.AN.current,t);c.S.x+=(e?1:-1)*n*(10-c.bc),c.S.ba(n)&&!c.del&&(c.del=1,Ac(c.S,t,0,0,c.ac),c.trigger("death")),ax=c},c.agAvatar=function(a,t){Ap.fillStyle=wbae,Ap.fillText(c.name,a-120,t+20),Ap.fillStyle=as%16==0?bs:"yellow",Ap.fillRect(a-335,t+35,300,8),Ap.fillStyle="#300",Ap.fillRect(a-334,t+36,300*(1-c.S.hp/c.AO)-2,6),c.del&&as%8!=0||c.S.agFace(a-135,t+50)}},xf=0,yf=0,platformFunctions={a:function(a,t){return-t+yf},b:function(a,t,e){return-t+yf+e*(a-xf)},c:function(a,t,e,n){var r=(a/n-xf)%(2*Math.PI);return-t+yf+200*e*Math.cos(r)},d:function(a,t,e){var n=(a-xf)%(2*Math.PI);return-t+yf+200*e*Math.tan(n)},e:function(a,t,e){return-t+yf-e*(a-xf)},f:function(a,t,e){var n=(a-xf)%(2*Math.PI);return-t+yf+200*e*Math.sin(n*n)},g:function(a,t,e,n){return.005*platformFunctions.b(a,t,e,n)*platformFunctions.c(a,t,e,n)},h:function(a,t,e){return-t+yf+.005*e*(a-xf-650)*(a-xf-650)},i:function(a,t,e){return-t+yf+800+.005*e*(a-xf-400)*(a-xf-400)},v:function(a,t,e,n){return platformFunctions.a(a,t,e,n)*((a-xf)/n%3==0?1:1e3)},w:function(a,t,e,n){return platformFunctions.c(a,t,e,n)*((a-xf)/n%3==0?1:1e3)},x:function(a,t,e,n){return platformFunctions.c(a,t,e,n)*((a-xf)/n%2==1?1e3:1)}},AK=function(a,t,e,n,r,o){xf=0,yf=0;var l=this;l.w=a,l.h=0,l.title=o,l.AgVector=t,l.totalEnemies=l.AgVector.length,l.remainingEnemies=0,l.count=0,l.factor=e,l.AE=function(a,t){var e=0,r=0,i=a[0];n=[];for(var o=0;o<=l.w;o+=l.factor){var A=platformFunctions[i](o,0,t,l.factor);l.h=A<l.h?A:l.h,n.push(new AF(o,A,l.factor)),++e==a[r+1]&&(e-=a[r+1],r+=2,i=a[r],yf=A,xf=o)}},l.AE(n,r),l.ag=function(a,t){l.count++;var e=~~(a/l.factor);0>e&&(e=0);var r=e+1+~~(au.w/l.factor);for(r>=n.length&&(r=n.length-1),Ap.fillStyle="#A4A",i=e;r>=i;i++)n[i].ag();Ap.fillStyle=wbae,Ap.fillText(l.remainingEnemies+"/"+l.totalEnemies,a+900,t+650)},l.onAWDied=function(){++l.remainingEnemies==l.totalEnemies&&amAK()},l.onPlayerX=function(a){if(!(l.count<60||0==l.AgVector.length)){var t=l.AgVector[0];a+au.w-300>t.S.x&&(t.S.y=at.y,Ag.push(t),l.AgVector.splice(0,1))}},l.Av=function(a){var t=~~(a.xi()/l.factor)-1;0>t&&(t=0);var e=~~(a.xf()/l.factor)+1;for(e>=n.length&&(e=n.length-1),i=t;e>=i;i++)n[i].Av(a)}},AKGenerator=function(a){for(var t=a.codeMonsters,e=a.plats,n=[],r=0;r<t.length;r++){var i=t[r],o=i[0]+i[1],l=i[2],A=parseInt(i.substring(3));n.push(generateMonster(Bb[o],A,Ba[l]))}var c=aw;return a.locks&&c.lock(a.locks),a.skill&&(c.selectSkill(a.skill),c.s=Aj[c.AN.current],c.S.ac="hsl("+c.s+",100%, 50%)"),new AK(a.width,n,a.factor,e,a.pendiente,a.title)},currentAK="level1",levels={level1:{codeMonsters:["a3b4","a3b9","a3b12","a3b15","a1b24","a1b27","a1b30","a1b35"],plats:["a",10,"b",20,"a",10,"b",7,"a",15,"w",15,"a",15,"b",15,"a",30],width:3700,factor:28,pendiente:-.1,title:"Chapter 1",aml:"boss1",locks:[0,2],skill:1},boss1:{codeMonsters:["x1n4"],plats:["c",70],width:1024,factor:20,pendiente:-.05,title:"Boss 1",aml:"level2",locks:[0,2],skill:1},level2:{codeMonsters:["a0b4","a2b9","a2b12","a0b15","a2b18","a0b27","a2c30","a0c35","a2c40","a0c45"],plats:["a",20,"b",15,"a",20,"b",15,"a",7,"v",21,"a",10,"b",22,"a",100],width:4800,factor:27,pendiente:-.3,title:"Chapter 2",aml:"boss2",locks:[1,3],skill:2},boss2:{codeMonsters:["x2m4"],plats:["c",30],width:1024,factor:37,pendiente:-.05,title:"Boss 2",aml:"level3",locks:[1,3],skill:2},level3:{codeMonsters:["b1b4","b1a9","b2a12","b3m15","b1a20","b2a30","b3m40","b0m45","c1a47","c2a55","b2a70","c3b80"],plats:["a",6,"f",6,"a",5,"b",5,"a",5,"b",5,"x",8,"c",9,"a",9],width:8400,factor:149,pendiente:-.5,title:"Air Palace",aml:"boss3"},boss3:{codeMonsters:["x3m4"],plats:["c",2,"x",24,"c",2],width:1024,factor:50,pendiente:-.1,title:"Air Master",aml:"level4"},level4:{codeMonsters:["d3m4","d2m12","d2m20","d0m22","b2a28","b2a31","b2a32","b0m44","b3m50","a1c58","a3c60","a1c62","a3c64","c2b70","c2a75","d3d91","d1d95","d3d99"],plats:["a",4,"g",30,"a",15,"b",25,"a",15,"b",20,"w",18,"a",20,"e",20,"x",10,"d",20,"a",50,"v",18,"e",10,"a",20,"e",30,"a",49],width:10024,factor:27,pendiente:-.55,title:"Earth Palace",aml:"boss4"},boss4:{codeMonsters:["x4o4"],plats:["h",100],width:1350,factor:50,pendiente:-.01,title:"Earth Master",aml:"level5"},level5:{codeMonsters:["b1b4","e1e19","e3e24","f1b30","f3b32","d3m40","d1m44","d0m48","d2m56","e0a67","e3a70","e1a73"],plats:["a",4,"f",5,"v",9,"a",3,"b",3,"h",3,"e",3,"a",4,"v",6,"a",6],width:7650,factor:170,pendiente:-.5,title:"Water & Fire Montains",aml:"boss5"},boss5:{codeMonsters:["x5p5","x6q7"],plats:["b",14,"a",12,"e",14],width:1330,factor:35,pendiente:-.1,title:"Water & Fire Masters",aml:"level6"},level6:{codeMonsters:["b2a10","b2a12","b2a14","a0f25","a2f26","a2f27","a0f28","b1b38","b3e40","c0b68","c2b70","d1a106","d3m108","f0f110","f2f11","d3m113","d1a115"],plats:["a",60,"b",60,"a",60,"c",30,"a",60,"d",20,"a",60,"f",60,"a",60,"b",20,"i",30,"a",20,"v",60,"a",60,"v",33,"a",99],width:12e3,factor:16,pendiente:-.8,title:"Grand Master Palace",aml:"boss6"},boss6:{codeMonsters:["x2m4"],width:1200,plats:["a",2],factor:700,pendiente:1,title:"Grand Master",aml:"ends"},ends:{codeMonsters:[],width:1200,plats:["a",2],factor:700,pendiente:1,title:"Grand master mode",aml:"ends"}},Am=new AM(AX,bw);Am.o("i");var AT=function(S){var m=this;m.S=S,m.S.AA(5),m.r=0,m.down=0,m.up=0,m.reset=function(){m.del=0,m.S.hp=31,m.AO=31,m.AN=new Ak([0,1,2,3],99),m.q=16,m.s=Aj[m.AN.current],m.S.ac="hsl("+m.s+",100%, 50%)"},m.reset(),m.lock=function(a){for(var t=0;t<a.length;t++)m.AN.lock(a[t])},m.amSkill=function(a,t){return a+t>3?a=t-1:0>a+t?a=3+t+1:a+=t,m.AN.locks[a]?m.amSkill(a,t):a},m.selectSkill=function(a){m.AN.current=a,m.AN.za(),firexx.ac=Ab[m.AN.current]},m.am=function(){m.selectSkill(m.amSkill(m.AN.current,1)),m.r=5,az-=64},m.prev=function(){m.selectSkill(m.amSkill(m.AN.current,-1)),az-=16,m.r=-5},m.bd=function(){if(m.q<=0){m.S.o("p");var a=0;m.down&&(a=7),m.up&&(a=-7),m.AN.bd(a,Am.x+24,Am.y),m.q=16}m.S.ac="hsl("+m.s+","+m.AN.bq+"%, 50%)"},m.d=function(){m.S.d(),m.s+=m.r,m.s<0&&(m.s=355),m.s>355&&(m.s=5),m.s!=Aj[m.AN.current]?m.S.ac="hsl("+m.s+","+m.AN.bq+"%, 50%)":m.r=0,--m.q<0&&(m.q=0),m.S.y>400&&(m.del=1)},m.aj=function(){64&az&&m.am(),16&az&&m.prev(),m.down=8&az?1:0,m.up=2&az?1:0,128&az&&(m.S.ak(),az^=128),32&az&&m.bd(),1&az&&m.S.x>-16?m.S.l():4&az&&m.S.x+16*e<xlevel.w?m.S.h():m.S.g()},m.ba=function(a,t){var e=Ai(a,m.AN.current,t);Am.ba(e)&&!m.del&&(m.del=1,Ac(Am,t,0,0,m.ac))},m.AL=function(a,t){4==a?(m.S.hp+=t,m.S.hp>m.AO&&(m.S.hp=m.AO)):(m.AN.As[a]+=t,m.AN.As[a]>99&&(m.AN.As[a]=99))},m.ag=function(vx,vy){with(Ap)fillStyle=wbae,fillText("Agtaske",vx+73,vy+20),strokeStyle="yellow",fillStyle="#300",strokeRect(vx+35,vy+35,300,8),fillRect(vx+35,vy+35,300,8),fillStyle="yellow",fillRect(vx+35,vy+35,300*(m.S.hp/m.AO),8),fillText("- "+xlevel.title+" -",vx+au.w/2,vy+35);if(m.AN.ag(vx,vy+au.h),ax)with(ax)agAvatar(vx+au.w,vy),del&&0==--AV&&(ax=null);m.S.agFace(vx-35,vy+50)}},hue=0;Ap.ft=Ap.fillText;var aw=new AT(Am),firexx=new AM(fire);firexx.ac=Ab[0],firexx.e=3;var as=0,yOld=aw.S.y,bo="i",bp={g:Al,i:bl,p:bm,d:function(a,t){Al(),bn(a,t)}},actionsScreen={g:function(){bo="p"},i:function(){restartAK(-720),bo="g"},p:function(){bo="g"},d:function(){console.log("restart level"),restartAK(-720),bo="g"}};ra(bj)}();