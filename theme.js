import bestContrast from 'get-best-contrast-color'

import { bulma as theme } from "@theme-ui/presets"
// import * as themes from "@theme-ui/presets"

// console.log('THEME:', Object.keys(themes))
console.log(JSON.stringify(theme.colors, null, 2))
// console.log()

if ((!theme.colors.modes || !theme.colors.modes.dark) && theme.colors.text) {
  const colors = [theme.colors.text, theme.colors.background, theme.colors.gray, theme.colors.muted, theme.colors.highlight].filter(Boolean).filter((x) => typeof x === 'string').filter((x) => x.indexOf('hsla'))
  const dark = {
    // text: theme.colors.background, // bestContrast(theme.colors.text, colors)
    // background: bestContrast(theme.colors.background, colors) // theme.colors.text,
    text: bestContrast(theme.colors.text, colors),
    background: theme.colors.text,
  }
  theme.colors.modes = { dark }
}

export default theme
