import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

function Main() {
    const [info, setInfo] = useState("")
    const [weather, setWeather] = useState(null)

    const change = (event) => {
        setInfo(event.target.value)
    }

    const getWeather = async () => {
        const res = await fetch(`https://goweather.herokuapp.com/weather/${info}`)
        const data = await res.json()
        setWeather(data)
    }

    return (
        <div>
            <div className="app-name">
                <h1 className="main-text">Weather App</h1>
                <img className="logo" src="Group48.png" />
            </div>

            <div className="search-box">
                <button className="search-btn" onClick={getWeather}>
                    <img src="iconsearch.png" alt="search" className="search-icon" />
                </button>
                <input
                    placeholder="Search location..."
                    value={info}
                    onChange={change}
                    onKeyDown={(e) => e.key === "Enter" && getWeather()}
                />
            </div>

            <br />

            <AnimatePresence>
                {weather && (
                    <motion.div
                        className="result"
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <p className="City">{info}</p>
                        <p className="Temperature">{weather.temperature}</p>
                        <p className="Window">Ветер: {weather.wind}</p>
                        <p className="Info">Описание: {weather.description}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Main
