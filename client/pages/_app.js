import 'bootstrap/dist/css/bootstrap.css';

//Component is the page that will be rendered
//pageProps are the props that are passed to the page
export default ({Component,pageProps }) => {    
    return <Component {...pageProps} />;
};