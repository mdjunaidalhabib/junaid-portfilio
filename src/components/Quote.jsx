import { useReveal } from '../hooks/useReveal'

export default function Quote() {
  const ref = useReveal()
  return (
    <section ref={ref} className="reveal pb-20">
      <div className="relative overflow-hidden rounded-3xl text-center py-16 px-6 sm:px-12"
        style={{ background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', border: '1px solid rgba(34,197,94,.2)' }}>
        <div className="absolute inset-0 grid-pattern pointer-events-none" style={{ opacity: 0.5 }} />
        <div className="relative z-10">
          <div style={{ fontFamily: 'Georgia, serif', fontSize: '4rem', lineHeight: 1, color: 'rgba(34,197,94,.2)', marginBottom: '8px' }}>"</div>
          <p dir="rtl" style={{ fontFamily: "'Amiri', serif", fontSize: 'clamp(1.4rem,4vw,1.8rem)', color: '#0f172a', marginBottom: '12px', lineHeight: 1.6 }}>
            إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ
          </p>
          <p style={{ fontFamily: "'Tiro Bangla', serif", fontSize: 'clamp(1rem,2.5vw,1.15rem)', color: '#334155', maxWidth: '440px', margin: '0 auto 12px', lineHeight: 1.9 }}>
            "নিশ্চয়ই কাজের ফলাফল নিয়তের উপর নির্ভরশীল।"
          </p>
          <div style={{ fontSize: '0.85rem', color: '#64748b', letterSpacing: '0.04em' }}>— হাদীস, বুখারী ও মুসলিম</div>
          <div className="flex justify-center items-center gap-2 mt-5">
            <div style={{ width: '8px', height: '3px', background: 'rgba(34,197,94,.3)', borderRadius: '2px' }} />
            <div style={{ width: '28px', height: '3px', background: '#22c55e', borderRadius: '2px' }} />
            <div style={{ width: '8px', height: '3px', background: 'rgba(34,197,94,.3)', borderRadius: '2px' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
