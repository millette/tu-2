/** @jsx jsx */

// npm
import Link from "next/link"
import { jsx, useThemeUI, Styled } from "theme-ui"

// self
import Editor from "../components/ed"

export default ({ updateTheme }) => {
  const { theme } = useThemeUI()

  const clicky = () => {
    theme.fontWeights.body = 700
    updateTheme(theme)
  }

  return (
    <div>
      <Styled.h1>Page 2!!</Styled.h1>
      <Styled.p>
        go{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </Styled.p>
      <Styled.p>
        go{" "}
        <Link href="/p3">
          <a>Page 3</a>
        </Link>
      </Styled.p>
      <Styled.p>
        go{" "}
        <Link href="/p4">
          <a>Page 4</a>
        </Link>
      </Styled.p>
      <button onClick={clicky}>Clicky</button>
      <Editor onChange={updateTheme} json={theme} />
      <button sx={{ color: "white", bg: "primary" }}>A button</button>
    </div>
  )
}
