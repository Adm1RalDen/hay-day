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
  @media (max-width: 812px) {
    max-width: 95%;
    padding: 10px;
    margin-top: 10px;
  }
`

export const BlurBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('/background.jpg') no-repeat;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  -webkit-filter: blur(3px);
  -moz-filter: blur(3px);
  -o-filter: blur(3px);
  -ms-filter: blur(3px);
  filter: blur(3px);
`
