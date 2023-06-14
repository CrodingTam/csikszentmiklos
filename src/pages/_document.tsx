import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&display=optional"/>
      </Head>
      <body style={{backgroundColor: "#FFFFFF", margin: "0px"}}>
        <Main />
        <NextScript />
      </body> 
    </Html>
  )
}
