import { useEffect, useState } from 'react'

export default function Hero({ heroImage, onHeroImageChange }) {
  const [vis, setVis] = useState(false)
  useEffect(() => { setTimeout(() => setVis(true), 100) }, [])

  const handleFile = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    onHeroImageChange?.(url)
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background:'#ffffff' }}>
      <div className="mesh-bg absolute inset-0 pointer-events-none" />
      <div className="grid-pattern absolute inset-0 pointer-events-none" style={{ opacity:.6 }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle,rgba(34,197,94,.07) 0%,transparent 65%)', transform:'translate(30%,-30%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle,rgba(74,222,128,.04) 0%,transparent 65%)', transform:'translate(-30%,30%)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-12 w-full">

        {/* Equal 2-column grid */}
        <div className="hero-grid">

          {/* ── LEFT: PHOTO ── */}
          <div className="hero-left"
            style={{ opacity:vis?1:0, transform:vis?'translateX(0)':'translateX(-40px)', transition:'all .8s cubic-bezier(.22,1,.36,1) .3s' }}>
            <div className="photo-outer">
              <div className="ring-spin" />
              <div className="ring-spin-rev" />

              <div className="photo-circle" title="ছবি আপলোড করতে ক্লিক করুন">
                {heroImage
                  ? <img src={heroImage} alt="প্রোফাইল" style={{ display:'block' }} />
                  : (
                    <div className="text-center select-none">
                      <div style={{ fontFamily:"'Tiro Bangla',serif", fontSize:'5.5rem', lineHeight:1, color:'rgba(22,163,74,.25)' }}>জু</div>
                      <div style={{ fontSize:'.65rem', color:'rgba(22,163,74,.35)', marginTop:'8px', letterSpacing:'.05em' }}>ছবি যোগ করুন</div>
                    </div>
                  )
                }
                {/* Hover overlay */}
                <div className="photo-upload-hint">
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  <span>ছবি আপলোড</span>
                </div>
                <input type="file" accept="image/*" onChange={handleFile} />
              </div>
              <div className="photo-badge">✦ আলিম ও খতিব</div>
            </div>
          </div>

          {/* ── RIGHT: INFO ── */}
          <div className="hero-right"
            style={{ opacity:vis?1:0, transform:vis?'translateX(0)':'translateX(40px)', transition:'all .8s cubic-bezier(.22,1,.36,1) .5s' }}>

            <h1 className="shimmer-text"
              style={{ fontFamily:"'Tiro Bangla',serif", fontSize:'clamp(2.2rem,5vw,3.4rem)', lineHeight:1.35, marginBottom:'18px', display:'block' }}>
              জুনাইদ আল হাবিব
            </h1>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              {['লেখক','মাদরাসা শিক্ষক','ইমাম ও খতিব'].map(r => (
                <span key={r} style={{ fontSize:'.78rem', fontWeight:600, padding:'4px 13px', borderRadius:'9999px',
                  background:'rgba(34,197,94,.07)', color:'#16a34a', border:'1px solid rgba(34,197,94,.2)' }}>{r}</span>
              ))}
            </div>

            {/* Contacts */}
            <div className="flex flex-col gap-2.5 mb-5">
              {[
                { icon:<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.22 2 2 0 012.22.01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>, label:'+880 1XXXXXXXXX', note:'(নম্বর দিন)' },
                { icon:<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>, label:'ঢাকা, বাংলাদেশ' },
                { icon:<><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>, label:'[email protected]', href:'mailto:[email protected]' },
              ].map((item,i) => (
                <div key={i} className="flex items-center gap-2.5" style={{ fontSize:'.85rem' }}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background:'rgba(34,197,94,.07)', border:'1px solid rgba(34,197,94,.18)' }}>
                    <svg width="12" height="12" fill="none" stroke="#22c55e" strokeWidth="2" viewBox="0 0 24 24">{item.icon}</svg>
                  </div>
                  {item.href
                    ? <a href={item.href} style={{ color:'#16a34a', textDecoration:'none', fontWeight:500 }}>{item.label}</a>
                    : <span style={{ color:'#475569' }}>{item.label}{item.note&&<span style={{ color:'rgba(22,163,74,.55)', fontSize:'.73rem', marginLeft:'5px' }}>{item.note}</span>}</span>
                  }
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-2 mb-6">
              {[
                { label:'ফেসবুক', fill:true, d:<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/> },
                { label:'ইউটিউব', fill:true, d:<><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon fill="currentColor" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></> },
                { label:'টেলিগ্রাম', fill:false, d:<><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></> },
                { label:'টুইটার', fill:true, d:<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/> },
              ].map(({ label, d, fill }) => (
                <a href="#" key={label} className="soc-btn" aria-label={label}>
                  <svg width="15" height="15" fill={fill?'currentColor':'none'} stroke={fill?undefined:'currentColor'} strokeWidth={fill?undefined:'2'} viewBox="0 0 24 24">{d}</svg>
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a href="#jogajog" className="btn-primary">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                যোগাযোগ করুন
              </a>
              <a href="#" className="btn-secondary">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                জীবনবৃত্তান্ত
              </a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          style={{ opacity:vis?.4:0, transition:'opacity 1s ease 1.2s' }}>
          <span style={{ fontSize:'.62rem', letterSpacing:'.18em', textTransform:'uppercase', color:'#94a3b8' }}>স্ক্রল করুন</span>
          <svg width="14" height="14" fill="none" stroke="#94a3b8" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </div>
    </section>
  )
}
