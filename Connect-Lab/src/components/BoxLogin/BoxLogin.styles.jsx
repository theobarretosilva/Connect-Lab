import styled from "styled-components";

export const BoxLoginStyled = styled.div`
    background: ${({ theme }) => theme.colors.primaria};
    box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin-top: 8.2%;
    justify-content: center;
    width: 28%;
    margin-left: 35%;
`

export const AcessarStyled = styled.h2`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.terciaria};
    text-align: center;
    padding-top: 20px;
    font-size: 25px;
    margin-bottom: 10px;
`

export const DivStyled = styled.div`
    margin-left: 6%;
`

export const PESStyled = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: black;
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
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    color: ${({ theme }) => theme.colors.primaria};
    font-weight: 600;
    font-size: 16px;
    width: 68%;
    height: 40px;
    border: none;
    margin-left: 16%;
    margin-top: 2%;
    cursor: pointer;
`

export const PCadastreseStyled = styled.p`
    font-weight: 400;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.secundaria};
    padding-bottom: 5%;
    margin-top: 6.4%;
    text-align: center;
    cursor: pointer;
`

export const SpanStyled = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.senaria};
`