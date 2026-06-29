import { useReveal } from '../hooks/useReveal'

const roles = [
  {
    icon:'🕌', title:'ইমাম ও খতিব',
    desc:'[মসজিদের নাম লিখুন] — সাল ২০xx থেকে নিয়মিত ইমামতি ও জুমার খুতবা পরিচালনা করছেন।',
    accent:'var(--gold)', bg:'rgba(201,168,76,.06)',
  },
  {
    icon:'📖', title:'মাদরাসা শিক্ষক',
    desc:'[মাদরাসার নাম লিখুন] — তাফসীর, হাদীস ও আরবি সাহিত্য বিভাগে শিক্ষকতা করছেন।',
    accent:'#22c55e', bg:'rgba(34,197,94,.06)',
  },
  {
    icon:'✍️', title:'লেখক',
    desc:'বিভিন্ন ইসলামি ম্যাগাজিন ও অনলাইন প্ল্যাটফর্মে নিয়মিত প্রবন্ধ ও বই লিখে চলেছেন।',
    accent:'var(--gold)', bg:'rgba(201,168,76,.06)',
  },
]

export default function Roles() {
  const ref = useReveal()
  return (
    <section id="dayitto" ref={ref} className="reveal py-20">
      <div className="sec-pill">✦ দায়িত্ব</div>
      <h2 className="sec-title">কর্মক্ষেত্র ও দায়িত্ব</h2>
      <div className="sec-accent-line" />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {roles.map((r, i) => (
          <div key={i} className="role-card card p-6 sm:p-7 relative overflow-hidden cursor-default"
            onMouseOver={e => e.currentTarget.style.background = r.bg}
            onMouseOut={e => e.currentTarget.style.background = 'var(--surface)'}>

            {/* Corner ornament top-left */}
            <div style={{ position:'absolute', top:'12px', left:'12px', width:'18px', height:'18px', borderTop:`1px solid ${r.accent}`, borderLeft:`1px solid ${r.accent}`, borderRadius:'3px 0 0 0', opacity:.3 }} />

            <div className="text-3xl mb-4 mt-2">{r.icon}</div>
            <div style={{ fontFamily:"'Tiro Bangla',serif", fontSize:'1.2rem', color:'var(--text)', marginBottom:'10px' }}>{r.title}</div>
            <p style={{ fontSize:'.875rem', lineHeight:'1.75', color:'var(--text-2)' }}>{r.desc}</p>
            <div className="role-bar" style={{ background:`linear-gradient(90deg,${r.accent},transparent)` }} />
          </div>
        ))}
      </div>
    </section>
  )
}
