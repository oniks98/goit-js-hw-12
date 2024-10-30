import{S as f,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function h(t){const a=`https://pixabay.com/api/?${new URLSearchParams({key:"46722048-aff8075d188208e090c3b0c14",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(a).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}const d=new f(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8,widthRatio:.9,heightRatio:.9});function y(t,o){const a=t.map(({largeImageURL:i,webformatURL:e,tags:r,likes:s,views:m,comments:p,downloads:g})=>`<li class="gallery-image_item">
            <a href="${i}" class="gallery-link">
              <img src="${e}" alt="${r}"/>
            </a>
            <ul class="gallery-image_caption">
              <li>
                <p class="image-caption_text">Likes</p>
                <p class="image-caption_number">${s}</p>
              </li>
              <li>
                <p class="image-caption_text">Views</p>
                <p class="image-caption_number">${m}</p>
              </li>
              <li>
                <p class="image-caption_text">Comments</p>
                <p class="image-caption_number">${p}</p>
              </li>
              <li>
                <p class="image-caption_text">Downloads</p>
                <p class="image-caption_number">${g}</p>
              </li>
            </ul>
        </li>`).join("");o.insertAdjacentHTML("beforeend",a),d.refresh()}const u=document.querySelector(".search-form"),n=document.querySelector(".gallery");u.addEventListener("submit",w);function w(t){t.preventDefault(),n.innerHTML="";const o=t.target.elements.query.value.trim();o!==""&&(L(),h(o).then(a=>{if(c(),a.hits.length===0){b();return}y(a.hits,n)}).catch(a=>{c(),S()}),u.reset())}function b(){l.show({message:"❌ Sorry, there are no images matching your search query. Please try again!",messageColor:"white",messageSize:"18",backgroundColor:"red",position:"topRight",timeout:2e3})}function S(){l.show({message:"❌ Sorry, there was a server error. Please try again later!",messageColor:"white",messageSize:"18",backgroundColor:"red",position:"topRight",timeout:2e3})}function L(){const t=document.createElement("span");t.classList.add("loader"),n.append(t)}function c(){const t=document.querySelector(".loader");t&&t.remove()}
//# sourceMappingURL=index.js.map
