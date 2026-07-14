import Search from "../Search";
import { useEffect, useState } from "react";

export default function Weather() {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    async function fetchWeatherData(param) {
        setLoading(true)
        try {

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&units=metric&appid=881bb6de1b8debe7708806e1f430c396`);
            const data = await response.json();
            if (data) {
                setWeatherData(data)
                setLoading(false)
            }
        } catch (e) {
            setLoading(false)
            console.log(e);

        }
    }
    function handleSearch() {
        fetchWeatherData(search)
    }
    useEffect(() => {
        fetchWeatherData("pakistan")
    }, [])
    function getCurrentDate() {
        return new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }
    return (

        <div>
            <Search
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch} />
            {
                loading ? <div className="loading">Loading ....</div> :
                    <div>
                        <div className="city-name">
                            <h2>{weatherData?.name},<span>{weatherData?.sys?.country}</span></h2>
                        </div>
                        <div className="date">{getCurrentDate()}</div>
                       
                        <div className="temperature">
                            {weatherData?.main?.temp}<span className="unit">°C</span>
                        </div>
                        <p className="description">{weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : ''}</p>
                        <div className="weather-info">
                            <div>
                                <div className="column">
                                    <p className="value">{
                                        weatherData?.wind?.speed}</p>
                                    <p className="label">Wind Speed</p>
                                </div>
                            </div>
                            <div className="column">
                                <div>
                                    <p className="value">{
                                        weatherData?.main?.humidity}</p>
                                    <p className="label">Humidity</p>
                                </div>
                            </div>
                        </div>
                    </div>

            }

        </div>
    )
}