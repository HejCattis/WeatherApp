import useStoreUnit from "../store/storeUnits";
import "../style/WeatherIcon.css"

function WeatherIcon () {
    const { storeUnit, setStoreUnit } = useStoreUnit();

    return (
        <div className="weather-current">
            <div className="snowy"></div> 
            <div className="weather-current-info">
                <div>
                    <h2>10</h2>
                    <h3>{storeUnit === 'metric' ? 'C' : 'F'}</h3>
                </div>
                <h3>Cloudy</h3>
            </div>
        </div>
    )
}

export default WeatherIcon