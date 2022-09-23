import { Headerbar } from '../components/Headerbar/Headerbar';
import { BoxLogin } from '../components/BoxLogin/BoxLogin';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TelaLogin = () => {
    return(
        <>
            <Headerbar />
            <BoxLogin />
            <ToastContainer />
        </>
    )
}

export default TelaLogin;