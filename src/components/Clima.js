import React from 'react'

const Clima = ({ result }) => {
    
    console.log(result)
    const { name, main } = result
    console.log(name)
    if (!name) return null;

    const kelvin = 273.15

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El Clima de {name} es:</h2>
                <p className="temperatura">{parseInt(main.temp - kelvin, 10)} <span> &#x2103;</span> </p>
                <p className="">Temperatura Maxima: {parseInt(main.temp_max - kelvin, 10)} &#x2103;</p>
                <p className="">Temperatura Minima: {parseInt(main.temp_min - kelvin, 10)} &#x2103;</p>
            </div>
        </div>
    )
}

export default Clima;