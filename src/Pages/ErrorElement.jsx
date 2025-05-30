import { Link, useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#f9fafb] text-gray-800 px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-7xl font-extrabold mb-4 text-red-500">Oops!</h1>
        <p className="text-2xl font-semibold mb-2">Something went wrong.</p>

        <p className="text-gray-600 mb-6">
          {error?.statusText || error?.message || "An unexpected error occurred."}
        </p>

        <p className="text-sm text-gray-500 mb-10">
          Error Code: <strong>{error?.status || "Unknown"}</strong>
        </p>

        <Link to="/" className="btn btn-primary">
          ⬅️ Go back home
        </Link>
      </div>
    </div>
  );
};

export default ErrorElement;
