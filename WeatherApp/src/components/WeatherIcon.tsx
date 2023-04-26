import "../style/WeatherIcon.css"

function WeatherIcon () {

    return (
        <div className="weather-current">
            <div className="snowy"></div> 
            <div className="weather-current-info">
                <div>
                    <h2>10</h2>
                    <h3>F</h3>
                </div>
                <h3>Cloudy</h3>
            </div>
        </div>
    )
}

export default WeatherIcon