import { navigate } from "gatsby"

export default function Index() {
  if (typeof window !== "undefined") navigate("/1")
  return null
}
