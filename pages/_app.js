/** @jsx jsx */

// npm
import App from "next/app"
import Link from "next/link"
import { jsx, ThemeProvider, Styled, ColorMode } from "theme-ui"
import { bootstrap as theme } from "@theme-ui/presets"

const components = {
  a: ({ children, href }) => (
    <Link href={href} passHref>
      <Styled.a>{children}</Styled.a>
    </Link>
  ),
}

const sx = {
  div: {
    color: "background",
    bg: "primary",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: "auto",
    width: "300px",
    height: "300px",
    boxShadow: "0 5px 10px 2px rgba(195,192,192,.5)",
    padding: "20px",
    textAlign: "center",
  },
}

class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = { theme }
    this.setTheme = (theme) => this.setState({ theme })
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider components={components} theme={this.state.theme}>
        <ColorMode />
        <Styled.root>
          <Component {...pageProps} updateTheme={this.setTheme} />
          <div sx={sx} id="modal" />
        </Styled.root>
      </ThemeProvider>
    )
  }
}

export default MyApp
