import { navigate } from "gatsby"

export default function NotFound() {
  if (typeof window !== "undefined")
    navigate(
      "/dulce-patria-recibe-los-votos-con-que-chile-en-tus-aras-juro-que-o-la-tumba-seras-de-los-libres-o-el-asilo-contra-la-opresion."
    )
  return null
}
