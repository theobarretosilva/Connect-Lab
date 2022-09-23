import styled from "styled-components";

export const SectionTempoStyled = styled.section`
    background-color: ${({ theme }) => theme.colors.primaria};
    width: 90%;
    box-shadow: 0px 4px 4px ${({ theme }) => theme.sombras.primaria};
    border-radius: 10px;
    text-align: center;
    margin-top: 2%;
    justify-content: center;
    text-align: center;
    margin-left: 5%;
`

export const PTempStyled = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
    color: ${({ theme }) => theme.colors.quaternaria};
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 39px;
    padding-top: 20px;
    margin-bottom: 0;
`

export const PLocalStyled = styled.p`
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 25px;
    color: ${({ theme }) => theme.colors.terciaria};
    margin-top: 1%;
    margin-bottom: 1%;
`

export const InfoTempoStyled = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
`

export const PSenPreChaStyled = styled.p`
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.nonaria};
    margin-left: 6px;
    margin-right: 6px;
`