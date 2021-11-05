/** @jsx jsx */
import { jsx, Themed, Flex } from "theme-ui"

const IndexPage = () => (
  <Flex sx={{ height: "100vh", width: "100vw", p: 3, overflowX: "auto" }}>
    <div sx={{ m: "auto" }}>
      <Themed.h1
        sx={{ fontFamily: "cover", my: 0, textAlign: "center", fontSize: 9 }}
      >
        ∞
      </Themed.h1>
      <Themed.h1 sx={{ fontFamily: "cover", my: 0, textAlign: "center" }}>
        versos chilenos
      </Themed.h1>
    </div>
  </Flex>
)

export default IndexPage
