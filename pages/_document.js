import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return(
    <Html>
      <Head>
        <body 
        className= "bg-cover bg-menu-bg-image"
        >
          <Main />
          <NextScript />
        </body>
      </Head>
    </Html>
  )
}

export default Document;
