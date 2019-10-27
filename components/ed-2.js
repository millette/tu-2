/** @jsx jsx */

// npm
// import { jsx, Styled } from "theme-ui"
import { jsx } from "theme-ui"
import { JsonEditor } from "jsoneditor-react"
import "jsoneditor-react/es/editor.css"

/*
const preStyle = {
  maxWidth: "25rem",
  whiteSpace: "pre-wrap",
}
*/

const Editor = ({ onChange, json }) => (
  <JsonEditor value={json} onChange={onChange} />
)

export default Editor
