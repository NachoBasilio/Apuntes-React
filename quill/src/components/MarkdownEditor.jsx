import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import QuillMarkdown from 'quilljs-markdown';
import 'quill/dist/quill.snow.css';
import 'quilljs-markdown/dist/quilljs-markdown-common-style.css';
import TurndownService from 'turndown';
import { marked } from 'marked';

const MarkdownEditor = () => {
  const editorRef = useRef(null);
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  useEffect(() => {
    const toolbarOptions = [
      ['bold', 'italic', 'underline'],
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      ['clean']
    ];

    const editor = new Quill(editorRef.current, {
      theme: 'snow',
      modules: {
        toolbar: toolbarOptions
      }
    });

    new QuillMarkdown(editor, {});

    const turndownService = new TurndownService();

    turndownService.addRule('heading', {
      filter: ['h1', 'h2'],
      replacement: function (content, node) {
        const hLevel = node.nodeName.charAt(1);
        return `${'#'.repeat(hLevel)} ${content}\n\n`;
      }
    });

    turndownService.addRule('underline', {
      filter: ['u'],
      replacement: function (content) {
        return `__${content}__`;
      }
    });


    turndownService.addRule('orderedList', {
      filter: function (node) {
        return node.nodeName === 'OL';
      },
      replacement: function (content, node) {
        const items = Array.from(node.children);
        return '\n' + items.map((item, index) => `${index + 1}. ${item.textContent}`).join('\n') + '\n';
      }
    });

    turndownService.addRule('unorderedList', {
      filter: function (node) {
        return node.nodeName === 'UL';
      },
      replacement: function (content, node) {
        const items = Array.from(node.children);
        return '\n' + items.map(item => `- ${item.textContent}`).join('\n') + '\n';
      }
    });

    const cleanHtml = (html) => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;

      tempDiv.querySelectorAll('li[data-list="bullet"]').forEach(li => {
        const parent = li.parentNode;
        if (parent.tagName === 'OL') {
          const newUl = document.createElement('ul');
          newUl.innerHTML = parent.innerHTML;
          parent.replaceWith(newUl);
        }
      });

      return tempDiv.innerHTML;
    };

    editor.on('text-change', () => {
      let htmlContent = editor.root.innerHTML;
      htmlContent = cleanHtml(htmlContent);
      const markdownContent = turndownService.turndown(htmlContent);
      setMarkdown(markdownContent);
      setHtml(marked(markdown));
    });


  }, []);

  return (
    <>
      <div ref={editorRef} style={{ height: '400px' }} />
      <pre>{markdown}</pre>

    </>
  );
};

export default MarkdownEditor;
