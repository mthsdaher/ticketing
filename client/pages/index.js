import build from "next/dist/build";
import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  return currentUser ? <h1>You're signed in</h1> : <h1>You are not signedin </h1> 
};

return <h1>Landing Page</h1>;

LandingPage.getInitialProps = async ({ context }) => {
  const client = buildClient({ context });
  const { data } = await buildClient({ context }).get("/api/users/currentuser");

  return data;
};

export default LandingPage;
