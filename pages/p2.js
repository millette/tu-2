/** @jsx jsx */

// npm
import Link from 'next/link'
import { jsx, useColorMode } from 'theme-ui'

export default (props) => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <div>
      <h1>Page 2!!</h1>
      <button
        onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </button>

      <p>go <Link href="/"><a>Home</a></Link></p>
      <button sx={{color: 'white', bg: 'primary'}}>A button</button>
    </div>
  )
}
