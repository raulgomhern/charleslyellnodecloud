// ----- Nodes (Institutions Removed) -----
const NODES = [
  // Central Figure
  { id: "Lyell", label: "Charles Lyell", field: "Geology", city: "London/Edinburgh" },

  // Lyell-Horner Family and Editors
  { id: "MaryLyell", label: "Mary Lyell (Horner)", field: "Conchology/Biology", city: "London/Edinburgh", lyell_link: "Intimate bond: Wife and research collaborator, sharing family ties and common base." },
  { id: "LeonardHorner", label: "Leonard Horner", field: "Geology/Education", city: "London", lyell_link: "Family and professional bond: Father of Mary Lyell and a fellow geologist." },
  { id: "FrancisHorner", label: "Francis Horner", field: "Economics/Politics", city: "London", lyell_link: "Family tie: Lyell's brother-in-law, sharing a base in London." },
  { id: "KatharineMurrayLyell", label: "Katharine M. Lyell", field: "Botany/Scientific Editing", city: "London", extra:"Editor of Life and Letters", lyell_link: "Professional/family bond: Niece and editor of his memoirs and correspondence." },
  { id: "CarolineLyell", label: "Caroline Lyell", field: "Family Correspondence", city: "UK", lyell_link: "Family tie: Related by blood and maintained correspondence." },
  { id: "JohnMurray", label: "John Murray (editor)", field: "Publishing", city: "London", lyell_link: "Commercial bond: His principal editor, responsible for the diffusion of his works." },

  // Key Scientists
  { id: "Darwin", label: "Charles Darwin", field: "Natural History", city: "Down, London", lyell_link: "Friend, colleague, and key influence in Lyell's life. Lyell addressed Darwin's theory in his work." },
  { id: "Wallace", label: "Alfred R. Wallace", field: "Natural History", city: "London", lyell_link: "Scientific colleague: Peer in natural history, also active in London." },
  { id: "Hooker", label: "J. D. Hooker", field: "Botany", city: "Kew/London", lyell_link: "Scientific bond: Friend of Darwin and Lyell, Director of Kew Gardens." },
  { id: "Owen", label: "Richard Owen", field: "Anatomy/Paleontology", city: "London (BMNH)", lyell_link: "Scientific/institutional bond: Prominent paleontologist based at the British Museum of Natural History in London." },
  { id: "Lubbock", label: "John Lubbock", field: "Prehistory/Archaeology", city: "London", lyell_link: "Scientific bond: Friend and archaeologist, sharing a base in London." },

  // Extended Network
  { id: "Argyll", label: "Duke of Argyll", field: "Naturalist/Politics", city: "UK", lyell_link: "Social/scientific bond: Naturalista and political figure with whom he corresponded." },
  { id: "Bates", label: "Henry W. Bates", field: "Biogeography/Entomology", city: "Amazonia/London", lyell_link: "Scientific bond: Colleague in biogeography/entomology, sharing a base city." },
  { id: "Prestwich", label: "Joseph Prestwich", field: "Geology", city: "UK/France", lyell_link: "Strong scientific bond: They share the field of Geology. Prestwich validated the Paleolithic finds Lyell promoted." },
  { id: "Boucher", label: "Boucher de Perthes", field: "Prehistory", city: "Abbeville", lyell_link: "Scientific bond: Key antiquarian in the evidence for the Paleolithic; Lyell validated his findings." },
  { id: "LartetE", label: "Edouard Lartet", field: "Paleontology/Prehistory", city: "France", lyell_link: "Scientific bond: French paleontologist Lyell contacted to investigate Quaternary fauna." },
  { id: "LartetL", label: "Louis Lartet", field: "Prehistory", city: "France", lyell_link: "Scientific bond: French collaborator of his father, Edouard, with whom Lyell corresponded." },
  { id: "Jamieson", label: "T. F. Jamieson", field: "Glacial Geology", city: "Scotland", lyell_link: "Scientific bond: Key glacial geologist in the discussion of Glen Roy." },
  { id: "Ramsay", label: "A. C. Ramsay", field: "Glacial Geology", city: "UK", lyell_link: "Scientific bond: Glacial geologist and Director of the Geological Survey." },
  { id: "Beckles", label: "S. H. Beckles", field: "Purbeck Collector", city: "Sussex/Wight", lyell_link: "Scientific bond: Purbeck collector, contributed important samples." },
  { id: "Brodie", label: "W. R. Brodie", field: "Purbeck Collector", city: "Swanage", lyell_link: "Scientific bond: Purbeck collector involved in sample attribution." },
  { id: "Brown_NS", label: "Richard Brown", field: "Coal Geology", city: "Cape Breton (NS)", lyell_link: "Scientific bond: Coal geologist, his Joggins findings were of interest to Lyell." },
  { id: "Binney", label: "E. W. Binney", field: "Coal Geology", city: "Manchester", lyell_link: "Scientific bond: Coal geologist who studied flora." },
  { id: "Bayfield", label: "H. W. Bayfield", field: "Hydrography", city: "St. Lawrence/Canada", lyell_link: "Scientific bond: Canadian hydrographer who informed Lyell about glacial phenomena in St. Lawrence." },
  { id: "Guiscardi", label: "G. Guiscardi", field: "Vulcanology", city: "Naples", lyell_link: "Scientific bond: Vulcanologist who reported to Lyell on Vesuvius." },
  { id: "Hartung", label: "Georg Hartung", field: "Volcanic Geology", city: "Madeira/Tenerife", lyell_link: "Scientific bond: Geologist Lyell contacted about volcanism in the Canary Islands/Madeira." },
  { id: "Keller", label: "Ferdinand Keller", field: "Lacustrine Archaeology", city: "Switzerland", lyell_link: "Scientific bond: Key Swiss archaeologist in lacustrine discoveries." },
  { id: "Aymard", label: "Auguste Aymard", field: "Prehistory", city: "France (Velay)", lyell_link: "Scientific bond: French prehistorian with whom Lyell corresponded." },
  { id: "Beck", label: "H. H. Beck", field: "Conchology", city: "Copenhagen", lyell_link: "Scientific bond: Conchologist, Lyell corresponded with him on malacological zonation." },
  { id: "Jeffreys", label: "J. G. Jeffreys", field: "Malacology", city: "UK", lyell_link: "Scientific bond: Malacologist with whom Lyell collaborated for lists and determinations." },
  { id: "Beyrich", label: "H. E. Beyrich", field: "Paleontology", city: "Germany", lyell_link: "Scientific bond: German paleontologist Lyell corresponded with regarding stratigraphy." },
  { id: "Binkhorst", label: "J. T. Binkhorst", field: "Geology/Prehistory", city: "Belgium (Maas)", lyell_link: "Scientific bond: Belgian geologist with whom Lyell corresponded." },
  { id: "Bonney", label: "T. G. Bonney", field: "Petrology/Geomorphology", city: "UK", lyell_link: "Scientific bond: British geologist and petrologist with whom Lyell corresponded." },
  { id: "Phillips", label: "John Phillips", field: "Stratigraphy", city: "UK", lyell_link: "Scientific bond: Geologist known for stratigraphic correlation in Great Britain." },
  { id: "Peach", label: "C. W. Peach", field: "Natural History", city: "Scotland", lyell_link: "Scientific bond: Naturalist, Lyell corresponded with him on natural history." },
  { id: "Judd", label: "John W. Judd", field: "Igneous Petrology", city: "London/Oban", lyell_link: "Scientific bond: Igneous geologist, sharing a base in London." },
  { id: "Redfield", label: "W. C. Redfield", field: "Meteorology", city: "USA", lyell_link: "Scientific bond: American meteorologist, Lyell corresponded with him on climatic phenomena." },
  { id: "Somerville", label: "Mary Somerville", field: "Science/Mathematics", city: "Italy/London", lyell_link: "Social/scientific bond: Influential scientist and writer, sharing a base in London." },

  // Topics (hubs) - Institutions are now gone
  { id: "SelNatural", label: "Theory of Natural Selection", type: "topic" },
  { id: "Mimetismo", label: "Biological Mimicry", type: "topic" },
  { id: "Paleolitico", label: "European Paleolithic (Somme, Engis, Neanderthal)", type: "topic" },
  { id: "NileMud", label: "Nile Mud (Horner) and Chronologies", type: "topic" },
  { id: "Glacial", label: "Glacial Theory and Terraces (Glen Roy, Moel Tryfan)", type: "topic" },
  { id: "Purbeck", label: "Purbeck Mesozoic Mammals (dirt bed)", type: "topic" },
  { id: "Volcanismo", label: "Mediterranean and Atlantic Volcanism", type: "topic" },
  { id: "Malacologia", label: "Malacology and Biogeography (Crag, Canaries)", type: "topic" },
  { id: "Estratigrafia", label: "Stratigraphy and Correlation (Eocene, Silurian)", type: "topic" },
  { id: "Carbonifero", label: "Carboniferous (Joggins, flora, tracks)", type: "topic" },
  { id: "BotanicaFosil", label: "Paleobotany and Paleoclimate", type: "topic" }
];

// ----- Edges (Institutions related edges removed) -----
const EDGES = [
  { source: "MaryLyell", target: "Lyell", tipo: "family-correspondence" },
  { source: "CarolineLyell", target: "Lyell", tipo: "family-correspondence" },
  { source: "LeonardHorner", target: "Lyell", tipo: "correspondence" },
  { source: "KatharineMurrayLyell", target: "Lyell", tipo: "editing/memoir" },
  { source: "JohnMurray", target: "Lyell", tipo: "publishing/sales" },
  { source: "Darwin", target: "Lyell", tipo: "correspondence" },
  { source: "Wallace", target: "Lyell", tipo: "correspondence" },
  { source: "Hooker", target: "Lyell", tipo: "correspondence" },
  { source: "Owen", target: "Lyell", tipo: "correspondence" },
  { source: "Lubbock", target: "Lyell", tipo: "correspondence" },
  { source: "Argyll", target: "Lyell", tipo: "correspondence" },
  { source: "Bates", target: "Lyell", tipo: "correspondence" },
  { source: "Prestwich", target: "Lyell", tipo: "correspondence" },
  { source: "Boucher", target: "Lyell", tipo: "correspondence" },
  { source: "LartetE", target: "Lyell", tipo: "correspondence" },
  { source: "LartetL", target: "Lyell", tipo: "correspondence" },
  { source: "Jamieson", target: "Lyell", tipo: "correspondence" },
  { source: "Ramsay", target: "Lyell", tipo: "correspondence" },
  { source: "Beckles", target: "Lyell", tipo: "correspondence" },
  { source: "Brodie", target: "Lyell", tipo: "correspondence" },
  { source: "Brown_NS", target: "Lyell", tipo: "correspondence" },
  { source: "Binney", target: "Lyell", tipo: "correspondence" },
  { source: "Bayfield", target: "Lyell", tipo: "correspondence" },
  { source: "Guiscardi", target: "Lyell", tipo: "correspondence" },
  { source: "Hartung", target: "Lyell", tipo: "correspondence" },
  { source: "Keller", target: "Lyell", tipo: "correspondence" },
  { source: "Aymard", target: "Lyell", tipo: "correspondence" },
  { source: "Beck", target: "Lyell", tipo: "correspondence" },
  { source: "Jeffreys", target: "Lyell", tipo: "correspondence" },
  { source: "Beyrich", target: "Lyell", tipo: "correspondence" },
  { source: "Binkhorst", target: "Lyell", tipo: "correspondence" },
  { source: "Bonney", target: "Lyell", tipo: "correspondence" },
  { source: "Phillips", target: "Lyell", tipo: "correspondence" },
  { source: "Peach", target: "Lyell", tipo: "correspondence" },
  { source: "Judd", target: "Lyell", tipo: "correspondence" },
  { source: "Redfield", target: "Lyell", tipo: "correspondence" },
  { source: "Somerville", target: "Lyell", tipo: "correspondence" },
  { source: "Darwin", target: "SelNatural", tipo: "theory" },
  { source: "Wallace", target: "SelNatural", tipo: "theory" },
  { source: "Lyell", target: "SelNatural", tipo: "debate-reception" },
  { source: "Argyll", target: "SelNatural", tipo: "discussion" },
  { source: "Bates", target: "Mimetismo", tipo: "evidence" },
  { source: "Prestwich", target: "Paleolitico", tipo: "Somme-validation" },
  { source: "Boucher", target: "Paleolitico", tipo: "Somme-evidence" },
  { source: "LartetE", target: "Paleolitico", tipo: "quaternary-fauna" },
  { source: "LartetL", target: "Paleolitico", tipo: "human-remains" },
  { source: "KatharineMurrayLyell", target: "Paleolitico", tipo: "editing (Life and Letters)" },
  { source: "Jamieson", target: "Glacial", tipo: "Glen Roy/Moel Tryfan" },
  { source: "Ramsay", target: "Glacial", tipo: "glacial-lakes" },
  { source: "Bayfield", target: "Glacial", tipo: "boulders/icebergs St. Lawrence" },
  { source: "Beckles", target: "Purbeck", tipo: "mammal-jaw" },
  { source: "Brodie", target: "Purbeck", tipo: "priority/attribution" },
  { source: "Owen", target: "Purbeck", tipo: "vertebrate-description" },
  { source: "Guiscardi", target: "Volcanismo", tipo: "Vesuvius" },
  { source: "Hartung", target: "Volcanismo", tipo: "Madeira/Tenerife" },
  { source: "Beck", target: "Malacologia", tipo: "Arctic/Atlantic-zonation" },
  { source: "Jeffreys", target: "Malacologia", tipo: "lists/determination" },
  { source: "MaryLyell", target: "Malacologia", tipo: "collection/study" },
  { source: "Phillips", target: "Estratigrafia", tipo: "UK-correlation" },
  { source: "Beyrich", target: "Estratigrafia", tipo: "Barrande's colonies" },
  { source: "Brown_NS", target: "Carbonifero", tipo: "Joggins/rain-prints" },
  { source: "Binney", target: "Carbonifero", tipo: "Calamites/flora" },
  { source: "Hooker", target: "BotanicaFosil", tipo: "biogeography/chronologies" },
  { source: "LeonardHorner", target: "NileMud", tipo: "chronologies (Nile)" },
];


// ----- D3.js and Graph Logic (Unchanged) -----

const extraNodes = [];
const extraEdges = [];
NODES.forEach(n=>{
  if(n.city && !extraNodes.find(x=>x.id===n.city)) extraNodes.push({id:n.city,label:n.city,type:'city'});
  if(n.city) extraEdges.push({source:n.id,target:n.city,tipo:'location'});

  if(n.field && !extraNodes.find(x=>x.id===n.field)) extraNodes.push({id:n.field,label:n.field,type:'field'});
  if(n.field) extraEdges.push({source:n.id,target:n.field,tipo:'field'});
});

const nodes = NODES.map(n=>({...n,type: n.type ? n.type : 'person'})).concat(extraNodes);
const links = EDGES.concat(extraEdges);

// D3 Setup (Size variables are placeholder if run outside browser)
const svg = d3.select('#graph');
const width = svg.node() ? svg.node().clientWidth : 600; 
const height = svg.node() ? svg.node().clientHeight : 400;

const g = svg.append('g');

const simulation = d3.forceSimulation(nodes)
  .force('link', d3.forceLink(links).id(d=>d.id).distance(120))
  .force('charge', d3.forceManyBody().strength(-400))
  .force('center', d3.forceCenter(width/2,height/2))
  .force('collision', d3.forceCollide().radius(d=>d.type==='person'?18:12));

// Zoom
svg.call(d3.zoom().scaleExtent([0.3, 3]).on('zoom', (event)=> g.attr('transform', event.transform)));

// Edges
const link = g.selectAll('line')
  .data(links)
  .join('line')
  .attr('stroke', '#6e7291')
  .attr('stroke-opacity', 0.6)
  .attr('stroke-width', 1.5);

// Nodes
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
    if(d.type==='field' || d.type==='topic') return '#f3aa3c';
    return '#888';
  });

nodeGroup.append('text')
  .attr('class','node-label')
  .attr('dy',4)
  .text(d=>d.label);

// Update positions
simulation.on('tick', ()=>{
  link.attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

  nodeGroup.attr('transform', d=>`translate(${d.x},${d.y})`);
});

// **********************************************
// ********** CHAT LOGIC MODIFICATIONS **********
// **********************************************

// Control references
const selectB = document.getElementById('nodeB');
const chatLog = document.getElementById('chatLog');

// Lyell is the fixed Node A
const LYELL_ID = "Lyell"; 

// Metadata Lookup Functions
function nodeMeta(id){ return nodes.find(n=>n.id===id); }
function findEdge(a,b){ return EDGES.find(e=>(e.source===a&&e.target===b)||(e.source===b&&e.target===a)); }

// Populate Select B
function populateSelects(){
    selectB.innerHTML='<option value="">Select a person...</option>';
    
    const peopleNodes = NODES.filter(n => n.id !== LYELL_ID && !n.type);

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

// Graph Click Handler
nodeGroup.on('click',(event,d)=>{
    if(d.type!=='person' || d.id === LYELL_ID) return;
    selectB.value=d.id;
});

// Support Function: Finds connected topics for node X (No institutional IDs needed now)
function findSecondaryLinks(nodeId) {
    const secondaryLinks = EDGES.filter(e => e.source === nodeId || e.target === nodeId)
        .map(e => e.source === nodeId ? e.target : e.source)
        .filter(id => {
            const meta = nodeMeta(id);
            // Only include Topics (type === 'topic')
            return meta && (meta.type === 'topic');
        })
        .map(id => nodeMeta(id).label);
    return secondaryLinks;
}


// MAIN FUNCTION: Generates the structured response
function explainConnection(a, b) {
    const A = nodeMeta(a); // Lyell
    const B = nodeMeta(b); // Selected Colleague

    if (!A || !B) return 'Invalid node.';

    // 1. Get the detailed explanation
    const specificExplanation = B.lyell_link || 'The relationship is based only on shared interests or locations.';
    

    // 2. Common Attributes (Field/City)
    let locationText = '';
    const lyellCity = A.city || '';
    const B_city = B.city || 'Undefined City';
    const sharedCity = lyellCity.includes(B_city) || B_city.includes(lyellCity);
    const hasCommonField = A.field === B.field && A.field;

    if (hasCommonField) {
        locationText += `Shared field of study: **${A.field}**`;
    }
    if (sharedCity) {
        if (locationText) locationText += '\n'; 
        locationText += `Both were based in: **${B_city}**`;
    } else if (B_city !== 'Undefined City') {
        locationText = `${B.label} was based in: **${B_city}**`;
    }
    
    if (!locationText) {
        locationText = 'No shared location or field attributes found.';
    }


    // 3. Secondary Links (Topics/Institutions)
    const secondaryLinks = findSecondaryLinks(b);
    let secondaryText = '';
    if (secondaryLinks.length > 0) {
        secondaryText = `Directly related to: **${secondaryLinks.join('**, **')}**`;
    } else {
        secondaryText = `Not directly related to other topics or institutions in this network.`;
    }

    // CONSTRUCTING THE FINAL RESPONSE
    let response = `Relationship between Charles Lyell and ${B.label}\n\n`;
    
    // 1. City/Field (Parentheses removed)
    response += `- ${locationText}\n`;
    
    // 2. Link/Explanation (Parentheses removed)
    response += `- Link: ${specificExplanation}\n`;
    
    // 3. Topics/Institutions (Parentheses removed)
    response += `- ${secondaryText}\n`;

    return response;
}

// Function to append messages (using <div> for wrapping, removing <pre>)
function appendMsg(text,who='bot'){
  const div=document.createElement('div'); 
  // IMPORTANT: Using `msg user` or `msg` class and <div> allows text to wrap.
  div.className='msg'+(who==='user'?' user':''); 
  
  // Replace double asterisks with <strong> for bolding and maintain line breaks
  div.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');

  chatLog.appendChild(div); 
  chatLog.scrollTop=chatLog.scrollHeight;
}

// FORM SUBMISSION HANDLER
document.getElementById('chatForm').addEventListener('submit',e=>{
  e.preventDefault();
  
  const a=LYELL_ID;
  const b=selectB.value;
  
  if(!b) {
    return appendMsg('Please select a person from the menu on the right.');
  }
    
  // *** AUTO-CLEAR PREVIOUS RESULT ***
  chatLog.innerHTML = ''; 
    
  appendMsg(`Query regarding the relationship between Charles Lyell and ${nodeMeta(b).label}.`,'user');

  appendMsg(explainConnection(a,b),'bot');
});

// Clear button handler
document.getElementById('clear').addEventListener('click',()=>{
  chatLog.innerHTML='';
  appendMsg('Select a person and press "Query Relationship" to see the bond with Charles Lyell.');
});
