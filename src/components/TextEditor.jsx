import React, { useEffect } from 'react';
import { Box } from '@mantine/core';
import { ANSI_COLORS } from '../styles/colors';

export const injectANSIStyles = () => {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = Object.entries(ANSI_COLORS)
    .map(([code, color]) => `.ansi-${code} { color: ${color} !important; }`)
    .join('\n');
  document.head.appendChild(styleTag);
};

const TextEditor = ({ editorRef }) => { // Accept editorRef as a prop
  useEffect(() => {
    injectANSIStyles();
  }, []);

  return (
    <Box 
      ref={editorRef} 
      contentEditable 
      style={{
        minHeight: '200px',
        border: '1px solid #ddd',
        padding: '1rem',
        backgroundColor: '#2F3136',
        color: '#B9BBBE',
        fontFamily: 'monospace',
        userSelect: 'text'
      }}
    />
  );
};

export default TextEditor;
