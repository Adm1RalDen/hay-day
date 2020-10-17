import React from 'react'
import { Layout, LayoutContainer, BlurBackground } from '../../styles/layout.js'

const LayoutComponent = (props) => {
  return (
    <Layout>
      <BlurBackground />
      <LayoutContainer>{props.children}</LayoutContainer>
    </Layout>
  )
}
export default LayoutComponent
