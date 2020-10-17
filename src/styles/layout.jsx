import styled from 'styled-components'

export const Layout = styled.div`
  position: relative;
  min-height: 100vh;
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
`

export const BlurBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('background.jpg') no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  -webkit-filter: blur(8px);
  -moz-filter: blur(8px);
  -o-filter: blur(8px);
  -ms-filter: blur(8px);
  filter: blur(8px);
`
