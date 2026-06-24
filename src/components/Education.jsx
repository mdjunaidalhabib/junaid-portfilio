import { useReveal } from '../hooks/useReveal'

const educations = [
  { year: '২০XX', degree: 'দাওরায়ে হাদীস (তাকমিল)', inst: '[প্রতিষ্ঠানের নাম]', badge: 'সর্বোচ্চ ফলাফলে উত্তীর্ণ', highlight: true },
  { year: '২০XX', degree: 'ফাজিল / আলিম', inst: '[প্রতিষ্ঠানের নাম]' },
  { year: '২০XX', degree: 'মাধ্যমিক (দাখিল)', inst: '[প্রতিষ্ঠানের নাম]' },
]

export default function Education() {
  const ref = useReveal()
  return (
    <section id="shikkha" ref={ref} className="reveal py-20">
      <div className="sec-pill">শিক্ষাজীবন</div>
      <h2 className="sec-title">শিক্ষাগত যোগ্যতা</h2>
      <div className="sec-accent-line" />

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-[19px] top-0 bottom-0 hidden sm:block" style={{ width: '2px', background: 'linear-gradient(to bottom, #22c55e, rgba(34,197,94,.1))' }} />

        <div className="flex flex-col gap-5">
          {educations.map((edu, i) => (
            <div key={i} className="flex items-start gap-5 sm:gap-6 group">
              {/* dot */}
              <div className="hidden sm:flex flex-col items-center flex-shrink-0" style={{ marginTop: '4px' }}>
                <div className="edu-dot" style={{ background: edu.highlight ? '#22c55e' : 'rgba(34,197,94,.4)' }} />
              </div>
              {/* card */}
              <div className="card p-5 sm:p-6 flex-1 flex items-center gap-4 sm:gap-5"
                style={{ borderLeft: `3px solid ${edu.highlight ? '#22c55e' : 'rgba(34,197,94,.25)'}`, borderTopLeftRadius: '4px', borderBottomLeftRadius: '4px' }}>
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-center"
                  style={{ background: edu.highlight ? 'rgba(34,197,94,.1)' : 'rgba(34,197,94,.05)', border: `1px solid ${edu.highlight ? 'rgba(34,197,94,.3)' : 'rgba(34,197,94,.12)'}` }}>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: edu.highlight ? '#16a34a' : '#86a98f', lineHeight: 1.2, textAlign: 'center' }}>{edu.year}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div style={{ fontFamily: "'Tiro Bangla', serif", fontSize: '1.1rem', color: '#0f172a', marginBottom: '3px' }}>{edu.degree}</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '6px' }}>{edu.inst}</div>
                  {edu.badge && (
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, padding: '3px 10px', borderRadius: '9999px', color: '#16a34a', border: '1px solid rgba(34,197,94,.25)', background: 'rgba(34,197,94,.07)' }}>
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
