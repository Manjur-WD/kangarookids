import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import AcademicsDetails from './sections/AcademicsDetails'

const Academics = () => {
  return (
    <>
      <Breadcrumb
        pageTitle="Academics"
        navLinkPrev="/kangarookids"
        navLinkCurrent="Academics"
        navLinkPrevName="Home"
      />
      <AcademicsDetails />
    </>
  )
}

export default Academics
