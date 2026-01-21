import { useState } from 'react'
import TestimonialModal from '../TestimonialModal'

function About({ isActive }) {
  const [showModal, setShowModal] = useState(false)
  const [selectedTestimonial, setSelectedTestimonial] = useState(null)

  const services = [
    {
      title: 'Frontend Development',
      icon: 'https://i.postimg.cc/4389jZkP/icon-design.png',
      description: 'Building responsive, accessible, and user-friendly web interfaces using modern technologies such as HTML, CSS, JavaScript, TypeScript, and React.'
    },
    {
      title: 'Web Application Development',
      icon: 'https://i.postimg.cc/ZqgqrqzG/icon-dev.png',
      description: 'Developing scalable web applications for e-commerce, business platforms, and fintech products, with a strong focus on performance, maintainability, and clean architecture.'
    },
    {
      title: 'API Integration',
      icon: 'https://i.postimg.cc/xjLdzYxZ/icon-app.png',
      description: 'Integrating and consuming REST APIs, handling data flow, authentication, and error states, while testing endpoints using tools like Postman and Apidog.'
    },
    {
      title: 'UI Styling & Optimization',
      icon: 'https://i.postimg.cc/0NL8zHpx/icon-photo.png',
      description: 'Implementing modern UI designs using Tailwind CSS, Bootstrap, and Material UI, while optimizing responsiveness, usability, and cross-browser compatibility.'
    }
  ]

  const testimonials = [
    {
      avatar: 'https://i.postimg.cc/zGDHfn3G/avatar-1.png',
      name: 'Daniel Adeyemi',
      text: 'Emmanuel consistently delivered clean and reliable frontend solutions. He quickly understood project requirements, handled API integrations smoothly, and ensured the application was responsive and easy to use. Communication was clear and timelines were respected.',
      date: 'February 2024'
    },
    {
      avatar: 'https://i.postimg.cc/DwY0yHtx/avatar-2.png',
      name: 'Aisha Bello',
      text: 'Working with Emmanuel was a smooth experience. He paid close attention to requirements and delivered a well-structured frontend application. His professionalism and problem-solving approach made the project successful.',
      date: 'March 2024'
    },
    {
      avatar: 'https://i.postimg.cc/fRFWhX9F/avatar-3.png',
      name: 'Chinedu Okafor',
      text: 'Emmanuel contributed significantly to improving our web platform. He focused on performance, responsiveness, and usability, which greatly enhanced the user experience. He was reliable and easy to work with throughout the project.',
      date: 'April 2024'
    },
    {
      avatar: 'https://i.postimg.cc/zXv1Xv81/avatar-4.png',
      name: 'Tunde Ogunleye',
      text: 'Emmanuel helped us build a scalable and maintainable frontend for our business application. He demonstrated strong technical skills, especially in React and API integration. The final delivery met our expectations and was completed on schedule.',
      date: 'May 2024'
    }
  ]

  const handleTestimonialClick = (testimonial) => {
    setSelectedTestimonial(testimonial)
    setShowModal(true)
  }

  const clients = [
    'https://i.postimg.cc/YqfKyG66/logo-1-color.png',
    'https://i.postimg.cc/fWm6JtgG/logo-2-color.png',
    'https://i.postimg.cc/Bb07xpwd/logo-3-color.png',
    'https://i.postimg.cc/hv1yMmkh/logo-4-color.png',
    'https://i.postimg.cc/ry1P86Dc/logo-5-color.png',
    'https://i.postimg.cc/SsWDN8NV/logo-6-color.png'
  ]

  return (
    <article className={`about ${isActive ? 'active' : ''}`} data-aos="fade-in">
      <header data-aos="fade-down">
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text" data-aos="fade-up" data-aos-delay="100">
        <p>
          I'm a Frontend Developer with experience building responsive and scalable web applications. I
          specialize in translating product requirements into clean, user-friendly interfaces using modern
          frontend technologies.
        </p>

        <p>
          I've worked on a range of projects including e-commerce platforms, school management systems,
          business websites, and fintech products. My focus is on performance, usability, and maintainable
          code, while collaborating closely with cross-functional teams to deliver reliable digital
          solutions.
        </p>
      </section>

      <section className="service" data-aos="fade-up" data-aos-delay="200">
        <h3 className="h3 service-title">What I'm Doing</h3>

        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index} className="service-item" data-aos="zoom-in" data-aos-delay={300 + index * 100}>
              <div className="service-icon-box">
                <img src={service.icon} alt={service.title} width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="testimonials" data-aos="fade-up" data-aos-delay="300">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <li key={index} className="testimonials-item" data-aos="flip-left" data-aos-delay={400 + index * 100}>
              <div 
                className="content-card"
                onClick={() => handleTestimonialClick(testimonial)}
                style={{ cursor: 'pointer' }}
              >
                <figure className="testimonials-avatar-box">
                  <img src={testimonial.avatar} alt={testimonial.name} width="60" />
                </figure>

                <h4 className="h4 testimonials-item-title">
                  {testimonial.name}
                </h4>

                <div className="testimonials-text">
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {showModal && selectedTestimonial && (
        <TestimonialModal 
          testimonial={selectedTestimonial}
          onClose={() => setShowModal(false)}
        />
      )}

      <section className="clients" data-aos="fade-up" data-aos-delay="400">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          {clients.map((logo, index) => (
            <li key={index} className="clients-item" data-aos="zoom-in" data-aos-delay={500 + index * 75}>
              <a href="#">
                <img src={logo} alt="client logo" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default About
