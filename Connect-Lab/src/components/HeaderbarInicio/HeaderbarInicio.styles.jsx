import styled from "styled-components";

export const DivNavStyled = styled.div`
    margin-top: 2.1%;
    margin-right: 4%;
    display: flex;
    gap: 20px;
`

export const LinkInicioStyled = styled.a`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 18px;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.quinaria};
    cursor: pointer;
    padding: 0;
`

export const LinkDispPerfStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primaria};
    cursor: pointer;
`