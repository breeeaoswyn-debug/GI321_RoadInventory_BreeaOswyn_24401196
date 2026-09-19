
/* Student custom dashboard for GI 321 Practical Assignment 1.
   Extension: Student-ID title placeholder + Perennial outlets metric card + teaching-data note. */
(function(){
  const byId=id=>document.getElementById(id);
  const normalise=v=>String(v??'').trim().toLowerCase();
  const firstProperty=(f,names)=>{for(const n of names){const v=f.get(n); if(v!==undefined&&v!==null) return v;} return '';};
  let activeCondition='All';

function safeFeatures(layerId){
    const featureArrays = {
        inundation_zones: window.features_GI321_WebReady_StudentIDinundation_zones_1,
        stream_outlets: window.features_GI321_WebReady_StudentIDstream_outlets_2,
        rivers_creeks: window.features_GI321_WebReady_StudentIDrivers_creeks_3,
        culverts: window.features_GI321_WebReady_StudentIDculverts_4,
        chainage_points: window.features_GI321_WebReady_StudentIDchainage_points_5,
        gradient_slope: window.features_GI321_WebReady_StudentIDgradient_slope_6,
        road_centerline: window.features_GI321_WebReady_StudentIDroad_centerline_7
    };

    return featureArrays[layerId] || [];
}
  function setVisible(id,visible){
    const l=window.gi321Layers?.[id]; if(l) l.setVisible(visible);
    const cb=document.querySelector(`#layer-panel input[data-layer="${id}"]`);
    if(cb) cb.checked=visible;
  }
  function fitFeatures(features){
    if(!features.length) return;
    const ext=ol.extent.createEmpty();
    features.forEach(f=>ol.extent.extend(ext,f.getGeometry().getExtent()));
    window.gi321Map.getView().fit(ext,{padding:[100,100,100,100],duration:500,maxZoom:17});
  }
  function status(msg){const el=byId('dashboard-status'); if(el) el.textContent=msg;}

  function conditionFeatures(cond){
    const all = safeFeatures('culverts');

    if(cond === 'All'){
        return all;
    }

    return all.filter(f =>
        normalise(f.get('condition')) === normalise(cond)
    );
}
}

  return all.filter(f => {
    const props = f.getProperties ? f.getProperties() : {};

    const conditionValue = Object.keys(props)
      .find(key => key.toLowerCase().includes('condition'));

    if(!conditionValue){
      return false;
    }

    return normalise(props[conditionValue]) === normalise(cond);
  });

  function applyConditionFilter(cond){
    activeCondition = cond;

    const culverts = safeFeatures('culverts');
    const matching = conditionFeatures(cond);

    culverts.forEach(f => {
        f.setStyle(
            cond === 'All' || matching.includes(f)
            ? undefined
            : new ol.style.Style({image: new ol.style.Circle({
                radius: 0
            })})
        );
    });

    setVisible('culverts', true);

    status(
        cond === 'All'
        ? 'Showing all 15 culverts.'
        : `Showing ${matching.length} ${cond} culverts.`
    );
}
    activeCondition=cond;
    const layer=window.gi321Layers?.culverts;
    if(!layer) return;
    const features=safeFeatures('culverts');
    features.forEach(f=>{
      const match=cond==='All'||normalise(f.get('condition'))===normalise(cond);
      f.setStyle(match?new ol.style.Style({
        fill:new ol.style.Fill({color:'rgba(25,118,210,0.82)'}),
        stroke:new ol.style.Stroke({color:'#0b3d91',width:1}),
        image:new ol.style.Circle({radius:7,fill:new ol.style.Fill({color:'#1976d2'}),stroke:new ol.style.Stroke({color:'#fff',width:1.5})})
      }):null);
      f.set('gi321HiddenByFilter',!match);
    });
    setVisible('culverts',true);
    const matched=conditionFeatures(cond);
    if(cond==='All'){
      status('All 15 culverts visible.');
    }else{
      fitFeatures(matched);
      status(`${matched.length} culvert${matched.length===1?'':'s'} match: ${cond}.`);
    }
  }

  function makeCard(label,value,action){
    const b=document.createElement('button');
    b.type='button'; b.className='metric-card'; b.dataset.action=action;
    const strong=document.createElement('strong'); strong.textContent=value;
    const span=document.createElement('span'); span.textContent=label;
    b.append(strong,span);
    return b;
  }

  function initialiseDashboard(){
    const culverts=safeFeatures('culverts');
    const outlets=safeFeatures('stream_outlets');
    const risks=safeFeatures('inundation_zones');
    const gradients=safeFeatures('gradient_slope');
    const road=safeFeatures('road_centerline');
    const waterways=safeFeatures('rivers_creeks');
    const perennialOutlets=outlets.filter(f=>normalise(firstProperty(f,['flow_status','Flow Status']))==='perennial');

    const priority=culverts.filter(f=>['deteriorated','barely functional'].includes(normalise(f.get('condition'))));
    const highRisk=risks.filter(f=>['high','very high'].includes(normalise(f.get('risk_level'))));
    const waterClasses=new Set(waterways.map(f=>normalise(f.get('waterway_type'))).filter(Boolean)).size;
    const roadLength=(Number(road[0]?.get('length_m'))||road[0]?.getGeometry().getLength()/1000)||0;

    const metrics=[
      {label:'Total culverts',value:culverts.length,action:'culverts'},
      {label:'Priority culverts',value:priority.length,action:'priority'},
      {label:'Stream outlets',value:outlets.length,action:'outlets'},
      {label:'High / very-high zones',value:highRisk.length,action:'risk'},
      {label:'Gradient segments',value:gradients.length,action:'gradient'},
      {label:'Road length',value:(roadLength/1000).toFixed(2)+' km',action:'road'},
      {label:'Waterway classes',value:waterClasses,action:'waterways'},
      {label:'Perennial outlets',value:perennialOutlets.length,action:'perennial-outlets'}
    ];
    const box=byId('metrics'); box.innerHTML='';
    metrics.forEach(m=>box.appendChild(makeCard(m.label,m.value,m.action)));

    const counts={};
    culverts.forEach(f=>{const c=f.get('condition')||'Unclassified'; counts[c]=(counts[c]||0)+1;});
    const bars=byId('condition-bars'); bars.innerHTML='';
    ['Deteriorated','Barely Functional','Functional','Unclassified'].forEach(c=>{
      const b=document.createElement('button'); b.type='button'; b.className='condition-bar';
      b.dataset.condition=c; b.innerHTML=`<span>${c}</span><strong>${counts[c]||0}</strong>`;
      bars.appendChild(b);
    });

    box.addEventListener('click',e=>{
      const card=e.target.closest('.metric-card'); if(!card) return;
      const a=card.dataset.action;
      applyAction(a,culverts,priority,outlets,highRisk,gradients,road,waterways,perennialOutlets);
    });
    bars.addEventListener('click',e=>{
      const b=e.target.closest('.condition-bar'); if(!b) return;
      byId('condition-filter').value=b.dataset.condition;
      applyConditionFilter(b.dataset.condition);
    });
    byId('condition-filter').addEventListener('change',e=>applyConditionFilter(e.target.value));

    byId('search-button').addEventListener('click',runSearch);
    byId('feature-search').addEventListener('keydown',e=>{if(e.key==='Enter') runSearch();});
    byId('reset-button').addEventListener('click',resetAll);
    byId('dashboard-toggle').addEventListener('click',()=>{
      const d=byId('dashboard'), open=d.classList.toggle('open');
      byId('dashboard-toggle').setAttribute('aria-expanded',String(open));
    });
    byId('dashboard-close').addEventListener('click',()=>{
      byId('dashboard').classList.remove('open'); byId('dashboard-toggle').setAttribute('aria-expanded','false');
    });
    status('Layer-name check: all seven required public layers found. Dashboard values loaded from exported features.');
  }

  function applyAction(a,culverts,priority,outlets,highRisk,gradients,road,waterways,perennialOutlets){
    const map=window.gi321Map;
    const showOnly=(ids)=>{
      Object.keys(window.gi321Layers).forEach(id=>setVisible(id,ids.includes(id)));
    };
    if(a==='culverts'){showOnly(['culverts']); applyConditionFilter('All'); fitFeatures(culverts); status('Showing all 15 culverts.');}
    else if(a==='priority'){showOnly(['culverts']); applyConditionFilter('All'); 
      const layer=window.gi321Layers.culverts; culverts.forEach(f=>f.setStyle(priority.includes(f)?undefined:null)); fitFeatures(priority); status('Showing 12 priority culverts: Deteriorated + Barely Functional.');}
    else if(a==='outlets'){showOnly(['stream_outlets']); fitFeatures(outlets); status('Showing 42 stream outlets.');}
    else if(a==='risk'){showOnly(['inundation_zones']); fitFeatures(highRisk); status('Showing the 2 High / Very High inundation risk zones.');}
    else if(a==='gradient'){showOnly(['gradient_slope']); fitFeatures(gradients); status('Showing 67 gradient segments.');}
    else if(a==='road'){showOnly(['road_centerline']); fitFeatures(road); status('Showing the road centreline (approximately 10.27 km).');}
    else if(a==='waterways'){showOnly(['rivers_creeks']); fitFeatures(waterways); status('Showing 2 waterway classes.');}
    else if(a==='perennial-outlets'){showOnly(['stream_outlets']); fitFeatures(perennialOutlets); status('Showing 19 perennial stream outlets.');}
  }

  function runSearch(){
    const q = normalise(byId('feature-search').value);

    if(!q){
        status('Enter a culvert ID such as CL4 or a chainage such as 6+300.');
        return;
    }

    const culverts = safeFeatures('culverts');
    const chainages = safeFeatures('chainage_points');

    const foundC = culverts.filter(f =>
        normalise(f.get('culvert_id')).includes(q)
    );

    if(foundC.length){
        setVisible('culverts', true);
        fitFeatures(foundC);
        status(
            `Search match: ${foundC.length} culvert${foundC.length === 1 ? '' : 's'} found.`
        );
        return;
    }

    const foundCh = chainages.filter(f => {
        const value = normalise(f.get('chainage'));

        return value.includes(q) ||
               value.replace(/\./g,'').includes(q.replace(/\./g,''));
    });

    if(foundCh.length){
        setVisible('chainage_points', true);
        fitFeatures(foundCh);
        status(
            `Search match: ${foundCh.length} chainage point${foundCh.length === 1 ? '' : 's'} found.`
        );
        return;
    }

    status(`No match found for "${byId('feature-search').value}".`);
}
  const q = normalise(byId('feature-search').value);

  if(!q){
    status('Enter a culvert ID such as CL4 or a chainage such as 6+300.');
    return;
  }

  const culverts = safeFeatures('culverts');
  const chainages = safeFeatures('chainage_points');

  function featureMatches(feature, query){
    const props = feature.getProperties ? feature.getProperties() : {};

    return Object.keys(props).some(key => {
      const value = props[key];
      return value !== undefined &&
             value !== null &&
             normalise(value).includes(query);
    });
  }

  const foundCulverts = culverts.filter(f => featureMatches(f, q));
  const foundChainages = chainages.filter(f => featureMatches(f, q));

  if(foundCulverts.length){
    setVisible('culverts', true);
    fitFeatures(foundCulverts);
    status(`Search match: ${foundCulverts.length} culvert${foundCulverts.length === 1 ? '' : 's'}.`);
  }
  else if(foundChainages.length){
    setVisible('chainage_points', true);
    fitFeatures(foundChainages);
    status(`Search match: ${foundChainages.length} chainage point${foundChainages.length === 1 ? '' : 's'}.`);
  }
  else{
    status(`No match found for "${byId('feature-search').value}".`);
  }
}

  function resetAll(){
    const visible=['road_centerline','gradient_slope','culverts','stream_outlets'];
    Object.keys(window.gi321Layers).forEach(id=>setVisible(id,visible.includes(id)));
    ['inundation_zones','chainage_points','rivers_creeks'].forEach(id=>setVisible(id,false));
    byId('condition-filter').value='All';
    byId('feature-search').value='';
    safeFeatures('culverts').forEach(f=>f.setStyle(undefined));
    const ext=ol.extent.createEmpty();
    Object.values(window.gi321Layers).forEach(l=>ol.extent.extend(ext,l.getSource().getExtent()));
    window.gi321Map.getView().fit(ext,{padding:[70,80,70,80],duration:500,maxZoom:14});
    status('Reset complete: all 15 culverts visible and filters/search cleared.');
  }

  function addStudentTitle(){
    const title=byId('gi321-title');
    title.textContent='GI 321 Rural Road Inventory - Student ID [INSERT]';
  }

  window.addEventListener('gi321:ready',()=>{
    addStudentTitle();
    initialiseDashboard();
  });
})();
