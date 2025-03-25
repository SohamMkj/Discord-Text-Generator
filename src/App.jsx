import { AppShell, Container } from '@mantine/core';
import Toolbar from './components/Toolbar';
import TextEditor from './components/TextEditor';
import CopyButton from './components/CopyButton';
import React, { createContext, useRef } from 'react';

export const EditorContext = createContext();

function App() {
  const editorRef = useRef(null);

  const applyStyle = (ansiCode) => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const selectedText = range.toString().trim();
    if (!selectedText) return;

    const span = document.createElement('span');
    span.innerText = selectedText;
    span.classList.add(`ansi-${ansiCode}`);

    range.deleteContents();
    range.insertNode(span);

    range.selectNodeContents(span);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  return (
    <AppShell padding="md" style={{ backgroundColor: '#36393F', color: '#fff' }}>
      <Container>
        <EditorContext.Provider value={{ applyStyle, editorRef }}>
          <Toolbar />
          <TextEditor editorRef={editorRef} /> 
          <CopyButton />
        </EditorContext.Provider>
      </Container>
    </AppShell>
  );
}

export default App;
