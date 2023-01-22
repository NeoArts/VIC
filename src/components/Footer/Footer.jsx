import React, { useState, useEffect } from 'react';

function Footer() {

  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{textAlign: "center", height: "40px", display: 'flex', alignItems: "center", justifyContent: "center", borderTop: "solid 1px #f1f1f1"}}>
      <p>© {year} Todos los derechos reservados. Creado por <a href="https://neoarts.com.co/" style={{color: "red"}}>NeoArts</a></p>
    </div>
  )
}

export default Footer