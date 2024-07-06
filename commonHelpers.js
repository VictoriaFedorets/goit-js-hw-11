import{i as c,S as h}from"./assets/vendor-8c59ed88.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function p(){f();const o=u.value;return console.log(o),fetch(`https://pixabay.com/api/?key=44763661-907a9c415cab9d29c7901c7cc&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(console.log(t),!t.ok)throw new Error(t.status);return t.json()})}function g(o){const n=o.map(({webformatURL:t,largeImageURL:s,tags:e,likes:r,views:i,comments:d,downloads:m})=>`<li class="gallery-item">
        <a class="gallery-link"
        href="${s}"> 
        <img class="gallery-image"
        src="${t}" 
        alt="${e}  
        width="360" 
        height="200""/>
        </a>
        <ul class = "gallery">
          <li>
            <h3>likes</h3>
            <p>${r}</p>
          </li>
          <li>
            <h3>views</h3>
            <p>${i}</p>
          </li>
          <li>
            <h3>comments</h3>
            <p>${d}</p>
          </li>
          <li>
            <h3>downloads</h3>
            <p>${m}</p>
          </li>
        </ul>
      
      </li>`).join("");a.innerHTML=n}const y=document.querySelector(".form"),u=document.querySelector(".form-input"),l=document.querySelector(".loader"),a=document.querySelector(".gallery");l.style.display="none";y.addEventListener("submit",L);function L(o){if(o.preventDefault(),u.value.toLowerCase().trim()===""){c.error({message:"Please complete the field!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"});return}else f(),p().then(t=>{console.log(t),t.hits.length||c.error({position:"topCenter",backgroundColor:"red",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),a.innerHTML="",g(t.hits),w.refresh()}).catch(t=>{console.log(t)}).finally(()=>{b()})}function f(){l&&(l.style.display="block")}function b(){l&&(l.style.display="none")}const w=new h(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});a.addEventListener("click",q);function q(o){if(o.preventDefault(),o.currentTarget===o.target)return;const n=document.querySelector(".gallery-image"),t=n.src,s=n.alt;basicLightbox.create(`
    <div class="modal">
      <img class="modal-img" src="${t}" alt="${s}" >
    </div>
  `).show()}
//# sourceMappingURL=commonHelpers.js.map
