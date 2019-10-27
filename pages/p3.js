/** @jsx jsx */

// npm
import Link from "next/link"
import { jsx, Flex, Box, Styled } from "theme-ui"
import { TypeScale, TypeStyle, ColorPalette } from "@theme-ui/style-guide"

// self
import StyleGuide from "../components/style-guide.mdx"

export default () => (
  <div>
    <Styled.h1>Style Guide</Styled.h1>
    <p>
      go{" "}
      <Link href="/" passHref>
        <Styled.a>Home</Styled.a>
      </Link>
    </p>
    <p>
      go{" "}
      <Link href="/theme" passHref>
        <Styled.a>Theme</Styled.a>
      </Link>
    </p>
    <p>
      go{" "}
      <Link href="/p2" passHref>
        <Styled.a>Page 2</Styled.a>
      </Link>
    </p>
    <Flex>
      <Box>
        <Styled.p>
          I am a styled paragraph. I am a paragraph. I am a{" "}
          <b>strong paragraph</b>. I am a paragraph. I am a paragraph. I am a
          paragraph. I am a paragraph. I am a paragraph. I am a{" "}
          <i>light paragraph</i>. I am a paragraph. I am a paragraph. I am a
          paragraph. I am a paragraph.
        </Styled.p>
        <p>
          I am a paragraph. I am a paragraph. I am a <b>strong paragraph</b>. I
          am a paragraph. I am a paragraph. I am a paragraph. I am a paragraph.
          I am a paragraph. I am a <i>light paragraph</i>. I am a paragraph. I
          am a paragraph. I am a paragraph. I am a paragraph.
        </p>
        <Styled.blockquote>
          I am a styled quote. I am a quote. I am a <b>strong quote</b>. I am a
          quote. I am a quote. I am a quote. I am a quote. I am a quote. I am a{" "}
          <i>light quote</i>. I am a quote. I am a quote. I am a quote. I am a
          quote.
        </Styled.blockquote>
        <blockquote>
          I am a quote. I am a quote. I am a <b>strong quote</b>. I am a quote.
          I am a quote. I am a quote. I am a quote. I am a quote. I am a{" "}
          <i>light quote</i>. I am a quote. I am a quote. I am a quote. I am a
          quote.
        </blockquote>
        ColorPalette:
        <ColorPalette />
        TypeScale:
        <TypeScale />
        TypeStyle 1:
        <TypeStyle
          fontFamily="heading"
          fontWeight="heading"
          lineHeight="heading"
        />
        TypeStyle 2:
        <TypeStyle fontFamily="body" fontWeight="body" lineHeight="body" />
      </Box>

      <Box>
        <StyleGuide />
      </Box>
    </Flex>
  </div>
)
