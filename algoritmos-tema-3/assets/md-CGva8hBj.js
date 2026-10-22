import{L as e,T as t,X as n,_ as r,_t as i,g as a,ht as o}from"./modules/shiki-C0R7LaqV.js";import{et as s,tt as c}from"./index-CtdCIrzr.js";import{t as l}from"./slidev/default-tobNShdw.js";var u={__name:`slides.md__slidev_4`,setup(u){let{$slidev:d,$nav:f,$clicksContext:p,$clicks:m,$page:h,$renderContext:g,$frontmatter:_}=c();return p.setup(),(c,u)=>(e(),r(l,i(t(o(s)(o(_),3))),{default:n(()=>[...u[0]||=[a(`div`,{class:`eyebrow`},`01 · Lenguaje vacío o no vacío`,-1),a(`h1`,null,`Vacío o no vacío: procedimiento`,-1),a(`pre`,null,`R ← {q₀}
pendientes ← [q₀]
mientras haya estados pendientes:
    extraer el primero de pendientes: q
    para a = 0 y después a = 1:
        añadir a R y al final de pendientes los sucesores nuevos
si R ∩ F = ∅: devolver «vacío»
si no: devolver «no vacío»`,-1),a(`div`,{class:`note`},`Un sucesor es nuevo si aún no pertenece a R. La cola pendientes se atiende de izquierda a derecha (BFS).`,-1),a(`p`,{class:`small`},`Coste: O(|Q| + |E|), con E el conjunto de transiciones.`,-1)]]),_:1},16))}};export{u as default};