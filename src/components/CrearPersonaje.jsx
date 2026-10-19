import React, { Component } from 'react'
import ServiceSerie from '../services/ServiceSerie';
import { Navigate } from 'react-router-dom';

export default class CrearPersonaje extends Component {
    cajaId=React.createRef();
    cajaNombre=React.createRef();
    cajaImagen=React.createRef();
    cajaIdSerie=React.createRef();

    servicio = new ServiceSerie();

    state={
    series:[],
    status:false
    }


    loadSeries=()=>{
       

        this.servicio.getSeries().then((res)=>{
            this.setState({
                series:res
            })
        })

        
    }

    crear=(event)=>{
        event.preventDefault();
        let personaje={
            idPersonaje:parseInt(this.cajaId.current.value),
            nombre:this.cajaNombre.current.value,
            imagen:this.cajaImagen.current.value,
            idSerie:parseInt(this.cajaIdSerie.current.value)
        }

        this.servicio.createPersonaje(personaje).then((res)=>{
            this.setState({
                status:true
            })
        })

    }

    componentDidMount(){
        this.loadSeries();
    }
    

  render() {
    if(this.state.status){
        return <Navigate to={"/personajes/"+this.cajaIdSerie.current.value}/>
    }

    return (
      <div>
        <div>
        <h1>Crear Personaje</h1>

        <form className="flex flex-col gap-4" >

            <div  className="flex flex-col gap-2">
                    <label className="font-bold">Id:</label>
                    <input type="text" ref={this.cajaId} className="border border-gray-300 rounded-md p-2" />
                </div>
                <div  className="flex flex-col gap-2">
                    <label className="font-bold">Nombre:</label>
                    <input type="text" ref={this.cajaNombre} className="border border-gray-300 rounded-md p-2" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold">Imagen:</label>
                    <input type="text" ref={this.cajaImagen} className="border border-gray-300 rounded-md p-2" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold">Serie:</label>
                    <select ref={this.cajaIdSerie} className="border border-gray-300 rounded-md p-2">
                        {
                            this.state.series.map((serie,index)=>{
                                return(
                                    <option key={index} value={serie.idSerie}>{serie.nombre}</option>
                                )
                            }
                            )
                        }
                    </select>
                </div>
                
               
                <button type="submit" onClick={(event) => this.crear(event)} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    Crear
                </button>

               
            </form>

      </div>
      </div>
    )
  }
}
