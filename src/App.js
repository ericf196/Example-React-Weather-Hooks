import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';
import axios from 'axios';

function App() {

  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [error, setError] = useState(false)
  const [result, setResult] = useState({})

  useEffect(() => {

    //Prevenir ejecucion la primera vez
    if (city === '') return;


    consultarApi()
  }, [city, country])


  const consultarDatos = (datos) => {
    if (datos.ciudad === '' || datos.pais === '') {
      setError(true)
      return;
    }

    setCity(datos.ciudad)
    setCountry(datos.pais)
    setError(false)
  }

  const consultarApi = async () => {

    let appId = '8c009ddfe7000840ede59c3570a347ea'

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`

    const respuesta = await axios(url)
    //const resultado = await respuesta.json()
    console.log(respuesta)
    setResult(respuesta.data)

    //setTimeout(function () { console.log(result); }, 5000);
  }


  //Cargar un componente Condicionalmente
  let componente;

  if (error) {
    componente = <Error mensaje="Ambos campos son obligatorios" />
  } else {
    componente = <Clima  result={result}/>
  }

  return (
    <div className="App">
      <Header titulo="Clima React App" />
      <div className="contenedor-form" >
        <div className="container" >
          <div className="row">
            <div className="col s12 m6">
              <Formulario consultarDatos={consultarDatos} />
            </div>
            <div className="col s12 m6">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
