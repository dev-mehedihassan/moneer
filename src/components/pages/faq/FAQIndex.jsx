import React from 'react'
import BreadCrumb from '../../common/BreadCrumb'
import FaqBody from './FaqBody'

const FAQIndex = () => {
  return (
    <>
        <BreadCrumb title="FAQ" routeName="FAQ" parentRouteName='Home' parentRouteUrl='/' />
        <FaqBody />
    </>
  )
}

export default FAQIndex