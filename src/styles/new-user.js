import styled from 'styled-components'

export const NewUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const UserDataForm = styled.form``
export const Input = styled.input``
export const Label = styled.label``

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75px;
  margin: 10px;
`
export const ItemImg = styled.img`
  width: 75px;
  height: 75px;
  padding: 10px;

  @media (max-width: 812px) {
    width: 55px;
    height: 55px;
    padding: 5px;
  }
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
