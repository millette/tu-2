// npm
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

const Modal = ({ children }) => {
  const [element, setElement] = useState(null)
  useEffect(() => {
    const el = document.createElement("div")
    const modalRoot = document.getElementById("modal")
    modalRoot.appendChild(el)
    // wide enough to support history toolbar buttons
    el.style.minWidth = "24rem"
    setElement(el)
    return () => modalRoot.removeChild(el)
  }, [])

  return element && createPortal(children, element)
}

export default Modal
