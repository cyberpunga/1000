/** @jsx jsx */
import { jsx, Themed, Flex } from "theme-ui"
import React from "react"

export default function Template(props) {
  const { verso, autor, fuente } = props.pageContext
  return (
    <Flex sx={{ height: "100vh", width: "100vw", p: 3, overflowX: "auto" }}>
      <div sx={{ m: "auto" }}>
        <pre sx={{ fontSize: 6, fontFamily: "heading" }}>{verso}</pre>
        <Themed.p>
          {autor ? autor : "Autor desconocido"}
          {fuente ? <React.Fragment>, «{fuente}»</React.Fragment> : null}
        </Themed.p>
      </div>
    </Flex>
  )
}
