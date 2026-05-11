import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" style={{ scrollBehavior: 'smooth' }}>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="theme-color" content="#0F1219" />
                <link rel="shortcut icon" href="favicon.png" type="image/png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <body className="bg-background text-foreground antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
