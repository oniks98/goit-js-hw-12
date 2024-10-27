import{S as u,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function p(r){const s=`https://pixabay.com/api/?${new URLSearchParams({key:"46722048-aff8075d188208e090c3b0c14",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(s).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const d=new u(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8,widthRatio:.9,heightRatio:.9});function f(r,a){const s=r.hits.map(t=>`<li class="gallery-image_item">
            <a href="${t.largeImageURL}" class="gallery-link">
              <img src="${t.webformatURL}" alt="${t.tags}"/>
            </a>
            <ul class="gallery-image_caption">
              <li>
                <p class="image-caption_text">Likes</p>
                <p class="image-caption_number">${t.likes}</p>
              </li>
              <li>
                <p class="image-caption_text">Views</p>
                <p class="image-caption_number">${t.views}</p>
              </li>
              <li>
                <p class="image-caption_text">Comments</p>
                <p class="image-caption_number">${t.comments}</p>
              </li>
              <li>
                <p class="image-caption_text">Downloads</p>
                <p class="image-caption_number">${t.downloads}</p>
              </li>
            </ul>
        </li>`).join("");a.insertAdjacentHTML("beforeend",s),d.refresh()}const m=document.querySelector(".search-form"),n=document.querySelector(".gallery");m.addEventListener("submit",g);function g(r){r.preventDefault(),n.innerHTML="";const a=r.target.elements.query.value.trim();a!==""&&(w(),setTimeout(()=>{p(a).then(s=>{if(c(),s.hits.length===0){h();return}f(s,n)}).catch(s=>{c(),y()}),m.reset()},1e3))}function h(){l.show({message:"❌ Sorry, there are no images matching your search query. Please try again!",messageColor:"white",messageSize:"18",backgroundColor:"red",position:"topRight",timeout:2e3})}function y(){l.show({message:"❌ Sorry, there was a server error. Please try again later!",messageColor:"white",messageSize:"18",backgroundColor:"red",position:"topRight",timeout:2e3})}function w(){const r=document.createElement("span");r.classList.add("loader"),n.append(r)}function c(){const r=document.querySelector(".loader");r&&r.remove()}
//# sourceMappingURL=index.js.map
