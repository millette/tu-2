import { Styled } from 'theme-ui'
import {
  // ThemeCard,
  TypeScale,
  TypeStyle,
  ColorPalette,
  // HeadingStyle,
  // FontFamily,
} from '@theme-ui/style-guide'

/*
HeadingStyle:
<HeadingStyle />

ThemeCard:
<ThemeCard />

// Renders no output, breaks react
// <FontFamily />
*/

export default () =>
  <>
    <Styled.h1>Style Guide</Styled.h1>

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
  </>
