// npm
import dynamic from "next/dynamic"
import * as themes from "@theme-ui/presets"

// self
import Modal from "./modal"

const initString = "Initializing... One moment please"
const style = { flex: "auto" }

const EditModal = ({ onChange, json, shown = true, close = false }) => {
  if (!shown) return null

  let val = { ...json }
  const onChange2 = (a) => (val = a)
  const save = () => onChange(val)

  const JsonEditor = dynamic(
    () => import("jsoneditor-react").then(({ JsonEditor }) => JsonEditor),
    {
      loading: () => (
        <p>
          {close ? (
            <button autoFocus onClick={close}>
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
      <div style={{ display: "flex" }}>
        <button style={style} onClick={save}>
          Apply changes
        </button>
        {close && (
          <button style={style} onClick={close}>
            Cancel
          </button>
        )}
      </div>
      <JsonEditor history onChange={onChange2} value={json} />
    </Modal>
  )
}

export default EditModal
