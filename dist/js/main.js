var translation={first:"|&lt; Premier",previous:"&lt; Précédent",random:"N'importe",next:"Prochain &gt;",last:"Dernier &gt;|"},t="assets/",n=["slogan.png","bd-en-ligne.png","l-austerite.png","la-pub.png","du-boulot.png","charlie.png","un-cafe.png","fiat-luxe.png","c-ta-crere.png","time-out.png","je-like-pas.png","de-pis-en-pis.png","toune.png","le-futur-ete.png","c-est_pas_gai.png","le-truc.png","fin-de-partie.png","don-de-soi.png","festival.png","infortunes-du-rire.png","cuisses.png","sante.png","automobilistes.png","but-d-jouet.png","qui-rira-le-dernier.png","cadeau.png","universel.png","exil.png","mise-a-jour.png","presentations.png"],prevBtn=document.querySelectorAll(".prev"),nextBtn=document.querySelectorAll(".next"),firstBtn=document.querySelectorAll(".first"),lastBtn=document.querySelectorAll(".last"),randomBtn=document.querySelectorAll(".random"),preloadFirst=document.querySelector(".preload__first"),preloadPrevious=document.querySelector(".preload__previous"),preloadRandom=document.querySelector(".preload__random"),preloadNext=document.querySelector(".preload__next"),preloadLast=document.querySelector(".preload__last");prevBtn[0].innerHTML=translation.previous,nextBtn[0].innerHTML=translation.next,firstBtn[0].innerHTML=translation.first,lastBtn[0].innerHTML=translation.last,randomBtn[0].innerHTML=translation.random,function(){var e=location.pathname,o=n.length-1,r=n.indexOf(e.slice(1)+".png"),l=document.querySelector("#comic"),s=function(e,n){for(var t=e.length;t>0;)t--,e[t].addEventListener("click",n)},i=function(){r-=1,0>r&&(r=0),p()},a=function(){r+=1,r>o&&(r=o),p()},c=function(){r=0,p()},u=function(){r=o,p()},d=function(){r=n.indexOf(preloadRandom.getAttribute("data-file")),x=b(),p()};r<0&&(r=o),s(prevBtn,i),s(nextBtn,a),s(firstBtn,c),s(lastBtn,u),s(randomBtn,d);var p=function(){l.src=t+n[r],currentURL=n[r].slice(0,-4),q(),history.pushState(null,null,currentURL),console.log("r",r),r===o?m():g(),0===r?f():v()},m=function(){console.log("disabled last/next buttons");var e=document.querySelector(".disable--last");e||document.querySelector(".controls").classList.add("disable--last")},g=function(){console.log("enabled last/next buttons");var e=document.querySelector(".disable--last");console.log("isLastDisabled",e),e&&document.querySelector(".controls").classList.remove("disable--last")},f=function(){console.log("disabled first/previous buttons");var e=document.querySelector(".disable--first");console.log("isFirstDisabled",e),e||document.querySelector(".controls").classList.add("disable--first")},v=function(){console.log("enabled first/previous buttons");var e=document.querySelector(".disable--first");console.log("isFirstDisabled",e),e&&document.querySelector(".controls").classList.remove("disable--first")},b=function(){for(var e=r;e==r;)e=Math.floor(Math.random()*o);return e},q=function(){nextComic=r+1,nextComic>o&&(nextComic=o),previousComic=r-1,previousComic<0&&(previousComic=0),preloadFirst.src=t+n[0],preloadPrevious.src=t+n[previousComic],preloadRandom.src=t+n[x],preloadRandom.setAttribute("data-file",n[x]),preloadNext.src=t+n[nextComic],preloadLast.src=t+n[o]};r!=o&&p();var x=b();q(),window.addEventListener("popstate",function(){var e=r,s=location.pathname;r=""==s.slice(1)?o:n.indexOf(s.slice(1)+".png"),r!=e&&(l.src=t+n[r])})}();