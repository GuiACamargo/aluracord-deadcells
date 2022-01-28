import Head from "next/head";

<Head>
  
  <link rel="preconnect" href="https://fonts.googleapis.com"></link>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
  <link href="https://fonts.googleapis.com/css2?family=Supermercado+One&display=swap" rel="stylesheet"></link>
  
</Head>

function GlobalStyle() {
    return (
      <style global jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Supermercado+One&display=swap");
  
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
          font-family: "Supermercado One", cursive;
        }
        body {
          font-family: "Supermercado One", cursive;
        }
        /* App fit Height */
        html,
        body,
        #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */
      `}</style>
    );
  }
  
function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
