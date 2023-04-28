import "../style/Error.css"
import { useRouteError } from "react-router-dom";
import { TbFaceIdError } from "react-icons/tb";
import { Link } from "react-router-dom";


interface RouteError {
  statusText?: string;
  message?: string;
}

function ErrorPage () {
    const error = useRouteError() as RouteError;

    return (
        <div className="error-page">
            <TbFaceIdError className="icon"></TbFaceIdError>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to={`/`}>Take me back</Link>
        </div>
    )
}

export default ErrorPage