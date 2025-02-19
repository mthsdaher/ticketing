import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";

//
export default () => {
  const [email, setEmail] = useState(""); //initialize the email and password to an empty string
  const [password, setPassword] = useState("");
  const { doRequest, errors} = useRequest({//destructure the doRequest function and the errors message from the useRequest hook
    url: "/api/users/signin",
    method: "post",
    body: {
      email,
      password
    },
    onSuccess: () => Router.push('/')//redirect the user to the root route 
  });

  const onSubmit = async (event) => {
    event.preventDefault(); //prevent the browser from attempting to automatically submit the form

    Router.push('/');//redirect the user to the root route
    
    doRequest(); 
    /*
    => try catch block to show the error using response build-in method, BUT NOW WE USE useRequest hook to make a request to the server instead /\
    try {
      const response = await axios.post("/api/users/signin", {
        email,
        password,
      });
      console.log(response.data);
    } catch (err) {
      setErrors(err.response.data.errors);
    */

    return (
      <form onSubmit={onSubmit}>
        <h1>Sign in</h1>

        <div className="form-group">
          <label>Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)} //this is a function that will be called
                                                      //whenever the user types something in the input field
            className="form-control"
          />
        </div> 

        <div className="form-group">
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
          />
        </div>

        {errors}  //display the error message

        <button className="btn btn-primary">Sign in</button>
      </form>
    );
  };
};
