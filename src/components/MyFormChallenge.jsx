import { useRef, useState } from 'react';
import BoxColor from './BoxColor';

function MyForm() {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const colors = [
    'red',
    'green',
    'pink',
    'yellow',
    'purple',
    'white',
    'blue',
    'aqua',
    'olive',
  ];

  return (
    <>
      <input
        type="text"
        placeholder="Choose a color"
        onChange={() => setValue(inputRef.current.value)}
        value={value}
        ref={inputRef}
      />
      <div className="container">
        {colors.map((color) => (
          <BoxColor key={color} color={color} value={value} />
        ))}
      </div>
    </>
  );
}

export default MyForm;


// 👇 CODIGO DE LA LIVE REVIEW EMPIEZA DESDE AQUÍ 👇
/* 
import { useState, useRef } from 'react';
import BoxColor from './BoxColor';

function MyForm() {
  const colors = [
    'red',
    'green',
    'pink',
    'yellow',
    'purple',
    'white',
    'blue',
    'aqua',
    'olive',
    'brown',
  ];
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  return (
    <>
      <input
        type="text"
        placeholder="Escribe aquí tu color"
        value={value}
        onChange={() => setValue(inputRef.current.value)}
        ref={inputRef}
      />

      <div className="container">
        {colors.map((color, index) => {
          return (
            <BoxColor key={`${index}${color}`} color={color} value={value} />
          );
        })}
      </div>
    </>
  );
}

export { MyForm };
 */