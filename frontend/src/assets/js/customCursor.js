import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [cursorPos, setCursorPos] = useState({ x: -20, y: -20 });
  
    useEffect(() => {
      const moveCursor = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', moveCursor);
      return () => {
        window.removeEventListener('mousemove', moveCursor);
      };
    }, []);
  
    return (
      <motion.div
        style={{
          position: 'fixed',
          left: '0',
          top: '0',
          x: cursorPos.x - 12.5, 
          y: cursorPos.y - 12.5,
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          border: '3px solid #257AE7 ',
          zIndex: 9999,
          pointerEvents: 'none'
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />
    );
  };
  

export default CustomCursor;
