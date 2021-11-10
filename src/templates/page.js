/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"

export default function PageTemplate({ pageContext }) {
  return <Layout pageContext={pageContext} />
}
