import { useEffect, useRef, useState } from 'react'

const stats = [
  { val:12,   suf:'+',  label:'বছরের অভিজ্ঞতা', icon:'🕌' },
  { val:50,   suf:'+',  label:'প্রকাশিত রচনা',  icon:'✍️' },
  { val:5,    suf:'টি', label:'প্রকাশিত বই',    icon:'📚' },
  { val:1000, suf:'+',  label:'ছাত্র-ছাত্রী',   icon:'🎓' },
]

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(()=>0))
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        setStarted(true)
        stats.forEach((s,i) => {
          let v=0; const step=Math.max(1,Math.ceil(s.val/90))
          const t=setInterval(()=>{ v=Math.min(v+step,s.val); setCounts(p=>{const n=[...p];n[i]=v;return n}); if(v>=s.val)clearInterval(t) },18)
        })
      }
    },{ threshold:.3 })
    if(ref.current) obs.observe(ref.current)
    return ()=>obs.disconnect()
  },[started])

  return (
    <div ref={ref} style={{ background:'linear-gradient(135deg,#f0fdf4,#f8fafc)', borderTop:'1px solid rgba(34,197,94,.1)', borderBottom:'1px solid rgba(34,197,94,.08)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s,i)=>(
          <div key={i} className="stat-card">
            <div style={{ fontSize:'1.5rem', marginBottom:'6px' }}>{s.icon}</div>
            <div className="stat-num">{counts[i].toLocaleString('bn')}{s.suf}</div>
            <div style={{ fontSize:'.8rem', color:'#64748b', marginTop:'4px' }}>{s.label}</div>
            <div className="stat-bar-line"/>
          </div>
        ))}
      </div>
    </div>
  )
}
