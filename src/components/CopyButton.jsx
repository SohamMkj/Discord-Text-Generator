import React, { useContext } from 'react';
import { Button } from '@mantine/core';
import { EditorContext } from '../App';

const CopyButton = () => {
  const { editorRef } = useContext(EditorContext);

  const convertToANSI = () => {
    if (!editorRef.current) {
      console.error("Error: editorRef is not set.");
      return '```ansi\n(Error: Editor not found)\n```';
    }

    if (!editorRef.current.innerHTML.trim()) {
      console.warn("Warning: Editor is empty.");
      return '```ansi\n(No text in editor)\n```';
    }

    let output = '';

    const traverseNodes = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        output += node.textContent;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const match = node.className.match(/ansi-(\d+)/);
        if (match) {
          const ansiCode = match[1];
          output += `\x1b[${ansiCode}m`;
        }

        node.childNodes.forEach(traverseNodes);

        if (match) {
          output += `\x1b[0m`;
        }
      }
    };

    console.log("Editor Content (HTML):", editorRef.current.innerHTML);

    editorRef.current.childNodes.forEach(traverseNodes);

    console.log("Generated ANSI:", output || "(empty)");

    return output.trim() ? `\`\`\`ansi\n${output}\n\`\`\`` : '```ansi\n(No styled text found)\n```';
  };

  const handleCopy = () => {
    const ansiText = convertToANSI();
    navigator.clipboard.writeText(ansiText)
      .then(() => alert('ANSI-styled text copied!'))
      .catch(err => console.error('Copy failed:', err));
  };

  return <Button onClick={handleCopy}>Copy Text</Button>;
};

export default CopyButton;
