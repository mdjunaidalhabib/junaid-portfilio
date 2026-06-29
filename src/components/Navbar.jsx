import { useState, useEffect, useRef } from 'react'

const navItems = [
  { href: '#porichiti', label: 'পরিচিতি' },
  { href: '#shikkha',   label: 'শিক্ষাজীবন' },
  { href: '#dayitto',   label: 'দায়িত্ব' },
  { href: '#lekhalekhi',label: 'লেখালেখি' },
]

export default function Navbar({ navImage, onNavImageChange }) {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active,   setActive]     = useState('')
  const fileRef = useRef(null)

  useEffect(() => {
    const ids = ['porichiti','shikkha','dayitto','lekhalekhi','jogajog']
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      let cur = ''
      ids.forEach(id => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 140) cur = '#' + id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleFile = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    onNavImageChange?.(url)
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'nav-glass' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline group">
          {/* Clickable avatar / upload */}
          <div className="nav-logo-icon" title="ছবি আপলোড করতে ক্লিক করুন">
            {navImage
              ? <img src={navImage} alt="logo" style={{ display:'block' }} />
              : <span style={{ fontFamily:"'Tiro Bangla',serif", color:'#16a34a', fontSize:'.9rem', fontWeight:700 }}>জু</span>
            }
            <div className="nav-upload-hint">ছবি<br/>বদলান</div>
            <input type="file" accept="image/*" onChange={handleFile} style={{ position:'absolute', inset:0, opacity:0, cursor:'pointer', width:'100%', height:'100%', zIndex:2 }} />
          </div>
          <div>
            <div style={{ fontFamily:"'Tiro Bangla',serif", color:'#0f172a', fontSize:'1rem', fontWeight:600, lineHeight:1.2 }}>জুনাইদ আল হাবিব</div>
            <div style={{ fontSize:'.58rem', color:'#16a34a', letterSpacing:'.12em', textTransform:'uppercase' }}>আলিম · লেখক · শিক্ষক</div>
          </div>
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(i => (
            <a key={i.href} href={i.href} className={`nav-link ${active===i.href?'active':''}`}>{i.label}</a>
          ))}
          <a href="#jogajog" className="btn-primary !py-2.5 !px-5 !text-[.82rem]">যোগাযোগ</a>
        </nav>

        {/* Hamburger */}
        <button className="md:hidden p-2 rounded-lg" aria-label="মেনু"
          style={{ color:'#475569', background: menuOpen?'rgba(34,197,94,.08)':'transparent', border:'none', cursor:'pointer' }}
          onClick={() => setMenuOpen(v=>!v)}>
          {menuOpen
            ? <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
          }
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2"
          style={{ background:'rgba(255,255,255,.97)', backdropFilter:'blur(20px)', borderTop:'1px solid rgba(34,197,94,.1)', animation:'nav-drop .25s ease' }}>
          <div className="flex flex-col gap-1">
            {navItems.map(i => (
              <a key={i.href} href={i.href} onClick={()=>setMenuOpen(false)}
                className="block px-4 py-3 rounded-xl no-underline text-[.95rem] font-medium"
                style={{ color:'#374151' }}
                onMouseOver={e=>{e.currentTarget.style.background='rgba(34,197,94,.07)';e.currentTarget.style.color='#16a34a'}}
                onMouseOut={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color='#374151'}}>
                {i.label}
              </a>
            ))}
            <a href="#jogajog" onClick={()=>setMenuOpen(false)} className="btn-primary mt-2 justify-center">যোগাযোগ করুন</a>
          </div>
        </div>
      )}
    </header>
  )
}
