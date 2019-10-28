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

    function onMouseMove({ pageX, pageY }) {
      ball.style.left = pageX + "px"
      ball.style.top = pageY + "px"
    }

    // (3) move the ball on mousemove
    document.addEventListener("mousemove", onMouseMove)

    // (4) drop the ball, remove unneeded handlers
    ball.onmouseup = function() {
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
              top: 50,
              left: 50,
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
