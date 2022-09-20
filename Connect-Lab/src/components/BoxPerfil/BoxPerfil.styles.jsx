import styled from "styled-components";

export const MainPerfilStyled = styled.main`
    background: ${({ theme }) => theme.colors.primaria};
    box-shadow: 4px 4px 15px 1px ${({ theme }) => theme.sombras.primaria};
    border-radius: 15px;
    width: 39%;
    margin-left: 29%;
    margin-top: 5%;
`

export const H1Styled = styled.h1`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    text-align: center;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.terciaria};
    padding-top: 6%;
`

export const Div1Styled = styled.div`
    display: flex;
    align-items: center;
    margin-left: 9%;
`

export const ImgRedondaStyled = styled.img`
    width: 90px;
    object-fit: cover;
    border-radius: 50%;
`

export const DivNomeDadosSyled = styled.div`
    margin-left: 5%;
`

export const NomeUsuStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.secundaria};
    margin-top: 0;
    margin-bottom: 3%;
`

export const DadosUsuStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.nonaria};
    margin-top: 0;
    margin-bottom: 0;
`

export const DivEnderecoStyled = styled.div`
    margin-top: 6%;
    margin-left: 8%;
`

export const PEnderecoStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secundaria};
    margin-bottom: 0.5%;
`

export const LinhaStyled = styled.div`
    text-align: center;
    height: 2px;
    width: 445px;
    background: ${({ theme }) => theme.colors.quaternaria};
`

export const CepStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 17px;
    color: ${({ theme }) => theme.colors.terciaria};
    margin-top: 2%;
    margin-bottom: 0;
`

export const EnderecoStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.nonaria};
    margin-top: 1%;
    margin-bottom: 0;
`

export const BtnAteraDadosStyled = styled.button`
    text-align: center;
    background: ${({ theme }) => theme.colors.terciaria};
    box-shadow: 0px 4px 4px ${({ theme }) => theme.sombras.primaria};
    width: 60%;
    border: none;
    border-radius: 10px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.quinaria};
    padding-top: 1.5%;
    padding-bottom: 1.5%;
    margin-top: 9%;
    margin-left: 19%;
    cursor: pointer;
`

export const SairStyled = styled.p`
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 18px;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.secundaria};
    margin-top: 5%;
    padding-bottom: 3%;
    cursor: pointer;
`