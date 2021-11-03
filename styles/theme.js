import {theme as chakraTheme} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
    ...chakraTheme.fonts,
    body: `Open Sans', sans-serif, -apple-system,BlinkMacSystemFont, "Segoe UI",Helvetica,Arial,"Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol"`,
    headings: `Open Sans', sans-serif, -apple-system,BlinkMacSystemFont, "Segoe UI",Helvetica,Arial,"Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol"`
}

const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
})


const overrides = {
    ...chakraTheme,
    fonts,
    breakpoints,
    fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700
    },
    fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "64px",
    },
}
const customTheme = extendTheme({overrides})

export default customTheme