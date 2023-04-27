import "../style/Header.css"
import { FaRegStar, FaStar } from "react-icons/fa";
import { useState } from "react";
import {  useUnitSwitch } from "../utils/handleUnitSwitch";
import useStoreUnit from "../store/storeUnits";

interface HeaderProps {
  title: string | undefined
  subtitle?: string | undefined
  icon?: true
  text: string
}

function Header({subtitle, title, icon, text}: HeaderProps) {
  const handleUnitSwitch = useUnitSwitch();
  const { storeUnit } = useStoreUnit();

  const [save, setSave] = useState(false)

   
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
