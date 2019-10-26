/** @jsx jsx */

// npm
// import React from "react"
import App from "next/app"
import Link from 'next/link'
import { jsx, ThemeProvider, Styled, ColorMode } from "theme-ui"
import { bootstrap as theme } from "@theme-ui/presets"

const components = {
  a: ({ children, href }) => <Link href={href}><Styled.a>{children}</Styled.a></Link>
}

class MyApp extends App {
  constructor (props) {
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
        </Styled.root>
      </ThemeProvider>
    )
  }
}

export default MyApp
