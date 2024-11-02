import{a as g,S as d,i as l}from"./assets/vendor-B6sfYNm8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function h(o){return g.get("https://pixabay.com/api/",{params:{key:"46722048-aff8075d188208e090c3b0c14",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(t=>t.data.hits)}const y=new d(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8,widthRatio:.9,heightRatio:.9});function b(o,t){const i=o.map(({largeImageURL:s,webformatURL:e,tags:r,likes:a,views:u,comments:m,downloads:f})=>`<li class="gallery-image_item">
            <a href="${s}" class="gallery-link">
              <img src="${e}" alt="${r}"/>
            </a>
            <ul class="gallery-image_caption">
              <li>
                <p class="image-caption_text">Likes</p>
                <p class="image-caption_number">${a}</p>
              </li>
              <li>
                <p class="image-caption_text">Views</p>
                <p class="image-caption_number">${u}</p>
              </li>
              <li>
                <p class="image-caption_text">Comments</p>
                <p class="image-caption_number">${m}</p>
              </li>
              <li>
                <p class="image-caption_text">Downloads</p>
                <p class="image-caption_number">${f}</p>
              </li>
            </ul>
        </li>`).join("");t.insertAdjacentHTML("beforeend",i),y.refresh()}const p=document.querySelector(".search-form"),c=document.querySelector(".gallery");p.addEventListener("submit",L);function L(o){o.preventDefault(),c.innerHTML="";const t=o.target.elements.query.value.trim();t&&(n(!0),h(t).then(i=>{if(n(!1),i.length===0){_();return}b(i,c)}).catch(i=>{n(!1),w()}),p.reset())}function _(){l.show({message:"❌ Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",timeout:3e3})}function w(){l.show({message:"❌ Sorry, there was a server error. Please try again later!",color:"red",position:"topRight",timeout:3e3})}function n(o){if(o){const t=document.createElement("span");t.classList.add("loader"),c.append(t)}else document.querySelector(".loader").remove()}
//# sourceMappingURL=index.js.map
