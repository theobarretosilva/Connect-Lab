import './Header.css'

export const Header = () => {
    return(
        <header className="header">
            <div id='divLogo'>
                <img id="logo1" src="../src/assets/imgs/ConnectLab - Logo.png" alt="Logo do Connect Lab" />
                <p id="pLogo">Connect Lab</p>
            </div>
            <button id="btnLogin">Login</button>
        </header>
    )
}