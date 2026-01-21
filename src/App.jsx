import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './components/pages/About'
import Resume from './components/pages/Resume'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('about')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'dark'
  })

  useEffect(() => {
    // Refresh AOS animations when page changes
    if (window.AOS) {
      window.AOS.refresh()
    }
  }, [currentPage])

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleThemeToggle = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const pages = {
    about: <About isActive={currentPage === 'about'} />,
    resume: <Resume isActive={currentPage === 'resume'} />,
    portfolio: <Portfolio isActive={currentPage === 'portfolio'} />,
    contact: <Contact isActive={currentPage === 'contact'} />
  }

  return (
    <main>
      <Sidebar 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
      />
      
      <div className="main-content">
        <Navbar 
          currentPage={currentPage} 
          onPageChange={setCurrentPage}
          theme={theme}
          onThemeToggle={handleThemeToggle}
        />
        
        <div className="pages-container">
          {pages[currentPage]}
        </div>
      </div>
    </main>
  )
}

export default App
