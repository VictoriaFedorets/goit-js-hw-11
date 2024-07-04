import{S as p,i as a}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});const l=document.querySelector(".form");document.querySelector(".loader");const c=document.querySelector(".gallery");l.addEventListener("submit",m);function m(i){i.preventDefault();const r=l.elements.query.value.toLowerCase();d(r).then(o=>{o.hits.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):y(o.hits)}).catch(o=>{console.error("Fetch error: ",o),a.error({message:"Failed to fetch images. Please try again later.",position:"topRight"})})}const f="44763661-907А9К415КАБ9Д29К7901К7КК";function d(i){return fetch(`https://pixabay.com/api?key=${f}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(console.log(r),!r.ok)throw new Error(r.status);return r.json()})}function y(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:h})=>`<li class="gallery-item">
        <a class="gallery-link href="${n}" "> <img class="gallery-image src="${o}" alt="${e}"/></a>
        <ul class = "gallery">
          <li>
            <h3>likes</h3>
            <p>${t}</p>
          </li>
          <li>
            <h3>views</h3>
            <p>${s}</p>
          </li>
          <li>
            <h3>comments</h3>
            <p>${u}</p>
          </li>
          <li>
            <h3>downloads</h3>
            <p>${h}</p>
          </li>
        </ul>
      
      </li>
        `).join("");c.innerHTML=r}c.addEventListener("click",handlerGetImages);
//# sourceMappingURL=commonHelpers.js.map
