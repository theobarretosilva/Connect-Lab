import styled from "styled-components";

export const BoxCadastroStyled = styled.section`
    background: ${({ theme }) => theme.colors.primaria};
    box-shadow: 4px 4px 15px 1px ${({ theme }) => theme.sombras.primaria};
    border-radius: 15px;
    margin-top: 3%;
    margin-bottom: 2%;
    width: 60%;
    margin-left: 19.4%;
`

export const CadastreseStyled = styled.h2`
    font-weight: 600;
    font-size: 25px;
    color: ${({ theme }) => theme.colors.terciaria};
    padding-top: 20px;
    text-align: center;
    margin-bottom: 2%;
`

export const DivBaseStyled = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 2%;
`

export const DivInputStyled = styled.div`
    width: 40%;
`

export const InputCadastroStyled = styled.input`
    background: ${({ theme }) => theme.colors.primaria};
    border: 2px solid ${({ theme }) => theme.colors.quaternaria};
    border-radius: 10px;
    width: 320px;
    height: 38px;
    padding-left: 7px;
    font-family: 'Inter', sans-serif;
`

export const BtnCadastrese = styled.button`
    background: ${({ theme }) => theme.colors.terciaria};
    box-shadow: 0px 3px 2px ${({ theme }) => theme.sombras.primaria};
    border-radius: 20px;
    color: ${({ theme }) => theme.colors.primaria};
    font-weight: 600;
    font-size: 16px;
    width: 50%;
    height: 40px;
    border: none;
    margin-left: 24.8%;
    margin-top: 2%;
    margin-bottom: 4%;
    cursor: pointer;
`

export const PLoginStyled = styled.p`
    font-weight: 500;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.secundaria};
    padding-bottom: 3%;
    margin-top: 4%;
    text-align: center;
    cursor: pointer;
    font-size: 17px;
`