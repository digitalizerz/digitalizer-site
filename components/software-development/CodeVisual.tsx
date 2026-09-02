export function CodeVisual() {
  return (
    <aside
      aria-hidden
      className="overflow-hidden rounded-sm border border-white/10 bg-[#0a0c0e] p-6 font-mono text-[0.78rem] leading-7 text-white/70 md:p-8"
    >
      <p className="text-white/30">// Illustrative — not Digitalizer source.</p>
      <p>
        <span className="text-brand-blue">function</span>{" "}
        <span className="text-white">createSolution</span>
        <span className="text-white/45">(problem) {"{"}</span>
      </p>
      <p className="pl-5">
        <span className="text-brand-blue">const</span> insight ={" "}
        <span className="text-brand-green">discover</span>
        <span className="text-white/45">(problem)</span>
      </p>
      <p className="pl-5">
        <span className="text-brand-blue">const</span> strategy ={" "}
        <span className="text-brand-green">define</span>
        <span className="text-white/45">(insight)</span>
      </p>
      <p className="pl-5">
        <span className="text-brand-blue">const</span> design ={" "}
        <span className="text-brand-green">designSolution</span>
        <span className="text-white/45">(strategy)</span>
      </p>
      <p className="pl-5">
        <span className="text-brand-blue">const</span> build ={" "}
        <span className="text-brand-green">develop</span>
        <span className="text-white/45">(design)</span>
      </p>
      <p className="pl-5">
        <span className="text-brand-blue">const</span> test ={" "}
        <span className="text-brand-green">ensureQuality</span>
        <span className="text-white/45">(build)</span>
      </p>
      <p className="mt-3 pl-5">
        <span className="text-brand-blue">return</span>{" "}
        <span className="text-brand-green">deploy</span>
        <span className="text-white/45">(test)</span>
      </p>
      <p className="text-white/45">{"}"}</p>
      <p className="mt-6 text-white/30">// Software that adapts.</p>
      <p className="text-white/30">// Technology that empowers.</p>
      <p className="text-white/30">// Impact that lasts.</p>
    </aside>
  );
}
