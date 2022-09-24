import styled from "styled-components";

export const DivDispositivoStyled = styled.div`
    background: ${({ theme }) => theme.colors.primaria};
    box-shadow: 0px 4px 4px ${({ theme }) => theme.sombras.primaria};
    border-radius: 10px;
    width: 283px;
    display: flex;
    justify-content: space-around;
    cursor: pointer;
`
export const ImgProdutoStyled = styled.img`
    width: 70px;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const PNomeDispStyled = styled.p`
    color: ${({ theme }) => theme.colors.octonaria};
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    margin-top: 16%;
`

export const DivLocOnOffStyled = styled.div`
    text-align: center;
    margin-right: 5%;
    margin-top: 2.6%;
`

export const PLocOnOffStyled= styled.p`
    text-align: center;
    color: ${({ theme }) => theme.colors.nonaria};
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
`

export const ImgOnOffStyled = styled.img`
    width: 20px;
    padding-top: 1px;
`

export const BtnOnStyled = styled.button`
    width: 24%;
    height: 40%;
    background: ${({ theme }) => theme.colors.terciaria};
    box-shadow: inset 0px 8px 8px ${({ theme }) => theme.sombras.primaria};
    border-radius: 10px;
    border: none;
    margin-top: 9%;
    cursor: pointer;
    margin-right: 3%;
`

export const BtnOffStyled = styled.button`
    width: 24%;
    height: 40%;
    background: ${({ theme }) => theme.colors.decenaria};
    box-shadow: 0px 6px 6px ${({ theme }) => theme.sombras.primaria};
    border-radius: 10px;
    border: none;
    margin-top: 9%;
    cursor: pointer;
    margin-right: 3%;
`

export const SectionDispositivosStyled = styled.section`
    margin-left: 3.8%;
    margin-right:3.8%;
    margin-top: 1.8%;
`