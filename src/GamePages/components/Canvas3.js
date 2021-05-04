import React, { useRef, useEffect, useState } from 'react';
import Paint from './Paint';
import Colors from './Colors';
import Eraser from '../../images/eraser.png';
import Crayon_Black from '../../images/crayon_black.png';
import Crayon_Red from '../../images/crayon_red.png';
import Crayon_Blue from '../../images/crayon_blue.png';
import Crayon_Green from '../../images/crayon_green.png';
import Crayon_Yellow from '../../images/crayon_yellow.png';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:4000', {
  transports: ['websocket', 'polling'],
  path: '/socket.io',
});

export default function Canvas3({ Round }) {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [canvas, setCanvas] = useState(undefined);
  const [ctx, setCtx] = useState(undefined);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('black');
  const [cursor, setCursor] = useState({
    cursor: `url(${Crayon_Black}), pointer`,
  });

  useEffect(() => {
    setCanvas(canvasRef.current);
    const canvas = canvasRef.current;
    canvas.width = '600';
    canvas.height = '500';

    setCtx(canvasRef.current.getContext('2d'));
    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    context.strokeStyle = color;
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
    ctx.lineWidth = 5;
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const reset = () => {
    if (ctx) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  const eraserBtn = (e) => {
    setCursor({ cursor: `url(${Eraser}), pointer` });
    ctx.lineWidth = 20;
    ctx.strokeStyle = 'white';
  };

  const handleColorClick = (e) => {
    setColor(e.target.textContent);
    ctx.strokeStyle = color;
    switch (e.target.textContent) {
      case '지우개':
        setCursor({ cursor: `url(${Eraser}), pointer` });
        break;
      case 'black':
        setCursor({ cursor: `url(${Crayon_Black}), pointer` });
        break;
      case 'red':
        setCursor({ cursor: `url(${Crayon_Red}), pointer` });
        break;
      case 'blue':
        setCursor({ cursor: `url(${Crayon_Blue}), pointer` });
        break;
      case 'green':
        setCursor({ cursor: `url(${Crayon_Green}), pointer` });
        break;
      case 'yellow':
        setCursor({ cursor: `url(${Crayon_Yellow}), pointer` });
        break;
      default:
        setCursor({ cursor: `url(${Crayon_Black}), pointer` });
        break;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.strokeStyle = color;
    console.log(context.strokeStyle);
  }, [color]);

  return (
    <div className="WhiteBorad">
      <canvas
        style={cursor}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />

      <div className="Color">
        <Colors handleColorClick={handleColorClick} />
      </div>

      <div>
        <Paint
          handleColorClick={handleColorClick}
          reset={reset}
          eraserBtn={eraserBtn}
        />
      </div>
    </div>
  );
}
