import axios from "axios";
import { useState } from "react";

export default ({ url, method, body }) => {//destructure the url, method, and body from the props
  const [errors, setErrors] = useState(null);//initialize the error message to null

  const doRequest = async () => {
    try {
      setErrors(null);//clear the error message
      const response = await axios[method](url, body);//make a request to the server
      return response.data;
    } catch {
      setErrors(//set the error message
        <div className="alert alert-danger">
          <h4>Oooops...</h4>
          <ul className="my-0">
            {err.response.data.errors.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };//return the function and the error message
};
