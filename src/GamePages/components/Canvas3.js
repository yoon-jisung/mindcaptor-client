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

export default function Canvas3() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const colorsRef = useRef(null);

  const [canvas, setCanvas] = useState(undefined);
  const [ctx, setCtx] = useState(undefined);
  // const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('black');
  const [cursor, setCursor] = useState({
    cursor: `url(${Crayon_Black}), pointer`,
  });

  const socketRef = useRef();

  useEffect(() => {
    setCanvas(canvasRef.current);
    const canvas = canvasRef.current;
    canvas.width = '600';
    canvas.height = '500';
    // let w = canvas.width;
    // let h = canvas.height;
    setCtx(canvasRef.current.getContext('2d'));
    const context = canvas.getContext('2d');
    // context.strokeStyle = color;
    // context.lineWidth = 5;
    contextRef.current = context;

    let drawing = false;
    const colors = document.getElementsByClassName('color');
    const current = {
      color: 'black',
    };

    const onColorUpdate = (e) => {
      current.color = e.target.className.split(' ')[1];
    };

    // loop through the color elements and add the click event listeners
    for (let i = 0; i < colors.length; i++) {
      colors[i].addEventListener('click', onColorUpdate, false);
    }

    const drawLine = (x0, y0, x1, y1, color, emit) => {
      context.beginPath();
      context.moveTo(x0, y0);
      context.lineTo(x1, y1);
      context.lineCap = 'round';

      context.strokeStyle = current.color;
      context.lineWidth = 8;
      context.stroke();
      context.closePath();

      if (!emit) {
        return;
      }
      const w = window.innerWidth;
      const h = window.innerHeight;

      socketRef.current.emit('drawing', {
        x0: x0 / w,
        y0: y0 / h,
        x1: x1 / w,
        y1: y1 / h,
        color,
      });
    };
    //!
    const onMouseDown = (e) => {
      drawing = true;
      current.x = e.offsetX;
      current.y = e.offsetY;
    };

    const onMouseMove = (e) => {
      if (!drawing) return;
      drawLine(current.x, current.y, e.offsetX, e.offsetY, color, true);
      current.x = e.offsetX;
      current.y = e.offsetY;
    };

    const onMouseUp = (e) => {
      if (!drawing) return;
      contextRef.current.closePath();
      drawing = false;
      drawLine(current.x, current.y, e.offsetX, e.offsetY, color, true);
    };

    const throttle = (callback, delay) => {
      let previousCall = new Date().getTime();
      return function () {
        const time = new Date().getTime();

        if (time - previousCall >= delay) {
          previousCall = time;
          callback.apply(null, arguments);
        }
      };
    };

    canvas.addEventListener('mouseup', onMouseUp, false);
    canvas.addEventListener('mousedown', onMouseDown, false);
    canvas.addEventListener('mousemove', throttle(onMouseMove, 10), false);

    //!
    const onDrawingEvent = (data) => {
      const w = canvas.width;
      const h = canvas.height;
      drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color);
    };

    socketRef.current = io.connect('http://localhost:4000', {
      transports: ['websocket', 'polling'],
      path: '/socket.io',
    });
    socketRef.current.on('drawing', onDrawingEvent);
  }, []);

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

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext('2d');
  //   context.strokeStyle = color;
  // }, [color]);

  return (
    <>
      <canvas ref={canvasRef} className="whiteBoardInGame" style={cursor} />
      <div className="pallette">
        <div className="colors" ref={colorsRef}>
          <div className="color black" onClick={handleColorClick}>
            black
          </div>
          <div className="color red" onClick={handleColorClick}>
            red
          </div>
          <div className="color blue" onClick={handleColorClick}>
            blue
          </div>
          <div className="color green" onClick={handleColorClick}>
            green
          </div>
          <div className="color yellow" onClick={handleColorClick}>
            yellow
          </div>
        </div>

        <div>
          <Paint
            handleColorClick={handleColorClick}
            reset={reset}
            eraserBtn={eraserBtn}
          />
        </div>
      </div>
    </>
  );
}
