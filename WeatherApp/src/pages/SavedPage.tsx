import Header from "../components/Header"
import { DataItem } from "../components/Table";
import SortableTable from "../components/SortableTable";
import { getWeatherIcon } from "../utils/getWeatherIcon";
import Navbar from "../components/Navbar";
import useStoreUnit from "../store/storeUnits";
import useStoreSaved from "../store/storeSaved";



function SavedPage() {
    const title = "Saved locations"
    const titleText = "The locations is only saved in the session"

    const { storeSaved } = useStoreSaved();

    // const test = 'Clear'
    // const test2 = 'Rain'
    // const test3= 'Snow'
    // const data: DataItem[] = [
    //     {
    //         icon: getWeatherIcon(test),
    //         degree: 4,
    //         city: 'Stockholm', 
    //     },
    //     {
    //         icon: getWeatherIcon(test2),
    //         degree: 10, 
    //         city: 'London', 

    //     },
    //     {
    //         icon: getWeatherIcon(test3),
    //         degree: 13, 
    //         city: 'Helsingfors', 
    //     }
    // ]

    const config = [
        {
            label: 'Icon', 
            render: (storeSaved: DataItem) => <>{storeSaved.icon}</>
        },
        {
            label: 'Degree', 
            render: (storeSaved: DataItem) => <>{storeSaved.degree}</>,
            sortValue: (storeSaved: DataItem) => storeSaved.degree
        },
        {
            label: 'City', 
            render: (storeSaved: DataItem) => <>{storeSaved.city}</>,
            sortValue: (storeSaved: DataItem) => storeSaved.city
        },
      ]
    
      const getKey = (item: DataItem) => item.city || '';

    return (
        <div>
            <Navbar></Navbar>
            <Header title={title} text={titleText}></Header>
            { storeSaved.length > 0 ? 
            <SortableTable data={storeSaved} config={config} getKey={getKey}></SortableTable>
            : <p style={{width: "80vw", margin: "0 auto", fontStyle: "italic"}}>No location saved.</p>}        
        </div>
    )
}

export default SavedPage