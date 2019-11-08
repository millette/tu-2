/** @jsx jsx */

// npm
import Link from "next/link"
import Head from "next/head"
import { useState } from "react"
import { jsx, ThemeProvider, Styled, ColorMode } from "theme-ui"

// self
import EditorModal from "../components/ed-modal"

const components = {
  a: ({ children, href }) => (
    <Link href={href} passHref>
      <Styled.a>{children}</Styled.a>
    </Link>
  ),
}

const drag = (ev) => {
  const ball = ev.target

  const onMouseMove = ({ pageX, pageY }) => {
    ball.style.top = pageY - 5 + "px"
    ball.style.left = pageX - 25 + "px"
  }

  if (ball.style.bottom) {
    onMouseMove(ev)
    ball.style.bottom = null
    ball.style.right = null
  }

  document.addEventListener("mousemove", onMouseMove)

  ball.onmouseup = () => {
    document.removeEventListener("mousemove", onMouseMove)
    ball.onmouseup = null
  }
}

const MyApp = ({ Component, pageProps }) => {
  const [elState, setState] = useState({ theme: {}, shown: false })
  const setTheme = (theme) => setState({ theme })
  const toggle = () => setState({ shown: !elState.shown })
  const close = () => setState({ shown: false })

  return (
    <ThemeProvider components={components} theme={elState.theme}>
      <Head>
        <link rel="stylesheet" href="css/editor.min.css" />
      </Head>
      <ColorMode />
      <Styled.root>
        <Component {...pageProps} />
        <div
          zindex={1000}
          onMouseDown={drag}
          style={{
            background: "white",
            position: "absolute",
            overflow: "clip",
            bottom: 0,
            right: 0,
            padding: "0.5rem",
            border: "0.5rem dotted green",
          }}
          id="modal"
        >
          {!elState.shown && <button onClick={toggle}>Editor</button>}
        </div>
        <EditorModal
          close={close}
          shown={elState.shown}
          json={elState.theme}
          onChange={setTheme}
        />
      </Styled.root>
    </ThemeProvider>
  )
}

export default MyApp
