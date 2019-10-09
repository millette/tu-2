// npm
import Link from 'next/link'
import { Flex, Box, Styled } from 'theme-ui'
import {
  TypeScale,
  TypeStyle,
  ColorPalette,
} from '@theme-ui/style-guide'

// self
import LightSwitch from '../components/light-switch'
import StyleGuide from '../components/style-guide.mdx'

export default ({ selectedTheme, changeTheme, themes }) => {
  const change = (ev) => changeTheme({ selectedTheme: ev.target.value })

  return (
    <div>
      <Styled.h1>Style Guide ({selectedTheme})</Styled.h1>
      <select onChange={change} value={selectedTheme}>
        {themes.map((t) => <option key={t}>{t}</option>)}
      </select>
      <p>go <Link href="/"><a>Home</a></Link></p>
      <p>go <Link href="/p2"><a>Page 2</a></Link></p>
      <Flex>
        <Box>
          <Styled.p>
          I am a styled paragraph. I am a paragraph. I am a <b>strong paragraph</b>. I am a paragraph. I am a paragraph. I am a paragraph. I am a paragraph. I am a paragraph. I am a <i>light paragraph</i>. I am a paragraph. I am a paragraph. I am a paragraph. I am a paragraph.
          </Styled.p>

          <p>
          I am a paragraph. I am a paragraph. I am a <b>strong paragraph</b>. I am a paragraph. I am a paragraph. I am a paragraph. I am a paragraph. I am a paragraph. I am a <i>light paragraph</i>. I am a paragraph. I am a paragraph. I am a paragraph. I am a paragraph.
          </p>


          <Styled.blockquote>
          I am a styled quote. I am a quote. I am a <b>strong quote</b>. I am a quote. I am a quote. I am a quote. I am a quote. I am a quote. I am a <i>light quote</i>. I am a quote. I am a quote. I am a quote. I am a quote.
          </Styled.blockquote>

          <blockquote>
          I am a quote. I am a quote. I am a <b>strong quote</b>. I am a quote. I am a quote. I am a quote. I am a quote. I am a quote. I am a <i>light quote</i>. I am a quote. I am a quote. I am a quote. I am a quote.
          </blockquote>


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
        </Box>

        <Box>
          <LightSwitch />
          <StyleGuide />
        </Box>
      </Flex>
    </div>
  )
}
