/** @jsx jsx */

// npm
import App from "next/app"
import Link from "next/link"
import Head from "next/head"
import { jsx, ThemeProvider, Styled, ColorMode } from "theme-ui"
import { bootstrap as theme } from "@theme-ui/presets"

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
    this.drag2 = this.drag2.bind(this)
  }

  drag(ev) {
    // console.log('Dragging...', ev.target)
    // ev.preventDefault()

    const ball = ev.target

    function moveAt(pageX, pageY) {
      ball.style.left = pageX + "px"
      ball.style.top = pageY + "px"
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY)
    }

    // (3) move the ball on mousemove
    document.addEventListener("mousemove", onMouseMove)

    // (4) drop the ball, remove unneeded handlers
    ball.onmouseup = function() {
      document.removeEventListener("mousemove", onMouseMove)
      ball.onmouseup = null
    }
  }

  drag2(ev) {
    console.log("Dragging2...", ev)
    ev.preventDefault()
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
          <Component {...pageProps} updateTheme={this.setTheme} />
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

export default MyApp
