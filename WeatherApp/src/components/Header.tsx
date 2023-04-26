import "../style/Header.css"
import { FaRegStar, FaStar } from "react-icons/fa";
import useStoreUnit from "../store/storeUnits";
import { useState } from "react";
import useStoreWeather from "../store/storeWeather";

interface HeaderProps {
  title: string | undefined
  subtitle: string | undefined 
  icon?: true
  text: string
}

function Header({subtitle, title, icon, text}: HeaderProps) {

  const [save, setSave] = useState(false)

  const { storeUnit, setStoreUnit } = useStoreUnit();
  const { updateWeatherData, weatherData } = useStoreWeather();

  const handleClick = (unit: string) => {
    if (storeUnit !== unit) { // only update if the selected unit is different
      setStoreUnit(unit);
  
      const temperature = weatherData?.main?.temp;
      if (temperature) {
        const convertedTemp = unit === 'metric' ? (temperature - 32) * 5 / 9 : temperature * 9 / 5 + 32;
        updateWeatherData({ main: { ...weatherData.main, temp: convertedTemp } });
      }
    }
  }
   
// FIXA DENNA
  const handleSave = () => {
    setSave(!save);
  }

  return (
    <div className="container">
      <section className="section-info">
        <h1>{title ? title : 'No location found'}</h1>
        {subtitle && <h2>{subtitle}</h2>}
        <h3>{text}</h3>
      </section>
      <section className="section-icons">
        {icon && (
            save ? <FaStar className="icon" onClick={handleSave} /> : <FaRegStar className="icon" onClick={handleSave} />
        )}
        <div>
            <button 
                onClick={() => handleClick('metric')} 
                className={storeUnit === 'metric' ? 'active' : ''}
                disabled={storeUnit === 'metric'}
                >
                    C
            </button>
            <p>/</p>
            <button 
                onClick={() => handleClick('imperial')} 
                className={storeUnit === 'imperial' ? 'active' : ''}
                disabled={storeUnit === 'imperial'}
                >
                    F
            </button>

        </div>
      </section>
    </div>
  );
  
}

export default Header;
