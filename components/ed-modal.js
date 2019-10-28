// npm
import dynamic from "next/dynamic"

// self
import Modal from "./modal"

const initString = "Initializing... One moment please"

const DemoModal = ({ onChange, json, shown = true, close = false }) => {
  if (!shown) return null

  const Editor = dynamic(
    () => import("jsoneditor-react").then(({ JsonEditor }) => JsonEditor),
    {
      loading: () => (
        <p>
          {close ? (
            <button focus onClick={close}>
              {initString}
            </button>
          ) : (
            initString
          )}
        </p>
      ),
      ssr: false,
    }
  )

  return (
    <Modal>
      {close && <button onClick={close}>[X]</button>}
      <Editor onChange={onChange} value={json} />
    </Modal>
  )
}

export default DemoModal
