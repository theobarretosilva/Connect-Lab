import { useState } from "react";
import { SectionTempoStyled, InfoTempoStyled, PTempStyled, PLocalStyled, PSenPreChaStyled } from './PrevisaoTempo.styles'

export const PrevisaoTempo = () => {
    // eslint-disable-next-line no-unused-vars
    const apiWeather = {
        key: '4628860cab528f9a218d49d13efdbbd8',
        base: 'https://api.openweathermap.org/data/2.5/'
    };

    const [search, setSearch] = useState("");
    
    const searchPressed = () => {
        fetch(`${apiWeather.base}weather?q=${search}&units=metric&APPID=${apiWeather.key}`)
    }

    return(
        <>
            <input type="text" onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={searchPressed}>pesquisar</button>
            <SectionTempoStyled>
                <PTempStyled>16 °C</PTempStyled>
                <PLocalStyled>São José, SC</PLocalStyled>
                <InfoTempoStyled>
                    <PSenPreChaStyled>Sensação térmica: 15°C</PSenPreChaStyled>
                    <p><b>-</b></p>
                    <PSenPreChaStyled>Precipitação: 0mm</PSenPreChaStyled>
                    <p><b>-</b></p>
                    <PSenPreChaStyled>Chance de chuva: 0%</PSenPreChaStyled>
                </InfoTempoStyled>
            </SectionTempoStyled>
        </>
        
    )
}