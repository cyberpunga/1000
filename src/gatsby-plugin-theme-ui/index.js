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
  styles: {
    a: {
      textDecoration: "none",
      ":hover": {
        color: "secondary",
      },
    },
    p: {
      fontSize: 3,
    },
  },
})

console.log(theme)

export default theme
