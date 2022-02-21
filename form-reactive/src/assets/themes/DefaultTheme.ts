import { createTheme, Theme } from "@material-ui/core";

const BLUE = "#004B84";

export const defaultTheme: Theme = createTheme({
    typography: {
        fontFamily: ["Verdana", "Geneva", "Arial", "sans-serif"].join(","),
        h1: {
            fontSize: 34,
            fontWeight: 600,
        },
        h2: {
            color: BLUE,
            fontSize: 34,
            fontWeight: 400,
            letterSpacing: 1,
        },
        h3: {
            color: BLUE,
            fontSize: 22,
            fontWeight: 600,
        },
        h6: {
            color: BLUE,
            fontSize: 18,
            fontWeight: 600,
        },
        subtitle1: {
            color: BLUE,
            fontSize: 16,
        },
        fontSize: 14,
        button: {
            textTransform: "none",
        },
    },

    palette: {
        background: {
            default: "#F4F7FA",
            paper: "#EDF0F4",
        },
        primary: {
            main: BLUE,
        },
        secondary: {
            main: BLUE,
        },
        text: {
            primary: "#333333", //black,
            secondary: BLUE,
        },
    },

    overrides: {
        MuiOutlinedInput: {
            root: {
                backgroundColor: "#F4F7FA", // default background
            },
        },
    },
});
