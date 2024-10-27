import{S as g,i as n}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const m=document.querySelector(".search-form"),p=document.querySelector(".gallery");let i="",f=new g(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8,widthRatio:.9,heightRatio:.9});m.addEventListener("submit",h);function h(a){a.preventDefault(),p.innerHTML="",i=a.target.elements.query.value,i!==""&&(w(),d().then(r=>{if(u(),r.hits.length===0){l();return}y(r)}).catch(r=>{u(),l()}),m.reset())}function d(){const r=`https://pixabay.com/api/?${new URLSearchParams({key:"46722048-aff8075d188208e090c3b0c14",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(r).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function y(a){const r=a.hits.map(t=>`<li class="gallery-image_item">
                     <a href="${t.largeImageURL}" class="gallery-link">
              <img src="${t.webformatURL}" alt="${t.tags}" />
            </a>
         <ul class="gallery-image_caption">
            <li>
            <p class="image-caption_text">Likes</p>
            <p class="image-caption_number">${t.likes} </p>
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
        </li>`).join("");p.insertAdjacentHTML("beforeend",r),f.refresh()}function l(){n.show({message:"❌ Sorry, there are no images matching your search query. Please try again!",messageColor:"white",messageSize:"18",backgroundColor:"red",position:"topRight",timeout:3e3})}function w(){n.show({message:"Loading images, please wait...",messageColor:"black",messageSize:"18",position:"center",timeout:!1,close:!0,progressBar:!0})}function u(){n.hide({},document.querySelector(".iziToast"))}
//# sourceMappingURL=index.js.map
