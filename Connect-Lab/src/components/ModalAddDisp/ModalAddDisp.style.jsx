import styled from "styled-components";

export const FundoTotalModalStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(120, 120, 120, 0.75);
    position: fixed;
    display: flex;
    align-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

export const BoxModalStyled = styled.section`
    background: ${({ theme }) => theme.colors.primaria};
    box-shadow: 0px 8px 4px ${({ theme }) => theme.sombras.primaria};
    border-radius: 30px;
    text-align: center;
    margin-top: 6%;
    width: 40%;
    margin-left: 30%;
    display: flex;
    flex-direction: column;
    z-index: 1;
`

export const TituloModalStyled = styled.h1`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 26px;
    color: ${({ theme }) => theme.colors.terciaria};
    padding-top: 3%;
`

export const DivSelectStyled = styled.div`
    margin-left: 8%;
    margin-top: 5%;
    text-align: start;
    display: flex;
    flex-direction: column;
`

export const LabelModalStyled = styled.label`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 17px;
    color: ${({ theme }) => theme.colors.quaternaria};
`

export const SelectModalStyled = styled.select`
    background: ${({ theme }) => theme.colors.primaria};
    border: 1px solid ${({ theme }) => theme.colors.terciaria};
    border-radius: 5px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.nonaria};
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 8px;
    margin-top: 0.5%;
    width: 90%;
    cursor: pointer;
`

export const DivBtnsStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 8%;
    margin-top: 7%;
    margin-right: 8%;
    padding-bottom: 5%;
`

export const BtnCancelarStyled = styled.button`
    background: ${({ theme }) => theme.colors.terciaria};
    border-radius: 10px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 21px;
    color: ${({ theme }) => theme.colors.primaria};
    border: none;
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 4%;
    padding-right: 4%;
    cursor: pointer;
`

export const BtnAddStyled = styled.button`
    background: ${({ theme }) => theme.colors.quaternaria};
    border-radius: 10px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 21px;
    color: ${({ theme }) => theme.colors.primaria};
    border: none;
    padding-top: 2.2%;
    padding-bottom: 2.2%;
    padding-left: 4%;
    padding-right: 4%;
    cursor: pointer;
`