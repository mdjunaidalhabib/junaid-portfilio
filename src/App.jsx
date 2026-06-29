import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import Stats     from './components/Stats'
import About     from './components/About'
import Education from './components/Education'
import Roles     from './components/Roles'
import Writings  from './components/Writings'
import Quote     from './components/Quote'
import Contact   from './components/Contact'
import Footer    from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen" style={{ background:'#f8fafc', color:'#0f172a' }}>
      <Navbar />
      <Hero />
      <Stats />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <About />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Roles />
        <div className="section-divider" />
        <Writings />
        <Quote />
        <div className="section-divider" />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
