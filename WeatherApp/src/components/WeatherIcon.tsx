import useStoreUnit from "../store/storeUnits";
import "../style/WeatherIcon.css"

interface WeatherIconProps {
    degree: number;
    weatherCondition: string;
}

function WeatherIcon ({weatherCondition, degree}: WeatherIconProps) {
    const { storeUnit } = useStoreUnit();
    return (
        <div className="weather-current">
            <div className="snowy"></div> 
            <div className="weather-current-info">
                <div>
                    <h2>{Math.floor(degree)}</h2>
                    <h3>{storeUnit === 'metric' ? 'C' : 'F'}</h3>
                </div>
                <h3>{weatherCondition}</h3>
            </div>
        </div>
    )
}

export default WeatherIcon