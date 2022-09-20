import styled from "styled-components";

export const HeaderbarStyled = styled.header`
    background-color: ${({ theme }) => theme.colors.terciaria};
    top: 0;
    left: 0;
    right: 0;
    display: flex;
`

export const DivLogoStyled = styled.div`
    display: flex;
    margin: 0.3%;
`

export const ImgStyled = styled.img`
    width: 5%;
    margin: 1.2%;
    margin-left: 2%;
`

export const PLogoStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primaria};
    font-size: 19px;
    margin-top: 2.7%;
`

export const BtnLogin = styled.button`
    background-color: ${({ theme }) => theme.colors.quaternaria};
    box-shadow: 0px 5px 5px ${({ theme }) => theme.sombras.primaria};
    border-radius: 10px;
    width: 9%;
    padding: 10px;
    margin: 2%;
    margin-right: 3%;
    border: none;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primaria};
    font-size: 18px;
    cursor: pointer;
`

export const PBtnStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primaria};
    font-size: 18px;
    margin: 0;
    padding: 0;
    text-decoration: none;
`