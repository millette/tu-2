/** @jsx jsx */

// npm
import App from "next/app"
import Link from 'next/link'
// import { MDXProvider } from "@mdx-js/react"
// import { jsx, useColorMode, ThemeProvider, Styled, ColorMode, Flex, Box, Layout, Header, Main, Container, Footer, InitializeColorMode } from "theme-ui"
// import { jsx, ThemeProvider, Styled, ColorMode, Layout } from "theme-ui"
import { jsx, ThemeProvider, Styled, ColorMode } from "theme-ui"
import * as themes from "@theme-ui/presets"

// self
import darkenTheme from '../darken-theme'

// import theme from '../theme'

// const components = { Flex, Box, Layout, Header, Main, Container, Footer }
const components = {
  a: ({ children, href }) => <Link href={href}><a>{children}</a></Link>
}

// <InitializeColorMode />
// <ColorMode />

// <Styled.root>
// </Styled.root>


class MyApp extends App {
  state = { selectedTheme: 'base' }
  // <Component {...pageProps} changeTheme={this.setState.bind(this)} />
  // {this.state.selectedTheme}

// <Layout>
// </Layout>

render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={darkenTheme(themes[this.state.selectedTheme])} components={components}>
        <ColorMode />
        <Styled.root>
          <Component {...pageProps} selectedTheme={this.state.selectedTheme} themes={Object.keys(themes)} changeTheme={this.setState.bind(this)} />
        </Styled.root>
      </ThemeProvider>
    )
  }
}


// <MDXProvider components={components}>
// </MDXProvider>

/*
<button
  onClick={e => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }}>
  Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
</button>
*/

export default MyApp
