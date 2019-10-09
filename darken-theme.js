// npm
import bestContrast from 'get-best-contrast-color'

const darkenTheme = (theme) => {
  if ((theme.colors.modes && theme.colors.modes.dark) || !theme.colors.text) return theme
  // if ((!theme.colors.modes || !theme.colors.modes.dark) && theme.colors.text) {
  const colors = [theme.colors.text, theme.colors.background, theme.colors.gray, theme.colors.muted, theme.colors.highlight].filter(Boolean).filter((x) => typeof x === 'string').filter((x) => x.indexOf('hsla'))
  const dark = {
    // text: theme.colors.background, // bestContrast(theme.colors.text, colors)
    // background: bestContrast(theme.colors.background, colors) // theme.colors.text,
    text: bestContrast(theme.colors.text, colors),
    background: theme.colors.text,
  }
  theme.colors.modes = { dark }
  return theme
}

export default darkenTheme
