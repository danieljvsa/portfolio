import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return <Html lang={this.props.__NEXT_DATA__.locale || 'en'}><Head>
      <meta name="theme-color" content="#071018" />
      <link rel="icon" href="/favicon.ico" />
    </Head><body><Main /><NextScript /></body></Html>
  }
}
