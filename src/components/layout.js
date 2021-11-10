/** @jsx jsx */
import { jsx, Themed, Spinner, Flex } from "theme-ui"
import React from "react"
import { Scrollama, Step } from "react-scrollama"
import { navigate } from "gatsby"
import { useList } from "../useList"
import { createPath } from "../utils"
import Seo from "./seo"

export default function Layout({ pageContext }) {
  const { list, add } = useList()
  const onStepEnter = () => add(pageContext)
  const onStepExit = ({ direction }) => {
    if (direction === "down") {
      const next = createPath(pageContext.next.verso)
      navigate(next, { state: { disableScrollUpdate: true } })
    }
    if (direction === "up") {
      const prev = createPath(pageContext.prev.verso)
      navigate(prev, { state: { disableScrollUpdate: true } })
    }
  }

  return (
    <React.Fragment>
      <Seo title={pageContext.verso} />
      <main sx={{ variant: "layout.main" }}>
        <Scrollama onStepExit={onStepExit} onStepEnter={onStepEnter} offset={0}>
          <Step data={{ hola: "mundo" }}>
            <div sx={{ height: "10vh" }}></div>
          </Step>
          {list.map(({ verso, autor, fuente }, stepIndex) => (
            <Step data={{ verso, autor, fuente }} key={stepIndex}>
              <Flex sx={{ minHeight: "80vh", width: "100%", p: 3 }}>
                <div sx={{ m: "auto" }}>
                  <pre
                    sx={{
                      fontSize: 6,
                      fontFamily: "heading",
                      whiteSpace: "break-spaces",
                    }}
                  >
                    {verso}
                  </pre>
                  <Themed.p>
                    {autor ? autor : "Autor desconocido"}
                    {fuente ? <React.Fragment>, «{fuente}»</React.Fragment> : null}
                  </Themed.p>
                </div>
              </Flex>
            </Step>
          ))}
        </Scrollama>
        <Flex sx={{ height: "60vh", textAlign: "center" }}>
          <Spinner sx={{ m: "auto" }} />
        </Flex>
      </main>
    </React.Fragment>
  )
}
