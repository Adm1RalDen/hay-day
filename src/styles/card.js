import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: #edc947;
  border: 3px solid #cfaf3c;
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
  font-size: 20px;
  color: white;
  font-weight: bold;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
`

export const UserBlock = styled.div`
  width: 90%;
  padding: 5px;
  background-color: #1061c4;
  border: 2px solid #084187;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin-bottom: 5px;
  &:last-of-type {
    margin-bottom: 0;
  }
`

export const SimpleBlock = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`

export const RelativeContainer = styled.div`
  display: flex;
  position: relative;
`
export const AbsoluteContainer = styled.div`
  position: absolute;
`
