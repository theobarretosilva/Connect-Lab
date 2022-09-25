import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../../styles/defaultThemes";
import { SectionTempoStyled, InfoTempoStyled, PTempStyled, PLocalStyled, PSenPreChaStyled } from './PrevisaoTempo.styles'
import { GlobalStyle } from "../../styles/globalStyle";

export const PrevisaoTempo = () => {

    const [weather, setWeather] = useState();

    const dadosLS = JSON.parse(localStorage.getItem("dadosUsuario"));
    const cidadeUser = dadosLS.user.userAddress.city;

    const apiWeather = {
        key: '4628860cab528f9a218d49d13efdbbd8',
        base: 'https://api.openweathermap.org/data/2.5/'
    };

    const searchVai = () => {
        fetch(`${apiWeather.base}weather?q=${cidadeUser}&units=metric&APPID=${apiWeather.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result)
                console.log(result)
            });
    };

    useEffect(() => {
        searchVai();
    }, [])

    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <SectionTempoStyled>
                {weather ? (<PTempStyled>{weather.main.temp}°C</PTempStyled>) : (<PTempStyled>Calma</PTempStyled>)}
                {weather ? (<PLocalStyled>{weather.name}</PLocalStyled>) : (<PLocalStyled>Calma</PLocalStyled>)}
                <InfoTempoStyled>
                    {weather ? (<PSenPreChaStyled>Temperatura mínima: {weather.main.temp_min}°C</PSenPreChaStyled>) : (<PSenPreChaStyled>Calma</PSenPreChaStyled>)}
                    <p><b>-</b></p>
                    {weather ? (<PSenPreChaStyled>Temperatura máxima: {weather.main.temp_max}°C</PSenPreChaStyled>) : (<PSenPreChaStyled>Calma</PSenPreChaStyled>)}
                </InfoTempoStyled>
            </SectionTempoStyled>        
        </ThemeProvider>
        
    )
}