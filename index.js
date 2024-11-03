import{a as S,S as q,i as g}from"./assets/vendor-Rdv7LHNr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function w(o,t){return await S.get("https://pixabay.com/api/",{params:{key:"46722048-aff8075d188208e090c3b0c14",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})}const L=new q(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8,widthRatio:.9,heightRatio:.9});function _(o,t){const a=o.map(({largeImageURL:s,webformatURL:e,tags:r,likes:n,views:f,comments:h,downloads:b})=>`<li class="gallery-image_item">
            <a href="${s}" class="gallery-link">
              <img src="${e}" alt="${r}"/>
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
        </li>`).join("");t.insertAdjacentHTML("beforeend",a),L.refresh()}const c=document.querySelector(".search-form"),p=document.querySelector(".gallery"),l=document.querySelector(".button-load-more"),x=document.querySelector(".box-loader");let u=localStorage.getItem("key-query")||"",m=1,i;c.addEventListener("submit",d);l.addEventListener("click",d);async function d(o){if(o.preventDefault(),l.style.display="none",o.target.elements?i=o.target.elements.query.value.trim():i=u,!i){c.reset();return}u!==i&&(p.innerHTML="",m=1),localStorage.setItem("key-query",i),u=localStorage.getItem("key-query"),l.style.display="none",y(!0);try{const t=await w(i,m),a=t.data.hits,s=t.data.totalHits;if(y(!1),a.length===0){v(),c.reset();return}else _(a,p),m+=1,p.querySelectorAll(".gallery-image_item").length<s?l.style.display="block":M()}catch{y(!1),P()}c.reset()}function v(){g.show({message:"❌ Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",timeout:2e3})}function P(){g.show({message:"❌ Sorry, there was a server error. Please try again later!",color:"red",position:"topRight",timeout:2e3})}function M(){g.show({message:"We're sorry, but you've reached the end of search results.",color:"red",position:"topRight",timeout:2e3})}function y(o){if(o){const t=document.createElement("span");t.classList.add("loader"),x.append(t),l.style.display="none"}else{const t=document.querySelector(".loader");t&&t.remove()}}
//# sourceMappingURL=index.js.map
