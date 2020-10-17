import React from 'react'
import { Layout, LayoutContainer } from '../../styles/layout'

const LayoutComponent = (props) => {
  return (
    <Layout>
      <LayoutContainer>{props.children}</LayoutContainer>
    </Layout>
  )
}
export default LayoutComponent
