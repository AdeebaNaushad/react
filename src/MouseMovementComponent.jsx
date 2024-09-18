import React, { useState, useEffect } from 'react';

const MouseMovementComponent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      console.log(`Mouse Position: X=${event.clientX}, Y=${event.clientY}`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h1>Mouse Position</h1>
      <p>
        X: {position.x}, Y: {position.y}
      </p>
    </div>
  );
};

export default MouseMovementComponent;
