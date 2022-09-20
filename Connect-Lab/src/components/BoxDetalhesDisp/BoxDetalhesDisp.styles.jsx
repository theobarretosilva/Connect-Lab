import styled from "styled-components";

export const SectionDetalheStyled = styled.section`
    background: ${({ theme }) => theme.colors.primaria};
    box-shadow: 4px 4px 15px 1px ${({ theme }) => theme.sombras.primaria};
    border-radius: 15px;
    margin-top: 1.7%;
    margin-left: 37%;
    width: 25%;
    text-align: center;
`

export const TipoDispStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 19px;
    color: ${({ theme }) => theme.colors.quaternaria};
    margin-top: 2%;
`

export const PStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 17px;
    color: ${({ theme }) => theme.colors.nonaria};
    margin-top: 1%;
`

export const ImgDetalhesStyled = styled.img`
    width: 90px;
    margin-top: 6%;
`

export const DivOnOffStyled = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-around;
    width: 70%;
    margin-top: 5%;
    margin-left: 16%;
`

export const BtnDetailsDispStyled = styled.button`
    width: 65px;
    height: 32px;
    background: ${({ theme }) => theme.colors.terciaria};
    box-shadow: inset 0px 8px 8px ${({ theme }) => theme.sombras.primaria};
    border-radius: 10px;
    border: none;
    cursor: pointer;
`

export const DivInfoStyled = styled.div`
    margin-top: 8%;
    text-align: start;
    margin-left: 11%;
`

export const H3InfoStyled = styled.h3`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.secundaria};
`

export const LinhaStyled = styled.div`
    background: ${({ theme }) => theme.colors.secundaria};
    height: 1px;
    width: 270px;
`

export const DivDadosInfoStyled = styled.div`
    margin-top: 2%;
`

export const PInfoStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.nonaria};
    margin-top: 1%;
`

export const BtnRemoveDispStyled = styled.button`
    background: ${({ theme }) => theme.colors.quaternaria};
    box-shadow: 0px 4px 6px ${({ theme }) => theme.sombras.primaria};
    border-radius: 10px;
    border: none;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primaria};
    padding: 2.2% 5.5%;
    margin-top: 12%;
    margin-bottom: 7.5%;
    cursor: pointer;
`