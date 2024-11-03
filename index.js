import{a as S,S as q,i as y}from"./assets/vendor-Rdv7LHNr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function w(r,t){return await S.get("https://pixabay.com/api/",{params:{key:"46722048-aff8075d188208e090c3b0c14",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})}const L=new q(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8,widthRatio:.9,heightRatio:.9});function _(r,t){const s=r.map(({largeImageURL:a,webformatURL:e,tags:o,likes:n,views:f,comments:h,downloads:b})=>`<li class="gallery-image_item">
            <a href="${a}" class="gallery-link">
              <img src="${e}" alt="${o}"/>
            </a>
            <ul class="gallery-image_caption">
              <li>
                <p class="image-caption_text">Likes</p>
                <p class="image-caption_number">${n}</p>
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
        </li>`).join("");t.insertAdjacentHTML("beforeend",s),L.refresh()}const g=document.querySelector(".search-form"),c=document.querySelector(".gallery"),i=document.querySelector(".button-load-more"),x=document.querySelector(".box-loader");let p=localStorage.getItem("key-query")||"",u=1,l;g.addEventListener("submit",d);i.addEventListener("click",d);async function d(r){if(r.preventDefault(),r.target.elements?l=r.target.elements.query.value.trim():l=p,!l){g.reset();return}p!==l&&(c.innerHTML="",u=1,i.style.display="none"),localStorage.setItem("key-query",l),p=localStorage.getItem("key-query"),m(!0);try{const t=await w(l,u),s=t.data.hits,a=t.data.totalHits;console.log(a),m(!1),s.length===0?v():(i.style.display="none",console.log(i.style.display),_(s,c),u+=1,i.style.display="block",console.log(i.style.display));const e=c.querySelectorAll(".gallery-image_item");console.log(e.length),e.length===a&&e.length!==0&&(M(),i.style.display="none")}catch{m(!1),P()}g.reset()}function v(){y.show({message:"❌ Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",timeout:3e3})}function P(){y.show({message:"❌ Sorry, there was a server error. Please try again later!",color:"red",position:"topRight",timeout:3e3})}function M(){y.show({message:"We're sorry, but you've reached the end of search results.",color:"red",position:"topRight",timeout:3e3})}function m(r){if(r){const t=document.createElement("span");t.classList.add("loader"),x.append(t)}else{const t=document.querySelector(".loader");t&&t.remove()}}
//# sourceMappingURL=index.js.map
