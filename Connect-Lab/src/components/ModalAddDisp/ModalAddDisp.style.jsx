import styled from "styled-components";

export const BoxModalStyled = styled.section`
    background: ${({ theme }) => theme.colors.primaria};
    box-shadow: 0px 8px 4px ${({ theme }) => theme.sombras.primaria};
    border-radius: 30px;
    text-align: center;
    margin-top: 6%;
    width: 40%;
    margin-left: 30%;
`

export const TituloModalStyled = styled.h1`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 26px;
    color: ${({ theme }) => theme.colors.terciaria};
    padding-top: 2%;
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
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 8px;
    margin-top: 0.5%;
    width: 90%;
`