import { useReveal } from '../hooks/useReveal'

const educations = [
  { year:'২০XX', degree:'দাওরায়ে হাদীস (তাকমিল)', inst:'[প্রতিষ্ঠানের নাম]', badge:'সর্বোচ্চ ফলাফলে উত্তীর্ণ', highlight:true },
  { year:'২০XX', degree:'ফাজিল / আলিম', inst:'[প্রতিষ্ঠানের নাম]' },
  { year:'২০XX', degree:'মাধ্যমিক (দাখিল)', inst:'[প্রতিষ্ঠানের নাম]' },
]

export default function Education() {
  const ref = useReveal()
  return (
    <section id="shikkha" ref={ref} className="reveal py-20">
      <div className="sec-pill">✦ শিক্ষাজীবন</div>
      <h2 className="sec-title">শিক্ষাগত যোগ্যতা</h2>
      <div className="sec-accent-line" />

      <div className="relative">
        <div className="absolute left-[19px] top-0 bottom-0 hidden sm:block"
          style={{ width:'2px', background:'linear-gradient(to bottom,var(--gold),rgba(201,168,76,.08))' }} />

        <div className="flex flex-col gap-5">
          {educations.map((edu, i) => (
            <div key={i} className="flex items-start gap-5 sm:gap-6">
              <div className="hidden sm:flex flex-col items-center flex-shrink-0" style={{ marginTop:'4px' }}>
                <div className="edu-dot" style={{ background: edu.highlight ? 'var(--gold)' : 'rgba(201,168,76,.3)', boxShadow: edu.highlight ? '0 0 0 4px rgba(201,168,76,.15), 0 0 12px rgba(201,168,76,.25)' : '0 0 0 4px rgba(201,168,76,.08)' }} />
              </div>
              <div className="card p-5 sm:p-6 flex-1 flex items-center gap-4 sm:gap-5"
                style={{ borderLeft:`2px solid ${edu.highlight ? 'var(--gold)' : 'rgba(201,168,76,.2)'}`, borderTopLeftRadius:'4px', borderBottomLeftRadius:'4px' }}>
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-center"
                  style={{ background: edu.highlight ? 'rgba(201,168,76,.1)' : 'rgba(201,168,76,.04)', border:`1px solid ${edu.highlight ? 'rgba(201,168,76,.3)' : 'rgba(201,168,76,.1)'}` }}>
                  <span style={{ fontSize:'.66rem', fontWeight:700, color: edu.highlight ? 'var(--gold)' : 'rgba(201,168,76,.4)', lineHeight:1.2, textAlign:'center' }}>{edu.year}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div style={{ fontFamily:"'Tiro Bangla',serif", fontSize:'1.1rem', color:'var(--text)', marginBottom:'4px' }}>{edu.degree}</div>
                  <div style={{ fontSize:'.85rem', color:'var(--text-2)', marginBottom:'6px' }}>{edu.inst}</div>
                  {edu.badge && (
                    <span style={{ fontSize:'.7rem', fontWeight:600, padding:'3px 10px', borderRadius:'9999px', color:'var(--gold)', border:'1px solid rgba(201,168,76,.25)', background:'rgba(201,168,76,.07)' }}>
                      ✓ {edu.badge}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
