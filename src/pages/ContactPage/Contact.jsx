import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import ContactWrapper from './sections/ContactWrapper'

const Contact = () => {
  return (
    <>
      <Breadcrumb
       pageTitle="Contact Us"
       navLinkPrevName="Home"
       navLinkPrev="/kangarookids"
       navLinkCurrent="Contact Us"
       />
       <ContactWrapper />
    </>
  )
}

export default Contact
