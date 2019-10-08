/** @jsx jsx */

// npm
import { jsx, useColorMode } from 'theme-ui'

export default () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <button onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </button>
  )
}
