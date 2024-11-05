import{a as S,S as w,i as _}from"./assets/vendor-Rdv7LHNr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();async function q(e,t){return await S.get("https://pixabay.com/api/",{params:{key:"46722048-aff8075d188208e090c3b0c14",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})}const P=new w(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8,widthRatio:.9,heightRatio:.9});function x(e,t){const a=e.map(({largeImageURL:n,webformatURL:r,tags:o,likes:i,views:h,comments:b,downloads:L})=>`<li class="gallery-image_item">
            <a href="${n}" class="gallery-link">
              <img src="${r}" alt="${o}"/>
            </a>
            <ul class="gallery-image_caption">
              <li>
                <p class="image-caption_text">Likes</p>
                <p class="image-caption_number">${i}</p>
              </li>
              <li>
                <p class="image-caption_text">Views</p>
                <p class="image-caption_number">${h}</p>
              </li>
              <li>
                <p class="image-caption_text">Comments</p>
                <p class="image-caption_number">${b}</p>
              </li>
              <li>
                <p class="image-caption_text">Downloads</p>
                <p class="image-caption_number">${L}</p>
              </li>
            </ul>
        </li>`).join("");t.insertAdjacentHTML("beforeend",a),P.refresh()}const l=document.querySelector(".search-form"),m=document.querySelector(".gallery"),u=document.querySelector(".button-load-more"),v=document.querySelector(".box-loader");let s=localStorage.getItem("key-query")||"",c=1,f=!0;const O=15;l.addEventListener("submit",M);u.addEventListener("click",$);function M(e){e.preventDefault();const t=e.target.elements.query.value.trim();if(!t){l.reset(),m.innerHTML="",y(u,!1);return}s!==t&&(s=t,localStorage.setItem("key-query",s),m.innerHTML="",c=1,f=!0),g()}function $(){g()}async function g(){y(u,!1),p(!0);try{const e=await q(s,c),t=e.data.hits,a=e.data.totalHits;if(p(!1),t.length===0){d("❌ Sorry, there are no images matching your search query. Please try again!"),l.reset();return}else x(t,m),H(a),k(),c+=1}catch{p(!1),d("❌ Sorry, there was a server error. Please try again later!")}l.reset()}function d(e){_.show({message:e,color:"red",position:"topRight",timeout:2e3})}function H(e){O*c<e?y(u,!0):d("We're sorry, but you've reached the end of search results.")}function y(e,t){e.style.display=t?"block":"none"}function p(e){v.style.display=e?"block":"none"}function k(){if(!f){const t=document.querySelector(".gallery-image_item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}f=!1}
//# sourceMappingURL=index.js.map
