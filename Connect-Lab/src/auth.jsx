export const isAuthenticated = () => {

    const idUsu = JSON.parse(localStorage.getItem("idUsuario"));
    
    if(idUsu){
        return true;
    }else if(!idUsu){
        return false;
    };
};