import { useReveal } from '../hooks/useReveal'

const writings = [
  { type:'বই',    title:'[বইয়ের নাম লিখুন]', sub:'[প্রকাশনী] · ২০xx', icon:'📗', color:'var(--gold)' },
  { type:'বই',    title:'[বইয়ের নাম লিখুন]', sub:'[প্রকাশনী] · ২০xx', icon:'📘', color:'var(--gold)' },
  { type:'প্রবন্ধ', title:'[ম্যাগাজিন/পত্রিকার নাম]-এ নিয়মিত কলাম', sub:'চলমান', icon:'📰', color:'#22c55e' },
]

export default function Writings() {
  const ref = useReveal()
  return (
    <section id="lekhalekhi" ref={ref} className="reveal py-20">
      <div className="sec-pill">✦ লেখালেখি</div>
      <h2 className="sec-title">প্রকাশিত বই ও লেখা</h2>
      <div className="sec-accent-line" />

      <div className="flex flex-col gap-3">
        {writings.map((w, i) => (
          <a key={i} href="#" className="writing-row">
            <span style={{ fontSize:'1.6rem', flexShrink:0 }}>{w.icon}</span>
            <span style={{ fontSize:'.7rem', fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:w.color, flexShrink:0, width:'70px' }}>{w.type}</span>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ fontFamily:"'Tiro Bangla',serif", fontSize:'1.05rem', color:'var(--text)', marginBottom:'2px' }}>{w.title}</div>
              <div style={{ fontSize:'.8rem', color:'var(--text-2)' }}>{w.sub}</div>
            </div>
            <svg width="16" height="16" fill="none" stroke="rgba(201,168,76,.4)" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink:0 }}>
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        ))}
      </div>
    </section>
  )
}
