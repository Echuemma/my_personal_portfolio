function Navbar({ currentPage, onPageChange, theme, onThemeToggle }) {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className="navbar" data-aos="fade-up">
      <ul className="navbar-list">
        {navItems.map((item, index) => (
          <li key={item.id} className="navbar-item" data-aos="fade-up" data-aos-delay={100 + index * 50}>
            <button
              className={`navbar-link ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => onPageChange(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      
      <button className="theme-toggle" onClick={onThemeToggle} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
        {theme === 'dark' ? (
          <ion-icon name="sunny-outline"></ion-icon>
        ) : (
          <ion-icon name="moon-outline"></ion-icon>
        )}
      </button>
    </nav>
  )
}

export default Navbar
