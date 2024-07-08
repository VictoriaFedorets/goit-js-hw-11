import{i as a,S as d}from"./assets/vendor-8c59ed88.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function g(){f();const o=u.value;return console.log(o),fetch(`https://pixabay.com/api/?key=44763661-907a9c415cab9d29c7901c7cc&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(console.log(t),!t.ok)throw new Error(t.status);return t.json()})}function p(o){const n=o.map(({webformatURL:t,largeImageURL:i,tags:e,likes:r,views:s,comments:m,downloads:h})=>`<li class="gallery-item">
        <a class="gallery-link"
        href="${i}"> 
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
            <p>${s}</p>
          </li>
          <li>
            <h3>comments</h3>
            <p>${m}</p>
          </li>
          <li>
            <h3>downloads</h3>
            <p>${h}</p>
          </li>
        </ul>
      
      </li>`).join("");c.innerHTML=n}const y=document.querySelector(".form"),u=document.querySelector(".form-input"),l=document.querySelector(".loader"),c=document.querySelector(".gallery");l.style.display="none";y.addEventListener("submit",w);function w(o){if(o.preventDefault(),u.value.toLowerCase().trim()===""){a.warning({message:"Please complete the field!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"});return}f(),g().then(t=>{if(console.log(t),!t.hits.length){a.error({position:"topRight",backgroundColor:"red",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}c.innerHTML="",p(t.hits),b.refresh()}).catch(t=>{console.log(t),a.error({title:"Error",message:"Something went wrong."})}).finally(()=>{L()})}function f(){l&&(l.style.display="block")}function L(){l&&(l.style.display="none")}const b=new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});c.addEventListener("click",S);function S(o){if(o.preventDefault(),o.currentTarget===o.target)return;const n=document.querySelector(".gallery-image"),t=n.src,i=n.alt;basicLightbox.create(`
    <div class="modal">
      <img class="modal-img" src="${t}" alt="${i}" >
    </div>
  `).show()}
//# sourceMappingURL=commonHelpers.js.map
