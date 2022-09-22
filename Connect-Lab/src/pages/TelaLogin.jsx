import { Headerbar } from '../components/Headerbar/Headerbar';
// import { BoxLogin } from '../components/BoxLogin/BoxLogin';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalAddDisp } from '../components/ModalAddDisp/ModalAddDisp';

export const TelaLogin = () => {
    return(
        <>
            <Headerbar />
            {/* <BoxLogin /> */}
            <ModalAddDisp />
            <ToastContainer />
        </>
    )
}

export default TelaLogin;