import { useReveal } from '../hooks/useReveal'
export default function About() {
  const ref = useReveal()
  return (
    <section id="porichiti" ref={ref} className="reveal py-20">
      <div className="sec-pill">✦ পরিচিতি</div>
      <h2 className="sec-title">আমার সম্পর্কে</h2>
      <div className="sec-accent-line"/>
      <div className="grid md:grid-cols-[1fr_250px] gap-10 items-start">
        <div style={{ fontSize:'1rem', lineHeight:'2', color:'#334155' }}>
          <p style={{ marginBottom:'18px', fontSize:'1.02rem', color:'#0f172a' }}>
            <span style={{ fontFamily:"'Tiro Bangla',serif", fontSize:'3.4rem', float:'left', lineHeight:.85, paddingRight:'12px', paddingTop:'6px', color:'#22c55e' }}>ম</span>
            োহাম্মদ জুনাইদ আল হাবিব একজন লেখক, মাদরাসা শিক্ষক এবং খতিব। দীর্ঘদিন ধরে তিনি দ্বীনি শিক্ষা ও দাওয়াতের কাজে যুক্ত আছেন এবং পাশাপাশি ইসলামি বিষয়ে লেখালেখি করে চলেছেন।
          </p>
          <p style={{ marginBottom:'18px' }}>তাঁর লেখার মূল বিষয় কুরআন-হাদীসের আলোকে সমকালীন জীবনের প্রশ্ন, ইসলামি ইতিহাস এবং সমাজ-সংস্কার।</p>
          <p>এই পাতাটি তাঁর শিক্ষাজীবন, দায়িত্ব ও প্রকাশিত লেখার একটি সংক্ষিপ্ত পরিচিতি।</p>
        </div>
        <div className="card p-6">
          {[{label:'মূল পরিচয়',value:'লেখক, মাদরাসা শিক্ষক, ইমাম ও খতিব'},{label:'বিশেষায়ন',value:'তাফসীর ও হাদীস'},{label:'ভাষা',value:'বাংলা, আরবি'}].map(({label,value},i)=>(
            <div key={label} style={{ marginBottom:i<2?'18px':0, paddingBottom:i<2?'18px':0, borderBottom:i<2?'1px solid #f1f5f9':'none' }}>
              <div style={{ fontSize:'.62rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'.14em', color:'#22c55e', marginBottom:'3px' }}>{label}</div>
              <div style={{ fontSize:'.88rem', color:'#334155', fontWeight:500 }}>{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
