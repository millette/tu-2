// npm
import { useState } from 'react'
import { Styled } from 'theme-ui'

const Editor = ({ onChange, json }) => {
  const [ed, setEd] = useState(true)
  const ref = React.createRef()

  const save = (ev) => {
    if (!ev.ctrlKey || ev.key !== "Enter") return
    const val = ref.current.innerText.replace(/[\n\s]/g, '')
    try {
      onChange(JSON.parse(val))
      setEd(!ed)
    } catch (e) {
      console.error(e) // e instanceof SyntaxError
    }
  }

  // style={{ maxWidth: "25rem" }}
  return (
    <Styled.pre  ref={ref} onKeyDown={save} contentEditable={ed}>{JSON.stringify(json, null, 2)}</Styled.pre>
  )
}

export default Editor
