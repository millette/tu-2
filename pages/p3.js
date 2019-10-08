// npm
import Link from 'next/link'
import { Styled } from 'theme-ui'
import {
  // ThemeCard,
  TypeScale,
  TypeStyle,
  ColorPalette,
  // HeadingStyle,
  // FontFamily,
} from '@theme-ui/style-guide'

// self
import LightSwitch from '../components/light-switch'

/*
HeadingStyle:
<HeadingStyle />

ThemeCard:
<ThemeCard />

// Renders no output, breaks react
// <FontFamily />
*/

export default () =>
  <div>
    <Styled.h1>Style Guide</Styled.h1>
    <LightSwitch />
    <p>go <Link href="/"><a>Home</a></Link></p>
    <p>go <Link href="/p2"><a>Page 2</a></Link></p>

    ColorPalette:
    <ColorPalette />

    TypeScale:
    <TypeScale />

    TypeStyle 1:
    <TypeStyle
      fontFamily='heading'
      fontWeight='heading'
      lineHeight='heading'
    />

    TypeStyle 2:
    <TypeStyle
      fontFamily='body'
      fontWeight='body'
      lineHeight='body'
    />
  </div>
