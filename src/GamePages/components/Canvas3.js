import React, { useRef, useEffect, useState } from 'react';
import Paint from './Paint';
import Colors from './Colors';

export default function Canvas3() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [canvas, setCanvas] = useState(undefined);
  const [ctx, setCtx] = useState(undefined);
  const [isDrawing, setIsDrawing] = useState(false);
  const [className, setClassName] = useState('canvas');
  const [color, setColor] = useState('black');

  // 이전 색 가져오기
  const usePrevious = (color) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = color;
    });
    return ref.current;
  };

  useEffect(() => {
    setCanvas(canvasRef.current);
    const canvas = canvasRef.current;
    canvas.width = '600';
    canvas.height = '600';
    canvas.style.position = 'fixed';

    setCtx(canvasRef.current.getContext('2d'));
    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    context.strokeStyle = color;
    context.lineWidth = 5;
    context.rect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'white';
    context.fill();
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

  const eraserBtn = () => {
    setClassName('eraser');
    ctx.lineWidth = 20;
    ctx.strokeStyle = 'white';
  };

  const prevColor = usePrevious(color);

  const drawBtn = () => {
    setClassName('draw');
    setColor(prevColor); // hooks 쓸때 prev 어떻게 접근하지
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
  };

  const handleColorClick = (e) => {
    setColor(e.target.textContent);
    ctx.strokeStyle = color;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.strokeStyle = color;
    console.log(context.strokeStyle);
  }, [color]);

  return (
    <div>
      <div className="fake_canvas"></div>
      <canvas
        className={`${className}`}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
      <Paint reset={reset} eraserBtn={eraserBtn} drawBtn={drawBtn} />
      <Colors handleColorClick={handleColorClick} />
    </div>
  );
}
