import React from 'react'
import ContactForm from './ContactForm'
import ContactDetails from './ContactDetails'

const ContactWrapper = () => {
  return (
    <>
  {/*======== Contact Us Section ========*/}
  <section className="contact-section space-page">
    <div className="container">
      <div className="row gx-50 gy-30">
        <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.1s">
          <ContactForm />
        </div>
        <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.1s">
          <ContactDetails />
        </div>
      </div>
    </div>
  </section>
  {/*======== / Contact Us Section ========*/}
</>

  )
}

export default ContactWrapper
