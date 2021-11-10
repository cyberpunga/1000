/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import Form from "../components/form"

function Agregar() {
  return (
    <div sx={{ maxWidth: 640, py: 6, px: 3, mx: "auto" }}>
      <Themed.h1
        sx={{
          mb: 5,
          fontSize: 5,
          fontWeight: 800,
          textAlign: "center",
        }}
      >
        Último aviso
      </Themed.h1>
      <Themed.p
        sx={{
          fontSize: 5,
          fontFamily: "heading",
        }}
      >
        Como sabemos que los lectores echarán en falta más de algún verso inolvidable, hemos dejado{" "}
        <del>estas hojas en blanco</del> este formulario para que los anoten y los sumen a una lista que ya imaginamos
        interminable.
      </Themed.p>
      <Form />
    </div>
  )
}

export default Agregar
