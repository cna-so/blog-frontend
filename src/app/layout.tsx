import './globals.css'
import Head from "next/head";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600;800&display=swap"
                  rel="stylesheet"/>
        </Head>
        <body>{children}</body>
        </html>
    )
}
