import { useReveal } from '../hooks/useReveal'
export default function About() {
  const ref = useReveal()
  return (
    <section id="porichiti" ref={ref} className="opacity-0 translate-y-7 transition-[opacity,transform] duration-[650ms] ease-[cubic-bezier(.22,1,.36,1)] py-20
      [&.visible]:opacity-100 [&.visible]:translate-y-0">
      <div className="inline-flex items-center gap-1.5 text-[.6rem] font-bold tracking-[.2em] uppercase
        text-green-700 bg-green-500/7 border border-green-400/20 px-3 py-1 rounded-full mb-2.5">
        ✦ পরিচিতি
      </div>
      <h2 className="font-['Tiro_Bangla'] text-slate-900 mb-2 leading-tight" style={{ fontSize: 'clamp(1.6rem,4vw,2.2rem)' }}>
        আমার সম্পর্কে
      </h2>
      <div className="h-0.5 w-10 bg-gradient-to-r from-green-400 to-transparent rounded mb-9" />

      <div className="grid md:grid-cols-[1fr_250px] gap-10 items-start">
        <div className="text-base leading-loose text-slate-600">
          <p className="mb-4 text-[1.02rem] text-slate-900">
            <span className="font-['Tiro_Bangla'] text-[3.4rem] float-left leading-[.85] pr-3 pt-1.5 text-green-400">ম</span>
            োহাম্মদ জুনাইদ আল হাবিব একজন লেখক, মাদরাসা শিক্ষক এবং খতিব। দীর্ঘদিন ধরে তিনি দ্বীনি শিক্ষা ও দাওয়াতের কাজে যুক্ত আছেন এবং পাশাপাশি ইসলামি বিষয়ে লেখালেখি করে চলেছেন।
          </p>
          <p className="mb-4">তাঁর লেখার মূল বিষয় কুরআন-হাদীসের আলোকে সমকালীন জীবনের প্রশ্ন, ইসলামি ইতিহাস এবং সমাজ-সংস্কার।</p>
          <p>এই পাতাটি তাঁর শিক্ষাজীবন, দায়িত্ব ও প্রকাশিত লেখার একটি সংক্ষিপ্ত পরিচিতি।</p>
        </div>
        <div className="bg-white border border-slate-900/7 rounded-2xl shadow-[0_1px_6px_rgba(0,0,0,.04),0_4px_18px_rgba(0,0,0,.03)] p-6">
          {[
            {label:'মূল পরিচয়', value:'লেখক, মাদরাসা শিক্ষক, ইমাম ও খতিব'},
            {label:'বিশেষায়ন', value:'তাফসীর ও হাদীস'},
            {label:'ভাষা', value:'বাংলা, আরবি'},
          ].map(({label,value},i)=>(
            <div key={label} className={i<2 ? 'mb-4 pb-4 border-b border-slate-100' : ''}>
              <div className="text-[.62rem] font-bold uppercase tracking-[.14em] text-green-400 mb-0.5">{label}</div>
              <div className="text-[.88rem] text-slate-600 font-medium">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
