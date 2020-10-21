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

export const SubmitForm = styled.button`
  margin: 0 auto;
  display: block;
  background: #ff3838;
  border: none;
  padding: 10px 20px;
  color: wheat;
  border-radius: 7px;
  font-weight: 700;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`
