<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <div className="container">
        <Component currentUser={currentUser} {...pageProps} />
      </div>
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    ...data,
  };
};

=======
import "bootstrap/dist/css/bootstrap.css";
import buildClinet from "../api/build-client";

//Component is the page that will be rendered
//pageProps are the props that are passed to the page
const AppComponent = ({ Component, pageProps }) => {
  return (
    <div>
      <h1>Header</h1>
      <Component {...pageProps} />
    </div>
  );
};
// getInitialProps is a function that will be executed on the server to fetch some data from buildClient api
AppComponent.getIinitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("api/users/currentuser");

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx); //passing the context to the getInitialProps function
  }
};
>>>>>>> 58553996d4a89ee01462b41c25bc7463cc6e64e7
export default AppComponent;
