import { useState } from "react"

function Main(){
    const [info,setInfo] = useState("")
    const [weather, setWeather] = useState(null)

    const change = (event) =>{
        setInfo(event.target.value)
    }
    const getWeather = async () => {
        const res = await fetch(`https://goweather.herokuapp.com/weather/${info}`)
        const data = await res.json()
        setWeather(data)
    }

    return(
        <div>
            <h1>Weather App</h1>
            <input
            placeholder="Search city"
            value={info}
            onChange={change}
            ></input>
            <button
            onClick={getWeather}
            >Search</button>

            {weather && (
                <div>
                    <p>Температура: {weather.temperature}</p>
                    <p>Ветер: {weather.wind}</p>
                    <p>Описание: {weather.description}</p>
                </div>
            )}

        </div>
    )
}

export default Main