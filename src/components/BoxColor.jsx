function BoxColor({ color, value }) {
  return (
    <>
      <div
        className={`box ${color}`}
        style={{
          border: `1px solid ${color}`,
          color: value === color && value !== '' ? 'black' : `${color}`,
          background: value === color && value !== '' ? `${value}` : null,
        }}
      >
        <p
          style={{
            fontSize: '24px',
            fontWeight: '600',
          }}
        >
          {value === color && value !== ''
            ? `Yes, I'm ${value} color`
            : `I´m not a ${value} color`}
        </p>
      </div>
    </>
  );
}

export default BoxColor;  


// 👇 CODIGO DE LA LIVE REVIEW EMPIEZA DESDE AQUÍ 👇
/* 
import { useState, useEffect, useRef} from 'react'
function BoxColor ({color, value}) {
  const boxRef = useRef(null)
  const [classList, setClassList] = useState('')
  const boxCSS = {
    backgroundColor: classList.value === `box ${value}` ? color : null,
    border: `1px solid ${color}`,
    color: color
  }

  useEffect(() => {
    setClassList(boxRef.current.classList) 
  }, [value])

  return (
    <>
    <div
      className={`box ${color}`}
      ref={boxRef}
      style={boxCSS}
    > {color === value ? <h2 style={{color: 'black'}}>Yes, i´m a {value} color</h2> : <h2>I´m not a {value} color</h2>}
    </div>
    </> 
  )
}
export default BoxColor
 */