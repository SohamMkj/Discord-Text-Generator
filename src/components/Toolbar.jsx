import { Group, Button, Tooltip, Badge } from '@mantine/core';
import { useContext } from 'react';
import { EditorContext } from '../App';
import { ANSI_COLORS } from '../styles/colors'; // Import ANSI_COLORS

const Toolbar = () => {
  const { applyStyle } = useContext(EditorContext);

  return (
    <Group spacing="xs" mb="md"> 
      <Button size="md" onClick={() => applyStyle(1)}>Bold</Button>
      <Button size="md" onClick={() => applyStyle(4)}>Underline</Button>
      {Object.entries(ANSI_COLORS).filter(([code]) => code >= 30 && code < 40).map(([code, color]) => ( 
        <Tooltip key={code} label={`Color ${code}`}>
            <Button
              style={{
                backgroundColor: color,
                width: '36px',  
                height: '36px',
                padding: 0,    
              }}
              onClick={() => applyStyle(code)}
              size="xs"
              radius="sm"
              variant="filled"
            />
        </Tooltip>
      ))}
    </Group>
  );
};

export default Toolbar;
