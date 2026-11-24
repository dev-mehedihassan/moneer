import React from 'react'
import BreadCrumb from '../../common/BreadCrumb'
import FaqBody from './FaqBody'
import FaqContactForm from './FaqContactForm'

const FAQIndex = () => {
  return (
    <>
        <BreadCrumb title="FAQ" routeName="FAQ" parentRouteName='Home' parentRouteUrl='/' />
        <FaqBody />
        <FaqContactForm />
    </>
  )
}

export default FAQIndex