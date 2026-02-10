import { useState } from 'react'

function Contact({ isActive }) {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  })

  const [isValid, setIsValid] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    const newFormData = { ...formData, [name]: value }
    setFormData(newFormData)

    const isFormValid =
      newFormData.fullname &&
      newFormData.email &&
      newFormData.message

    setIsValid(isFormValid)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Encode the form data
      const formBody = new URLSearchParams({
        'form-name': 'contact',
        'fullname': formData.fullname,
        'email': formData.email,
        'message': formData.message
      }).toString()

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ fullname: '', email: '', message: '' })
        setIsValid(false)
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus(null), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <article className={`contact ${isActive ? 'active' : ''}`} data-aos="fade-in">
      
      {/* 🔒 Hidden static form for Netlify detection */}
      <form
        name="contact"
        netlify
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="fullname" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

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

        {submitStatus === 'success' && (
          <div className="form-status success" data-aos="fade-up">
            ✓ Message sent successfully! I&apos;ll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="form-status error" data-aos="fade-up">
            ✗ Error sending message. Please try again.
          </div>
        )}

        {/* 👇 Actual user-facing form */}
        <form
          onSubmit={handleSubmit}
          className="form"
        >
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
            disabled={!isValid || isSubmitting}
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </section>
    </article>
  )
}

export default Contact