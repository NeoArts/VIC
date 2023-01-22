import React from 'react'
import './Info.css'
import image5 from "../../assets/images/LauraVictoriaMartinez5.jpg"

function Info() {
  return (
    <div className="info-container">
      <div className="info-container-image">
        <img src={image5} alt="Laura Victoria" />
      </div>
      <div className="info-container-data">
        <p>
Empecé mi camino en el modelaje hace cuatro años, pertenecí a Irismodels donde participé en la pasarela de fin de año en 2018, fui modelo de marca para medicaline y he trabajado como modelo artística con fotógrafos independientes. En el modelaje me interesa la pasarela, la moda y el arte; así como la capacidad de trasmitir a través de la imagen. Soy propositiva y me gusta integrar el modelaje con la danza.</p>
      </div>
    </div>
  )
}

export default Info