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
            city: 'Stockholm', 
            degree: 4, 
            icon: getWeatherIcon(test)},
        {
            city: 'London', 
            degree: 10, 
            icon: getWeatherIcon(test2)
        },
        {
            city: 'Helsingfors', 
            degree: 13, 
            icon: getWeatherIcon(test3)},
    ]

    const config = [
        {
            label: 'City', 
            render: (savedCity: DataItem) => <>{savedCity.city}</>,
            sortValue: (savedCity: DataItem) => savedCity.city
        },
        {
            label: 'Degree', 
            render: (savedCity: DataItem) => <>{savedCity.degree}</>,
            sortValue: (savedCity: DataItem) => savedCity.degree
        },
        {
            label: 'Icon', 
            render: (savedCity: DataItem) => <>{savedCity.icon}</>
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