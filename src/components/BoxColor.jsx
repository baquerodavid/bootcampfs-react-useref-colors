function BoxColor({ color, value }) {
  return (
    <>
      <div
        className={`box ${color}`}
        style={{
          border: `1px solid ${color}`,
          color: value === color && value !== '' ? 'black' : `${color}`,
          background: value === color && value !== '' ? `${value}` : '#1a1a1a',
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
