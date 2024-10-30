import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="py-40">
            <h2>Ops!!</h2>
            <p className="text-center">
                <i>{error.statusText || error.message}</i></p>
                {
                    error.status === 404 && <div>
                        <h3>Page not found</h3>
                        <p>Go back where you from</p>
                        <Link to="/">
                            <button className="border-2 border-[#008080] rounded-lg py-1 px-4 my-6">Home</button>
                        </Link>
                    </div>
                }          
        </div>
    );
};

export default ErrorPage;