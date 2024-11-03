import{a as S,S as q,i as d}from"./assets/vendor-Rdv7LHNr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();async function w(r,t){return await S.get("https://pixabay.com/api/",{params:{key:"46722048-aff8075d188208e090c3b0c14",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})}const L=new q(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8,widthRatio:.9,heightRatio:.9});function _(r,t){const a=r.map(({largeImageURL:s,webformatURL:e,tags:o,likes:l,views:f,comments:h,downloads:b})=>`<li class="gallery-image_item">
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
                <p class="image-caption_number">${f}</p>
              </li>
              <li>
                <p class="image-caption_text">Comments</p>
                <p class="image-caption_number">${h}</p>
              </li>
              <li>
                <p class="image-caption_text">Downloads</p>
                <p class="image-caption_number">${b}</p>
              </li>
            </ul>
        </li>`).join("");t.insertAdjacentHTML("beforeend",a),L.refresh()}const g=document.querySelector(".search-form"),p=document.querySelector(".gallery"),c=document.querySelector(".button-load-more"),x=document.querySelector(".box-loader");let u=localStorage.getItem("key-query")||"",n=1,i;g.addEventListener("submit",y);c.addEventListener("click",y);c.style.display="none";async function y(r){if(r.preventDefault(),r.target.elements?i=r.target.elements.query.value.trim():i=u,!i){g.reset();return}u!==i&&(p.innerHTML="",n=1),localStorage.setItem("key-query",i),u=localStorage.getItem("key-query"),m(!0);try{const t=await w(i,n),a=t.data.hits,s=t.data.totalHits;console.log(s),m(!1),a.length===0?v():(_(a,p),n+=1,c.style.display="block",console.log(n));const e=p.querySelectorAll(".gallery-image_item");console.log(e.length),e.length===s&&e.length!==0&&(M(),c.style.display="none")}catch{m(!1),P()}g.reset()}function v(){d.show({message:"❌ Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",timeout:3e3})}function P(){d.show({message:"❌ Sorry, there was a server error. Please try again later!",color:"red",position:"topRight",timeout:3e3})}function M(){d.show({message:"We're sorry, but you've reached the end of search results.",color:"red",position:"topRight",timeout:3e3})}function m(r){if(r){const t=document.createElement("span");t.classList.add("loader"),x.append(t)}else{const t=document.querySelector(".loader");t&&t.remove()}}
//# sourceMappingURL=index.js.map
