/** @jsx jsx */
import { jsx, Themed, Spinner, Flex } from "theme-ui"
import React, { useEffect } from "react"
import { Scrollama, Step } from "react-scrollama"
import { navigate } from "gatsby"

import { useList } from "../useList"

const Layout = ({ children, path, pageContext }) => {
  const { list, add } = useList()
  useEffect(() => add(pageContext), [add, pageContext])

  const current = parseInt(path.replace(/\//, ""))
  const next = current + 1
  const prev = current - 1

  const onStepEnter = a => console.log(a)

  const onStepExit = ({ direction }) => {
    if (direction === "down") {
      console.log("go next")
      navigate("/" + next, {
        state: { disableScrollUpdate: true },
      })
    }
    if (direction === "up") {
      console.log("go back")
      navigate("/" + prev, {
        state: { disableScrollUpdate: true },
      })
    }
  }

  return (
    <main sx={{ width: "100%", flex: "1 1 auto", variant: "layout.main" }}>
      <Scrollama
        onStepEnter={onStepEnter}
        onStepExit={onStepExit}
        offset={0.1}
        debug
      >
        <Step data={{ hola: "mundo" }}>
          <div sx={{ height: "10vh" }}></div>
        </Step>
        {list.map(({ verso, autor, fuente }, stepIndex) => (
          <Step data={{ verso, autor, fuente }} key={stepIndex}>
            <div
              sx={{
                display: "flex",
                minHeight: "80vh",
                width: "100%",
                p: 3,
                border: `1px solid red`,
              }}
            >
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
                  {fuente ? (
                    <React.Fragment>, «{fuente}»</React.Fragment>
                  ) : null}
                </Themed.p>
              </div>
            </div>
          </Step>
        ))}
      </Scrollama>
      <Flex sx={{ height: "60vh", textAlign: "center" }}>
        <Spinner sx={{ m: "auto" }} />
      </Flex>
    </main>
  )
}

export default Layout
