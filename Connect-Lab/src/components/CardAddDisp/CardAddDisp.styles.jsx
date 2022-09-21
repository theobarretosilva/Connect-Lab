import styled from "styled-components";

export const GroupDispAddStyled = styled.section`
    position: absolute;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 3;
    width: 1200px;
    margin-left: 6%;
    margin-right: 50%;
`

export const CardStyled = styled.section`
    width: 350px;
    background: ${({ theme }) => theme.colors.primaria};
    box-shadow: 0px 5px 4px ${({ theme }) => theme.sombras.primaria};
    border-radius: 20px;
    text-align: center;
    margin-top: 2%;
`

export const ImgDispStyled = styled.img`
    width: 80px;
    margin-top: 3%;
`

export const TipoDispStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.octonaria};
    margin-top: 2%;
`

export const BtnAddStyled = styled.button`
    background: ${({ theme }) => theme.colors.quaternaria};
    box-shadow: 0px 3px 4px ${({ theme }) => theme.sombras.primaria};
    border-radius: 10px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primaria};
    border: none;
    padding: 2% 4%;
    margin-top: 4%;
    margin-bottom: 4%;
    cursor: pointer;
`