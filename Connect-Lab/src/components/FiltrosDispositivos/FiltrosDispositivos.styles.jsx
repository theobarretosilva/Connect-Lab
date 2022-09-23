import styled from "styled-components";

export const FiltroStyled = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 4%;
    margin-left: 5%;
`

export const PFiltroSelecionado = styled.p`
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.colors.quaternaria};
    border: 0.5px solid ${({ theme }) => theme.colors.terciaria};
    border-radius: 4px;
    padding: 0.5%;
    color: ${({ theme }) => theme.colors.primaria};
    box-shadow: ${({ theme }) => theme.sombras.secundaria} 0px 30px 60px -12px inset, ${({ theme }) => theme.sombras.terciaria} 0px 18px 36px -18px inset;
`

export const PFiltro = styled.p`
font-family: 'Inter', sans-serif;
    border: 0.5px solid ${({ theme }) => theme.colors.terciaria};
    border-radius: 4px;
    padding: 0.5%;
    color: ${({ theme }) => theme.colors.terciaria};
    cursor: pointer;
    box-shadow: 0px 4px 4px ${({ theme }) => theme.sombras.primaria};
`