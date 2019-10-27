/** @jsx jsx */

// npm
import { jsx, Styled } from "theme-ui"

// self
import Modal from "./modal"

const DemoModal = ({ shown = true, close = () => false }) =>
  shown && (
    <Modal>
      <Styled.p>
        <button onClick={close}>[X]</button>
        Hello Modal
      </Styled.p>
    </Modal>
  )

export default DemoModal
