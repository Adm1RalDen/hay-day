import styled from 'styled-components'

export const Layout = styled.div`
  position: relative;
  min-height: 100vh;
  background: url('background.jpg') no-repeat;
  background-size: cover;
  display: flex;
  flex: 1;
`

export const LayoutContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 20px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  background: white;
  flex: 1;
  filter: blur(8px);
`
