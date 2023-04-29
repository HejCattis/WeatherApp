import React, { useState } from "react";
import { Bar } from "react-chartjs-2"
import { UserData } from "./fakdata";
import  Chart  from "chart.js/auto"
import {CategoryScale} from 'chart.js'; 


function BarChart () {
    Chart.register(CategoryScale);
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
            label: "Users Gained", 
            data: UserData.map((data) => data.userGain),
            backgroundColor: ["red", "green", "blue", "yellow", "black"],
            borderColor: "black",
            borderWidth: 2,
        }]
    })

    return(
        <Bar data={userData} options={{}}></Bar>
    )
}

export default BarChart;