import{a as q,S as L,i as d}from"./assets/vendor-Rdv7LHNr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();async function _(r,t){return await q.get("https://pixabay.com/api/",{params:{key:"46722048-aff8075d188208e090c3b0c14",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})}const x=new L(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8,widthRatio:.9,heightRatio:.9});function P(r,t){const a=r.map(({largeImageURL:s,webformatURL:e,tags:o,likes:l,views:b,comments:S,downloads:w})=>`<li class="gallery-image_item">
            <a href="${s}" class="gallery-link">
              <img src="${e}" alt="${o}"/>
            </a>
            <ul class="gallery-image_caption">
              <li>
                <p class="image-caption_text">Likes</p>
                <p class="image-caption_number">${l}</p>
              </li>
              <li>
                <p class="image-caption_text">Views</p>
                <p class="image-caption_number">${b}</p>
              </li>
              <li>
                <p class="image-caption_text">Comments</p>
                <p class="image-caption_number">${S}</p>
              </li>
              <li>
                <p class="image-caption_text">Downloads</p>
                <p class="image-caption_number">${w}</p>
              </li>
            </ul>
        </li>`).join("");t.insertAdjacentHTML("beforeend",a),x.refresh()}const c=document.querySelector(".search-form"),y=document.querySelector(".gallery"),g=document.querySelector(".button-load-more"),v=document.querySelector(".box-loader");let u=localStorage.getItem("key-query")||"",n=1,i,m=!0,M=15;c.addEventListener("submit",h);g.addEventListener("click",h);async function h(r){if(r.preventDefault(),r.target.elements?i=r.target.elements.query.value.trim():i=u,!i){c.reset();return}u!==i&&(y.innerHTML="",n=1,m=!0),localStorage.setItem("key-query",i),u=localStorage.getItem("key-query"),f(g,!1),p(!0);try{const t=await _(i,n),a=t.data.hits,s=t.data.totalHits;if(p(!1),a.length===0){O(),c.reset();return}else P(a,y),R(),M*n<s?f(g,!0):k(),n+=1}catch{p(!1),$()}c.reset()}function O(){d.show({message:"❌ Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",timeout:2e3})}function $(){d.show({message:"❌ Sorry, there was a server error. Please try again later!",color:"red",position:"topRight",timeout:2e3})}function k(){d.show({message:"We're sorry, but you've reached the end of search results.",color:"red",position:"topRight",timeout:2e3})}function R(){if(!m){const t=document.querySelector(".gallery-image_item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}m=!1}function f(r,t){r.style.display=t?"block":"none"}function p(r){v.style.display=r?"block":"none"}
//# sourceMappingURL=index.js.map
