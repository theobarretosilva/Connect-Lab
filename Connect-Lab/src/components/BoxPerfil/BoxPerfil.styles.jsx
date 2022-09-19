import styled from "styled-components";

export const MainPerfilStyled = styled.main`
    background: ${({ theme }) => theme.colors.primaria};
    box-shadow: 4px 4px 15px 1px ${({ theme }) => theme.sombras.primaria};
    border-radius: 15px;
`

export const H1Styled = styled.h1`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    text-align: center;
    font-size: 23px;
    color: ${({ theme }) => theme.colors.terciaria};
    padding-top: 1.5%;
`

export const Div1Styled = styled.div`
    display: flex;
`

export const SpanImgStyled = styled.span`
    display: inline-block;
    border-radius: 50%;
    width: 42px;
    height: 42px;
`

export const ImgRedondaStyled = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const DivNomeDadosSyled = styled.div`

`

export const NomeUsuStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 21px;
    color: ${({ theme }) => theme.colors.secundaria};
`

export const DadosUsuStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.nonaria};
`

export const DivEnderecoStyled = styled.div`

`

export const PEnderecoStyled = styled.p`
    
`