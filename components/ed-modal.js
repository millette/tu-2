// npm
import dynamic from "next/dynamic"
// import Head from "next/head"

// import "jsoneditor-react/es/editor.css"

// self
import Modal from "./modal"

const DemoModal = ({ onChange, json, shown = true, close = false }) => {
  if (!shown) return null
  // const Xcss = dynamic(() => import("jsoneditor-react/es/editor.css"))
  // console.log('TYPEOF X', Xcss.contextType, Object.keys(Xcss))
  // const Editor = dynamic(() => import("./ed-2"), { ssr: false })
  // Investigate: doesn't work directly unless wrapped in ed-2.js
  const Editor = dynamic(
    () => import("jsoneditor-react").then((mod) => mod.JsonEditor),
    { ssr: false }
  )

  return (
    <Modal>
      {close && <button onClick={close}>[X]</button>}
      <Editor onChange={onChange} value={json} />
    </Modal>
  )
}

export default DemoModal
