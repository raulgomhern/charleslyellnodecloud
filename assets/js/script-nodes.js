// ----- Nodos -----
const NODES = [
  // Persona central
  { id: "Lyell", label: "Charles Lyell", campo: "Geología", ciudad: "Londres/Edimburgo" },

  // Familia Lyell-Horner y editores
  { id: "MaryLyell", label: "Mary Lyell (Horner)", campo: "Conchología/biología", ciudad: "Londres/Edimburgo" },
  { id: "LeonardHorner", label: "Leonard Horner", campo: "Geología/educación", ciudad: "Londres" },
  { id: "FrancisHorner", label: "Francis Horner", campo: "Economía/política", ciudad: "Londres" },
  { id: "KatharineMurrayLyell", label: "Katharine M. Lyell", campo: "Botánica/edición científica", ciudad: "Londres", extra:"Editora de Life and Letters" },
  { id: "CarolineLyell", label: "Caroline Lyell", campo: "Correspondencia familiar", ciudad: "Reino Unido" },
  { id: "JohnMurray", label: "John Murray (editor)", campo: "Editorial", ciudad: "Londres" },

  // Científicos clave
  { id: "Darwin", label: "Charles Darwin", campo: "Historia natural", ciudad: "Down, Londres" },
  { id: "Wallace", label: "Alfred R. Wallace", campo: "Historia natural", ciudad: "Londres" },
  { id: "Hooker", label: "J. D. Hooker", campo: "Botánica", ciudad: "Kew/Londres" },
  { id: "Owen", label: "Richard Owen", campo: "Anatomía/paleontología", ciudad: "Londres (BMNH)" },
  { id: "Lubbock", label: "John Lubbock", campo: "Prehistoria/arqueología", ciudad: "Londres" },

  // Red extendida
  { id: "Argyll", label: "Duque de Argyll", campo: "Naturalista/política", ciudad: "Reino Unido" },
  { id: "Bates", label: "Henry W. Bates", campo: "Biogeografía/entomología", ciudad: "Amazonia/Londres" },
  { id: "Prestwich", label: "Joseph Prestwich", campo: "Geología", ciudad: "Reino Unido/Francia" },
  { id: "Boucher", label: "Boucher de Perthes", campo: "Prehistoria", ciudad: "Abbeville" },
  { id: "LartetE", label: "Edouard Lartet", campo: "Paleontología/prehistoria", ciudad: "Francia" },
  { id: "LartetL", label: "Louis Lartet", campo: "Prehistoria", ciudad: "Francia" },
  { id: "Jamieson", label: "T. F. Jamieson", campo: "Geología glacial", ciudad: "Escocia" },
  { id: "Ramsay", label: "A. C. Ramsay", campo: "Geología glacial", ciudad: "Reino Unido" },
  { id: "Beckles", label: "S. H. Beckles", campo: "Colector Purbeck", ciudad: "Sussex/Wight" },
  { id: "Brodie", label: "W. R. Brodie", campo: "Colector Purbeck", ciudad: "Swanage" },
  { id: "Brown_NS", label: "Richard Brown", campo: "Geología del carbón", ciudad: "Cape Breton (NS)" },
  { id: "Binney", label: "E. W. Binney", campo: "Geología del carbón", ciudad: "Manchester" },
  { id: "Bayfield", label: "H. W. Bayfield", campo: "Hidrografía", ciudad: "San Lorenzo/Canadá" },
  { id: "Guiscardi", label: "G. Guiscardi", campo: "Vulcanología", ciudad: "Nápoles" },
  { id: "Hartung", label: "Georg Hartung", campo: "Geología volcánica", ciudad: "Madeira/Tenerife" },
  { id: "Keller", label: "Ferdinand Keller", campo: "Arqueología lacustre", ciudad: "Suiza" },
  { id: "Aymard", label: "Auguste Aymard", campo: "Prehistoria", ciudad: "Francia (Velay)" },
  { id: "Beck", label: "H. H. Beck", campo: "Conchología", ciudad: "Copenhague" },
  { id: "Jeffreys", label: "J. G. Jeffreys", campo: "Malacología", ciudad: "Reino Unido" },
  { id: "Beyrich", label: "H. E. Beyrich", campo: "Paleontología", ciudad: "Alemania" },
  { id: "Binkhorst", label: "J. T. Binkhorst", campo: "Geología/prehistoria", ciudad: "Bélgica (Maas)" },
  { id: "Bonney", label: "T. G. Bonney", campo: "Petrología/geomorf.", ciudad: "Reino Unido" },
  { id: "Phillips", label: "John Phillips", campo: "Estratigrafía", ciudad: "Reino Unido" },
  { id: "Peach", label: "C. W. Peach", campo: "Historia natural", ciudad: "Escocia" },
  { id: "Judd", label: "John W. Judd", campo: "Petrología ígnea", ciudad: "Londres/Oban" },
  { id: "Redfield", label: "W. C. Redfield", campo: "Meteorología", ciudad: "EE. UU." },
  { id: "Somerville", label: "Mary Somerville", campo: "Ciencia/matemáticas", ciudad: "Italia/Londres" },

  // Instituciones
  { id: "BMNH", label: "British Museum (Natural History)", campo: "Museo", ciudad: "Londres" },
  { id: "Kew", label: "Royal Botanic Gardens, Kew", campo: "Botánica", ciudad: "Londres" },
  { id: "UoE_Lyell", label: "Sir Charles Lyell Collection (UoE)", campo: "Archivo/ciencia", ciudad: "Edimburgo" },

  // Temas/teorías (hubs)
  { id: "SelNatural", label: "Teoría de la selección natural", tipo: "tema" },
  { id: "Mimetismo", label: "Mimetismo biológico", tipo: "tema" },
  { id: "Paleolitico", label: "Paleolítico europeo (Somme, Engis, Neanderthal)", tipo: "tema" },
  { id: "NileMud", label: "Lodo del Nilo (Horner) y cronologías", tipo: "tema" },
  { id: "Glacial", label: "Teoría glacial y terrazas (Glen Roy, Moel Tryfan)", tipo: "tema" },
  { id: "Purbeck", label: "Purbeck mamíferos mesozoicos (dirt bed)", tipo: "tema" },
  { id: "Volcanismo", label: "Volcanismo mediterráneo y atlántico", tipo: "tema" },
  { id: "Malacologia", label: "Malacología y biogeografía (Crag, Canarias)", tipo: "tema" },
  { id: "Estratigrafia", label: "Estratigrafía y correlación (Eoceno, Silúrico)", tipo: "tema" },
  { id: "Carbonifero", label: "Carbonífero (Joggins, flora, huellas)", tipo: "tema" },
  { id: "BotanicaFosil", label: "Paleobotánica y paleoclima", tipo: "tema" }
];

// ----- Aristas -----
const EDGES = [
  // Correspondencia con Lyell (personas → Lyell)
  { source: "MaryLyell", target: "Lyell", tipo: "correspondencia-familiar" },
  { source: "CarolineLyell", target: "Lyell", tipo: "correspondencia-familiar" },
  { source: "LeonardHorner", target: "Lyell", tipo: "correspondencia" },
  { source: "KatharineMurrayLyell", target: "Lyell", tipo: "edición/memoria" },
  { source: "JohnMurray", target: "Lyell", tipo: "edición/ventas" },
  { source: "Darwin", target: "Lyell", tipo: "correspondencia" },
  { source: "Wallace", target: "Lyell", tipo: "correspondencia" },
  { source: "Hooker", target: "Lyell", tipo: "correspondencia" },
  { source: "Owen", target: "Lyell", tipo: "correspondencia" },
  { source: "Lubbock", target: "Lyell", tipo: "correspondencia" },
  { source: "Argyll", target: "Lyell", tipo: "correspondencia" },
  { source: "Bates", target: "Lyell", tipo: "correspondencia" },
  { source: "Prestwich", target: "Lyell", tipo: "correspondencia" },
  { source: "Boucher", target: "Lyell", tipo: "correspondencia" },
  { source: "LartetE", target: "Lyell", tipo: "correspondencia" },
  { source: "LartetL", target: "Lyell", tipo: "correspondencia" },
  { source: "Jamieson", target: "Lyell", tipo: "correspondencia" },
  { source: "Ramsay", target: "Lyell", tipo: "correspondencia" },
  { source: "Beckles", target: "Lyell", tipo: "correspondencia" },
  { source: "Brodie", target: "Lyell", tipo: "correspondencia" },
  { source: "Brown_NS", target: "Lyell", tipo: "correspondencia" },
  { source: "Binney", target: "Lyell", tipo: "correspondencia" },
  { source: "Bayfield", target: "Lyell", tipo: "correspondencia" },
  { source: "Guiscardi", target: "Lyell", tipo: "correspondencia" },
  { source: "Hartung", target: "Lyell", tipo: "correspondencia" },
  { source: "Keller", target: "Lyell", tipo: "correspondencia" },
  { source: "Aymard", target: "Lyell", tipo: "correspondencia" },
  { source: "Beck", target: "Lyell", tipo: "correspondencia" },
  { source: "Jeffreys", target: "Lyell", tipo: "correspondencia" },
  { source: "Beyrich", target: "Lyell", tipo: "correspondencia" },
  { source: "Binkhorst", target: "Lyell", tipo: "correspondencia" },
  { source: "Bonney", target: "Lyell", tipo: "correspondencia" },
  { source: "Phillips", target: "Lyell", tipo: "correspondencia" },
  { source: "Peach", target: "Lyell", tipo: "correspondencia" },
  { source: "Judd", target: "Lyell", tipo: "correspondencia" },
  { source: "Redfield", target: "Lyell", tipo: "correspondencia" },
  { source: "Somerville", target: "Lyell", tipo: "correspondencia" },

  // Persona → tema (palabras clave/hubs)
  { source: "Darwin", target: "SelNatural", tipo: "teoría" },
  { source: "Wallace", target: "SelNatural", tipo: "teoría" },
  { source: "Lyell", target: "SelNatural", tipo: "debate-recepción" },
  { source: "Argyll", target: "SelNatural", tipo: "discusión" },
  { source: "Bates", target: "Mimetismo", tipo: "evidencia" },
  { source: "Prestwich", target: "Paleolitico", tipo: "validación Somme" },
  { source: "Boucher", target: "Paleolitico", tipo: "evidencia Somme" },
  { source: "LartetE", target: "Paleolitico", tipo: "fauna cuaternaria" },
  { source: "LartetL", target: "Paleolitico", tipo: "restos humanos" },
  { source: "KatharineMurrayLyell", target: "Paleolitico", tipo: "edición (Life and Letters)" },
  { source: "Jamieson", target: "Glacial", tipo: "Glen Roy/Moel Tryfan" },
  { source: "Ramsay", target: "Glacial", tipo: "lagos glaciares" },
  { source: "Bayfield", target: "Glacial", tipo: "boulders/icebergs San Lorenzo" },
  { source: "Beckles", target: "Purbeck", tipo: "mandíbula mamífero" },
  { source: "Brodie", target: "Purbeck", tipo: "prioridad/atribución" },
  { source: "Owen", target: "Purbeck", tipo: "descripción vertebrados" },
  { source: "Guiscardi", target: "Volcanismo", tipo: "Vesubio" },
  { source: "Hartung", target: "Volcanismo", tipo: "Madeira/Tenerife" },
  { source: "Beck", target: "Malacologia", tipo: "zonación Ártico/Atlántico" },
  { source: "Jeffreys", target: "Malacologia", tipo: "listas/determinación" },
  { source: "MaryLyell", target: "Malacologia", tipo: "colecta/estudio" },
  { source: "Phillips", target: "Estratigrafia", tipo: "correlación GB" },
  { source: "Beyrich", target: "Estratigrafia", tipo: "colonias de Barrande" },
  { source: "Brown_NS", target: "Carbonifero", tipo: "Joggins/huellas lluvia" },
  { source: "Binney", target: "Carbonifero", tipo: "Calamites/flora" },
  { source: "Hooker", target: "BotanicaFosil", tipo: "biogeografía/cronologías" },
  { source: "LeonardHorner", target: "NileMud", tipo: "cronologías (Nilo)" },

  // Vínculos con instituciones/archivo
  { source: "Owen", target: "BMNH", tipo: "institución" },
  { source: "Hooker", target: "Kew", tipo: "institución" },
  { source: "Lyell", target: "UoE_Lyell", tipo: "archivo" },
  { source: "JohnMurray", target: "UoE_Lyell", tipo: "documentado en fondos" }
];


// ----- Nodos extra: ciudades y campos (Necesarios para el cálculo de shared attributes) -----
const extraNodes = [];
const extraEdges = [];
NODES.forEach(n=>{
  if(n.ciudad && !extraNodes.find(x=>x.id===n.ciudad)) extraNodes.push({id:n.ciudad,label:n.ciudad,type:'city'});
  if(n.ciudad) extraEdges.push({source:n.id,target:n.ciudad,tipo:'ubicación'});

  if(n.campo && !extraNodes.find(x=>x.id===n.campo)) extraNodes.push({id:n.campo,label:n.campo,type:'field'});
  if(n.campo) extraEdges.push({source:n.id,target:n.campo,tipo:'campo'});
});

const nodes = NODES.map(n=>({...n,type: n.tipo ? n.tipo : 'person'})).concat(extraNodes);
const links = EDGES.concat(extraEdges);

// ----- SVG y fuerza (Necesario para la función nodeMeta/findEdge) -----
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

// ----- Aristas (Líneas rectas) -----
const link = g.selectAll('line')
  .data(links)
  .join('line')
  .attr('stroke', '#6e7291')
  .attr('stroke-opacity', 0.6)
  .attr('stroke-width', 1.5);

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
    if(d.type==='field' || d.type==='tema') return '#f3aa3c';
    return '#888';
  });

nodeGroup.append('text')
  .attr('class','node-label')
  .attr('dy',4)
  .text(d=>d.label);

// ----- Actualizar posiciones -----
simulation.on('tick', ()=>{
  link.attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

  nodeGroup.attr('transform', d=>`translate(${d.x},${d.y})`);
});

// **********************************************
// ********** MODIFICACIONES DEL CHAT ***********
// **********************************************

// Referencias de control actualizadas
const selectB = document.getElementById('nodeB');
const chatLog = document.getElementById('chatLog');
const fixedNodeA = document.getElementById('fixedNodeA');

// Lyell es el nodo fijo A
const LYELL_ID = "Lyell"; 

// FUNCIÓN DE BÚSQUEDA DE METADATOS (sin cambios, necesaria)
function nodeMeta(id){ return nodes.find(n=>n.id===id); }
function findEdge(a,b){ return EDGES.find(e=>(e.source===a&&e.target===b)||(e.source===b&&e.target===a)); }

// FUNCIÓN MODIFICADA: Ahora filtra solo personas y excluye a Lyell, llenando solo selectB.
function populateSelects(){
    // Solo llenamos selectB
    selectB.innerHTML='<option value="">Selecciona colega...</option>';
    
    // 1. Filtrar solo personas (asumimos que 'person' es el tipo por defecto si no es 'tema'/'city'/'field')
    const peopleNodes = NODES.filter(n => n.id !== LYELL_ID && !n.tipo);

    peopleNodes
        .sort((a, b) => a.label.localeCompare(b.label))
        .forEach(n=>{
            const opt=document.createElement('option'); 
            opt.value=n.id; 
            opt.textContent=n.label; 
            selectB.appendChild(opt);
        });
}
populateSelects();

// El click handler del grafo se elimina o se ajusta para solo actualizar selectB
nodeGroup.on('click',(event,d)=>{
    if(d.type!=='person' || d.id === LYELL_ID) return;
    selectB.value=d.id;
});

// FUNCIÓN DE SOPORTE: Encuentra los temas/instituciones a los que está conectado un nodo (X)
function findSecondaryLinks(nodeId) {
    const secondaryLinks = EDGES.filter(e => e.source === nodeId || e.target === nodeId)
        .map(e => e.source === nodeId ? e.target : e.source)
        .filter(id => {
            // Filtramos para incluir solo Nodos Temáticos (tipo) o Instituciones (ids fijos)
            const meta = nodeMeta(id);
            return meta && (meta.tipo || ['BMNH', 'Kew', 'UoE_Lyell'].includes(id));
        })
        .map(id => {
            const meta = nodeMeta(id);
            return meta.label; // Solo el nombre, sin el tipo para simplificar
        });
    return secondaryLinks;
}


// FUNCIÓN PRINCIPAL MODIFICADA: Genera el formato de respuesta solicitado
function explainConnection(a, b) {
    const A = nodeMeta(a); // Lyell
    const B = nodeMeta(b); // Colega seleccionado

    if (!A || !B) return 'Nodo no válido.';

    const edge = findEdge(a, b);
    let relationType = '';
    let explanation = '';

    // Obtener la ciudad del colega (B)
    const B_ciudad = B.ciudad || 'Ciudad no definida';

    // 1. Vínculo Directo e Indirecto con Lyell
    if (edge) {
        relationType = `Vínculo Directo (${edge.tipo})`;
        explanation = `El vínculo principal es la ${edge.tipo}.`;
    } else {
        const aNeigh = EDGES.filter(e => e.source === a || e.target === a).map(e => e.source === a ? e.target : e.source);
        const bNeigh = EDGES.filter(e => e.source === b || e.target === b).map(e => e.source === b ? e.target : e.source);
        const inter = aNeigh.find(n => bNeigh.includes(n));
        
        if (inter) {
            relationType = `Vínculo Indirecto`;
            explanation = `Se relacionan a través de ${nodeMeta(inter).label}.`;
        } else {
            relationType = 'No hay vínculo directo conocido en estos datos.';
            explanation = 'La relación se basa únicamente en intereses o ubicaciones compartidas.';
        }
    }

    // 2. Atributos Comunes
    let locationText = '';
    const lyellCity = A.ciudad || '';
    const sharedCity = lyellCity.includes(B_ciudad) || B_ciudad.includes(lyellCity);

    if (A.campo === B.campo && A.campo) {
        locationText += `Comparten el campo de estudio: **${A.campo}** (campo).`;
    }
    if (sharedCity) {
        if (locationText) locationText += '\n'; 
        locationText += `Ambos estaban situados en: **${B_ciudad}** (ciudad).`;
    } else if (B_ciudad !== 'Ciudad no definida') {
        locationText = `El colega ${B.label} estaba situado en: **${B_ciudad}** (ciudad).`;
    }


    // 3. Vínculos Secundarios (Temas/Instituciones del Colega)
    const secondaryLinks = findSecondaryLinks(b);
    let secondaryText = '';
    if (secondaryLinks.length > 0) {
        secondaryText = `Están directamente relacionados con: **${secondaryLinks.join('**, **')}** (temas/instituciones).`;
    }

    // CONSTRUCCIÓN DEL FORMATO SOLICITADO
    let response = `Relación de Charles Lyell con ${B.label}\n\n`;
    
    // 1. Ciudad/Campo
    response += `- ${locationText || 'No se encuentran atributos de ubicación o campo compartidos.'}\n`;
    
    // 2. Vínculo/Explicación
    response += `- Vínculo: ${relationType}. ${explanation}\n`;
    
    // 3. Temas/Instituciones (Si existen)
    if (secondaryText) {
        response += `- ${secondaryText}\n`;
    } else {
        response += `- No está directamente relacionado con otros temas o instituciones en esta red.\n`;
    }

    return response;
}

// Función para añadir mensajes (adaptada para formato <pre>)
function appendMsg(text,who='bot'){
  const div=document.createElement('div'); div.className='msg'+(who==='user'?' user':''); 
  // Usar <pre> para mantener los saltos de línea (\n) y el formato del punto
  div.innerHTML=`<pre>${text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</pre>`;
  chatLog.appendChild(div); chatLog.scrollTop=chatLog.scrollHeight;
}

// MANEJO DEL FORMULARIO DE CHAT
document.getElementById('chatForm').addEventListener('submit',e=>{
  e.preventDefault();
  
  const a=LYELL_ID;
  const b=selectB.value;
  
  if(!b) {
    return appendMsg('Selecciona un colega en el menú de la derecha.');
  }
    
  appendMsg(`Consulta sobre la relación entre Charles Lyell y ${nodeMeta(b).label}.`,'user');

  appendMsg(explainConnection(a,b),'bot');
});

// Botón de limpiar
document.getElementById('clear').addEventListener('click',()=>{
  chatLog.innerHTML='';
  appendMsg('Selecciona un colega y pulsa "Preguntar Relación" para ver el vínculo con Charles Lyell.');
});
