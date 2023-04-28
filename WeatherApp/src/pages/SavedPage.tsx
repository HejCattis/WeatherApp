import Header from "../components/Header"
import {DataItem} from "../components/Table";
import SortableTable from "../components/SortableTable";
import { getWeatherIcon } from "../utils/getWeatherIcon";



function SavedPage() {
    const title = "Saved locations"
    const titleText = "The locations is only saved in the session"

    const test = 'Clear'
    const test2 = 'Rain'
    const test3= 'Snow'
    const data: DataItem[] = [
        {
            icon: getWeatherIcon(test),
            degree: 4,
            city: 'Stockholm', 
        },
        {
            icon: getWeatherIcon(test2),
            degree: 10, 
            city: 'London', 

        },
        {
            icon: getWeatherIcon(test3),
            degree: 13, 
            city: 'Helsingfors', 
        }
    ]

    const config = [
        {
            label: 'Icon', 
            render: (savedCity: DataItem) => <>{savedCity.icon}</>
        },
        {
            label: 'Degree', 
            render: (savedCity: DataItem) => <>{savedCity.degree}</>,
            sortValue: (savedCity: DataItem) => savedCity.degree
        },
        {
            label: 'City', 
            render: (savedCity: DataItem) => <>{savedCity.city}</>,
            sortValue: (savedCity: DataItem) => savedCity.city
        },
      ]
    
      const getKey = (item: DataItem) => item.city || '';

    return (
        <div>
            <Header title={title} text={titleText}></Header>
            <SortableTable data={data} config={config} getKey={getKey}></SortableTable>
        </div>
    )
}

export default SavedPage