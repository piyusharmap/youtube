import { useRouteError } from "react-router-dom";

import ErrorImage from "../../assets/error_page.svg";

export default function Error() {
  const { status, statusText } = useRouteError();

  return (
    <div className="w-full p-4 flex flex-col items-center">
      <img className="w-1/2" alt="error" src={ErrorImage} />
      <h1 className="font-secondary text-5xl">{status}</h1>
      <p className="font-secondary text-3xl">{statusText}</p>
      <p className="p-2 text-lg">
        This page isn't available. Try searching something else.
      </p>
    </div>
  );
}
