import { useState } from 'react'

function Sidebar({ isOpen, onToggle }) {
  return (
    <aside className={`sidebar ${isOpen ? 'active' : ''}`} data-aos="fade-in-right">
      <div className="sidebar-info" data-aos="fade-in" data-aos-delay="100">
        <figure className="avatar-box">
          <img src="/images/niceman.jpg" alt="Echu Emmanuel" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name">Echu Emmanuel</h1>
          <p className="title">Web Developer</p>
        </div>

        <button className="info-more-btn" onClick={onToggle}>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info-more" data-aos="fade-in" data-aos-delay="200">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item" data-aos="fade-up" data-aos-delay="300">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:echuemmanuel918@gmail.com" className="contact-link">
                echuemmanuel918@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item" data-aos="fade-up" data-aos-delay="350">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+2349039386110" className="contact-link">
                +234 9039386110
              </a>
            </div>
          </li>

          <li className="contact-item" data-aos="fade-up" data-aos-delay="400">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1982-06-23">June 21</time>
            </div>
          </li>

          <li className="contact-item" data-aos="fade-up" data-aos-delay="450">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Asokoro, Abuja, Nigeria</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list" data-aos="fade-up" data-aos-delay="500">
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="https://github.com/Echuemma" className="social-link">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.linkedin.com/in/echu-emmanuel-a7a659281/" className="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
