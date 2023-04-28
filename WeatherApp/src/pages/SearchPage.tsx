import Navbar from "../components/Navbar";
import { useParams } from 'react-router';


function SearchPage() {
    const { query } = useParams();

    return(
        <div>
            <Navbar></Navbar>
            {query}
        </div>
    )
}

export default SearchPage