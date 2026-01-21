function Resume({ isActive }) {
  const education = [
    {
      title: 'Federal University of Agriculture, Makurdi',
      period: '2016 – 2021',
      description: "Bachelor's degree in Forestry and Wildlife Management. Developed strong analytical, research, and problem-solving skills, with experience in data handling, field analysis, and structured reporting—skills that now support my transition into software development."
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
    { name: 'HTML, CSS & JavaScript', percentage: 90 },
    { name: 'TypeScript', percentage: 80 },
    { name: 'React.js', percentage: 85 },
    { name: 'UI Styling (Tailwind, Bootstrap, Material UI)', percentage: 85 },
    { name: 'Version Control (Git & GitHub)', percentage: 80 },
    { name: 'API Testing & Integration (Postman, Apidog)', percentage: 70 }
  ]

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
          {skills.map((skill, index) => (
            <li key={index} className="skills-item" data-aos="fade-up" data-aos-delay={500 + index * 75}>
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.percentage}>{skill.percentage}%</data>
              </div>
              <div className="skills-progress-bg">
                <div 
                  className="skills-progress-fill" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default Resume
