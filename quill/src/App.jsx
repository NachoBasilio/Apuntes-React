import LectorMarkdown from "./components/LectorMarkdown"
import MarkdownEditor from "./components/MarkdownEditor"

import { useState } from "react"

function App() {
  const [markdown, setMarkdown] = useState("")

  return (
    <>
      <MarkdownEditor
        setMarkdown={setMarkdown}
      />
      <LectorMarkdown
        markdown={markdown}
      />

    </>
  )
}
export default App
