import styled from "styled-components";

export const DivTitStyled = styled.div`
    margin-left: 6%;
    margin-top: 2%;
`

export const H1DispStyled = styled.h1`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.quaternaria};
`

export const LinhaDispStyled = styled.div`
    height: 1px;
    width: 1190px;
    background: ${({ theme }) => theme.colors.terciaria};
    margin-top: 0.3%;
`