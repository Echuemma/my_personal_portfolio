import { useState } from 'react'

function Portfolio({ isActive }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedProject, setExpandedProject] = useState(null)

  const projects = [
    {
      title: 'Internet Banking',
      category: 'applications',
      image: '/images/Screenshot 2026-01-19 152709.png',
      link: 'https://boanig.com/',
      description: 'A comprehensive internet banking platform built with modern frontend technologies. Features include secure transaction processing, account management, fund transfers, and bill payments with a responsive design for desktop and mobile users.'
    },
    {
      title: 'Internet Banking Personal',
      category: 'applications',
      image: '/images/personal.png',
      link: '#',
      description: 'Personal banking interface designed for individual customers. Provides easy access to account information, balance inquiries, transaction history, and personalized financial insights with an intuitive user experience.'
    },
    {
      title: 'Internet Banking Business',
      category: 'applications',
      image: 'https://i.postimg.cc/jSJVqYsq/project-3.jpg',
      link: '#',
      description: 'Enterprise-level banking solution tailored for business clients. Includes multi-account management, bulk transaction processing, advanced reporting tools, and role-based access control for team collaboration.'
    },
    {
      title: 'Internet Banking Admin',
      category: 'applications',
      image: 'https://i.postimg.cc/dtpXxNGb/project-4.png',
      link: '#',
      description: 'Administrative dashboard for banking operations management. Enables monitoring of user accounts, transaction oversight, system performance analytics, and configuration management with secure authentication.'
    },
    {
      title: 'Samloriden Engineering',
      category: 'web development',
      image: '/images/samloriden.png',
      link: 'https://samloridenec.com.ng/',
      description: 'Professional website for an engineering firm showcasing their services, completed projects, and expertise. Built with clean, modern design principles focusing on performance, SEO optimization, and professional aesthetics.'
    },
    {
      title: 'Advanztek Limited',
      category: 'web development',
      image: '/images/advanztek.png',
      link: 'https://www.advanztek.com/',
      description: 'Corporate website for a technology company highlighting services, team expertise, and portfolio. Features responsive design, engaging visuals, and optimized content structure for better user engagement and conversions.'
    },
    {
      title: 'Adept Portal',
      category: 'applications',
      image: '/images/adept.png',
      link: 'https://education.adept.ng/',
      description: 'School management system providing comprehensive educational platform features. Includes student information management, attendance tracking, grade management, and communication tools for administrators, teachers, and parents.'
    }
  ]

  const categories = ['all', 'web design', 'applications', 'web development']

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <article className={`portfolio ${isActive ? 'active' : ''}`} data-aos="fade-in">
      <header data-aos="fade-down">
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects" data-aos="fade-up" data-aos-delay="100">
        <ul className="filter-list">
          {categories.map((cat, index) => (
            <li key={cat} className="filter-item" data-aos="fade-up" data-aos-delay={200 + index * 50}>
              <button
                className={selectedCategory === cat ? 'active' : ''}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <ul className="project-list">
          {filteredProjects.map((project, index) => {
            const isExpanded = expandedProject === index
            const isLongDescription = project.description.length > 150
            const displayText = isExpanded ? project.description : project.description.substring(0, 150)
            
            return (
              <li key={index} className="project-item active" data-aos="zoom-in" data-aos-delay={300 + index * 100}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </figure>
                  
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-category">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </p>
                    <p className={`project-description ${isExpanded ? 'expanded' : ''}`}>
                      {displayText}
                      {!isExpanded && isLongDescription && '...'}
                    </p>
                    {isLongDescription && (
                      <button 
                        className="read-more-btn"
                        onClick={(e) => {
                          e.preventDefault()
                          setExpandedProject(isExpanded ? null : index)
                        }}
                      >
                        {isExpanded ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </section>
    </article>
  )
}

export default Portfolio
