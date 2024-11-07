import{a as w,S as _,i as q}from"./assets/vendor-Rdv7LHNr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();async function x(e,t){return await w.get("https://pixabay.com/api/",{params:{key:"46722048-aff8075d188208e090c3b0c14",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})}const P=new _(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8,widthRatio:.9,heightRatio:.9});function v(e,t){const a=e.map(({largeImageURL:s,webformatURL:r,tags:o,likes:i,views:b,comments:L,downloads:S})=>`<li class="gallery-image_item">
            <a href="${s}" class="gallery-link">
              <img src="${r}" alt="${o}"/>
            </a>
            <ul class="gallery-image_caption">
              <li>
                <p class="image-caption_text">Likes</p>
                <p class="image-caption_number">${i}</p>
              </li>
              <li>
                <p class="image-caption_text">Views</p>
                <p class="image-caption_number">${b}</p>
              </li>
              <li>
                <p class="image-caption_text">Comments</p>
                <p class="image-caption_number">${L}</p>
              </li>
              <li>
                <p class="image-caption_text">Downloads</p>
                <p class="image-caption_number">${S}</p>
              </li>
            </ul>
        </li>`).join("");t.insertAdjacentHTML("beforeend",a),P.refresh()}const l=document.querySelector(".search-form"),m=document.querySelector(".gallery"),u=document.querySelector(".button-load-more"),O=document.querySelector(".box-loader");let n=localStorage.getItem("key-query")||"",c=1,f=!0;const M=15;l.addEventListener("submit",$);u.addEventListener("click",k);function $(e){e.preventDefault();const t=e.target.elements.query.value.trim();if(!t){l.reset(),m.innerHTML="",g(u,!1);return}n!==t&&(n=t,localStorage.setItem("key-query",n),m.innerHTML="",c=1,f=!0),h()}function k(){h()}async function h(){g(u,!1),p(!0);try{const e=await x(n,c),t=e.data.hits,a=e.data.totalHits;if(p(!1),t.length===0){d("❌ Sorry, there are no images matching your search query. Please try again!"),l.reset();return}else v(t,m),I(a),H(),c+=1}catch{p(!1),d("❌ Sorry, there was a server error. Please try again later!")}l.reset()}function d(e){q.show({message:e,color:"red",position:"topRight",timeout:2e3})}function I(e){M*c<e?g(u,!0):d("We're sorry, but you've reached the end of search results.")}function g(e,t){e.style.display=t?"block":"none"}function p(e){O.style.display=e?"block":"none"}let y=5;function H(){if(!f){const e=document.querySelectorAll(".gallery-image_item"),t=y*3;e.length>t&&(e[t].scrollIntoView({behavior:"smooth",block:"start"}),y+=5)}f=!1}
//# sourceMappingURL=index.js.map
