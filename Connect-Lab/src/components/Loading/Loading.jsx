import { DivLoadingStyled, ImgLoadingStyled, PLoadingStyled } from "./Loading.styles"

export const Loading = () => {
    return(
        <DivLoadingStyled>
            <PLoadingStyled>Adicionando dispositivo...</PLoadingStyled>
            <ImgLoadingStyled src="../../src/assets/imgs/loading.svg" alt="Loading"/>
        </DivLoadingStyled>        
    );
};