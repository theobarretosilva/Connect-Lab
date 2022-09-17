import { Header } from "../components/Header/Header"
import { BoxCadastro } from "../components/BoxCadastro/BoxCadastro"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TelaCadastro = () => {
    return(
        <>
            <Header />
            <BoxCadastro />
            <ToastContainer />
        </>
    )
}

export default TelaCadastro;