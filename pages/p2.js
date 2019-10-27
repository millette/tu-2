/** @jsx jsx */

// npm
import Link from "next/link"
import { jsx } from "theme-ui"

export default () => (
  <div>
    <h1>Page 2!!</h1>
    <p>
      go{" "}
      <Link href="/">
        <a>Home</a>
      </Link>
    </p>
    <p>
      go{" "}
      <Link href="/theme">
        <a>Theme</a>
      </Link>
    </p>
    <p>
      go{" "}
      <Link href="/p3">
        <a>Page 3</a>
      </Link>
    </p>
    <button sx={{ color: "white", bg: "primary" }}>A button</button>
  </div>
)
