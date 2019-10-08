/** @jsx jsx */

// npm
import Link from 'next/link'
// import { jsx, useColorMode } from 'theme-ui'
import { jsx } from 'theme-ui'

// self
import LightSwitch from '../components/light-switch'

export default () => {
  // const [colorMode, setColorMode] = useColorMode()

/*
<button
  onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
  Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
</button>
*/

  return (
    <div>
      <h1>Page 2!!</h1>
      <LightSwitch />
      <p>go <Link href="/"><a>Home</a></Link></p>
      <p>go <Link href="/p3"><a>Page 3</a></Link></p>
      <button sx={{color: 'white', bg: 'primary'}}>A button</button>
    </div>
  )
}
