/** @jsx jsx */

// npm
import { jsx } from "theme-ui"
import { JsonEditor } from "jsoneditor-react"

const Editor = ({ onChange, json }) => (
  <JsonEditor value={json} onChange={onChange} />
)

export default Editor
