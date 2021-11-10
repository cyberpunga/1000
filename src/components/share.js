/** @jsx jsx */
import { jsx } from "theme-ui"
import { Twitter, Facebook, Mail, Reddit, Whatsapp, Telegram } from "react-social-sharing"

export default function Share({ link, message }) {
  return (
    <div sx={{ display: "flex" }}>
      <Twitter simple message={message} link={link} />
      <Facebook simple message={message} link={link} />
      <Reddit simple message={message} link={link} />
      <Whatsapp simple message={message} link={link} />
      <Telegram simple message={message} link={link} />
      <Mail simple message={message} link={link} />
    </div>
  )
}
