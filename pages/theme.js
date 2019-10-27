/** @jsx jsx */

// npm
import { useState } from "react"
import Link from "next/link"
import { jsx, useThemeUI, Styled } from "theme-ui"

// self
import Editor from "../components/ed"
import Modal from "../components/modal"

export default ({ updateTheme }) => {
  const [modal, showModal] = useState(false)
  const { theme } = useThemeUI()

  const clicky = () => {
    theme.fontWeights.body = 700
    updateTheme(theme)
  }

  return (
    <div>
      <Styled.h1>Theme page</Styled.h1>
      <Styled.p>
        go{" "}
        <Link href="/" passHref>
          <Styled.a>Home</Styled.a>
        </Link>
      </Styled.p>
      <Styled.p>
        go{" "}
        <Link href="/p3" passHref>
          <Styled.a>Page 3</Styled.a>
        </Link>
      </Styled.p>
      <Styled.p>
        go{" "}
        <Link href="/p4" passHref>
          <Styled.a>Page 4</Styled.a>
        </Link>
      </Styled.p>
      <button onClick={clicky}>Clicky</button>
      <button onClick={() => showModal(!modal)}>
        {modal ? "Hide" : "Show"} Modal
      </button>
      {modal && (
        <Modal>
          <Styled.p>
            <button onClick={() => showModal(false)}>[X]</button>
            Hello Modal
          </Styled.p>
        </Modal>
      )}
      <Editor onChange={updateTheme} json={theme} />
      <button sx={{ color: "white", bg: "primary" }}>A button</button>
    </div>
  )
}
