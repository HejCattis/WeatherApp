import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useParams } from 'react-router';


function SearchPage() {
    const { query } = useParams();
    useEffect(()=>{
        /*
        Query logic
        */
        console.log('i fire once');
  },[]);


    return(
        <div>
            <Navbar></Navbar>
            {query}
        </div>
    )
}

export default SearchPage