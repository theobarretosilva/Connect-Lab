import styled from "styled-components";

export const SectionSearchbarStyled = styled.section`
    margin-left: 6%;
    margin-top: 2%;
`

export const PNomeDispStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.secundaria};
`

export const InputSearchStyled = styled.input`
    width: 1190px;
    background: ${({ theme }) => theme.colors. primaria};
    border: 1px solid ${({ theme }) => theme.colors.terciaria};
    border-radius: 10px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secundaria};
    height: 37px;
    font-size: 15px;
    padding-left: 1%;
    margin-top: 0.4%;
`