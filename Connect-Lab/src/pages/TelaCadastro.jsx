import { Headerbar } from "../components/Headerbar/Headerbar"
import { BoxCadastro } from "../components/BoxCadastro/BoxCadastro"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TelaCadastro = () => {
    return(
        <>
            <Headerbar />
            <BoxCadastro />
            <ToastContainer />
        </>
    )
}

export default TelaCadastro;