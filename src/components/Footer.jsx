export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(180deg,#f0fdf4,#dcfce7)', borderTop: '1px solid rgba(34,197,94,.15)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-center">
        <div style={{ fontFamily: "'Tiro Bangla', serif", fontSize: '1.5rem', color: '#0f172a', marginBottom: '6px' }}>মোহাম্মদ জুনাইদ আল হাবিব</div>
        <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '20px' }}>লেখক · মাদরাসা শিক্ষক · ইমাম ও খতিব</div>
        <div className="flex justify-center gap-3 mb-8">
          {[
            { d: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>, label: 'FB' },
            { d: <><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/></>, label: 'YT' },
            { d: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>, stroke: true, href: 'mailto:[email protected]', label: 'Mail' },
          ].map((s, i) => (
            <a key={i} href={s.href || '#'} className="soc-btn" aria-label={s.label}>
              <svg width="16" height="16" fill={s.stroke ? 'none' : 'currentColor'} stroke={s.stroke ? 'currentColor' : undefined} strokeWidth={s.stroke ? '2' : undefined} viewBox="0 0 24 24">{s.d}</svg>
            </a>
          ))}
        </div>
        <div style={{ width: '48px', height: '1px', background: 'rgba(34,197,94,.25)', margin: '0 auto 16px' }} />
        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>© ২০২৬ মোহাম্মদ জুনাইদ আল হাবিব · সর্বস্বত্ব সংরক্ষিত</div>
      </div>
    </footer>
  )
}
