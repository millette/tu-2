// npm
import { useState } from "react"
import { Styled } from "theme-ui"

const Editor = ({ indent = "  ", onChange, json }) => {
  const [ed, setEd] = useState(true)

  const save = (ev) => {
    if (ev.key === "Tab") {
      ev.preventDefault()
      document.execCommand("insertText", false, indent)
      return
    }
    if (ev.ctrlKey && ev.key !== "Enter") {
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
      title="CTRL-Enter to save"
      style={{ maxWidth: "25rem" }}
      onKeyDown={save}
      contentEditable={ed}
    >
      {JSON.stringify(json, null, indent)}
    </Styled.pre>
  )
}

export default Editor
