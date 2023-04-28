import "../style/Header.css"
import { FaRegStar, FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useUnitSwitch } from "../utils/handleUnitSwitch";
import useStoreUnit from "../store/storeUnits";
import useStoreSaved from "../store/storeSaved";
import useStoreWeather from "../store/storeWeather";

interface HeaderProps {
  title: string | undefined
  subtitle?: string | undefined
  icon?: true
  text: string
}

function Header({subtitle, title, icon, text}: HeaderProps) {
  const handleUnitSwitch = useUnitSwitch();
  const { storeUnit } = useStoreUnit();
  const { storeSaved, setStoreSaved } = useStoreSaved();
  const {weatherData} = useStoreWeather();

  const [save, setSave] = useState(false)

  useEffect(() => {
    const cityName = weatherData?.name;
    if (cityName) {
      const isCitySaved = storeSaved.some((savedCity) => savedCity.city === cityName);
      setSave(isCitySaved);
    } else {
      setSave(false);
    }
  }, [storeSaved, weatherData?.name]);

  const handleSave = () => {
    const cityName = weatherData?.name;
    
    if (cityName && !save) {
      setStoreSaved((prev) => [
        ...prev,
        {
          city: cityName,
          degree: weatherData.main.temp,
          icon: weatherData.weather[0].main,
        },
      ]);
      setSave(true);
    }
  };

  return (
    <div className="container">
      <section className="section-info">
        <h1>{title ? title : 'No location found'}</h1>
        {subtitle && <h2>{subtitle}</h2>}
        <h3>{text}</h3>
      </section>
      <section className="section-icons">
        {icon && (
          save ? <FaStar className="icon" /> : <FaRegStar className="icon" onClick={handleSave} />
        )}
        <div>
          <button 
            onClick={() => handleUnitSwitch('metric')} 
            className={storeUnit === 'metric' ? 'active' : ''}
            disabled={storeUnit === 'metric'}
          >
            C
          </button>
          <p>/</p>
          <button 
            onClick={() => handleUnitSwitch('imperial')} 
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
