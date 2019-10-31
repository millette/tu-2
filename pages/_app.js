/** @jsx jsx */

// npm
import App from "next/app"
import Link from "next/link"
import Head from "next/head"
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

class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = { theme: {}, shown: false }
    this.setTheme = (theme) => this.setState({ theme })
    this.toggle = () => this.setState(({ shown }) => ({ shown: !shown }))
    this.close = () => this.setState({ shown: false })
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider components={components} theme={this.state.theme}>
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
            {!this.state.shown && <button onClick={this.toggle}>Editor</button>}
          </div>
          <EditorModal
            close={this.close}
            shown={this.state.shown}
            json={this.state.theme}
            onChange={this.setTheme}
          />
        </Styled.root>
      </ThemeProvider>
    )
  }
}

export default MyApp
