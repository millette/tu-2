/** @jsx jsx */

// npm
import { useState } from "react"
import { jsx, Styled } from "theme-ui"

const preStyle = {
  maxWidth: "25rem",
  whiteSpace: "pre-wrap",
}

const Editor = ({ indent = "  ", onChange, json }) => {
  const [ed, setEd] = useState(true)

  const save = (ev) => {
    if (ev.shiftKey && ev.key === "Tab") {
      ev.preventDefault()
      document.execCommand("insertText", false, indent)
      return
    }
    if (ev.ctrlKey && ev.key === "Enter") {
      try {
        onChange(JSON.parse(ev.target.innerText.replace(/[\n\s]/g, "")))
        setEd(false)
      } catch (e) {
        console.error(e) // e instanceof SyntaxError
      }
    }
  }

  return (
    <Styled.pre
      suppressContentEditableWarning={true}
      title="CTRL-Enter to save; SHIFT-Tab to insert spaces"
      onKeyDown={save}
      contentEditable={ed}
      sx={preStyle}
    >
      {JSON.stringify(json, null, indent)}
    </Styled.pre>
  )
}

export default Editor
