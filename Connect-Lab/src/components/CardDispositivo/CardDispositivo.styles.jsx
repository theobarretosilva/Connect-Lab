import styled from "styled-components";

export const DivDispositivoStyled = styled.div`
    background: ${({ theme }) => theme.colors.primaria};
    box-shadow: 0px 4px 4px ${({ theme }) => theme.sombras.primaria};
    border-radius: 10px;
    border: none;
    width: 360px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 14%;
`

export const DivStyled = styled.div`
    display: flex;
`

export const ImgProdutoStyled = styled.img`
    width: 80px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
`

export const PNomeDispStyled = styled.p`
    color: ${({ theme }) => theme.colors.octonaria};
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 19px;
    text-align: center;
    max-width: 155px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const DivLocOnOffStyled = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const PLocOnOffStyled= styled.p`
    text-align: center;
    color: ${({ theme }) => theme.colors.nonaria};
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
`

export const ImgOnOffStyled = styled.img`
    width: 20px;
    padding-top: 1px;
`

export const BtnOnStyled = styled.button`
    width: 20%;
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
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 2%;
    display: grid;
    grid-template-columns: 350px 350px 350px;
    justify-content: space-between;
`