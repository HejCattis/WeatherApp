import "../style/Header.css"
import { FaRegStar, FaStar } from "react-icons/fa";
import { useState } from "react";

interface HeaderProps {
  title: string | undefined
  subtitle: string | undefined 
  icon?: true
  text: string
}

function Header({subtitle, title, icon, text}: HeaderProps) {

  const [unit, setUnit] = useState('celsius')
  const [save, setSave] = useState(false)

  const handleClick = (value: string) => {
    setUnit(value);
  }

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
                onClick={() => handleClick('celsius')} 
                className={unit === 'celsius' ? 'active' : ''}
                >C
            </button>
             <p>/</p>
            <button 
                onClick={() => handleClick('fahrenheit')} 
                className={unit === 'fahrenheit' ? 'active' : ''}
                >F
            </button>
        </div>
      </section>
    </div>
  );
  
}

export default Header;
