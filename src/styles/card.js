import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background-color: #edc947;
    border: 3px solid #cfaf3c;
    border-radius: 20px;
    min-height: 500px;
    min-width: 50px;
    max-width: 30%;
`

export const Icon = styled.img`
    width: ${({w}) => w ? w : '50%'};
    height: auto;
`

export const Text = styled.span`
    font-size: ${({fs}) => fs ? fs : '3em'};
    color: white;
    font-weight: bold;
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
    &:last-of-type{
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