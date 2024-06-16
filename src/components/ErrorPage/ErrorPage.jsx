import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1 className="text-2xl font-bold">Oops!</h1>
            <p>An unexpected error has occurred</p>
            <h2>{error.status}</h2>
            <p>{error.statusText || error.message}</p>
        </div>
    );
};

export default ErrorPage;