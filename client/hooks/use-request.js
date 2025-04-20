<<<<<<< HEAD
import axios from 'axios';
import { useState } from 'react';

export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async (props = {}) => {
    try {
      setErrors(null);
      const response = await axios[method](url, { ...body, ...props });

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(
        <div className="alert alert-danger">
          <h4>Ooops....</h4>
=======
import axios from "axios";
import { useState } from "react";

export default ({ url, method, body, onSuccess }) => {//destructure the url, method, and body from the props
  const [errors, setErrors] = useState(null);//initialize the error message to null

  const doRequest = async () => {
    try {
      setErrors(null);//clear the error message
      const response = await axios[method](url, body);//make a request to the server
      return response.data;

      if (onSuccess) {
        onSuccess(response.data);//redirect the user to the root
      }

      return response.data;
    } catch (err){
      setErrors(//set the error message
        <div className="alert alert-danger">
          <h4>Oooops...</h4>
>>>>>>> 58553996d4a89ee01462b41c25bc7463cc6e64e7
          <ul className="my-0">
            {err.response.data.errors.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

<<<<<<< HEAD
  return { doRequest, errors };
=======
  return { doRequest, errors };//return the function and the error message
>>>>>>> 58553996d4a89ee01462b41c25bc7463cc6e64e7
};
