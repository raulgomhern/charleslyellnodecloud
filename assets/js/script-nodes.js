// ----- Nodos -----
const NODES = [
  // Persona central
  { id: "Lyell", label: "Charles Lyell", campo: "Geología", ciudad: "Londres/Edimburgo" }, // [web:10]

  // Familia Lyell-Horner y editores
  { id: "MaryLyell", label: "Mary Lyell (Horner)", campo: "Conchología/biología", ciudad: "Londres/Edimburgo" }, // [web:9][web:10]
  { id: "LeonardHorner", label: "Leonard Horner", campo: "Geología/educación", ciudad: "Londres" }, // [web:9]
  { id: "FrancisHorner", label: "Francis Horner", campo: "Economía/política", ciudad: "Londres" }, // [web:9]
  { id: "KatharineMurrayLyell", label: "Katharine M. Lyell", campo: "Botánica/edición científica", ciudad: "Londres", extra:"Editora de Life and Letters" }, // [web:9]
  { id: "CarolineLyell", label: "Caroline Lyell", campo: "Correspondencia familiar", ciudad: "Reino Unido" }, // [web:5]
  { id: "JohnMurray", label: "John Murray (editor)", campo: "Editorial", ciudad: "Londres" }, // [web:11]

  // Científicos clave
  { id: "Darwin", label: "Charles Darwin", campo: "Historia natural", ciudad: "Down, Londres" }, // [web:11]
  { id: "Wallace", label: "Alfred R. Wallace", campo: "Historia natural", ciudad: "Londres" }, // [web:11]
  { id: "Hooker", label: "J. D. Hooker", campo: "Botánica", ciudad: "Kew/Londres" }, // [web:11]
  { id: "Owen", label: "Richard Owen", campo: "Anatomía/paleontología", ciudad: "Londres (BMNH)" }, // [web:11]
  { id: "Lubbock", label: "John Lubbock", campo: "Prehistoria/arqueología", ciudad: "Londres" }, // [web:11]

  // Red extendida (muestras adicionales de A–Z y de tu tabla previa)
  { id: "Argyll", label: "Duque de Argyll", campo: "Naturalista/política", ciudad: "Reino Unido" }, // [web:11]
  { id: "Bates", label: "Henry W. Bates", campo: "Biogeografía/entomología", ciudad: "Amazonia/Londres" }, // [web:11]
  { id: "Prestwich", label: "Joseph Prestwich", campo: "Geología", ciudad: "Reino Unido/Francia" }, // [web:11]
  { id: "Boucher", label: "Boucher de Perthes", campo: "Prehistoria", ciudad: "Abbeville" }, // [web:11]
  { id: "LartetE", label: "Edouard Lartet", campo: "Paleontología/prehistoria", ciudad: "Francia" }, // [web:11]
  { id: "LartetL", label: "Louis Lartet", campo: "Prehistoria", ciudad: "Francia" }, // [web:11]
  { id: "Jamieson", label: "T. F. Jamieson", campo: "Geología glacial", ciudad: "Escocia" }, // [web:11]
  { id: "Ramsay", label: "A. C. Ramsay", campo: "Geología glacial", ciudad: "Reino Unido" }, // [web:11]
  { id: "Beckles", label: "S. H. Beckles", campo: "Colector Purbeck", ciudad: "Sussex/Wight" }, // [web:11]
  { id: "Brodie", label: "W. R. Brodie", campo: "Colector Purbeck", ciudad: "Swanage" }, // [web:11]
  { id: "Brown_NS", label: "Richard Brown", campo: "Geología del carbón", ciudad: "Cape Breton (NS)" }, // [web:11]
  { id: "Binney", label: "E. W. Binney", campo: "Geología del carbón", ciudad: "Manchester" }, // [web:11]
  { id: "Bayfield", label: "H. W. Bayfield", campo: "Hidrografía", ciudad: "San Lorenzo/Canadá" }, // [web:11]
  { id: "Guiscardi", label: "G. Guiscardi", campo: "Vulcanología", ciudad: "Nápoles" }, // [web:11]
  { id: "Hartung", label: "Georg Hartung", campo: "Geología volcánica", ciudad: "Madeira/Tenerife" }, // [web:11]
  { id: "Keller", label: "Ferdinand Keller", campo: "Arqueología lacustre", ciudad: "Suiza" }, // [web:11]
  { id: "Aymard", label: "Auguste Aymard", campo: "Prehistoria", ciudad: "Francia (Velay)" }, // [web:11]
  { id: "Beck", label: "H. H. Beck", campo: "Conchología", ciudad: "Copenhague" }, // [web:11]
  { id: "Jeffreys", label: "J. G. Jeffreys", campo: "Malacología", ciudad: "Reino Unido" }, // [web:11]
  { id: "Beyrich", label: "H. E. Beyrich", campo: "Paleontología", ciudad: "Alemania" }, // [web:11]
  { id: "Binkhorst", label: "J. T. Binkhorst", campo: "Geología/prehistoria", ciudad: "Bélgica (Maas)" }, // [web:11]
  { id: "Bonney", label: "T. G. Bonney", campo: "Petrología/geomorf.", ciudad: "Reino Unido" }, // [web:11]
  { id: "Phillips", label: "John Phillips", campo: "Estratigrafía", ciudad: "Reino Unido" }, // [web:11]
  { id: "Peach", label: "C. W. Peach", campo: "Historia natural", ciudad: "Escocia" }, // [web:11]
  { id: "Judd", label: "John W. Judd", campo: "Petrología ígnea", ciudad: "Londres/Oban" }, // [web:11]
  { id: "Redfield", label: "W. C. Redfield", campo: "Meteorología", ciudad: "EE. UU." }, // [web:11]
  { id: "Somerville", label: "Mary Somerville", campo: "Ciencia/matemáticas", ciudad: "Italia/Londres" }, // [web:11]

  // Instituciones
  { id: "BMNH", label: "British Museum (Natural History)", campo: "Museo", ciudad: "Londres" }, // [web:11]
  { id: "Kew", label: "Royal Botanic Gardens, Kew", campo: "Botánica", ciudad: "Londres" }, // [web:11]
  { id: "UoE_Lyell", label: "Sir Charles Lyell Collection (UoE)", campo: "Archivo/ciencia", ciudad: "Edimburgo" }, // [web:10][web:14]

  // Temas/teorías (hubs)
  { id: "SelNatural", label: "Teoría de la selección natural", tipo: "tema" }, // [web:11]
  { id: "Mimetismo", label: "Mimetismo biológico", tipo: "tema" }, // [web:11]
  { id: "Paleolitico", label: "Paleolítico europeo (Somme, Engis, Neanderthal)", tipo: "tema" }, // [web:11]
  { id: "NileMud", label: "Lodo del Nilo (Horner) y cronologías", tipo: "tema" }, // [web:9]
  { id: "Glacial", label: "Teoría glacial y terrazas (Glen Roy, Moel Tryfan)", tipo: "tema" }, // [web:11]
  { id: "Purbeck", label: "Purbeck mamíferos mesozoicos (dirt bed)", tipo: "tema" }, // [web:11]
  { id: "Volcanismo", label: "Volcanismo mediterráneo y atlántico", tipo: "tema" }, // [web:11]
  { id: "Malacologia", label: "Malacología y biogeografía (Crag, Canarias)", tipo: "tema" }, // [web:11]
  { id: "Estratigrafia", label: "Estratigrafía y correlación (Eoceno, Silúrico)", tipo: "tema" }, // [web:11]
  { id: "Carbonifero", label: "Carbonífero (Joggins, flora, huellas)", tipo: "tema" }, // [web:11]
  { id: "BotanicaFosil", label: "Paleobotánica y paleoclima", tipo: "tema" } // [web:11]
];

// ----- Aristas -----
const EDGES = [
  // Correspondencia con Lyell (personas → Lyell)
  { source: "MaryLyell", target: "Lyell", tipo: "correspondencia-familiar" }, // [web:9][web:10]
  { source: "CarolineLyell", target: "Lyell", tipo: "correspondencia-familiar" }, // [web:5]
  { source: "LeonardHorner", target: "Lyell", tipo: "correspondencia" }, // [web:9]
  { source: "KatharineMurrayLyell", target: "Lyell", tipo: "edición/memoria" }, // [web:9]
  { source: "JohnMurray", target: "Lyell", tipo: "edición/ventas" }, // [web:11]

  { source: "Darwin", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Wallace", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Hooker", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Owen", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Lubbock", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Argyll", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Bates", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Prestwich", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Boucher", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "LartetE", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "LartetL", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Jamieson", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Ramsay", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Beckles", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Brodie", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Brown_NS", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Binney", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Bayfield", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Guiscardi", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Hartung", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Keller", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Aymard", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Beck", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Jeffreys", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Beyrich", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Binkhorst", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Bonney", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Phillips", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Peach", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Judd", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Redfield", target: "Lyell", tipo: "correspondencia" }, // [web:11]
  { source: "Somerville", target: "Lyell", tipo: "correspondencia" }, // [web:11]

  // Persona → tema (palabras clave/hubs)
  { source: "Darwin", target: "SelNatural", tipo: "teoría" }, // [web:11]
  { source: "Wallace", target: "SelNatural", tipo: "teoría" }, // [web:11]
  { source: "Lyell", target: "SelNatural", tipo: "debate-recepción" }, // [web:11]
  { source: "Argyll", target: "SelNatural", tipo: "discusión" }, // [web:11]
  { source: "Bates", target: "Mimetismo", tipo: "evidencia" }, // [web:11]

  { source: "Prestwich", target: "Paleolitico", tipo: "validación Somme" }, // [web:11]
  { source: "Boucher", target: "Paleolitico", tipo: "evidencia Somme" }, // [web:11]
  { source: "LartetE", target: "Paleolitico", tipo: "fauna cuaternaria" }, // [web:11]
  { source: "LartetL", target: "Paleolitico", tipo: "restos humanos" }, // [web:11]
  { source: "KatharineMurrayLyell", target: "Paleolitico", tipo: "edición (Life and Letters)" }, // [web:9]

  { source: "Jamieson", target: "Glacial", tipo: "Glen Roy/Moel Tryfan" }, // [web:11]
  { source: "Ramsay", target: "Glacial", tipo: "lagos glaciares" }, // [web:11]
  { source: "Bayfield", target: "Glacial", tipo: "boulders/icebergs San Lorenzo" }, // [web:11]

  { source: "Beckles", target: "Purbeck", tipo: "mandíbula mamífero" }, // [web:11]
  { source: "Brodie", target: "Purbeck", tipo: "prioridad/atribución" }, // [web:11]
  { source: "Owen", target: "Purbeck", tipo: "descripción vertebrados" }, // [web:11]

  { source: "Guiscardi", target: "Volcanismo", tipo: "Vesubio" }, // [web:11]
  { source: "Hartung", target: "Volcanismo", tipo: "Madeira/Tenerife" }, // [web:11]

  { source: "Beck", target: "Malacologia", tipo: "zonación Ártico/Atlántico" }, // [web:11]
  { source: "Jeffreys", target: "Malacologia", tipo: "listas/determinación" }, // [web:11]
  { source: "MaryLyell", target: "Malacologia", tipo: "colecta/estudio" }, // [web:9]

  { source: "Phillips", target: "Estratigrafia", tipo: "correlación GB" }, // [web:11]
  { source: "Beyrich", target: "Estratigrafia", tipo: "colonias de Barrande" }, // [web:11]

  { source: "Brown_NS", target: "Carbonifero", tipo: "Joggins/huellas lluvia" }, // [web:11]
  { source: "Binney", target: "Carbonifero", tipo: "Calamites/flora" }, // [web:11]

  { source: "Hooker", target: "BotanicaFosil", tipo: "biogeografía/cronologías" }, // [web:11]
  { source: "LeonardHorner", target: "NileMud", tipo: "cronologías (Nilo)" }, // [web:9]

  // Vínculos con instituciones/archivo
  { source: "Owen", target: "BMNH", tipo: "institución" }, // [web:11]
  { source: "Hooker", target: "Kew", tipo: "institución" }, // [web:11]
  { source: "Lyell", target: "UoE_Lyell", tipo: "archivo" }, // [web:10][web:14]
  { source: "JohnMurray", target: "UoE_Lyell", tipo: "documentado en fondos" } // [web:11]
];


// ----- Nodos extra: ciudades y campos -----
const extraNodes = [];
const extraEdges = [];
NODES.forEach(n=>{
  if(!extraNodes.find(x=>x.id===n.ciudad)) extraNodes.push({id:n.ciudad,label:n.ciudad,type:'city'});
  extraEdges.push({source:n.id,target:n.ciudad,tipo:'ubicación'});

  if(!extraNodes.find(x=>x.id===n.campo)) extraNodes.push({id:n.campo,label:n.campo,type:'field'});
  extraEdges.push({source:n.id,target:n.campo,tipo:'campo'});
});

const nodes = NODES.map(n=>({...n,type:'person'})).concat(extraNodes);
const links = EDGES.concat(extraEdges);

// ----- SVG y fuerza -----
const svg = d3.select('#graph');
const width = svg.node().clientWidth;
const height = svg.node().clientHeight;

const g = svg.append('g');

const simulation = d3.forceSimulation(nodes)
  .force('link', d3.forceLink(links).id(d=>d.id).distance(120))
  .force('charge', d3.forceManyBody().strength(-400))
  .force('center', d3.forceCenter(width/2,height/2))
  .force('collision', d3.forceCollide().radius(d=>d.type==='person'?18:12));

// Zoom
svg.call(d3.zoom().scaleExtent([0.3, 3]).on('zoom', (event)=> g.attr('transform', event.transform)));

// ----- Aristas curvas -----
const link = g.selectAll('path')
  .data(links)
  .join('path')
  .attr('stroke', d=>'#6e7291')
  .attr('stroke-width', 1.5)
  .attr('fill', 'none');

// ----- Nodos -----
const nodeGroup = g.selectAll('g.node')
  .data(nodes)
  .join('g')
  .attr('class','node')
  .call(d3.drag()
    .on('start',(event,d)=>{
      if(!event.active) simulation.alphaTarget(0.3).restart();
      d.fx=d.x; d.fy=d.y;
    })
    .on('drag',(event,d)=>{ d.fx=event.x; d.fy=event.y; })
    .on('end',(event,d)=>{
      if(!event.active) simulation.alphaTarget(0);
      d.fx=null; d.fy=null;
    })
  );

nodeGroup.append('circle')
  .attr('r', d=>d.type==='person'?14:10)
  .attr('fill', d=>{
    if(d.type==='person') return '#c2864d';
    if(d.type==='city') return '#18a999';
    if(d.type==='field') return '#f3aa3c';
    return '#888';
  });

nodeGroup.append('text')
  .attr('class','node-label')
  .attr('dy',4)
  .text(d=>d.label);

// ----- Actualizar posiciones -----
simulation.on('tick', ()=>{
  link.attr('d', d => {
    const dx = d.target.x - d.source.x;
    const dy = d.target.y - d.source.y;
    const dr = Math.sqrt(dx*dx + dy*dy)*1.5;
    return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`;
  });

  nodeGroup.attr('transform', d=>`translate(${d.x},${d.y})`);
});

// ----- Chat -----
const selectA = document.getElementById('nodeA');
const selectB = document.getElementById('nodeB');
const chatLog = document.getElementById('chatLog');
let pending='A';

function populateSelects(){
  [selectA, selectB].forEach(sel=>{
    sel.innerHTML='<option value="">Selecciona científico…</option>';
    NODES.forEach(n=>{
      const opt=document.createElement('option'); opt.value=n.id; opt.textContent=n.label; sel.appendChild(opt);
    });
  });
}
populateSelects();

nodeGroup.on('click',(event,d)=>{
  if(d.type!=='person') return;
  if(pending==='A'){ selectA.value=d.id; pending='B'; } else { selectB.value=d.id; pending='A'; }
});

function nodeMeta(id){ return NODES.find(n=>n.id===id); }
function findEdge(a,b){ return EDGES.find(e=>(e.source===a&&e.target===b)||(e.source===b&&e.target===a)); }
function explainConnection(a,b){
  const A=nodeMeta(a),B=nodeMeta(b); if(!A||!B) return 'Nodo no válido.';
  const edge=findEdge(a,b);
  if(edge) return `${A.label} y ${B.label} están conectados por ${edge.tipo}. Campos: ${A.campo} — ${B.campo}. Ciudades: ${A.ciudad} — ${B.ciudad}.`;
  const aNeigh=EDGES.filter(e=>e.source===a||e.target===a).map(e=>e.source===a?e.target:e.source);
  const bNeigh=EDGES.filter(e=>e.source===b||e.target===b).map(e=>e.source===b?e.target:e.source);
  const inter=aNeigh.find(n=>bNeigh.includes(n));
  if(inter) return `${A.label} y ${B.label} no tienen vínculo directo, pero se relacionan a través de ${nodeMeta(inter).label}.`;
  return `${A.label} y ${B.label} no presentan vínculo en estos datos.`;
}
function appendMsg(text,who='bot'){
  const div=document.createElement('div'); div.className='msg'+(who==='user'?' user':''); div.textContent=text;
  chatLog.appendChild(div); chatLog.scrollTop=chatLog.scrollHeight;
}

document.getElementById('chatForm').addEventListener('submit',e=>{
  e.preventDefault();
  const a=selectA.value,b=selectB.value,q=document.getElementById('question').value.trim();
  if(!a||!b) return appendMsg('Selecciona dos científicos antes de preguntar.');
  appendMsg(q||`Consulta sobre ${nodeMeta(a).label} y ${nodeMeta(b).label}.`,'user');
  appendMsg(explainConnection(a,b),'bot');
  document.getElementById('question').value='';
});

document.getElementById('clear').addEventListener('click',()=>{
  chatLog.innerHTML='';
  appendMsg('Selecciona dos científicos y formula una pregunta sobre su vínculo para obtener una explicación basada en los datos.');
});

