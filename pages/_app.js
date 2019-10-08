/** @jsx jsx */

// npm
import App from "next/app"
import Link from 'next/link'
// import { MDXProvider } from "@mdx-js/react"
// import { jsx, useColorMode, ThemeProvider, Styled, ColorMode, Flex, Box, Layout, Header, Main, Container, Footer, InitializeColorMode } from "theme-ui"
import { jsx, ThemeProvider, Styled, ColorMode, Layout } from "theme-ui"
import bestContrast from 'get-best-contrast-color'

import { dark as theme } from "@theme-ui/presets"

console.log('THEME:')
console.log(JSON.stringify(theme.colors, null, 2))
console.log()

if (!theme.colors.modes && theme.colors.text) {
  // theme.colors.text,
  const colors = [theme.colors.background, theme.colors.gray, theme.colors.muted, theme.colors.highlight].filter(Boolean)
  const dark = {
    text: theme.colors.background, // bestContrast(theme.colors.text, colors)
    background: bestContrast(theme.colors.background, colors) // theme.colors.text,
  }
  theme.colors.modes = { dark }
}

// const components = { Flex, Box, Layout, Header, Main, Container, Footer }
const components = {
  a: ({ children, href }) => <Link href={href}><a>{children}</a></Link>
}

// <InitializeColorMode />
// <ColorMode />

// <Styled.root>
// </Styled.root>

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme} components={components}>
        <ColorMode />
        <Styled.root>
          <Layout>
              <Component {...pageProps} />
          </Layout>
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
