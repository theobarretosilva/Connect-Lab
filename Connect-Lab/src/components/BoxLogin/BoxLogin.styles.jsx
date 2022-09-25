import styled from "styled-components";

export const BoxLoginStyled = styled.div`
    background: ${({ theme }) => theme.colors.primaria};
    box-shadow: 4px 4px 15px 1px ${({ theme }) => theme.sombras.primaria};
    border-radius: 15px;
    margin-top: 8.2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 28%;
    margin-left: 35%;
`

export const AcessarStyled = styled.h2`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.terciaria};
    padding-top: 20px;
    font-size: 25px;
    margin-bottom: 10px;
`

export const DivStyled = styled.div`
    margin-bottom: 0;
    width: 350px;
    display: flex;
    flex-direction: column;
    margin-left: 4.8%;
`

export const PESStyled = styled.label`
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.secundaria};
    margin-top: 0;
    margin-bottom: 1px;
`

export const InputStyled = styled.input`
    background: ${({ theme }) => theme.colors.primaria};
    border: 2px solid ${({ theme }) => theme.colors.quaternaria};
    border-radius: 10px;
    width: 90%;
    height: 38px;
    margin-bottom: 15px;
    padding-left: 7px;
    font-size: 15px;
`

export const BtnLogin = styled.button`
    background: ${({ theme }) => theme.colors.terciaria};
    box-shadow: 0px 3px 2px ${({ theme }) => theme.sombras.primaria};
    border-radius: 20px;
    color: ${({ theme }) => theme.colors.primaria};
    font-weight: 600;
    font-size: 19px;
    width: 78%;
    height: 43px;
    border: none;
    margin-left: 11%;
    margin-top: 6%;
    cursor: pointer;
`

export const PCadastreseStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.secundaria};
    margin-bottom: 15%;
    margin-top: 18%;
    text-align: center;
    cursor: pointer;
`

export const SpanStyled = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.senaria};
`

export const DivMostraSenhaStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 0;
    margin-bottom: 1%;
    margin-left: 5%;
`

export const CheckSenhaStyled = styled.input`
    width: 15px;
`

export const LabelCheckStyled = styled.label`
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    margin-left: 1.6%;
`