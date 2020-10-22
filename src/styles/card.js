import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: #ffe68d;
  border-radius: 20px;
  width: 150px;
  flex: 1 1 100px;
  margin: 5px;
`

export const Icon = styled.img`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`

export const Text = styled.span`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'em' : '17px')};
  color: white;
  font-weight: bold;
  white-space: nowrap;
  width: 100%;
  ${(props) => {
    if (props.textShadow) {
      return ' text-shadow: -0 -1px 2px #000000, 0 -1px 2px #000000, -0 1px 2px #000000, 0 1px 2px #000000, -1px -0 2px #000000, 1px -0 2px #000000,       -1px 0 2px #000000, 1px 0 2px #000000, -1px -1px 2px #000000,       1px -1px 2px #000000, -1px 1px 2px #000000, 1px 1px 2px #000000,       -1px -1px 2px #000000, 1px -1px 2px #000000, -1px 1px 2px #000000, 1px 1px 2px #000000;'
    }
  }}
`

export const UserBlock = styled.div`
  width: 90%;
  color: black;
  padding: 5px;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  background: bisque;
  border: 1px solid;
  width: 100%;
  margin-top: 5px;
`

export const SimpleBlock = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`

export const RelativeContainer = styled.div`
  position: relative;
  border-radius: 10px;
  background: palevioletred;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  ${(props) => {
    if (props.number >= 0) {
      return `
        &::after {
          content: "${props.number}";
          display:block;
          font-size: 2.5em;
          color: white;
          text-shadow: -0 -1px 2px #000000, 0 -1px 2px #000000, -0 1px 2px #000000, 0 1px 2px #000000, -1px -0 2px #000000, 1px -0 2px #000000,       -1px 0 2px #000000, 1px 0 2px #000000, -1px -1px 2px #000000,       1px -1px 2px #000000, -1px 1px 2px #000000, 1px 1px 2px #000000,       -1px -1px 2px #000000, 1px -1px 2px #000000, -1px 1px 2px #000000, 1px 1px 2px #000000;
        }
       `
    }
  }}
`
export const AbsoluteContainer = styled.div`
  position: absolute;
`
