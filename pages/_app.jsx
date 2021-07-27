import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <hr />
      {process.browser && location.pathname !== '/' && <a href='/'>戻る</a>}
    </>
  );
}

export default MyApp;
