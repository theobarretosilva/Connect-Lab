import styled from "styled-components";

export const DivDispositivoStyled = styled.div`
    background: ${({ theme }) => theme.colors.primaria};
    box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.octonaria};
    border-radius: 10px;
    width: 283px;
    display: flex;
    cursor: pointer;
`
export const ImgProdutoStyled = styled.img`
    width: 70px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 6px;
`

export const PNomeDispStyled = styled.p`
    color: ${({ theme }) => theme.colors.nonaria};
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    margin-top: 16%;
`

export const DivLocOnOffStyled = styled.div`
    text-align: center;
`

export const PLocOnOffStyled= styled.p`
    text-align: center;
    color: ${({ theme }) => theme.colors.decenaria};
    font-family: 'Inter', sans-serif;
    font-weight: 400;
`