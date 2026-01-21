import { useState } from 'react'

function Contact({ isActive }) {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  })

  const [isValid, setIsValid] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    const newFormData = { ...formData, [name]: value }
    setFormData(newFormData)

    // Simple validation
    const isFormValid = newFormData.fullname && newFormData.email && newFormData.message
    setIsValid(isFormValid)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ fullname: '', email: '', message: '' })
    setIsValid(false)
  }

  return (
    <article className={`contact ${isActive ? 'active' : ''}`} data-aos="fade-in">
      <header data-aos="fade-down">
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-aos="zoom-in" data-aos-delay="100">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63043.75923689308!2d7.47618272872843!3d9.04232006814929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0be6fe8343c9%3A0x71e1b1cc48bfe23e!2sAsokoro%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1768910270771!5m2!1sen!2sng"
            width="800"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of Asokoro, Abuja"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form" data-aos="fade-up" data-aos-delay="200">
        <h3 className="h3 form-title">Contact Form</h3>

        <form onSubmit={handleSubmit} className="form">
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              value={formData.fullname}
              onChange={handleChange}
              data-aos="fade-up"
              data-aos-delay="300"
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              data-aos="fade-up"
              data-aos-delay="350"
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            data-aos="fade-up"
            data-aos-delay="400"
          ></textarea>

          <button
            className="form-btn"
            type="submit"
            disabled={!isValid}
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  )
}

export default Contact
