import styled from "styled-components";

export const DivLoadingStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const PLoadingStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 5%;
    color: ${({ theme })=> theme.colors.quaternaria};
`

export const ImgLoadingStyled = styled.img`
    width: 130px;
`