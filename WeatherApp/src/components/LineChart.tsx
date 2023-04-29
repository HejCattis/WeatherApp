import "../style/LineChart.css"
import { useState } from "react";
import { Line } from "react-chartjs-2"
import  Chart  from "chart.js/auto"
import {CategoryScale} from 'chart.js'; 
import useStoreWeather from "../store/storeWeather";
import { formatDate } from "../utils/dateUtils"; 
import useStoreUnit from "../store/storeUnits";

function LineChart() {
    const { forecastData } = useStoreWeather();
    const { storeUnit } = useStoreUnit();
    if (!forecastData) {
        return null; 
      }
  
    Chart.register(CategoryScale);
  
    // Create an array of unique dates
    const uniqueDates = Array.from(
      new Set(forecastData.list.map((data) => formatDate(new Date(data.dt_txt))))
    );
  
    // Map the unique dates to the corresponding data values
    const dataByDate = uniqueDates.map((date) => {
      const dataForDate = forecastData.list.filter(
        (data) => formatDate(new Date(data.dt_txt)) === date
      );
      const averageTemp =
        dataForDate.reduce((total, data) => total + data.main.temp, 0) /
        (dataForDate.length || 1); // add type guard and default to 1 to avoid divide-by-zero error
      const averageWindSpeed =
        dataForDate.reduce((total, data) => total + data.wind.speed, 0) /
        (dataForDate.length || 1); // add type guard and default to 1 to avoid divide-by-zero error
      return { date, temp: averageTemp, windSpeed: averageWindSpeed };
    });
  
    const [userData, setUserData] = useState({
      labels: dataByDate.map((data) => data.date),
      datasets: [
        {
          label: `Temperature ${storeUnit === "metric" ? "°C" : "°F"}`,
          data: dataByDate.map((data) => data.temp),
          borderColor: "#12355B",
          backgroundColor: "#12355B"
        },
        {
          label: 'Wind Speed (m/s)',
          data: dataByDate.map((data) => data.windSpeed),
          borderColor: "#D62F2F",
          backgroundColor: "#D62F2F"
        },
      ],
    });
  
    return (
        <div className="chart-container">
            <Line data={userData} options={{}} />
        </div>
    );
  }
  
  

export default LineChart