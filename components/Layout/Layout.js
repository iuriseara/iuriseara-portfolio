import Nav from '../Nav';
import Footer from '../Footer';
import { Stack, useColorMode } from "@chakra-ui/react"
export default function Layout({ children }) {
    return (
        <>
        <Nav/>
            {children}
        <Footer/>
        </>
    )
};
