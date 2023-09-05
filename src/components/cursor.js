import { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const circleSize = 50; 
  const borderColor = 'rgba(37, 37, 37, 0.1)';

  return (
    <div
      className="cursor"
      style={{
        width: `${circleSize}px`,
        height: `${circleSize}px`,
        left: `${position.x - circleSize / 2}px`,
        top: `${position.y - circleSize / 2}px`,
        backgroundColor: 'transparent', 
        border: `2px solid ${borderColor}`, 
        borderRadius: '50%',
        
      }}
    ></div>
  );
};

export default Cursor;
