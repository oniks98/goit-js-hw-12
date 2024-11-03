import{a as S,S as q,i as d}from"./assets/vendor-Rdv7LHNr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();async function w(o,e){return await S.get("https://pixabay.com/api/",{params:{key:"46722048-aff8075d188208e090c3b0c14",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:15}})}const L=new q(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8,widthRatio:.9,heightRatio:.9});function _(o,e){const a=o.map(({largeImageURL:s,webformatURL:t,tags:r,likes:n,views:f,comments:h,downloads:b})=>`<li class="gallery-image_item">
            <a href="${s}" class="gallery-link">
              <img src="${t}" alt="${r}"/>
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
        </li>`).join("");e.insertAdjacentHTML("beforeend",a),L.refresh()}const l=document.querySelector(".search-form"),c=document.querySelector(".gallery"),g=document.querySelector(".button-load-more"),x=document.querySelector(".box-loader");let u=localStorage.getItem("key-query")||"",p=1,i;l.addEventListener("submit",y);g.addEventListener("click",y);async function y(o){if(o.preventDefault(),o.target.elements?i=o.target.elements.query.value.trim():i=u,!i){l.reset();return}u!==i&&(c.innerHTML="",p=1),localStorage.setItem("key-query",i),u=localStorage.getItem("key-query"),g.style.display="none",await new Promise(e=>requestAnimationFrame(e)),m(!0);try{const e=await w(i,p),a=e.data.hits,s=e.data.totalHits;if(m(!1),a.length===0){P(),l.reset();return}else _(a,c),p+=1,c.querySelectorAll(".gallery-image_item").length<s?g.style.display="block":M()}catch{m(!1),v()}l.reset()}function P(){d.show({message:"❌ Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",timeout:3e3})}function v(){d.show({message:"❌ Sorry, there was a server error. Please try again later!",color:"red",position:"topRight",timeout:3e3})}function M(){d.show({message:"We're sorry, but you've reached the end of search results.",color:"red",position:"topRight",timeout:3e3})}function m(o){if(o){const e=document.createElement("span");e.classList.add("loader"),x.append(e)}else{const e=document.querySelector(".loader");e&&e.remove()}}
//# sourceMappingURL=index.js.map
