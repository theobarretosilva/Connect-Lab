import { useState } from "react";
import { SectionTempoStyled, InfoTempoStyled, PTempStyled, PLocalStyled, PSenPreChaStyled } from './PrevisaoTempo.styles'

export const PrevisaoTempo = () => {
    // eslint-disable-next-line no-unused-vars
    const apiWeather = {
        key: '4628860cab528f9a218d49d13efdbbd8',
        base: 'https://api.openweathermap.org/data/2.5/'
    };

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState();
    
    const searchPressed = () => {
        fetch(`${apiWeather.base}weather?q=${search}&units=metric&APPID=${apiWeather.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result)
                console.log(result)
            });
    };

    return(
        <>
            <input type="text" onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={searchPressed}>pesquisar</button>
            <SectionTempoStyled>
                
                {weather ? (<PTempStyled>{weather.main.temp}°C</PTempStyled>) : (<PTempStyled>Calma</PTempStyled>)}
                {weather ? (<PLocalStyled>{weather.name}</PLocalStyled>) : (<PLocalStyled>Calma</PLocalStyled>)}
                <InfoTempoStyled>
                    {weather ? (<PSenPreChaStyled>Sensação térmica: {weather.main.feels_like}°C</PSenPreChaStyled>) : (<PSenPreChaStyled>Calma</PSenPreChaStyled>)}
                    <p><b>-</b></p>
                    {weather ? (<PSenPreChaStyled>Umidade: {weather.main.humidity}%</PSenPreChaStyled>) : (<PSenPreChaStyled>Calma</PSenPreChaStyled>)}
                    <p><b>-</b></p>
                    {weather ? (<PSenPreChaStyled>Velocidade do vento: {weather.wind.speed} km/h</PSenPreChaStyled>) : (<PSenPreChaStyled>Calma</PSenPreChaStyled>)}
                </InfoTempoStyled>
            </SectionTempoStyled>
        </>
    )
}