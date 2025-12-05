// ----- Nodos (Actualizados con 'lyell_vínculo' y descripciones literales) -----
const NODES = [
  // Persona central
  { id: "Lyell", label: "Charles Lyell", campo: "Geología", ciudad: "Londres/Edimburgo" },

  // Familia Lyell-Horner y editores
  { id: "MaryLyell", label: "Mary Lyell (Horner)", campo: "Conchología/biología", ciudad: "Londres/Edimburgo", lyell_vínculo: "Vínculo íntimo: Esposa y colaboradora en investigación, con lazos familiares y una base en común." },
  { id: "LeonardHorner", label: "Leonard Horner", campo: "Geología/educación", ciudad: "Londres", lyell_vínculo: "Vínculo familiar y profesional: Padre de Mary Lyell y colega geólogo." },
  { id: "FrancisHorner", label: "Francis Horner", campo: "Economía/política", ciudad: "Londres", lyell_vínculo: "Vínculo familiar: Cuñado de Lyell, comparten base en Londres." },
  { id: "KatharineMurrayLyell", label: "Katharine M. Lyell", campo: "Botánica/edición científica", ciudad: "Londres", extra:"Editora de Life and Letters", lyell_vínculo: "Vínculo profesional/familiar: Sobrina y editora de sus memorias y correspondencia." },
  { id: "CarolineLyell", label: "Caroline Lyell", campo: "Correspondencia familiar", ciudad: "Reino Unido", lyell_vínculo: "Vínculo familiar: Tienen lazo familiar y mantienen correspondencia." },
  { id: "JohnMurray", label: "John Murray (editor)", campo: "Editorial", ciudad: "Londres", lyell_vínculo: "Vínculo comercial: Su editor de cabecera, responsable de la difusión de sus obras." },

  // Científicos clave
  // *** ACTUALIZACIÓN PARA COINCIDIR CON EL EJEMPLO DEL USUARIO: ***
  { id: "Darwin", label: "Charles Darwin", campo: "Historia natural", ciudad: "Down, Londres", lyell_vínculo: "Amigo, colega e influencia clave en la vida de Lyell. Lyell abordó la teoría de Darwin en su obra." },
  { id: "Wallace", label: "Alfred R. Wallace", campo: "Historia natural", ciudad: "Londres", lyell_vínculo: "Vínculo científico: Colega en la historia natural, también activo en Londres." },
  { id: "Hooker", label: "J. D. Hooker", campo: "Botánica", ciudad: "Kew/Londres", lyell_vínculo: "Vínculo científico: Amigo de Darwin y Lyell, director de Kew." },
  { id: "Owen", label: "Richard Owen", campo: "Anatomía/paleontología", ciudad: "Londres (BMNH)", lyell_vínculo: "Vínculo científico/institucional: Paleontólogo prominente con sede en el Museo Británico de Londres." },
  { id: "Lubbock", label: "John Lubbock", campo: "Prehistoria/arqueología", ciudad: "Londres", lyell_vínculo: "Vínculo científico: Amigo y arqueólogo, comparte base en Londres." },

  // Red extendida
  { id: "Argyll", label: "Duque de Argyll", campo: "Naturalista/política", ciudad: "Reino Unido", lyell_vínculo: "Vínculo social/científico: Naturalista y figura política con quien mantenía correspondencia." },
  { id: "Bates", label: "Henry W. Bates", campo: "Biogeografía/entomología", ciudad: "Amazonia/Londres", lyell_vínculo: "Vínculo científico: Colega en biogeografía/entomología, comparte ciudad base." },
  { id: "Prestwich", label: "Joseph Prestwich", campo: "Geología", ciudad: "Reino Unido/Francia", lyell_vínculo: "Vínculo científico fuerte: Comparten el campo de Geología. Prestwich validó los hallazgos paleolíticos que Lyell promovió." },
  { id: "Boucher", label: "Boucher de Perthes", campo: "Prehistoria", ciudad: "Abbeville", lyell_vínculo: "Vínculo científico: Anticuario clave en la evidencia del Paleolítico; Lyell validó sus hallazgos." },
  { id: "LartetE", label: "Edouard Lartet", campo: "Paleontología/prehistoria", ciudad: "Francia", lyell_vínculo: "Vínculo científico: Paleontólogo francés que Lyell contactó para investigar la fauna cuaternaria." },
  { id: "LartetL", label: "Louis Lartet", campo: "Prehistoria", ciudad: "Francia", lyell_vínculo: "Vínculo científico: Colaborador francés de su padre, Edouard, con quien Lyell se carteaba." },
  { id: "Jamieson", label: "T. F. Jamieson", campo: "Geología glacial", ciudad: "Escocia", lyell_vínculo: "Vínculo científico: Geólogo glacial clave en la discusión de Glen Roy." },
  { id: "Ramsay", label: "A. C. Ramsay", campo: "Geología glacial", ciudad: "Reino Unido", lyell_vínculo: "Vínculo científico: Geólogo glacial y director del Geological Survey." },
  { id: "Beckles", label: "S. H. Beckles", campo: "Colector Purbeck", ciudad: "Sussex/Wight", lyell_vínculo: "Vínculo científico: Colector de Purbeck, contribuyó con muestras importantes." },
  { id: "Brodie", label: "W. R. Brodie", campo: "Colector Purbeck", ciudad: "Swanage", lyell_vínculo: "Vínculo científico: Colector de Purbeck involucrado en la atribución de muestras." },
  { id: "Brown_NS", label: "Richard Brown", campo: "Geología del carbón", ciudad: "Cape Breton (NS)", lyell_vínculo: "Vínculo científico: Geólogo del carbón, sus hallazgos en Joggins fueron de interés para Lyell." },
  { id: "Binney", label: "E. W. Binney", campo: "Geología del carbón", ciudad: "Manchester", lyell_vínculo: "Vínculo científico: Geólogo del carbón que estudió flora." },
  { id: "Bayfield", label: "H. W. Bayfield", campo: "Hidrografía", ciudad: "San Lorenzo/Canadá", lyell_vínculo: "Vínculo científico: Hidrógrafo canadiense que informó a Lyell sobre fenómenos glaciares en San Lorenzo." },
  { id: "Guiscardi", label: "G. Guiscardi", campo: "Vulcanología", ciudad: "Nápoles", lyell_vínculo: "Vínculo científico: Vulcanólogo que reportó a Lyell sobre el Vesubio." },
  { id: "Hartung", label: "Georg Hartung", campo: "Geología volcánica", ciudad: "Madeira/Tenerife", lyell_vínculo: "Vínculo científico: Geólogo que Lyell contactó sobre vulcanismo en las Islas Canarias/Madeira." },
  { id: "Keller", label: "Ferdinand Keller", campo: "Arqueología lacustre", ciudad: "Suiza", lyell_vínculo: "Vínculo científico: Arqueólogo suizo clave en los descubrimientos lacustres." },
  { id: "Aymard", label: "Auguste Aymard", campo: "Prehistoria", ciudad: "Francia (Velay)", lyell_vínculo: "Vínculo científico: Prehistoriador francés, con quien Lyell mantenía correspondencia." },
  { id: "Beck", label: "H. H. Beck", campo: "Conchología", ciudad: "Copenhague", lyell_vínculo: "Vínculo científico: Conchólogo, Lyell se carteaba con él sobre zonación malacológica." },
  { id: "Jeffreys", label: "J. G. Jeffreys", campo: "Malacología", ciudad: "Reino Unido", lyell_vínculo: "Vínculo científico: Malacólogo con quien Lyell colaboraba para listas y determinaciones." },
  { id: "Beyrich", label: "H. E. Beyrich", campo: "Paleontología", ciudad: "Alemania", lyell_vínculo: "Vínculo científico: Paleontólogo alemán, Lyell se carteaba con él sobre estratigrafía." },
  { id: "Binkhorst", label: "J. T. Binkhorst", campo: "Geología/prehistoria", ciudad: "Bélgica (Maas)", lyell_vínculo: "Vínculo científico: Geólogo de Bélgica con quien Lyell mantenía correspondencia." },
  { id: "Bonney", label: "T. G. Bonney", campo: "Petrología/geomorf.", ciudad: "Reino Unido", lyell_vínculo: "Vínculo científico: Geólogo y petrólogo británico con quien Lyell se carteaba." },
  { id: "Phillips", label: "John Phillips", campo: "Estratigrafía", ciudad: "Reino Unido", lyell_vínculo: "Vínculo científico: Geólogo conocido por la correlación estratigráfica en Gran Bretaña." },
  { id: "Peach", label: "C. W. Peach", campo: "Historia natural", ciudad: "Escocia", lyell_vínculo: "Vínculo científico: Naturalista, Lyell se carteaba con él sobre historia natural." },
  { id: "Judd", label: "John W. Judd", campo: "Petrología ígnea", ciudad: "Londres/Oban", lyell_vínculo: "Vínculo científico: Geólogo ígneo, comparte base en Londres." },
  { id: "Redfield", label: "W. C. Redfield", campo: "Meteorología", ciudad: "EE. UU.", lyell_vínculo: "Vínculo científico: Meteorólogo estadounidense, Lyell se carteaba con él sobre fenómenos climáticos." },
  { id: "Somerville", label: "Mary Somerville", campo: "Ciencia/matemáticas", ciudad: "Italia/Londres", lyell_vínculo: "Vínculo social/científico: Científica y escritora influyente, comparte base en Londres." },

  // Instituciones y Temas
  { id: "BMNH", label: "British Museum (Natural History)", campo: "Museo", ciudad: "Londres" },
  { id: "Kew", label: "Royal Botanic Gardens, Kew", campo: "Botánica", ciudad: "Londres" },
  { id: "UoE_Lyell", label: "Sir Charles Lyell Collection (UoE)", campo: "Archivo/ciencia", ciudad: "Edimburgo" },
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

// ----- Aristas (Permanece igual) -----
const EDGES = [
  // ... (aristas para el grafo)
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
  { source: "Owen", target: "BMNH", tipo: "institución" },
  { source: "Hooker", target: "Kew", tipo: "institución" },
  { source: "Lyell", target: "UoE_Lyell", tipo: "archivo" },
  { source: "JohnMurray", target: "UoE_Lyell", tipo: "documentado en fondos" }
];


// ----- D3.js y Lógica de Grafo (Necesario para búsquedas de nodos) -----

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

// Variables y setup de D3
const svg = d3.select('#graph');
const width = svg.node().clientWidth || 600; 
const height = svg.node().clientHeight || 400;

const g = svg.append('g');

const simulation = d3.forceSimulation(nodes)
  .force('link', d3.forceLink(links).id(d=>d.id).distance(120))
  .force('charge', d3.forceManyBody().strength(-400))
  .force('center', d3.forceCenter(width/2,height/2))
  .force('collision', d3.forceCollide().radius(d=>d.type==='person'?18:12));

// Zoom
svg.call(d3.zoom().scaleExtent([0.3, 3]).on('zoom', (event)=> g.attr('transform', event.transform)));

// Aristas (Líneas rectas)
const link = g.selectAll('line')
  .data(links)
  .join('line')
  .attr('stroke', '#6e7291')
  .attr('stroke-opacity', 0.6)
  .attr('stroke-width', 1.5);

// Nodos
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

// Actualizar posiciones
simulation.on('tick', ()=>{
  link.attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

  nodeGroup.attr('transform', d=>`translate(${d.x},${d.y})`);
});

// **********************************************
// ********** LÓGICA DEL CHAT MODIFICADA **********
// **********************************************

// Referencias de control actualizadas
const selectB = document.getElementById('nodeB');
const chatLog = document.getElementById('chatLog');

// Lyell es el nodo fijo A
const LYELL_ID = "Lyell"; 

// FUNCIÓN DE BÚSQUEDA DE METADATOS (sin cambios)
function nodeMeta(id){ return nodes.find(n=>n.id===id); }
function findEdge(a,b){ return EDGES.find(e=>(e.source===a&&e.target===b)||(e.source===b&&e.target===a)); }

// FUNCIÓN MODIFICADA: Llenar el selector B
function populateSelects(){
    selectB.innerHTML='<option value="">Select a person</option>';
    
    // Filtrar solo personas y excluir a Lyell
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

// El click handler del grafo se ajusta para solo actualizar selectB
nodeGroup.on('click',(event,d)=>{
    if(d.type!=='person' || d.id === LYELL_ID) return;
    selectB.value=d.id;
});

// FUNCIÓN DE SOPORTE: Encuentra los temas/instituciones a los que está conectado un nodo (X)
function findSecondaryLinks(nodeId) {
    const secondaryLinks = EDGES.filter(e => e.source === nodeId || e.target === nodeId)
        .map(e => e.source === nodeId ? e.target : e.source)
        .filter(id => {
            const meta = nodeMeta(id);
            // Incluir Nodos Temáticos (tipo) o Instituciones (ids fijos)
            return meta && (meta.tipo || ['BMNH', 'Kew', 'UoE_Lyell'].includes(id));
        })
        .map(id => nodeMeta(id).label);
    return secondaryLinks;
}


// FUNCIÓN PRINCIPAL MODIFICADA: Genera el formato de respuesta solicitado
function explainConnection(a, b) {
    const A = nodeMeta(a); // Lyell
    const B = nodeMeta(b); // Colega seleccionado

    if (!A || !B) return 'Nodo no válido.';

    // 1. Obtener la explicación detallada
    const specificExplanation = B.lyell_vínculo || 'La relación se basa únicamente en intereses o ubicaciones compartidas.';
    

    // 2. Atributos Comunes (Campo/Ciudad)
    let locationText = '';
    const lyellCity = A.ciudad || '';
    const B_ciudad = B.ciudad || 'Ciudad no definida';
    const sharedCity = lyellCity.includes(B_ciudad) || B_ciudad.includes(lyellCity);
    const hasCommonField = A.campo === B.campo && A.campo;

    if (hasCommonField) {
        locationText += `Comparten el campo de estudio: **${A.campo}** (campo).`;
    }
    if (sharedCity) {
        if (locationText) locationText += '\n'; 
        locationText += `Ambos estaban situados en: **${B_ciudad}** (ciudad).`;
    } else if (B_ciudad !== 'Ciudad no definida') {
        // Mostrar solo la ubicación del colega si no es compartida
        locationText = `El colega ${B.label} estaba situado en: **${B_ciudad}** (ciudad).`;
    }
    
    // Si no hay campo ni ciudad compartida, buscamos una conexión genérica.
    if (!locationText) {
        locationText = 'No se encuentran atributos de ubicación o campo compartidos.';
    }


    // 3. Vínculos Secundarios (Temas/Instituciones del Colega)
    const secondaryLinks = findSecondaryLinks(b);
    let secondaryText = '';
    if (secondaryLinks.length > 0) {
        secondaryText = `Están directamente relacionados con: **${secondaryLinks.join('**, **')}** (temas/instituciones).`;
    } else {
        secondaryText = `No está directamente relacionado con otros temas o instituciones en esta red.`;
    }

    // CONSTRUCCIÓN DEL FORMATO SOLICITADO
    let response = `Relación de Charles Lyell con ${B.label}\n\n`;
    
    // 1. Ciudad/Campo
    response += `- ${locationText}\n`;
    
    // 2. Vínculo/Explicación (Usando la descripción detallada del nodo B)
    // *** MODIFICADO PARA USAR SOLO specificExplanation Y AÑADIR EL SUFIJO LITERAL ***
    response += `- Vínculo: ${specificExplanation}${(B.lyell_vínculo) ? ' (explicación del vínculo)' : ''}\n`;
    
    // 3. Temas/Instituciones
    response += `- ${secondaryText}\n`;

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
