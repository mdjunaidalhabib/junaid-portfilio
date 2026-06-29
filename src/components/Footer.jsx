export default function Footer() {
  return (
    <footer className="footer-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 text-center">

        {/* جَزَاكَ اللّهُ خَيْرًا — Beautiful Arabic display */}
        <div className="jazakallah-block">
          <div className="jazakallah-ornament orn-l">✦</div>
          <div className="jazakallah-ornament orn-r">✦</div>

          <div className="jazakallah-top-line" />

          <div dir="rtl" className="jazakallah-arabic">
            جَزَاكَ اللّهُ خَيْرًا
          </div>
          <div className="jazakallah-trans">
            জাযাকাল্লাহু খাইরান
          </div>
          <div className="jazakallah-meaning">
            আল্লাহ তোমাকে উত্তম প্রতিদান দিন
          </div>

          <div className="jazakallah-bottom-line" />
        </div>

        {/* Name */}
        <div style={{ fontFamily:"'Tiro Bangla',serif", fontSize:'1.5rem', color:'#0f172a', marginBottom:'4px', marginTop:'28px' }}>
          মোহাম্মদ জুনাইদ আল হাবিব
        </div>
        <div style={{ fontSize:'.82rem', color:'#64748b', marginBottom:'24px' }}>লেখক · মাদরাসা শিক্ষক · ইমাম ও খতিব</div>

        <div className="flex justify-center gap-3 mb-8">
          {[
            { d:<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>, label:'FB' },
            { d:<><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/></>, label:'YT' },
            { d:<><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>, stroke:true, href:'mailto:[email protected]', label:'Mail' },
          ].map((s, i) => (
            <a key={i} href={s.href||'#'} className="soc-btn" aria-label={s.label}>
              <svg width="16" height="16" fill={s.stroke?'none':'currentColor'} stroke={s.stroke?'currentColor':undefined} strokeWidth={s.stroke?'2':undefined} viewBox="0 0 24 24">{s.d}</svg>
            </a>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div style={{ width:'40px', height:'1px', background:'linear-gradient(90deg,transparent,rgba(34,197,94,.35))' }} />
          <div style={{ fontSize:'.9rem', color:'rgba(34,197,94,.4)' }}>✦</div>
          <div style={{ width:'40px', height:'1px', background:'linear-gradient(90deg,rgba(34,197,94,.35),transparent)' }} />
        </div>

        <div style={{ fontSize:'.78rem', color:'#94a3b8' }}>© ২০২৬ মোহাম্মদ জুনাইদ আল হাবিব · সর্বস্বত্ব সংরক্ষিত</div>
      </div>
    </footer>
  )
}
