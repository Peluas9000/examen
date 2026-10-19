import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import Serie from './Serie'
import Personaje from './Personaje'
import CrearPersonaje from './CrearPersonaje'
import ModificarPersonaje from './ModificarPersonaje'
export default class Router extends Component {
  render() {
    function SerieElement(){
        let {id}=useParams();
        return (<Serie id={id}/>);
    }
    function PersonajeElement(){
        let {id}=useParams();
        return (<Personaje id={id}/>);
    }
    return (
      <BrowserRouter>
      <Menu/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='series/:id' element={<SerieElement/>}/>
            <Route path='personajes/:id' element={<PersonajeElement/>}/>
            <Route path='crearpersonaje' element={<CrearPersonaje/>}/>
            <Route path='modificarpersonaje' element={<ModificarPersonaje/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
