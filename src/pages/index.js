import React, { useEffect } from "react"
import { navigate } from "gatsby"

import Seo from "../components/seo"

export default function Index(props) {
  useEffect(() =>
    navigate(
      "/dulce-patria-recibe-los-votos-con-que-chile-en-tus-aras-juro-que-o-la-tumba-seras-de-los-libres-o-el-asilo-contra-la-opresion"
    )
  )
  return <Seo title="" />
}
