import React from "react"
import {useState, useEffect} from 'react'

const Clock = () => {
const [segundos, setSegundos] = useState(0)
const [minutos, setMinutos] = useState(0)
const [horas, setHoras] = useState(0)

useEffect(()=>{
    const intervalId = setInterval(()=>{
        setSegundos(segundos => segundos+1)
    }, 1000)
    return () =>{
        clearInterval(intervalId)
    }  
}, [minutos])

if (segundos > 59){
    setMinutos(minutos=> minutos+1)
    setSegundos(0);
}

if (minutos > 59){
    setHoras(horas=> horas+1)
    setMinutos(0);
}

if (horas > 23){
    setHoras(0);
}

    return(
        <div className="container-fluid">
        <div className="d-flex row justify-content-center">
        <div className="col-2">
        <p>Horas: {horas}</p>
        </div>
        <div className="col-2">
        <p>Minutos: {minutos}</p>
        </div>
        <div className="col-2">
        <p>Segundos: {segundos}</p>
        </div>
        </div>
        </div>
    )
}

export default Clock;