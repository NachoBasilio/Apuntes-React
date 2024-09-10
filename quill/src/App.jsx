import LectorMarkdown from "./components/LectorMarkdown"
import MarkdownEditor from "./components/MarkdownEditor"

import { useState } from "react"

function App() {
  const [html, setHtml] = useState("")

  return (
    <>
      <MarkdownEditor
        setHtml={setHtml}
      />
      <LectorMarkdown
        html={html}
      />

    </>
  )
}
export default App
