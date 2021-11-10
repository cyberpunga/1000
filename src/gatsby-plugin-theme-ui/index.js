import base from "@theme-ui/preset-base"
import { merge } from "theme-ui"

import "@fontsource/roboto/100.css"
import "@fontsource/eb-garamond/400.css"
import "@fontsource/marcellus/400.css"

const theme = merge(base, {
  colors: {
    primary: "#6d2f9c",
    secondary: "#ffae1e",
  },
  fontSizes: [10, 12, 14, 16, 22, 24, 32, 48, 64, 96],
  fonts: {
    heading: `'EB Garamond', serif`,
    body: `'Roboto', sans-serif`,
    cover: `'Marcellus', serif`,
  },
  fontWeights: {
    heading: 400,
    body: 100,
    cover: 400,
  },
  sizes: {
    container: 480,
  },
  layout: {
    header: {},
    main: {},
    footer: { textAlign: "center" },
    container: {
      maxWidth: "container",
      mx: "auto",
      px: 3,
    },
  },
  forms: {
    label: {
      fontFamily: "heading",
      fontSize: 4,
      fontWeight: "bold",
      mt: 3,
    },
    input: {
      fontFamily: "heading",
      fontSize: 5,
      "&:focus": {
        // borderColor: "primary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    textarea: {
      resize: "none",
      fontFamily: "heading",
      fontSize: 5,
      "&:focus": {
        // borderColor: "primary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
  },
  styles: {
    a: {
      cursor: "pointer",
      textDecoration: "underline",
      ":hover": {
        color: "secondary",
      },
    },
    p: {
      fontSize: 3,
    },
  },
})

export default theme
