import NextDocument from 'next/document';
import Head from 'next/document';
import Html from 'next/document';
import Main from 'next/document';
import NextScript from 'next/document';
import GoogleFonts from 'next-google-fonts';
import { ColorModeScript } from "@chakra-ui/react";

export default class MyDocument extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <GoogleFonts href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap" />
                <Head />
                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}