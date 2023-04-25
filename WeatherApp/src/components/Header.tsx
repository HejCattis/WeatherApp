import "../style/Header.css"
import useStoreWeather from "../store/storeWeather";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const { weatherData } = useStoreWeather((state) => ({
    weatherData: state.weatherData,
  }));

  const [unit, setUnit] = useState('celsius')
  const [save, setSave] = useState(false)

  const handleClick = (value: string) => {
    setUnit(value);
  }

  const handleSave = () => {
    setSave(!save);
  }

  const formatDate = (date: Date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayOfWeek = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    return `${dayOfWeek}, ${dayOfMonth} ${month}`;
  }

  const today = new Date();
  const formattedDate = formatDate(today);

  return (
    <div className="container">
      <section className="section-info">
        <h1>{weatherData ? weatherData.name : 'WeatherWomen'}</h1>
        <h2>{weatherData ? weatherData.sys.country : 'No location found'}</h2>
        <h3>{formattedDate}</h3>
      </section>
      <section className="section-icons">
        {save ? <FaStar className="icon" onClick={handleSave} /> : <FaRegStar className="icon" onClick={handleSave} />}
        <div>
          <button onClick={() => handleClick('celsius')} className={unit === 'celsius' ? 'active' : ''}>C</button>
          <p>/</p>
          <button onClick={() => handleClick('fahrenheit')} className={unit === 'fahrenheit' ? 'active' : ''}>F</button>
        </div>
      </section>
    </div>
  );
}

export default Header;
