// npm
import dynamic from "next/dynamic"
import "jsoneditor-react/es/editor.css"

const JsonEditor = dynamic(
  () => import("jsoneditor-react").then(({ JsonEditor }) => JsonEditor)
  // { ssr: false }
)

const Editor = ({ onChange, json }) => {
  console.log("JsonEditor", typeof JsonEditor, JsonEditor)
  return <JsonEditor value={json} onChange={onChange} />
}

export default Editor
