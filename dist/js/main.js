var translation={first:"|&lt; Premier",previous:"&lt; Précédent",random:"N'importe",next:"Prochain &gt;",last:"Dernier &gt;|"},folder="assets/",comicChapters=[["slogan.png"],["bd-en-ligne.png"],["l-austerite.png"],["la-pub.png"],["du-boulot.png"],["charlie.png"],["un-cafe.png"],["fiat-luxe.png"],["c-ta-crere.png"],["time-out.png"],["je-like-pas.png"],["de-pis-en-pis.png"],["toune.png"],["le-futur-ete.png"],["c-est_pas_gai.png"],["le-truc.png"],["fin-de-partie.png"],["don-de-soi.png"],["festival.png"],["infortunes-du-rire.png"],["cuisses.png"],["sante.png"],["automobilistes.png"],["but-d-jouet.png"],["qui-rira-le-dernier.png"],["cadeau.png"],["universel.png"],["exil.png"],["mise-a-jour.png"],["presentations.png"],["pornophiles.png"],["faux-departs.png"],["zero-probleme.png"],["tribut.png"],["chocolat.png"],["la-joke.png"]],prevBtn=document.querySelectorAll(".prev"),nextBtn=document.querySelectorAll(".next"),firstBtn=document.querySelectorAll(".first"),lastBtn=document.querySelectorAll(".last"),randomBtn=document.querySelectorAll(".random"),preloadFirst=document.querySelector(".preload__first"),preloadPrevious=document.querySelector(".preload__previous"),preloadRandom=document.querySelector(".preload__random"),preloadNext=document.querySelector(".preload__next"),preloadLast=document.querySelector(".preload__last");prevBtn[0].innerHTML=translation.previous,nextBtn[0].innerHTML=translation.next,firstBtn[0].innerHTML=translation.first,lastBtn[0].innerHTML=translation.last,randomBtn[0].innerHTML=translation.random,function(){var e=location.pathname,t=comicChapters.length-1,n=comicChapters.indexOf(e.slice(1)+".png"),o=document.querySelector("#comic"),a=function(e,t){for(var r=e.length;r>0;)r--,e[r].addEventListener("click",t)},i=function(){n-=1,0>n&&(n=0),u()},c=function(){n+=1,n>t&&(n=t),u()},l=function(){n=0,u()},s=function(){n=t,u()},p=function(){n=comicChapters.indexOf(preloadRandom.getAttribute("data-file")),C=v(),u()};n<0&&(n=t),a(prevBtn,i),a(nextBtn,c),a(firstBtn,l),a(lastBtn,s),a(randomBtn,p);var u=function(){o.src=folder+comicChapters[n],currentURL=comicChapters[n].slice(0,-4),h(),history.pushState(null,null,currentURL),n===t?d():m(),0===n?f():g()},d=function(){var e=document.querySelector(".disable--last");e||document.querySelector(".controls").classList.add("disable--last")},m=function(){var e=document.querySelector(".disable--last");e&&document.querySelector(".controls").classList.remove("disable--last")},f=function(){var e=document.querySelector(".disable--first");e||document.querySelector(".controls").classList.add("disable--first")},g=function(){var e=document.querySelector(".disable--first");e&&document.querySelector(".controls").classList.remove("disable--first")},v=function(){for(var e=n;e==n;)e=Math.floor(Math.random()*t);return e},h=function(){nextComic=n+1,nextComic>t&&(nextComic=t),previousComic=n-1,previousComic<0&&(previousComic=0),preloadFirst.src=folder+comicChapters[0],preloadPrevious.src=folder+comicChapters[previousComic],preloadRandom.src=folder+comicChapters[C],preloadRandom.setAttribute("data-file",comicChapters[C]),preloadNext.src=folder+comicChapters[nextComic],preloadLast.src=folder+comicChapters[t]};n!=t&&u();var C=v();h(),window.addEventListener("popstate",function(){var e=n,a=location.pathname;n=""==a.slice(1)?t:comicChapters.indexOf(a.slice(1)+".png"),n!=e&&(o.src=folder+comicChapters[n],r===t?d():m(),0===r?f():g())})}();