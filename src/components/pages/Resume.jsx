function Resume({ isActive }) {
  const education = [
    {
      title: 'Federal University of Agriculture, Makurdi',
      period: '2016 – 2021',
      description: "Bachelor's degree in Applied Sciences. Built strong foundations in data analysis, structured research, and systematic problem-solving through field studies and quantitative reporting — skills that directly inform my approach to software development."
    },
    {
      title: 'Rework Academy',
      period: '2023 – 2024',
      description: 'Completed rigorous, hands-on training in web development, covering modern frontend technologies, responsive design, JavaScript fundamentals, and real-world project development using industry best practices.'
    },
    {
      title: 'Professional Certifications & Continuous Learning',
      period: '2024 – Present',
      description: 'Ongoing professional development through certifications and training programs, including eHealth Africa Academy, Coursera, and other learning platforms. Continuously upskilling in frontend development, modern frameworks, and software engineering best practices.'
    }
  ]

  const experience = [
    {
      title: 'Frontend Developer — Aggregate Business Solutions',
      period: 'August 2025 – Present',
      description: 'Developing and maintaining fintech web applications with a focus on performance, security, and scalability. Building reusable UI components, integrating REST APIs, and collaborating with cross-functional teams to deliver reliable, user-centric financial products.'
    },
    {
      title: 'Junior Frontend Developer — Advanztek',
      period: 'June 2024 – July 2025',
      description: 'Worked on multiple client projects including e-commerce platforms, school management systems, and corporate websites. Implemented responsive interfaces, handled API integrations, optimized user experience, and contributed to feature development and application maintenance.'
    },
    {
      title: 'Frontend Developer Intern — Centrifuge Nigeria',
      period: 'December 2023 – May 2024',
      description: 'Assisted in website maintenance and UI improvements, ensuring responsiveness, consistency, and performance across devices. Supported bug fixes, content updates, and enhancements to existing frontend features in a production environment.'
    }
  ]

const skills = [
  {
    category: 'Languages & Core',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript']
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'Material UI', 'Bootstrap']
  },
  {
    category: 'State Management',
    items: ['Redux', 'Zustand', 'Context API']
  },
  {
    category: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'Postman', 'Apidog', 'REST APIs']
  }
]

  const skillIcons = {
    'HTML5': 'logo-html5',
    'CSS3': 'logo-css3',
    'JavaScript (ES6+)': 'logo-javascript',
    'TypeScript': 'code-slash-outline',
    'React.js': 'logo-react',
    'Next.js': 'cube-outline',
    'Tailwind CSS': 'color-palette-outline',
    'Material UI': 'apps-outline',
    'Bootstrap': 'layers-outline',
    'Redux': 'git-branch-outline',
    'Zustand': 'sync-outline',
    'Context API': 'people-outline',
    'Git': 'logo-github',
    'GitHub': 'logo-github',
    'Postman': 'paper-plane-outline',
    'Apidog': 'bug-outline',
    'REST APIs': 'server-outline'
  }

  const Timeline = ({ items, title, icon }) => (
    <section className="timeline" data-aos="fade-up" data-aos-delay="200">
      <div className="title-wrapper" data-aos="fade-right">
        <div className="icon-box">
          <ion-icon name={icon}></ion-icon>
        </div>
        <h3 className="h3">{title}</h3>
      </div>

      <ol className="timeline-list">
        {items.map((item, index) => (
          <li key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={300 + index * 100}>
            <h4 className="h4 timeline-item-title">
              {item.title}
            </h4>
            <span>{item.period}</span>
            <p className="timeline-text">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )

  return (
    <article className={`resume ${isActive ? 'active' : ''}`} data-aos="fade-in">
      <header data-aos="fade-down">
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <Timeline items={education} title="Education" icon="book-outline" />
      <Timeline items={experience} title="Professional Experience" icon="book-outline" />

      <section className="skill" data-aos="fade-up" data-aos-delay="400">
        <h3 className="h3 skills-title">My Skills</h3>

        <ul className="skills-list content-card">
          {skills.map((group, index) => (
            <li key={index} className="skills-item">
              <h5 className="h5">{group.category}</h5>
                  <div className="skills-tags">
                {group.items.map((item, i) => (
                  <span key={i} className="skill-tag">
                    <ion-icon name={skillIcons[item] || 'ellipse-outline'}></ion-icon>
                    {item}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default Resume
