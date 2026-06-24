import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()
  return (
    <section id="jogajog" ref={ref} className="reveal py-20">
      <div className="sec-pill">যোগাযোগ</div>
      <h2 className="sec-title">যোগাযোগ করুন</h2>
      <div className="sec-accent-line" />

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Direct contact */}
        <div className="card p-6 sm:p-7">
          <div style={{ fontFamily: "'Tiro Bangla', serif", fontSize: '1.1rem', color: '#0f172a', marginBottom: '20px', fontWeight: 600 }}>প্রত্যক্ষ যোগাযোগ</div>
          <div className="flex flex-col gap-4">
            {[
              { icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>, label: 'ইমেইল', value: '[email protected]', href: 'mailto:[email protected]' },
              { icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.22 2 2 0 012.22.01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>, label: 'মোবাইল', value: '+880 1XXXXXXXXX', href: 'tel:+8801XXXXXXXXX' },
              { icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>, label: 'ঠিকানা', value: 'ঢাকা, বাংলাদেশ' },
            ].map(({ icon, label, value, href }) => (
              <div key={label} className="contact-item">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(34,197,94,.08)', border: '1px solid rgba(34,197,94,.16)' }}>
                  <svg width="14" height="14" fill="none" stroke="#22c55e" strokeWidth="2" viewBox="0 0 24 24">{icon}</svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#22c55e', marginBottom: '3px' }}>{label}</div>
                  {href
                    ? <a href={href} style={{ fontSize: '0.9rem', color: '#334155', textDecoration: 'none', fontWeight: 500, transition: 'color .2s' }}
                        onMouseOver={e => e.target.style.color='#16a34a'} onMouseOut={e => e.target.style.color='#334155'}>{value}</a>
                    : <span style={{ fontSize: '0.9rem', color: '#334155', fontWeight: 500 }}>{value}</span>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social */}
        <div className="card p-6 sm:p-7">
          <div style={{ fontFamily: "'Tiro Bangla', serif", fontSize: '1.1rem', color: '#0f172a', marginBottom: '20px', fontWeight: 600 }}>সামাজিক মাধ্যম</div>
          <div className="flex flex-col gap-3">
            {[
              { label: 'ফেসবুক পেজ', emoji: '📘', color: '#3b82f6', bg: 'rgba(59,130,246,.06)', border: 'rgba(59,130,246,.25)' },
              { label: 'ইউটিউব চ্যানেল', emoji: '▶️', color: '#ef4444', bg: 'rgba(239,68,68,.06)', border: 'rgba(239,68,68,.25)' },
              { label: 'টেলিগ্রাম', emoji: '✈️', color: '#0ea5e9', bg: 'rgba(14,165,233,.06)', border: 'rgba(14,165,233,.25)' },
            ].map(s => (
              <a key={s.label} href="#" className="social-row"
                onMouseOver={e => { e.currentTarget.style.borderColor = s.border; e.currentTarget.style.background = s.bg; e.currentTarget.style.color = s.color }}
                onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(15,23,42,.08)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#475569' }}>
                <span style={{ fontSize: '1.2rem' }}>{s.emoji}</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{s.label}</span>
                <span style={{ marginLeft: 'auto', opacity: 0.35, fontSize: '0.9rem' }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
