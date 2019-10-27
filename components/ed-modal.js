// npm
import dynamic from "next/dynamic"

// self
import Modal from "./modal"

const DemoModal = ({ onChange, json, shown = true, close = false }) => {
  if (!shown) return null

  const Editor = dynamic(() => import("./ed-2"), { ssr: false })

  return (
    <Modal>
      {close && <button onClick={close}>[X]</button>}
      <Editor onChange={onChange} json={json} />
    </Modal>
  )
}

export default DemoModal
