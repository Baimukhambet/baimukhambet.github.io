import{w as mt,b as k}from"./paths.1b9098f0.js";const ut="@riadh-adrani-theme",pt=t=>{localStorage.setItem(ut,JSON.stringify(t))},lt=mt(!1),ct=t=>lt.update(M=>{var p;const b=typeof t=="boolean"?t:!M;return pt(b),(p=document.querySelector(":root"))==null||p.setAttribute("data-theme",b?"dark":"light"),b}),kt=()=>{const t=localStorage.getItem(ut);t?ct(JSON.parse(t)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&ct(!0)},it=t=>`${k}/logos/${t}`,i=(t,M)=>M?{dark:it(M),light:it(t)}:it(t),L={AWS:i("aws.svg"),Swift:i("swift.png"),Bootstrap:i("bootstrap.svg"),C:i("c.svg"),Cpp:i("cpp.svg"),Celery:i("celery.svg"),Django:i("django.svg"),FastApi:i("fastapi"),Flask:i("flask.svg"),Go:i("go.svg"),Kafka:i("kafka.svg"),Neo4j:i("neo4j.svg"),Nginx:i("nginx.svg"),Numpy:i("numpy.svg"),Pandas:i("pandas.svg"),RabbitMQ:i("rabbitmq.svg"),Rust:i("rust.svg","rust-dark.png"),Scrapy:i("scrapy.png"),Selenium:i("selenium.svg"),Docker:i("docker.svg"),Kubernetes:i("kubernetees.svg"),Csharp:i("csharp.svg"),Xamarin:i("xamarin.svg"),TypeScript:i("ts.png"),VueJs:i("vue.png"),ReactJs:i("react.svg"),Dart:i("dart.png"),Kotlin:i("kotlin.png"),Python:i("python.png"),NodeJs:i("node.png"),Deno:i("deno.png","deno-dark.png"),Svelte:i("svelte.png"),ExpressJs:i("express.png"),JavaScript:i("js.png"),Fastify:i("fastify.svg","fastify-dark.png"),NestJs:i("nest.svg"),Quasar:i("quasar.svg"),SolidJs:i("solid.svg"),Electron:i("electron.png"),Flutter:i("flutter.svg"),Java:i("java.png"),AdonisJs:i("adonis.png"),Android:i("android.png"),Angular:i("angular.png"),PostgreSQL:i("postgres.png"),Firebase:i("firebase.png"),Sass:i("sass.png"),Unknown:i("no-img.svg"),MongoDB:i("mongodb.svg"),Redis:i("redis.svg"),Tailwind:i("tailwind.svg"),HTML:i("html.svg"),Premiere:i("premiere.svg"),Photoshop:i("photoshop.svg"),CSS:i("css.svg"),AfterEffects:i("after-effects.svg"),Illustrator:i("illustrator.svg"),Nuxt:i("nuxt.png"),Vite:i("vite.png"),Vitest:i("vitest.svg"),Jest:i("jest.png"),Unocss:i("unocss.svg"),Ruvy:i("ruvy.svg"),Postcss:i("postcss.svg")};let ht;lt.subscribe(t=>ht=t);const wt=t=>typeof t=="string"?t:ht?t.dark:t.light,gt=[{degree:"Bachelor degree of Computer Science",description:"",location:"Almaty, Kazakhstan",logo:L.Unknown,name:"",organization:"Kazakh-British Technical University",period:{from:new Date(2020,9,1),to:new Date},shortDescription:"",slug:"dummy-education-item",subjects:["C++","Swift","Computer Networks","Algorithms/Data Structures","OOP","Algebra","Python","Java","English"]}],U=t=>t,dt=[U({slug:"swift",color:"cyan",description:"",logo:L.Swift,name:"Swift"}),U({slug:"dart",color:"cyan",description:"",logo:L.Dart,name:"Dart"}),U({slug:"flutter",color:"cyan",description:"",logo:L.Flutter,name:"Flutter"}),U({slug:"cpp",color:"cyan",description:"",logo:L.Cpp,name:"C++"}),U({slug:"python",color:"cyan",description:"",logo:L.Python,name:"Python"}),U({slug:"Django",color:"cyan",description:"",logo:L.Django,name:"Django"}),U({slug:"java",color:"cyan",description:"",logo:L.Java,name:"Java"}),U({slug:"firebase",color:"cyan",description:"",logo:L.Firebase,name:"Firebase"})],G=(...t)=>dt.filter(M=>t.includes(M.slug));var W=(t=>(t.GitHub="github",t.Linkedin="linkedin",t.Email="email",t))(W||{}),et=(t=>(t.FullTime="Full-time",t.PartTime="Part-time",t.SelfEmployed="Self-employed",t.Freelance="Freelance",t.Contract="Contract",t.Internship="Internship",t))(et||{});const vt=[{slug:"open-sourcer",company:"nFactorial School",description:"Created AI-based application",contract:et.Internship,type:"Software Development",location:"Almaty, Kazakhstan",period:{from:new Date(2023,5,1),to:new Date(2023,7,11)},skills:G("swift"),name:"iOS Developer",color:"#ffffff",links:[],logo:L.Swift,shortDescription:""},{slug:"mentorship",company:"Self-employed",description:"Tutoring and mentoring 1st year students",contract:et.SelfEmployed,type:"Programming Principles",location:"Home",period:{from:new Date(2023,8,1)},skills:G("cpp","python"),name:"Tutoring/Mentorship",color:"#ffffff",links:[],logo:L.Unknown,shortDescription:""},{slug:"internship",company:"One Tech",description:"iOS Intern in One Tech",contract:et.Internship,type:"Internship",location:"Home",period:{from:new Date(2024,1,1)},skills:G("swift"),name:"One Tech iOS Intern",color:"#ffffff",links:[],logo:L.Swift,shortDescription:""}],$t=[{slug:"portfolio-prompter-ai",color:"#5e95e3",description:"Application for enhancing prompts for AI",shortDescription:"Application for enhancing prompts for AI",links:[{to:"https://github.com/Baimukhambet/nFactorial-PrompterAI",label:"GitHub"}],logo:L.Unknown,name:"PrompterAI",period:{from:new Date(2023,6,1)},skills:G("swift"),type:"iOS App"},{slug:"portfolio-notes-pro",color:"#5e95e3",description:"Notes app with fancy design. Stack: UIKit, Swift, CoreData, programmatic UI",shortDescription:"Notes app with fancy design",links:[{to:"https://github.com/Baimukhambet/iOS-NotesPro",label:"GitHub"}],logo:L.Unknown,name:"NotesPro",period:{from:new Date(2023,7,1)},skills:G("swift"),type:"iOS App",screenshots:[{label:"Load Screen",src:`${k}/screenshots/notes-pro/main.png`},{label:"Menu",src:`${k}/screenshots/notes-pro/tags.png`},{label:"",src:`${k}/screenshots/notes-pro/create.png`},{label:"",src:`${k}/screenshots/notes-pro/create2.png`},{label:"",src:`${k}/screenshots/notes-pro/created.png`},{label:"",src:`${k}/screenshots/notes-pro/folders.png`},{label:"",src:`${k}/screenshots/notes-pro/create-folder.png`},{label:"",src:`${k}/screenshots/notes-pro/folders2.png`},{label:"",src:`${k}/screenshots/notes-pro/notes.png`}]},{slug:"portfolio-machikoro",color:"#ff3e00",description:"Mobile version of a table game 'Machikoro'",shortDescription:"Mobile version of a table game 'Machikoro'",links:[{to:"https://github.com/Baimukhambet/iOS-Machikoro",label:"GitHub"}],logo:L.Unknown,name:"Machikoro",period:{from:new Date(2023,11,1)},skills:G("swift","firebase"),type:"iOS Online Game",screenshots:[{label:"Load Screen",src:`${k}/screenshots/machikoro/loadScreen.png`},{label:"Menu",src:`${k}/screenshots/machikoro/menu.png`},{label:"",src:`${k}/screenshots/machikoro/createRoom.png`},{label:"",src:`${k}/screenshots/machikoro/joinRoom.png`},{label:"",src:`${k}/screenshots/machikoro/throw.png`},{label:"",src:`${k}/screenshots/machikoro/info.png`},{label:"",src:`${k}/screenshots/machikoro/store.png`}]},{slug:"portfolio-recipeapp",color:"#5e95e3",description:"iOS Application for recipes, where I integrated Youtube videoplayer and used open-source recipe API to make network calls",shortDescription:"iOS Application for recipes",links:[{to:"https://github.com/Baimukhambet/iOS-RecipeApp",label:"GitHub"}],logo:L.Unknown,name:"RecipeApp",period:{from:new Date(2024,4,1)},skills:G("swift"),type:"iOS App"}];var ft=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ot={},Mt={get exports(){return ot},set exports(t){ot=t}};(function(t,M){(function(b,p){t.exports=p()})(ft,function(){var b=1e3,p=6e4,S=36e5,w="millisecond",D="second",N="minute",j="hour",Y="day",x="week",O="month",_="quarter",H="year",E="date",J="Invalid Date",Q=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,F=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,rt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(o){var n=["th","st","nd","rd"],e=o%100;return"["+o+(n[(e-20)%10]||n[e]||n[0])+"]"}},P=function(o,n,e){var a=String(o);return!a||a.length>=n?o:""+Array(n+1-a.length).join(e)+o},X={s:P,z:function(o){var n=-o.utcOffset(),e=Math.abs(n),a=Math.floor(e/60),s=e%60;return(n<=0?"+":"-")+P(a,2,"0")+":"+P(s,2,"0")},m:function o(n,e){if(n.date()<e.date())return-o(e,n);var a=12*(e.year()-n.year())+(e.month()-n.month()),s=n.clone().add(a,O),l=e-s<0,h=n.clone().add(a+(l?-1:1),O);return+(-(a+(e-s)/(l?s-h:h-s))||0)},a:function(o){return o<0?Math.ceil(o)||0:Math.floor(o)},p:function(o){return{M:O,y:H,w:x,d:Y,D:E,h:j,m:N,s:D,ms:w,Q:_}[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(o){return o===void 0}},V="en",f={};f[V]=rt;var c="$isDayjsObject",r=function(o){return o instanceof $||!(!o||!o[c])},m=function o(n,e,a){var s;if(!n)return V;if(typeof n=="string"){var l=n.toLowerCase();f[l]&&(s=l),e&&(f[l]=e,s=l);var h=n.split("-");if(!s&&h.length>1)return o(h[0])}else{var g=n.name;f[g]=n,s=g}return!a&&s&&(V=s),s||!a&&V},d=function(o,n){if(r(o))return o.clone();var e=typeof n=="object"?n:{};return e.date=o,e.args=arguments,new $(e)},u=X;u.l=m,u.i=r,u.w=function(o,n){return d(o,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var $=function(){function o(e){this.$L=m(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[c]=!0}var n=o.prototype;return n.parse=function(e){this.$d=function(a){var s=a.date,l=a.utc;if(s===null)return new Date(NaN);if(u.u(s))return new Date;if(s instanceof Date)return new Date(s);if(typeof s=="string"&&!/Z$/i.test(s)){var h=s.match(Q);if(h){var g=h[2]-1||0,v=(h[7]||"0").substring(0,3);return l?new Date(Date.UTC(h[1],g,h[3]||1,h[4]||0,h[5]||0,h[6]||0,v)):new Date(h[1],g,h[3]||1,h[4]||0,h[5]||0,h[6]||0,v)}}return new Date(s)}(e),this.init()},n.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==J},n.isSame=function(e,a){var s=d(e);return this.startOf(a)<=s&&s<=this.endOf(a)},n.isAfter=function(e,a){return d(e)<this.startOf(a)},n.isBefore=function(e,a){return this.endOf(a)<d(e)},n.$g=function(e,a,s){return u.u(e)?this[a]:this.set(s,e)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(e,a){var s=this,l=!!u.u(a)||a,h=u.p(e),g=function(B,A){var R=u.w(s.$u?Date.UTC(s.$y,A,B):new Date(s.$y,A,B),s);return l?R:R.endOf(Y)},v=function(B,A){return u.w(s.toDate()[B].apply(s.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(A)),s)},y=this.$W,z=this.$M,T=this.$D,K="set"+(this.$u?"UTC":"");switch(h){case H:return l?g(1,0):g(31,11);case O:return l?g(1,z):g(0,z+1);case x:var I=this.$locale().weekStart||0,Z=(y<I?y+7:y)-I;return g(l?T-Z:T+(6-Z),z);case Y:case E:return v(K+"Hours",0);case j:return v(K+"Minutes",1);case N:return v(K+"Seconds",2);case D:return v(K+"Milliseconds",3);default:return this.clone()}},n.endOf=function(e){return this.startOf(e,!1)},n.$set=function(e,a){var s,l=u.p(e),h="set"+(this.$u?"UTC":""),g=(s={},s[Y]=h+"Date",s[E]=h+"Date",s[O]=h+"Month",s[H]=h+"FullYear",s[j]=h+"Hours",s[N]=h+"Minutes",s[D]=h+"Seconds",s[w]=h+"Milliseconds",s)[l],v=l===Y?this.$D+(a-this.$W):a;if(l===O||l===H){var y=this.clone().set(E,1);y.$d[g](v),y.init(),this.$d=y.set(E,Math.min(this.$D,y.daysInMonth())).$d}else g&&this.$d[g](v);return this.init(),this},n.set=function(e,a){return this.clone().$set(e,a)},n.get=function(e){return this[u.p(e)]()},n.add=function(e,a){var s,l=this;e=Number(e);var h=u.p(a),g=function(z){var T=d(l);return u.w(T.date(T.date()+Math.round(z*e)),l)};if(h===O)return this.set(O,this.$M+e);if(h===H)return this.set(H,this.$y+e);if(h===Y)return g(1);if(h===x)return g(7);var v=(s={},s[N]=p,s[j]=S,s[D]=b,s)[h]||1,y=this.$d.getTime()+e*v;return u.w(y,this)},n.subtract=function(e,a){return this.add(-1*e,a)},n.format=function(e){var a=this,s=this.$locale();if(!this.isValid())return s.invalidDate||J;var l=e||"YYYY-MM-DDTHH:mm:ssZ",h=u.z(this),g=this.$H,v=this.$m,y=this.$M,z=s.weekdays,T=s.months,K=s.meridiem,I=function(A,R,q,tt){return A&&(A[R]||A(a,l))||q[R].slice(0,tt)},Z=function(A){return u.s(g%12||12,A,"0")},B=K||function(A,R,q){var tt=A<12?"AM":"PM";return q?tt.toLowerCase():tt};return l.replace(F,function(A,R){return R||function(q){switch(q){case"YY":return String(a.$y).slice(-2);case"YYYY":return u.s(a.$y,4,"0");case"M":return y+1;case"MM":return u.s(y+1,2,"0");case"MMM":return I(s.monthsShort,y,T,3);case"MMMM":return I(T,y);case"D":return a.$D;case"DD":return u.s(a.$D,2,"0");case"d":return String(a.$W);case"dd":return I(s.weekdaysMin,a.$W,z,2);case"ddd":return I(s.weekdaysShort,a.$W,z,3);case"dddd":return z[a.$W];case"H":return String(g);case"HH":return u.s(g,2,"0");case"h":return Z(1);case"hh":return Z(2);case"a":return B(g,v,!0);case"A":return B(g,v,!1);case"m":return String(v);case"mm":return u.s(v,2,"0");case"s":return String(a.$s);case"ss":return u.s(a.$s,2,"0");case"SSS":return u.s(a.$ms,3,"0");case"Z":return h}return null}(A)||h.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(e,a,s){var l,h=this,g=u.p(a),v=d(e),y=(v.utcOffset()-this.utcOffset())*p,z=this-v,T=function(){return u.m(h,v)};switch(g){case H:l=T()/12;break;case O:l=T();break;case _:l=T()/3;break;case x:l=(z-y)/6048e5;break;case Y:l=(z-y)/864e5;break;case j:l=z/S;break;case N:l=z/p;break;case D:l=z/b;break;default:l=z}return s?l:u.a(l)},n.daysInMonth=function(){return this.endOf(O).$D},n.$locale=function(){return f[this.$L]},n.locale=function(e,a){if(!e)return this.$L;var s=this.clone(),l=m(e,a,!0);return l&&(s.$L=l),s},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},o}(),C=$.prototype;return d.prototype=C,[["$ms",w],["$s",D],["$m",N],["$H",j],["$W",Y],["$M",O],["$y",H],["$D",E]].forEach(function(o){C[o[1]]=function(n){return this.$g(n,o[0],o[1])}}),d.extend=function(o,n){return o.$i||(o(n,$,d),o.$i=!0),d},d.locale=m,d.isDayjs=r,d.unix=function(o){return d(1e3*o)},d.en=f[V],d.Ls=f,d.p={},d})})(Mt);const st=ot;var at={},yt={get exports(){return at},set exports(t){at=t}};(function(t,M){(function(b,p){t.exports=p()})(ft,function(){var b,p,S=1e3,w=6e4,D=36e5,N=864e5,j=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Y=31536e6,x=2628e6,O=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,_={years:Y,months:x,days:N,hours:D,minutes:w,seconds:S,milliseconds:1,weeks:6048e5},H=function(f){return f instanceof X},E=function(f,c,r){return new X(f,r,c.$l)},J=function(f){return p.p(f)+"s"},Q=function(f){return f<0},F=function(f){return Q(f)?Math.ceil(f):Math.floor(f)},rt=function(f){return Math.abs(f)},P=function(f,c){return f?Q(f)?{negative:!0,format:""+rt(f)+c}:{negative:!1,format:""+f+c}:{negative:!1,format:""}},X=function(){function f(r,m,d){var u=this;if(this.$d={},this.$l=d,r===void 0&&(this.$ms=0,this.parseFromMilliseconds()),m)return E(r*_[J(m)],this);if(typeof r=="number")return this.$ms=r,this.parseFromMilliseconds(),this;if(typeof r=="object")return Object.keys(r).forEach(function(o){u.$d[J(o)]=r[o]}),this.calMilliseconds(),this;if(typeof r=="string"){var $=r.match(O);if($){var C=$.slice(2).map(function(o){return o!=null?Number(o):0});return this.$d.years=C[0],this.$d.months=C[1],this.$d.weeks=C[2],this.$d.days=C[3],this.$d.hours=C[4],this.$d.minutes=C[5],this.$d.seconds=C[6],this.calMilliseconds(),this}}return this}var c=f.prototype;return c.calMilliseconds=function(){var r=this;this.$ms=Object.keys(this.$d).reduce(function(m,d){return m+(r.$d[d]||0)*_[d]},0)},c.parseFromMilliseconds=function(){var r=this.$ms;this.$d.years=F(r/Y),r%=Y,this.$d.months=F(r/x),r%=x,this.$d.days=F(r/N),r%=N,this.$d.hours=F(r/D),r%=D,this.$d.minutes=F(r/w),r%=w,this.$d.seconds=F(r/S),r%=S,this.$d.milliseconds=r},c.toISOString=function(){var r=P(this.$d.years,"Y"),m=P(this.$d.months,"M"),d=+this.$d.days||0;this.$d.weeks&&(d+=7*this.$d.weeks);var u=P(d,"D"),$=P(this.$d.hours,"H"),C=P(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3,o=Math.round(1e3*o)/1e3);var n=P(o,"S"),e=r.negative||m.negative||u.negative||$.negative||C.negative||n.negative,a=$.format||C.format||n.format?"T":"",s=(e?"-":"")+"P"+r.format+m.format+u.format+a+$.format+C.format+n.format;return s==="P"||s==="-P"?"P0D":s},c.toJSON=function(){return this.toISOString()},c.format=function(r){var m=r||"YYYY-MM-DDTHH:mm:ss",d={Y:this.$d.years,YY:p.s(this.$d.years,2,"0"),YYYY:p.s(this.$d.years,4,"0"),M:this.$d.months,MM:p.s(this.$d.months,2,"0"),D:this.$d.days,DD:p.s(this.$d.days,2,"0"),H:this.$d.hours,HH:p.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:p.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:p.s(this.$d.seconds,2,"0"),SSS:p.s(this.$d.milliseconds,3,"0")};return m.replace(j,function(u,$){return $||String(d[u])})},c.as=function(r){return this.$ms/_[J(r)]},c.get=function(r){var m=this.$ms,d=J(r);return d==="milliseconds"?m%=1e3:m=d==="weeks"?F(m/_[d]):this.$d[d],m||0},c.add=function(r,m,d){var u;return u=m?r*_[J(m)]:H(r)?r.$ms:E(r,this).$ms,E(this.$ms+u*(d?-1:1),this)},c.subtract=function(r,m){return this.add(r,m,!0)},c.locale=function(r){var m=this.clone();return m.$l=r,m},c.clone=function(){return E(this.$ms,this)},c.humanize=function(r){return b().add(this.$ms,"ms").locale(this.$l).fromNow(!r)},c.valueOf=function(){return this.asMilliseconds()},c.milliseconds=function(){return this.get("milliseconds")},c.asMilliseconds=function(){return this.as("milliseconds")},c.seconds=function(){return this.get("seconds")},c.asSeconds=function(){return this.as("seconds")},c.minutes=function(){return this.get("minutes")},c.asMinutes=function(){return this.as("minutes")},c.hours=function(){return this.get("hours")},c.asHours=function(){return this.as("hours")},c.days=function(){return this.get("days")},c.asDays=function(){return this.as("days")},c.weeks=function(){return this.get("weeks")},c.asWeeks=function(){return this.as("weeks")},c.months=function(){return this.get("months")},c.asMonths=function(){return this.as("months")},c.years=function(){return this.get("years")},c.asYears=function(){return this.as("years")},f}(),V=function(f,c,r){return f.add(c.years()*r,"y").add(c.months()*r,"M").add(c.days()*r,"d").add(c.hours()*r,"h").add(c.minutes()*r,"m").add(c.seconds()*r,"s").add(c.milliseconds()*r,"ms")};return function(f,c,r){b=r,p=r().$utils(),r.duration=function(u,$){var C=r.locale();return E(u,{$l:C},$)},r.isDuration=H;var m=c.prototype.add,d=c.prototype.subtract;c.prototype.add=function(u,$){return H(u)?V(this,u,1):m.bind(this)(u,$)},c.prototype.subtract=function(u,$){return H(u)?V(this,u,-1):d.bind(this)(u,$)}}})})(yt);const bt=at;st.extend(bt);const Dt=(t,M=new Date)=>{let b=0,p=0,S=0;return M.getFullYear()!==t.getFullYear()?(S=M.getMonth(),p=(M.getFullYear()-t.getFullYear()-1)*12,b=12-t.getMonth()):b=M.getMonth()-t.getMonth(),b+p+S+1},Ct=t=>["January","February","March","April","May","June","July","August","September","October","November","December"][t],zt=(t,M)=>`${t} | ${M}`;function Lt(t,M=new Date(Date.now()+1e3*60*60*24)){const b=st(t),p=st(M),S=st.duration(p.diff(b));let w=0,D="day";return S.as("days")<=7?(D="day",w=S.as("days")):S.as("months")<=1?(D="week",w=S.as("weeks")):S.as("years")<=1?(D="month",w=S.as("months")):(D="year",w=S.as("years")),w=Math.trunc(w),`${Math.trunc(w)} ${D}${w>1?"s":""}`}var nt=(t=>(t.Code="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",t.Search="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z",t.Email="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",t.Skills="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z",t.GitHub="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",t.StackOverflow="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z",t.LinkedIn="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",t.Twitter="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",t.Home="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",t.Projects="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z",t.Job="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z",t.Academic="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",t.Resume="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z",t.RightArrow="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z",t.LeftArrow="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z",t.Youtube="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z",t.Link="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z",t.Sun="M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z",t.Moon="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z",t.Facebook="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z",t))(nt||{});const At="Baimukhambet",Ot={home:"Home",personal:"Projects",career:"Experiences",resume:"Resume",skills:"Skills",Education:"Education"},Ht=t=>{switch(t){case W.GitHub:return nt.GitHub;case W.Linkedin:return nt.LinkedIn;case W.Email:return nt.Email}},Yt={title:"Home",name:"Timur",lastName:"Baimukhambet",description:"iOS Developer",links:[{platform:W.GitHub,link:"https://github.com/Baimukhambet/"},{platform:W.Linkedin,link:"https://www.linkedin.com/in/timur-baimukhambet-5a2056287/"},{platform:W.Email,link:"timurbaimukhambet@gmail.com"}]},Et={title:"Projects",items:$t},Tt={title:"Experiences",items:vt},Nt={title:"Skills",items:dt},Pt={title:"Resumé",item:"baimukhambet-cv.pdf"},Ft={title:"Search"},jt={items:gt,title:"Education"};export{jt as E,Yt as H,nt as I,dt as M,Ot as N,Et as P,Pt as R,Ft as S,At as T,ct as a,Ht as b,Lt as c,Ct as d,Tt as e,vt as f,wt as g,ft as h,Dt as i,$t as j,Nt as k,kt as o,lt as t,zt as u};