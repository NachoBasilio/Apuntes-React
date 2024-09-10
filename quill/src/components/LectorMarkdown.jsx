import { marked } from 'marked';

function LectorMarkdown({ html }) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: marked(html) }} />
    </>
  );
}

export default LectorMarkdown;
