import { useState } from "react";
import { SectionTempoStyled, InfoTempoStyled } from './PrevisaoTempo.styles'

export const PrevisaoTempo = () => {
    // eslint-disable-next-line no-unused-vars
    const apiWeather = {
        key: '4628860cab528f9a218d49d13efdbbd8',
        base: 'https://api.openweathermap.org/data/2.5/'
    };

    // eslint-disable-next-line no-unused-vars
    const [search, setSearch] = useState("");

    return(
        <SectionTempoStyled>
            <p>16 °C</p>
            <p>São José, SC</p>
            <InfoTempoStyled>
                <p>Sensação térmica: 15°C</p>
                <p><b>---</b></p>
                <p>Precipitação: 0mm</p>
                <p><b>---</b></p>
                <p>Chance de chuva: 0%</p>
            </InfoTempoStyled>
        </SectionTempoStyled>
    )
}