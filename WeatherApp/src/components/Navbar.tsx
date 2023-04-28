import "../style/Navbar.css"
import { MdSearch } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

function Navbar () {
    const [search, setSearch] = useState<string | boolean>(false)
    const navigate = useNavigate();

    const handleClick = () => {
        setSearch(!search)
    }

    const handleSearch = (event : FormEvent) => {
        event.preventDefault();

        // 👇️ redirect to /contacts
        navigate('/search/test');
    }


    return(
        <nav>
            <div>
                <MdSearch onClick={handleClick}></MdSearch>
                {search && 
                <form onSubmit={handleSearch}>
                <input type="text" onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    handleSearch(event);
                  }
                }} />
              </form>              
                }
            </div>
            {!search && <Link to="/" className="brand">Weather<span>App</span></Link>}
            <Link to="/saved"><FaRegStar></FaRegStar></Link>
        </nav>
    )
}

export default Navbar