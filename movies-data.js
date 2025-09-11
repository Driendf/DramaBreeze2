//<![CDATA[
const dataCatalogo = [
  {
    title: "Romance en Seúl",
    tags: ["Romance","Finalizado","Serie TV","Subtítulos","Coreano","HD"],
    sinopsis: "Una historia de amor entre dos jóvenes que luchan por su destino.",
    episodes: Array.from({length:26}, (_, i) => ({
      title: "Episodio " + (i + 1),
      link: `https://driendf.github.io/Seul_Ep${i + 1}.html`
    })),
    img: "https://blogger.googleusercontent.com/img/b/otra_imagen.jpg"
  },
  {
    title: "Acción Extrema",
    tags: ["Acción","Emisión","Serie TV","Doblaje","Chino","HD"],
    sinopsis: "Un agente secreto se enfrenta a peligros extremos en cada misión.",
    episodes: [
      {title: "Episodio 1", link: "https://driendf.github.io/Accion_Ep1.html"},
      {title: "Episodio 2", link: "https://driendf.github.io/Accion_Ep2.html"},
      {title: "Episodio 3", link: "https://driendf.github.io/Accion_Ep3.html"},
      {title: "Episodio 4", link: "https://driendf.github.io/Accion_Ep4.html"},
      {title: "Episodio 5", link: "https://driendf.github.io/Accion_Ep5.html"},
      {title: "Episodio 6", link: "https://driendf.github.io/Accion_Ep6.html"},
      {title: "Episodio 7", link: "https://driendf.github.io/Accion_Ep7.html"},
      {title: "Episodio 8", link: "https://driendf.github.io/Accion_Ep8.html"},
      {title: "Episodio 9", link: "https://driendf.github.io/Accion_Ep9.html"},
      {title: "Episodio 10", link: "https://driendf.github.io/Accion_Ep10.html"}
    ],
    img: "https://blogger.googleusercontent.com/img/b/otra_imagen2.jpg"
  },
  {
    title: "Misterio Nocturno",
    tags: ["Suspenso","Pausado","Serie TV","Subtítulos","EEUU","HD"],
    sinopsis: "Detectives luchan por resolver crímenes que parecen imposibles.",
    episodes: [
      {title: "Episodio 1", link: "https://driendf.github.io/Misterio_Ep1.html"},
      {title: "Episodio 2", link: "https://driendf.github.io/Misterio_Ep2.html"},
      {title: "Episodio 3", link: "https://driendf.github.io/Misterio_Ep3.html"}
    ],
    img: "https://blogger.googleusercontent.com/img/b/otra_imagen3.jpg"
  }
];


let currentPage=1; const itemsPerPage=10;
let currentEpisodePage=0;

function renderPage(list,containerId,paginationId){
  const container=document.getElementById(containerId); container.classList.remove("show"); container.innerHTML="";
  if(list.length===0) list=dataCatalogo;
  const start=(currentPage-1)*itemsPerPage; const end=Math.min(start+itemsPerPage,list.length);
  const collection=JSON.parse(localStorage.getItem("myCollection")||"[]");
  for(let i=start;i<end;i++){
    const item=list[i]; const isCollected=collection.includes(item.title);
    const div=document.createElement("div"); div.className="item"; div.dataset.id=i;
    div.innerHTML=`<div class="collection-icon" onclick="toggleCollection(event,'${item.title}')">${isCollected?'★':'☆'}</div><img src="${item.img}" alt="${item.title}"><div class="title">${item.title}</div>`;
    div.addEventListener("click",()=>openDetail(i)); container.appendChild(div);
  }
  setTimeout(()=>{container.classList.add("show");},50);
}

function openDetail(index){
  const item=dataCatalogo[index];
  document.getElementById("detailTitle").innerText=item.title;
  document.getElementById("detailTags").innerHTML=item.tags.map(t=>`<span>${t}</span>`).join(" ");
  const sinopsisEl=document.getElementById("detailSinopsis");
  sinopsisEl.innerText=item.sinopsis||"Sin sinopsis.";
  sinopsisEl.classList.add("sinopsis-short");
  document.getElementById("toggleSinopsisBtn").innerText="Ver más"; document.getElementById("toggleSinopsisBtn").dataset.state="short";
  currentEpisodePage=0;
  renderEpisodes(item.episodes);
  document.getElementById("detailVideo").src=item.episodes[0].link;
  document.querySelectorAll(".section").forEach(s=>s.style.display="none");
  document.getElementById("detailPage").style.display="block";
}

function toggleSinopsis(){
  const sinopsisEl=document.getElementById("detailSinopsis");
  const btn=document.getElementById("toggleSinopsisBtn");
  if(btn.dataset.state==="short"){sinopsisEl.classList.remove("sinopsis-short"); btn.innerText="Ver menos"; btn.dataset.state="full";}
  else{sinopsisEl.classList.add("sinopsis-short"); btn.innerText="Ver más"; btn.dataset.state="short";}
}

function renderEpisodes(episodes){
  const listEl=document.getElementById("detailEpisodes"); listEl.innerHTML="";
  const navEl=document.getElementById("episodesNav"); navEl.innerHTML="";
  const totalPages=Math.ceil(episodes.length/10);
  const start=currentEpisodePage*10;
  const end=Math.min(start+10,episodes.length);
  episodes.slice(start,end).forEach(ep=>{
    const btn=document.createElement("button");
    btn.innerText=ep.title; btn.onclick=()=>changeEpisode(ep.link);
    listEl.appendChild(btn);
  });
  for(let i=0;i<totalPages;i++){
    const navBtn=document.createElement("button");
    navBtn.innerText=(i*10+1)+"-"+Math.min((i+1)*10,episodes.length);
    navBtn.className=i===currentEpisodePage?"active":"";
    navBtn.onclick=()=>{currentEpisodePage=i;renderEpisodes(episodes);}
    navEl.appendChild(navBtn);
  }
}

function changeEpisode(url){document.getElementById("detailVideo").src=url;}
function backToCatalog(){document.getElementById("detailPage").style.display="none";document.getElementById("detailVideo").src='';showSection("catalogo");}

function toggleCollection(e,title){e.stopPropagation(); let collection=JSON.parse(localStorage.getItem("myCollection")||"[]"); if(collection.includes(title)){collection=collection.filter(t=>t!==title);}else{collection.push(title);} localStorage.setItem("myCollection",JSON.stringify(collection)); renderFavorites(); renderPage(dataCatalogo,'catalogo-gallery','pagination');}

function renderFavorites(){const collection=JSON.parse(localStorage.getItem("myCollection")||"[]");const favs=dataCatalogo.filter(item=>collection.includes(item.title)); renderPage(favs,'favoritos-gallery','favoritos-pagination');}

function showSection(id){document.querySelectorAll(".section").forEach(s=>s.style.display="none"); document.getElementById("detailPage").style.display="none"; document.getElementById("detailVideo").src=''; document.getElementById(id).style.display="block";}

function applyFilters(){/* lógica de filtros */} 
function applyFiltersFromMenu(){document.getElementById("searchInput").value=document.getElementById("searchInputMenu").value || document.getElementById("mobileSearch").value;applyFilters();}
function toggleSidebar(force){const sidebar=document.getElementById("sidebarMenu");if(force===false){sidebar.classList.remove("show");}else{sidebar.classList.toggle("show");}}

renderPage(dataCatalogo,'catalogo-gallery','pagination'); 
renderFavorites(); 
showSection("inicio");
//]]>
