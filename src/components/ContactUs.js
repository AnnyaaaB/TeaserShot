import './stylesheets/contact.css'
import { useState } from 'react'
import axios from 'axios'

const ContactUs = ({ handleContactTab }) => {
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactCompany, setContactCompany] = useState('')
  const [contactInquiry, setContactInquiry] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [contactLinkedin, setContactLinkedin] = useState('')
  const [contactMessage, setContactMessage] = useState('')
  
  const BACKEND_URL = process.env.REACT_APP_API_BASE_URL

  
  const handleSubmit = (e) => {
    console.log("Backend URL:", process.env.REACT_APP_API_BASE_URL);
    e.preventDefault()
    axios
      .post(`${BACKEND_URL}/Contact`, {
        name: contactName,
        email: contactEmail,
        company: contactCompany,
        inquiry: contactInquiry,
        phone: contactNumber,
        linkedin: contactLinkedin,
        message: contactMessage,
      })
      .then((result) => {
        console.log(result)
        // Clear form after submission
        setContactName('')
        setContactEmail('')
        setContactCompany('')
        setContactInquiry('')
        setContactNumber('')
        setContactLinkedin('')
        setContactMessage('')

        handleContactTab()
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='contact-modal'>
      <section id='contact'>
        <span className='contact-close' onClick={handleContactTab}>X</span>
        <h2>Get in Touch</h2>
        <p>
          Interested in partnering, investing, or learning more about us? Fill out the
          form below.
        </p>

        <form onSubmit={handleSubmit} method='POST'>
          <label htmlFor='name'>Full Name *</label>
          <input
            type='text'
            id='name'
            name='name'
            required
            placeholder='User’s full name'
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />

          <label htmlFor='email'>Email *</label>
          <input
            type='email'
            id='email'
            name='email'
            required
            placeholder='user@email.com'
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />

          <label htmlFor='company'>Company / Organization</label>
          <input
            type='text'
            id='company'
            name='company'
            placeholder='Company or organization (optional)'
            value={contactCompany}
            onChange={(e) => setContactCompany(e.target.value)}
          />

          <label htmlFor='inquiry'>Inquiry Type *</label>
          <select
            id='inquiry'
            name='inquiry'
            required
            value={contactInquiry}
            onChange={(e) => setContactInquiry(e.target.value)}
          >
            <option value=''>-- Select --</option>
            <option value='general'>General Inquiry</option>
            <option value='partnership'>Partnership / Collaboration</option>
            <option value='investment'>Investment Opportunity</option>
            <option value='support'>Support</option>
            <option value='other'>Other</option>
          </select>

          <label htmlFor='phone'>Contact Number</label>
          <input
            type='tel'
            id='phone'
            name='phone'
            pattern='[0-9+\-\s]+'
            placeholder='+44 XXXXXXXXXX'
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />

          <label htmlFor='linkedin'>LinkedIn Profile</label>
          <input
            type='url'
            id='linkedin'
            name='linkedin'
            placeholder='https://www.linkedin.com/in/username'
            value={contactLinkedin}
            onChange={(e) => setContactLinkedin(e.target.value)}
          />

          <label htmlFor='message'>User’s Message *</label>
          <textarea
            id='message'
            name='message'
            rows='5'
            required
            placeholder='User write’s message here...'
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
          ></textarea>

          <button type='submit'>Send Message</button>

          <p className='privacy-note'>
            We respect your privacy. Your details will only be used to respond to your
            inquiry.
          </p>
        </form>
      </section>
    </div>
  )
}

export default ContactUs
