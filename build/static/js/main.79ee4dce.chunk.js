(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/team-02.795c0c78.png"},,,function(e,t,a){e.exports=a.p+"static/media/hero-img.fd17e732.png"},function(e,t,a){e.exports=a.p+"static/media/light-hero-bg.48bc9c98.jpg"},function(e,t,a){e.exports=a.p+"static/media/about-us.f9e7cd43.jpg"},function(e,t,a){e.exports=a.p+"static/media/team-01.cd6f4b5a.png"},function(e,t,a){e.exports=a.p+"static/media/team-03.2d41c4e9.png"},function(e,t,a){e.exports=a.p+"static/media/video.643819a1.png"},function(e,t,a){e.exports=a.p+"static/media/article.679cfab2.png"},function(e,t,a){e.exports=a.p+"static/media/case-study.a97fb704.png"},,function(e,t,a){e.exports=a.p+"static/media/ava-1.0b074da0.jpg"},function(e,t,a){e.exports=a.p+"static/media/ava-2.32a3b1b0.jpg"},function(e,t,a){e.exports=a.p+"static/media/ava-3.10c69124.jpg"},,function(e,t,a){e.exports=a(73)},,,,,,,,,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},,,,,,,,function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(6),c=a.n(l),r=a(19),s=(a(29),a(32),[{path:"#home",display:"Home"},{path:"#about",display:"About"},{path:"#service",display:"Service"},{path:"#projects",display:"Projects"},{path:"#blog",display:"Blog"}]),m=function(e){var t=e.theme,a=e.toggleTheme,l=Object(i.useRef)(null),c=Object(i.useRef)(null),r=function(){document.body.scrollTop>80||document.documentElement.scrollTop>80?l.current.classList.add("header__shrink"):l.current.classList.remove("header__shrink")};Object(i.useEffect)(function(){return window.addEventListener("scroll",r),function(){return window.removeEventListener("scroll",r)}},[]);var m=function(e){e.preventDefault();var t=e.target.getAttribute("href"),a=document.querySelector(t).offsetTop;window.scrollTo({left:0,top:a-80})},o=function(){return c.current.classList.toggle("menu__active")};return n.a.createElement("div",null,n.a.createElement("header",{className:"header",ref:l},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"nav__wrapper"},n.a.createElement("div",{className:"logo"},n.a.createElement("h2",null,"Digency")),n.a.createElement("div",{className:"navigation",ref:c,onClick:o},n.a.createElement("ul",{className:"menu"},s.map(function(e,t){return n.a.createElement("li",{className:"menu__item",key:t},n.a.createElement("a",{href:e.path,onClick:m,className:"menu__link"},e.display))}))),n.a.createElement("div",{className:"light__mode"},n.a.createElement("span",{onClick:a},"light-theme"===t?n.a.createElement("span",null,n.a.createElement("i",{class:"ri-moon-line"}),"Dark"):n.a.createElement("span",null,n.a.createElement("i",{class:"ri-sun-line"}),"Light"))),n.a.createElement("span",{className:"mobile__menu",onClick:o},n.a.createElement("i",{class:"ri-menu-line"}))))))},o=(a(34),a(7)),u=a.n(o),d=a(8),p=a.n(d),E=function(e){var t=e.theme;return n.a.createElement("section",{className:"hero__section",id:"home"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"hero__wrapper"},n.a.createElement("div",{className:"hero__content"},n.a.createElement("div",null,n.a.createElement("h2",null,"We are creating perfect"),n.a.createElement("h2",null,"Digital products to"),n.a.createElement("h2",{className:"highlight"},"Promote Your Brand")),n.a.createElement("p",{className:"description"},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, porro? Ratione consectetur veniam officia rerum quia, suscipit quidem earum ipsum odit. Ut ipsum hic aspernatur exercitationem consectetur doloribus, alias esse?"),n.a.createElement("div",{className:"hero__btns"},n.a.createElement("button",{className:"primary__btn"},"Get Started Now"),n.a.createElement("button",{className:"secondary__btn"},"Discover More"))),n.a.createElement("div",{className:"hero__img"},n.a.createElement("img",{src:"light-theme"===t?p.a:u.a,alt:"hero-img"})))))},_=(a(36),[{number:"5k+",text:"Clients"},{number:"350+",text:"Running Projects"},{number:"900+",text:"Projects Completed"}]),h=function(){return n.a.createElement("section",{className:"counter",id:"projects"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"counter__wrapper"},_.map(function(e,t){return n.a.createElement("div",{className:"counter__item",key:t},n.a.createElement("h3",{className:"counter__number"},e.number),n.a.createElement("h4",{className:"counter__title"},e.text))}))))},v=(a(38),[{icon:"ri-apps-line",title:"App Development",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, Architecto doloribus, amet quos eos sed sapiente!"},{icon:"ri-code-s-slash-line",title:"Web Designer",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,  Architecto doloribus, amet quos eos sed sapiente!"},{icon:"ri-landscape-line",title:"Graphic Designer",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,  Architecto doloribus, amet quos eos sed sapiente!"},{icon:"ri-rocket-line",title:"Digital Marketing",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, . Architecto doloribus, amet quos eos sed sapiente!"}]),g=function(){return n.a.createElement("section",{id:"service"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"services__top-content"},n.a.createElement("h6",{className:"subtitle"},"Our Services"),n.a.createElement("h2",null,"Save time managing your business with "),n.a.createElement("h2",{className:"highlight"},"our best services")),n.a.createElement("div",{className:"service__item-wrapper"},v.map(function(e,t){return n.a.createElement("div",{className:"services__item",key:t},n.a.createElement("span",{className:"services__icon"},n.a.createElement("i",{class:e.icon})),n.a.createElement("h3",{className:"service__title"},e.title),n.a.createElement("p",{className:"description"},e.desc))}))))},N=(a(40),a(9)),f=a.n(N),b=[{icon:"ri-wifi-line",title:"First Working process",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Similique inventore dolor accusamus"},{icon:"ri-team-line",title:"Dedicated Team",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique inventore dolor accusamus"},{icon:"ri-customer-service-line",title:"24/7 Hours Support",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. . Similique inventore dolor accusamus"}],k=function(){return n.a.createElement("section",{id:"about"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"about__wrapper"},n.a.createElement("div",{className:"about__content"},n.a.createElement("h6",{className:"subtitle"},"Why choose Us"),n.a.createElement("h2",null,"Specialist in aviding clients on "),n.a.createElement("h2",{className:"highlight"},"financial Challenges"),n.a.createElement("p",{className:"description about__content-desc"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores iste, unde, odit facere repellendus soluta accusantium harum porro placeat, exercitationem earum! Fugiat porro incidunt sunt inventore illum veniam explicabo?"),n.a.createElement("div",{className:"choose_-item-wrapper"},b.map(function(e,t){return n.a.createElement("div",{className:"choose__us-item",key:t},n.a.createElement("span",{className:"choose__us-icon"},n.a.createElement("i",{class:e.icon})),n.a.createElement("div",null,n.a.createElement("h4",{className:"choose__us-title"},e.title),n.a.createElement("p",{className:"description"},e.desc)))}))),n.a.createElement("div",{className:"about__img"},n.a.createElement("img",{src:f.a,alt:""})))))},q=(a(42),a(10)),y=a.n(q),w=a(4),L=a.n(w),x=a(11),S=a.n(x),D=[{imgURL:y.a,name:"Abhijeet Tyagi",position:"SDE-2"},{imgURL:L.a,name:"Shivani Gupta",position:"Frontend Developer"},{imgURL:S.a,name:"ABC",position:"Web Developer"},{imgURL:L.a,name:"DEF",position:"UI Developer"}],C=function(){return n.a.createElement("section",{className:"our__team"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"team__content"},n.a.createElement("h6",{className:"subtitle"},"Our Team"),n.a.createElement("h2",null,"Meet With ",n.a.createElement("span",{className:"highlight"},"our team"))),n.a.createElement("div",{className:"team__wrapper"},D.map(function(e,t){return n.a.createElement("div",{className:"team__item",key:t},n.a.createElement("div",{className:"team__img"},n.a.createElement("img",{src:e.imgURL,alt:""})),n.a.createElement("div",{className:"team__details"},n.a.createElement("h4",null,e.name),n.a.createElement("p",{className:"description"},e.position),n.a.createElement("div",{className:"team__member-social"},n.a.createElement("span",null,n.a.createElement("i",{class:"ri-linkedin-line"})),n.a.createElement("span",null,n.a.createElement("i",{class:"ri-twitter-line"})))))}))))},R=(a(44),a(12)),j=a.n(R),T=a(13),U=a.n(T),A=a(14),O=a.n(A),W=[{imgURL:j.a,title:"video",desc:"To know about work. Wtch some video f.....",linkURL:"#"},{imgURL:U.a,title:"Article",desc:"To know about work. Wtch some video f.....",linkURL:"#"},{imgURL:O.a,title:"Case Study",desc:"To know about work. Wtch some video f.....",linkURL:"#"}],B=function(){return n.a.createElement("section",{id:"blog",className:"blog"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"blog__top-content"},n.a.createElement("h6",{className:"subtitle"},"Our Blog"),n.a.createElement("h2",null,"Lets's have a look from our ",n.a.createElement("span",{className:"highlight"},"Recent Blog"))),n.a.createElement("div",{className:"blog__wrapper"},W.map(function(e,t){return n.a.createElement("div",{className:"blog__item",key:t},n.a.createElement("h3",null,e.title),n.a.createElement("div",{className:"blog__img"},n.a.createElement("img",{src:e.imgURL,alt:""})),n.a.createElement("p",{className:"description blog__desc"},e.desc),n.a.createElement("div",null,n.a.createElement("a",{href:e.linkURL,className:"learn__more"},n.a.createElement("i",{class:"ri-arrow-right-line"}))))}))))},G=(a(46),a(15)),F=a.n(G),M=a(16),P=a.n(M),J=a(17),K=a.n(J),H=a(18),I=a.n(H),Y=function(){return n.a.createElement("section",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"slider__content-top"},n.a.createElement("h6",{className:"subtitle"},"Testimonials"),n.a.createElement("h2",null,"Trusted by more than ",n.a.createElement("span",{className:"highlight"},"5,000 customers"))),n.a.createElement("div",{className:"slider__wrapper"},n.a.createElement(F.a,{dots:!1,infinite:!0,speed:1e3,autoplay:!0,autoplaySpeed:2e3,slidesToShow:1,slidesToScroll:1,swipeToSlide:!0},n.a.createElement("div",{className:"slider__item"},n.a.createElement("p",{className:"description"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur numquam pariatur aut quaerat rem, aperiam expedita deleniti facilis harum, corrupti repellat dolore odit et consectetur quos, doloremque dolorem voluptates voluptatemsit amet consectetur adipisicing elit. Consequatur numquam pariatur aut quaerat rem, aperiam expedita deleniti facilis harum, corrupti repellat dolore odit et consectetur quos, doloremque dolorem voluptates voluptatem."),n.a.createElement("div",{className:"customer__details"},n.a.createElement("div",{className:"customer__img"},n.a.createElement("img",{src:P.a,alt:""})),n.a.createElement("div",null,n.a.createElement("h5",{className:"customer__name"},"Salman Khan"),n.a.createElement("p",{className:"description"},"CEO, Workcreation")))),n.a.createElement("div",{className:"slider__item"},n.a.createElement("p",{className:"description"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur numquam pariatur aut quaerat rem, aperiam expedita deleniti facilis harum, corrupti repellat dolore odit et consectetur quos, doloremque dolorem voluptates voluptatemsit amet consectetur adipisicing elit. Consequatur numquam pariatur aut quaerat rem, aperiam expedita deleniti facilis harum, corrupti repellat dolore odit et consectetur quos, doloremque dolorem voluptates voluptatem."),n.a.createElement("div",{className:"customer__details"},n.a.createElement("div",{className:"customer__img"},n.a.createElement("img",{src:K.a,alt:""})),n.a.createElement("div",null,n.a.createElement("h5",{className:"customer__name"},"Vicky Kaushal"),n.a.createElement("p",{className:"description"},"Sr. Developer")))),n.a.createElement("div",{className:"slider__item"},n.a.createElement("p",{className:"description"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur numquam pariatur aut quaerat rem, aperiam expedita deleniti facilis harum, corrupti repellat dolore odit et consectetur quos, doloremque dolorem voluptates voluptatemsit amet consectetur adipisicing elit. Consequatur numquam pariatur aut quaerat rem, aperiam expedita deleniti facilis harum, corrupti repellat dolore odit et consectetur quos, doloremque dolorem voluptates voluptatem."),n.a.createElement("div",{className:"customer__details"},n.a.createElement("div",{className:"customer__img"},n.a.createElement("img",{src:I.a,alt:""})),n.a.createElement("div",null,n.a.createElement("h5",{className:"customer__name"},"Kartik Aryan"),n.a.createElement("p",{className:"description"},"Graphic Designer"))))))))},V=(a(63),function(){return n.a.createElement("section",{className:"newsletter"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"newsletter__wrapper"},n.a.createElement("div",{className:"newsletter_content"},n.a.createElement("h6",{className:"subtitle"},"Let.s work"),n.a.createElement("h2",null,"Explore the ",n.a.createElement("span",{className:"highlight"},"hidden")," ideas and subscribe!")),n.a.createElement("div",{className:"newsletter__form"},n.a.createElement("input",{type:"emsil",placeholder:"Email"}),n.a.createElement("button",{className:"secondary__btn subscribe__btn"},"Subscribe Now")))))}),z=(a(65),[{path:"#",display:"Marketing"},{path:"#",display:"Analytics"},{path:"#",display:"Commerce"}]),Q=[{path:"#",display:"Pricing"},{path:"#",display:"Documentation"},{path:"#",display:"Guides"}],X=[{path:"#about",display:"About"},{path:"#",display:"Job"},{path:"#blog",display:"Blog"}],Z=function(){var e=(new Date).getFullYear;return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"footer__wrapper"},n.a.createElement("div",{className:"footer__logo"},n.a.createElement("h2",null,"Digency"),n.a.createElement("p",{className:"description"},"Grow with us"),n.a.createElement("p",{className:"small__text description"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, provident ut harum quidem eligendi commodi inventore veniam hic. Ullam at reprehenderit ab enim accusantium non dolore quas sint consequuntur illum!")),n.a.createElement("div",{className:"footer__quick-links"},n.a.createElement("h3",{className:"quick__links-title"},"Solution"),n.a.createElement("ul",{className:"quick__links"},z.map(function(e,t){return n.a.createElement("li",{className:"quick__link-item",key:t},n.a.createElement("a",{href:e.path},e.display))}))),n.a.createElement("div",{className:"footer__quick-links"},n.a.createElement("h3",{className:"quick__links-title"},"Support"),n.a.createElement("ul",{className:"quick__links"},Q.map(function(e,t){return n.a.createElement("li",{className:"quick__link-item",key:t},n.a.createElement("a",{href:e.path},e.display))}))),n.a.createElement("div",{className:"footer__quick-links"},n.a.createElement("h3",{className:"quick__links-title"},"Company"),n.a.createElement("ul",{className:"quick__links"},X.map(function(e,t){return n.a.createElement("li",{className:"quick__link-item",key:t},n.a.createElement("a",{href:e.path},e.display))})))),n.a.createElement("p",{className:"copyright"},"Copyright ",e," , developed by Shivani Gupta. All rights reserved")))};var $=function(){var e=Object(i.useState)(""),t=Object(r.a)(e,2),a=t[0],l=t[1];return Object(i.useEffect)(function(){document.body.className=a},[a]),n.a.createElement(n.a.Fragment,null,n.a.createElement(m,{theme:a,toggleTheme:function(){l(""===a?"light-theme":"")}}),n.a.createElement(E,{theme:a}),n.a.createElement(h,null),n.a.createElement(g,null),n.a.createElement(k,null),n.a.createElement(C,null),n.a.createElement(B,null),n.a.createElement(Y,null),n.a.createElement(V,null),n.a.createElement(Z,null))};a(67),a(69),a(71);c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement($,null)))}],[[20,2,1]]]);
//# sourceMappingURL=main.79ee4dce.chunk.js.map