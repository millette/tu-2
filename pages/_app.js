/** @jsx jsx */

// npm
import App from "next/app"
import Link from "next/link"
import Head from "next/head"
import { jsx, ThemeProvider, Styled, ColorMode } from "theme-ui"
import { bootstrap as theme } from "@theme-ui/presets"

// self
import EditorModal from "../components/ed-modal"

const components = {
  a: ({ children, href }) => (
    <Link href={href} passHref>
      <Styled.a>{children}</Styled.a>
    </Link>
  ),
}

class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = { theme }
    this.setTheme = (theme) => this.setState({ theme })
    this.drag = this.drag.bind(this)
  }

  drag(ev) {
    const ball = ev.target

    const onMouseMove = ({ pageX, pageY }) => {
      ball.style.top = pageY - 10 + "px"
      ball.style.left = pageX - 10 + "px"
    }

    onMouseMove(ev)
    ball.style.bottom = null
    ball.style.right = null

    document.addEventListener("mousemove", onMouseMove)

    ball.onmouseup = () => {
      document.removeEventListener("mousemove", onMouseMove)
      ball.onmouseup = null
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider components={components} theme={this.state.theme}>
        <Head>
          <link rel="stylesheet" href="/css/editor.min.css" />
        </Head>
        <ColorMode />
        <Styled.root>
          <Component {...pageProps} />
          <div
            zindex={1000}
            onMouseDown={this.drag}
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              border: "1rem solid green",
            }}
            id="modal"
          >
            ED
          </div>

          <EditorModal json={this.state.theme} onChange={this.setTheme} />
        </Styled.root>
        <style jsx>{`
          #modal:empty {
            display: none;
          }
        `}</style>
      </ThemeProvider>
    )
  }
}

/*

// <Component {...pageProps} updateTheme={this.setTheme} />


shown={shown}
close={() => showModal(false)}
onChange={updateTheme}



*/

export default MyApp
