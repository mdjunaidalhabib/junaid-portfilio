import { useReveal } from '../hooks/useReveal'

const roles = [
  {
    icon: '🕌',
    title: 'ইমাম ও খতিব',
    desc: '[মসজিদের নাম লিখুন] — সাল ২০xx থেকে নিয়মিত ইমামতি ও জুমার খুতবা পরিচালনা করছেন।',
    accent: '#22c55e',
    bg: 'rgba(34,197,94,.06)',
  },
  {
    icon: '📖',
    title: 'মাদরাসা শিক্ষক',
    desc: '[মাদরাসার নাম লিখুন] — তাফসীর, হাদীস ও আরবি সাহিত্য বিভাগে শিক্ষকতা করছেন।',
    accent: '#d4a843',
    bg: 'rgba(212,168,67,.06)',
  },
  {
    icon: '✍️',
    title: 'লেখক',
    desc: 'বিভিন্ন ইসলামি ম্যাগাজিন ও অনলাইন প্ল্যাটফর্মে নিয়মিত প্রবন্ধ ও বই লিখে চলেছেন।',
    accent: '#22c55e',
    bg: 'rgba(34,197,94,.06)',
  },
]

export default function Roles() {
  const ref = useReveal()
  return (
    <section id="dayitto" ref={ref} className="reveal py-20">
      <div className="sec-pill">দায়িত্ব</div>
      <h2 className="sec-title">কর্মক্ষেত্র ও দায়িত্ব</h2>
      <div className="sec-accent-line" />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {roles.map((r, i) => (
          <div key={i} className="role-card card p-6 sm:p-7 relative overflow-hidden cursor-default"
            style={{ background: '#fff' }}
            onMouseOver={e => e.currentTarget.style.background = r.bg}
            onMouseOut={e => e.currentTarget.style.background = '#fff'}>
            <div className="text-3xl mb-4">{r.icon}</div>
            <div style={{ fontFamily: "'Tiro Bangla', serif", fontSize: '1.2rem', color: '#0f172a', marginBottom: '10px' }}>{r.title}</div>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.75', color: '#64748b' }}>{r.desc}</p>
            <div className="role-bar" style={{ background: `linear-gradient(90deg, ${r.accent}, transparent)` }} />
          </div>
        ))}
      </div>
    </section>
  )
}
