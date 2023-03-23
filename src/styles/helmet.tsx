import React from 'react'
import { Helmet } from 'react-helmet'

const HelmetFonts = () => (
  <Helmet>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />
    <link
      rel="preload"
      href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:ital,wght@0,400;1,700&display=swap"
      as="style"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:ital,wght@0,400;1,700&display=swap"
    />
  </Helmet>
)

export default HelmetFonts
