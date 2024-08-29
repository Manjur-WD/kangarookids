import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import TeachersSpeakSection from './sections/TeachersSpeakSection'

const PrincipalSpeak = () => {
  return (
    <>
      <Breadcrumb
        pageTitle="Principal's Speak"
        navLinkPrevName="Home"
        navLinkPrev="/kangarookids"
        navLinkCurrent="Principal's Speak"
      />
      <TeachersSpeakSection />
    </>
  )
}

export default PrincipalSpeak
