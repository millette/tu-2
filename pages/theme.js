/** @jsx jsx */

// npm
// import { useState } from "react"
import Link from "next/link"
// import { jsx, useThemeUI, Styled } from "theme-ui"
import { jsx, Styled } from "theme-ui"

// self
// import EditorModal from "../components/ed-modal"

export default () => {
  // const [shown, showModal] = useState(false)
  // const { theme } = useThemeUI()

  /*
  const clicky = () => {
    theme.fontWeights.body = 700
    updateTheme(theme)
  }
  */

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
      {/*
      <button onClick={clicky}>Clicky</button>
      <button onClick={() => showModal(!shown)}>
        {shown ? "Cancel" : "Edit"}
      </button>
      <EditorModal
        shown={shown}
        close={() => showModal(false)}
        onChange={updateTheme}
        json={theme}
      />
      */}
      <button sx={{ color: "white", bg: "primary" }}>A button</button>
    </div>
  )
}
