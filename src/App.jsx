import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import AboutUs from './components/sections/AboutUs'
import Features from './components/sections/Features'

export default function App() {
  return (
    <div className="min-h-screen bg-[#edecec] font-sans text-[#172036]">
      {/* Hero section wraps Navbar so the absolute navbar positions inside the hero */}
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      <main>
        <Stats />
        <AboutUs />
        <Features />
      </main>
    </div>
  )
}
