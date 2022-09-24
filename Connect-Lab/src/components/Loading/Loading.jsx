import { DivLoadingStyled, ImgLoadingStyled } from "./Loading.styles"

export const Loading = () => {
    return(
        <DivLoadingStyled>
            <ImgLoadingStyled src="../../src/assets/imgs/loading.svg" alt="Loading"/>
        </DivLoadingStyled>
    )
}