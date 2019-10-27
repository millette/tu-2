/** @jsx jsx */

// npm
import Link from "next/link"
import { jsx, Styled } from "theme-ui"

export default () => (
  <div>
    <Styled.h1>Page 2!!</Styled.h1>
    <Styled.p>
      go{" "}
      <Link href="/" passHref>
        <Styled.a>Home</Styled.a>
      </Link>
    </Styled.p>
    <Styled.p>
      go{" "}
      <Link href="/theme" passHref>
        <Styled.a>Theme</Styled.a>
      </Link>
    </Styled.p>
    <Styled.p>
      go{" "}
      <Link href="/p3" passHref>
        <Styled.a>Page 3</Styled.a>
      </Link>
    </Styled.p>
    <button sx={{ color: "white", bg: "primary" }}>A button</button>
  </div>
)
