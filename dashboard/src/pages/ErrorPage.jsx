import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "An Error Occured";
  let message = "Somthing went wrong!";

  if (error.status === 404) {
    message = error.data.message;
  }
  return (
    <>
      <h1>{title}</h1>
      <p>{message}</p>
    </>
  );
};

export default ErrorPage;