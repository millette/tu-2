// npm
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

const Modal = ({ children }) => {
  const [element, setElement] = useState(null)
  useEffect(() => {
    const el = document.createElement("div")
    const modalRoot = document.getElementById("modal")
    modalRoot.appendChild(el)
    setElement(el)
    return () => modalRoot.removeChild(el)
  }, [])

  return element && createPortal(children, element)
}

export default Modal
